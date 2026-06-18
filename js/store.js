// =============================================
// STORE.JS — Lógica de la Tienda en Línea
// Ferretería Belén | index.html
// =============================================

// Estado del Sistema Simulado
let products = [
    { id: 'PROD-001', name: 'Cemento Portland Yura 42.5kg', category: 'Material Grueso', price: 55.00, stock: 150, img: 'assets/img/Cemento_yura.jpg' },
    { id: 'PROD-002', name: 'Fierro Corrugado 12mm x 12m', category: 'Fierros y Aceros', price: 62.50, stock: 320, img: 'assets/img/fierro.jpg' },
    { id: 'PROD-003', name: 'Pintura Látex Monopol Blanco 18L', category: 'Pinturas', price: 180.00, stock: 5, img: 'assets/img/Latex18.jpg' },
    { id: 'PROD-004', name: 'Ladrillo 6 Huecos', category: 'Material Grueso', price: 1.20, stock: 0, img: 'assets/img/ladrillo.jpg' },
    { id: 'PROD-005', name: 'Clavos Calamina 2 1/2"', category: 'Ferretería', price: 15.00, stock: 45, img: 'assets/img/clavodec.webp' },
    { id: 'PROD-006', name: 'Tubo PVC 4" x 3m', category: 'Plomería', price: 25.50, stock: 80, img: 'assets/img/tubo4.jpg' },
    { id: 'PROD-007', name: 'Cable AWG 12 THHN', category: 'Electricidad', price: 210.00, stock: 25, img: 'assets/img/cable.jpg' },
    { id: 'PROD-008', name: 'Cerámica Blanca 40x40', category: 'Acabados', price: 38.00, stock: 120, img: 'assets/img/ceramica.jpg' }
];

let stats = { ventas: 0, ganancias: 0.0, compras: 0 };

const container = document.getElementById('clientProductsContainer');
const searchInput = document.getElementById('headerSearchInput');
const categorySelect = document.getElementById('headerCategorySelect');
const purchaseSelect = document.getElementById('purchaseProduct');

function switchAdminTab(tabId) {
    document.querySelectorAll('.demo-tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.demo-panel').forEach(panel => panel.classList.remove('active'));
    event.currentTarget.classList.add('active');
    document.getElementById(tabId).classList.add('active');
}

const initUI = () => {
    updateCategories();
    updatePurchaseSelect();
    filterProducts();
    updateReports();
};

const updateCategories = () => {
    const currentVal = categorySelect.value;
    categorySelect.innerHTML = '<option value="all">Todas las categorías</option>';
    const categories = [...new Set(products.map(p => p.category))];
    categories.forEach(cat => {
        const option = document.createElement('option');
        option.value = cat; option.textContent = cat;
        categorySelect.appendChild(option);
    });
    if(categories.includes(currentVal)) categorySelect.value = currentVal;
};

const updatePurchaseSelect = () => {
    purchaseSelect.innerHTML = '';
    products.forEach(p => {
        const option = document.createElement('option');
        option.value = p.id; option.textContent = `${p.name} (Stock actual: ${p.stock})`;
        if(p.stock === 0) option.textContent += ' [AGOTADO]';
        purchaseSelect.appendChild(option);
    });
};

const updateReports = () => {
    document.getElementById('repVentas').textContent = stats.ventas;
    document.getElementById('repGanancias').textContent = `Bs. ${stats.ganancias.toFixed(2)}`;
    document.getElementById('repCompras').textContent = stats.compras;
    document.getElementById('repAgotados').textContent = products.filter(p => p.stock === 0).length;
};

window.sellProduct = (id) => {
    const product = products.find(p => p.id === id);
    if (product) {
        let cart = JSON.parse(localStorage.getItem('ferreteria_cart')) || [];
        cart.push({ name: product.name, price: parseFloat(product.price), qty: 1 });
        localStorage.setItem('ferreteria_cart', JSON.stringify(cart));
        window.location.href = 'views/carrito.html';
    } else {
        window.location.href = 'views/carrito.html';
    }
};

window.addNewProduct = () => {
    products.push({
        id: `PROD-${(products.length + 1).toString().padStart(3, '0')}`,
        name: document.getElementById('newProdName').value,
        category: document.getElementById('newProdCat').value,
        price: parseFloat(document.getElementById('newProdPrice').value),
        stock: parseInt(document.getElementById('newProdStock').value),
        img: 'fa-box'
    });
    document.getElementById('formAddProduct').reset();
    document.getElementById('msgAddProduct').style.display = 'block';
    setTimeout(() => document.getElementById('msgAddProduct').style.display = 'none', 3000);
    initUI();
};

window.registerPurchase = () => {
    const prodId = document.getElementById('purchaseProduct').value;
    const qty = parseInt(document.getElementById('purchaseQty').value);
    const product = products.find(p => p.id === prodId);
    if(product) {
        product.stock += qty;
        stats.compras += 1;
        document.getElementById('formPurchase').reset();
        document.getElementById('msgPurchase').style.display = 'block';
        setTimeout(() => document.getElementById('msgPurchase').style.display = 'none', 3000);
        initUI();
    }
};

const renderProducts = (items) => {
    container.innerHTML = '';
    if(items.length === 0) {
        container.innerHTML = '<div style="grid-column: 1 / -1; text-align: center; padding: 4rem; color: #7f8c8d;">No se encontraron productos.</div>';
        return;
    }
    items.forEach(prod => {
        let badge = '';
        if(prod.stock === 0) badge = '<span class="stock-badge stock-out">Agotado</span>';
        else if(prod.stock <= 10) badge = `<span class="stock-badge stock-low">Bajo: ${prod.stock}</span>`;
        else badge = `<span class="stock-badge stock-ok">Stock: ${prod.stock}</span>`;

        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            ${badge}
            <div class="prod-img-box">
                ${prod.img.includes('/') ? `<img src="${prod.img}" alt="${prod.name}">` : `<i class="fas ${prod.img}"></i>`}
            </div>
            <div class="product-cat">${prod.category}</div>
            <h3 class="product-name">${prod.name}</h3>
            <div class="product-price">Bs. ${prod.price.toFixed(2)}</div>
            <button class="btn-add-cart" onclick="sellProduct('${prod.id}')" ${prod.stock === 0 ? 'disabled' : ''}>
                <i class="fas ${prod.stock === 0 ? 'fa-ban' : 'fa-cart-plus'}"></i> ${prod.stock === 0 ? 'Sin Stock' : 'Agregar (Comprar 1)'}
            </button>
        `;
        container.appendChild(card);
    });
};

const filterProducts = () => {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCategory = categorySelect.value;
    const filtered = products.filter(p => {
        const matchName = p.name.toLowerCase().includes(searchTerm) || p.id.toLowerCase().includes(searchTerm);
        const matchCategory = selectedCategory === 'all' || p.category === selectedCategory;
        return matchName && matchCategory;
    });
    renderProducts(filtered);
};

searchInput.addEventListener('input', filterProducts);
categorySelect.addEventListener('change', filterProducts);
document.getElementById('headerSearchBtn').addEventListener('click', filterProducts);

initUI();
