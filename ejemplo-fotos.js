// ========================================
// EJEMPLO: Cómo agregar fotos a la página
// ========================================

// Este archivo muestra cómo agregar tus fotos especiales a la página
// Copia estas líneas al final del archivo script.js y personaliza con tus fotos

// Ejemplo 1: Nuestro Primer Encuentro
addPhotoToMemoryCard(0, 'fotos/primer-encuentro.jpg', 'Nuestro Primer Encuentro', 'El día que te vi por primera vez, supe que mi vida cambiaría para siempre...');

// Ejemplo 2: Aventuras Compartidas
addPhotoToMemoryCard(1, 'fotos/aventuras.jpg', 'Aventuras Compartidas', 'Cada aventura contigo ha sido mágica, llena de risas y recuerdos que atesoro en mi corazón...');

// Ejemplo 3: Risas y Alegría
addPhotoToMemoryCard(2, 'fotos/risas.jpg', 'Risas y Alegría', 'Tu sonrisa ilumina mis días y hace que cada momento a tu lado sea perfecto...');

// Ejemplo 4: Foto Principal
addPhotoToMemoryCard(3, 'fotos/foto-principal.jpg', 'Mi Foto Principal', 'Esta foto representa todo lo que eres para mí: mi amor, mi felicidad, mi todo...');

// Ejemplo 5: Celebraciones
addPhotoToMemoryCard(4, 'fotos/celebraciones.jpg', 'Celebraciones', 'Cada carta que escribí para ti está llena del amor más puro y sincero que siento...');

// Ejemplo 6: Nuestro Futuro
addPhotoToMemoryCard(5, 'fotos/futuro.jpg', 'Nuestro Futuro', 'Contigo quiero construir un futuro hermoso lleno de amor eterno...');

// ========================================
// INSTRUCCIONES PASO A PASO:
// ========================================

/*
1. Crea una carpeta llamada "fotos" en tu proyecto
2. Coloca tus fotos en esa carpeta
3. Cambia los nombres de archivo en las líneas de arriba
4. Personaliza los títulos y descripciones
5. Copia estas líneas al final del archivo script.js
6. Guarda el archivo y recarga la página

FORMATOS DE IMAGEN SOPORTADOS:
- .jpg
- .jpeg
- .png
- .gif
- .webp

TAMAÑOS RECOMENDADOS:
- Ancho: 400-800 píxeles
- Alto: 300-600 píxeles
- Formato: Horizontal o cuadrado funciona mejor

EJEMPLO DE ESTRUCTURA DE CARPETA:
pagina_novios/
├── index.html
├── styles.css
├── script.js
├── README.md
└── fotos/
    ├── primer-encuentro.jpg
    ├── aventuras.jpg
    ├── risas.jpg
    ├── momentos-intimos.jpg
    ├── celebraciones.jpg
    └── futuro.jpg
*/

// ========================================
// EJEMPLOS ADICIONALES CON DIFERENTES FORMATOS:
// ========================================

// Con formato PNG
// addPhotoToMemoryCard(0, 'fotos/mi-foto.png', 'Mi Título', 'Mi descripción...');

// Con formato GIF (animado)
// addPhotoToMemoryCard(1, 'fotos/mi-gif.gif', 'Mi Título', 'Mi descripción...');

// Con formato WebP (mejor calidad)
// addPhotoToMemoryCard(2, 'fotos/mi-foto.webp', 'Mi Título', 'Mi descripción...');

// ========================================
// CONSEJOS PARA FOTOS PERFECTAS:
// ========================================

/*
1. ELIGE FOTOS DE ALTA CALIDAD:
   - Resolución mínima: 400x300 píxeles
   - Formato: JPG para fotos, PNG para imágenes con transparencia

2. VARIEDAD DE MOMENTOS:
   - Fotos juntos
   - Momentos especiales
   - Lugares importantes
   - Celebraciones
   - Momentos cotidianos

3. ORGANIZACIÓN:
   - Nombra las fotos de manera descriptiva
   - Usa la misma carpeta para todas las fotos
   - Mantén una copia de respaldo

4. OPTIMIZACIÓN:
   - Comprime las fotos si son muy grandes
   - Mantén un tamaño de archivo razonable (menos de 2MB por foto)
   - Usa formatos modernos como WebP si es posible
*/

// ========================================
// FUNCIÓN PARA AGREGAR MÚLTIPLES FOTOS:
// ========================================

// Si quieres agregar más de 6 fotos, puedes crear una galería adicional
function addExtraPhotos() {
    // Ejemplo para agregar más fotos
    addPhotoToMemoryCard(6, 'fotos/extra1.jpg', 'Foto Extra 1', 'Descripción extra...');
    addPhotoToMemoryCard(7, 'fotos/extra2.jpg', 'Foto Extra 2', 'Descripción extra...');
    addPhotoToMemoryCard(8, 'fotos/extra3.jpg', 'Foto Extra 3', 'Descripción extra...');
}

// Llamar esta función si quieres más fotos
// addExtraPhotos(); 