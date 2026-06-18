# Landing Page - Ferretería Belén

Este repositorio contiene la **Landing Page (Página de Presentación)** para el **Sistema de Información Web para la Gestión, Control de Inventario y Consultas de Productos de Construcción de la Ferretería Belén**.

Este proyecto fue desarrollado como parte del **Hito 4: Integración y Despliegue** de la asignatura de **Ingeniería de Sistemas ** en la **Universidad Privada Franz Tamayo (UNIFRANZ)**.

## 🎯 Objetivo del Proyecto

El objetivo principal de esta Landing Page no es ser el sistema final, sino actuar como un **Portafolio Documental Interactivo**. Su propósito es presentar de manera elegante, estructurada y profesional toda la documentación técnica, análisis y diseño detrás del sistema de la Ferretería Belén. 

A través de esta página, cualquier usuario o evaluador puede explorar:

1. **Marco Introductorio:** Los antecedentes, el planteamiento del problema en la gestión manual de la ferretería y los objetivos del desarrollo del software.
2. **Marco Teórico:** Los conceptos de metodologías ágiles y herramientas utilizadas.
3. **Marco de Desarrollo:** La ingeniería detrás del software, que incluye:
   * **Ingeniería de Requisitos:** Clasificación de requisitos funcionales (RF) y no funcionales (RNF) usando la metodología MoSCoW, junto a la Matriz de Trazabilidad (RTM).
   * **Modelado de Comportamiento y Datos:** Diagramas UML de Casos de Uso, Escenarios de Éxito, el Diagrama Entidad-Relación (DER) y el Diccionario de Datos del sistema.
   * **Arquitectura de Software y Diseño UX:** Diagramas de arquitectura en capas y los wireframes/prototipos de las diferentes pantallas (Login, Gestión de Productos, Compras, Ventas, etc.).

## 🚀 Características Técnicas y Diseño

La Landing Page ha sido desarrollada utilizando tecnologías web base:
* **HTML5:** Estructuración semántica de la información y uso de componentes modulares (acordeones, tablas, tarjetas).
* **CSS3 Vanilla (Sin frameworks pesados):** Se ha diseñado una interfaz moderna bajo la tendencia del **Glassmorphism** (efecto de vidrio esmerilado), temas oscuros atractivos, y paletas de colores vibrantes (`#f39c12`).
* **JavaScript Vanilla:** Lógica para la interacción fluida del usuario, como el despliegue de los acordeones de contenido, el menú responsive, y menús desplegables.

## 📁 Estructura del Proyecto

```
📂 Landing Page-FERRETERIA BELEN/
├── 📄 index.html                      # Página principal (Landing Page)
├── 📂 css/
│   ├── style.css                      # Estilos principales (Glassmorphism)
│   ├── store.css                      # Estilos del módulo tienda
│   └── responsive.css                 # Estilos responsive / mobile
├── 📂 js/
│   ├── main.js                        # Lógica principal (acordeones, menú)
│   └── store.js                       # Lógica del módulo tienda
├── 📂 views/                          # Vistas del sistema
│   ├── login.html                     # Pantalla de inicio de sesión
│   ├── dashboard.html                 # Panel principal
│   ├── consulta.html                  # Consulta de productos
│   ├── carrito.html                   # Carrito de compras
│   ├── compras.html                   # Gestión de compras a proveedores
│   ├── ventas.html                    # Gestión de ventas
│   ├── reportes.html                  # Generación de reportes
│   └── creador.html                   # Creador/administrador
├── 📂 modulos/                        # Módulos de categorías de productos
│   ├── Documento.html                 # Documentación técnica completa
│   ├── electricidad.html              # Categoría: Electricidad
│   ├── herramientas.html              # Categoría: Herramientas
│   ├── lo-nuevo.html                  # Categoría: Lo Nuevo
│   ├── material-grueso.html           # Categoría: Material Grueso
│   ├── ofertas.html                   # Categoría: Ofertas
│   ├── pinturas.html                  # Categoría: Pinturas
│   └── plomeria.html                  # Categoría: Plomería
└── 📂 assets/
    └── img/                           # Imágenes, banners y diagramas del sistema
```

---

## 👨‍💻 Créditos
* **Estudiante:** Brayan Copajaña Canaviri
* **Materia:** Ingeniería de Sistemas 
* **Docente:** Javier Elvis Canqui Llusco
* **Gestión:** 2026
