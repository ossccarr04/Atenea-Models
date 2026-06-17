# Atenea - Plataforma de Moda Sostenible y Personalizada

![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

Atenea es una aplicación web desarrollada en Angular que promueve la moda circular y la sostenibilidad. La plataforma permite a los usuarios dar una nueva vida a la ropa de segunda mano a través de la personalización, conectando la creatividad con el consumo consciente.

## 📜 Descripción del Proyecto

El objetivo de Atenea es reducir el desperdicio textil ofreciendo un servicio de transformación de prendas. Los usuarios pueden enviar sus prendas usadas y proponer modificaciones para convertirlas en piezas únicas y con una nueva historia.

La aplicación cuenta con una sección donde los usuarios pueden describir los cambios que desean, adjuntar una imagen de referencia y recibir una cotización dinámica basada en la complejidad de las modificaciones.

## ✨ Características Principales

- **Formulario de Diseño Personalizado**: Permite a los usuarios detallar las modificaciones que desean para su prenda.
- **Carga de Imágenes**: Facilita la subida de imágenes de referencia para guiar el proceso de diseño.
- **Cálculo de Precio Dinámico**: El coste del servicio se actualiza en tiempo real según el número de modificaciones seleccionadas por el usuario.
- **Notificaciones por Correo**: Al enviar una solicitud, el sistema (a través de un servicio de backend) envía un correo electrónico de confirmación con los detalles del pedido y la imagen adjunta.
- **Generación de Factura/Resumen**: Muestra un popup con un resumen del pedido (código, sugerencias y precio total) después de que la solicitud se ha enviado correctamente.
- **Página "Sobre Nosotros"**: Comunica la misión del proyecto, su compromiso con la sostenibilidad y la colaboración con ONGs como **ZDHC** y **Textile Exchange**.

## 🛠️ Tecnologías Utilizadas

- **Frontend**:
  - **Angular**: Framework principal para la construcción de la interfaz de usuario.
  - **TypeScript**: Lenguaje de programación para el desarrollo en Angular.
  - **HTML5 y CSS3**: Para la estructura y el estilo de la aplicación.
  - **Bootstrap**: Utilizado para algunos componentes y estilos responsivos.

- **Backend (Servicios)**:
  - Se apoya en un servicio de backend (no incluido en este repositorio) para procesar la carga de archivos y el envío de correos electrónicos.

## 📂 Estructura de Componentes

El proyecto de Angular (`/front`) está organizado en los siguientes componentes clave:

```
src/app/components/
├── categories/
│   └── otros/
│       └── otros.component.ts         # Lógica del formulario de diseño propio.
│       └── otros.component.html       # Plantilla del formulario.
├── factura/
│   └── factura.component.ts         # Lógica para mostrar el resumen del pedido.
└── sobre-nosotros/
    └── sobre-nosotros.component.ts  # Componente de la página "Sobre Nosotros".
```

## 🚀 Puesta en Marcha

Sigue estos pasos para ejecutar el proyecto en un entorno de desarrollo local.

### Requisitos Previos

- Node.js (versión 16.x o superior)
- Angular CLI (versión 14.x o superior)

### Instalación

1. **Clona el repositorio:**
   ```sh
   git clone https://github.com/<tu-usuario>/TFG-Leyre.git
   ```

2. **Navega al directorio del frontend:**
   ```sh
   cd TFG-Leyre/front
   ```

3. **Instala las dependencias del proyecto:**
   ```sh
   npm install
   ```

4. **Ejecuta el servidor de desarrollo:**
   ```sh
   ng serve -o
   ```

La aplicación se abrirá automáticamente en tu navegador en `http://localhost:4200/`.

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.

---
