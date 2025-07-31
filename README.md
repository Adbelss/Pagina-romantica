# ❤️ Página Web para el Día de la Novia - Mi Princesa ❤️

Una hermosa página web romántica creada especialmente por Adbel para celebrar el amor por su princesa Anyell en el Día de la Novia (1 de Agosto).

## 🌟 Características

- **Diseño moderno y romántico** con gradientes hermosos
- **Animaciones suaves** al hacer scroll (parallax, fade-in, etc.)
- **Partículas interactivas** de fondo
- **Efectos especiales** como corazones flotantes y confeti
- **Sección de recuerdos** para mostrar fotos especiales
- **Mensaje de amor personalizado**
- **Diseño responsive** para todos los dispositivos
- **Contador de días** hasta el Día de la Novia
- **Efectos de sonido** románticos

## 📁 Estructura del Proyecto

```
pagina_novios/
├── index.html          # Página principal
├── styles.css          # Estilos y animaciones
├── script.js           # Funcionalidades JavaScript
└── README.md           # Este archivo
```

## 🚀 Cómo Usar

1. **Abrir la página**: Simplemente abre el archivo `index.html` en tu navegador web
2. **Personalizar contenido**: Edita el archivo `index.html` para cambiar textos y mensajes
3. **Agregar fotos**: Usa la función JavaScript para agregar tus fotos especiales

## 📸 Cómo Agregar Fotos

Para agregar fotos a la sección de recuerdos, puedes usar la función JavaScript incluida:

```javascript
// Ejemplo de cómo agregar fotos
addPhotoToMemoryCard(0, 'ruta/a/tu/foto1.jpg', 'Nuestro Primer Encuentro', 'El día que todo cambió...');
addPhotoToMemoryCard(1, 'ruta/a/tu/foto2.jpg', 'Aventuras Juntos', 'Cada momento es especial...');
addPhotoToMemoryCard(2, 'ruta/a/tu/foto3.jpg', 'Risas y Alegría', 'Los mejores momentos...');
```

### Pasos para agregar fotos:

1. **Coloca tus fotos** en la misma carpeta del proyecto
2. **Abre el archivo `script.js`**
3. **Busca las líneas comentadas al final** del archivo
4. **Descomenta y modifica** las líneas de ejemplo con tus rutas de fotos
5. **Guarda el archivo** y recarga la página

## 🎨 Personalización

### Cambiar Colores
Edita el archivo `styles.css` y busca las variables de color:
- `#e91e63` - Color principal (rosa)
- `#ff6b9d` - Color secundario (rosa claro)
- `#667eea` y `#764ba2` - Gradientes de fondo

### Cambiar Mensajes
Edita el archivo `index.html`:
- **Título principal**: Busca `<h1 class="hero-title">`
- **Subtítulo**: Busca `<p class="hero-subtitle">`
- **Mensaje de amor**: Busca la sección `<div class="message-content">`

### Cambiar Fechas
En el archivo `script.js`, busca la función `updateCountdown()` y modifica:
```javascript
const girlfriendDay = new Date(currentYear, 7, 1); // 1 de Agosto
```

## ✨ Efectos Especiales

### Animaciones Incluidas:
- **Partículas de fondo** que reaccionan al mouse
- **Corazones flotantes** que aparecen al hacer click
- **Confeti** que cae al cargar la página
- **Efecto parallax** en la sección hero
- **Animaciones de scroll** para elementos
- **Efecto máquina de escribir** en el mensaje de amor
- **Sonidos románticos** al hacer click en elementos especiales

### Cómo Activar/Desactivar Efectos:

1. **Partículas**: Comenta las líneas de `particlesJS()` en `script.js`
2. **Sonidos**: Comenta la sección de `audioContext` en `script.js`
3. **Confeti**: Comenta la función `createConfetti()` en `script.js`

## 📱 Compatibilidad

La página es compatible con:
- ✅ Chrome
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Dispositivos móviles

## 🎯 Funcionalidades Interactivas

- **Navegación suave** entre secciones
- **Efectos hover** en tarjetas y botones
- **Animaciones de entrada** al hacer scroll
- **Contador de días** en tiempo real
- **Efectos de partículas** interactivos

## 💝 Ideas para Personalizar

1. **Agregar música de fondo** romántica
2. **Incluir más secciones** como "Nuestras Canciones"
3. **Crear una galería** con más fotos
4. **Agregar un contador** de días juntos
5. **Incluir citas románticas** favoritas
6. **Crear una sección** de promesas de amor

## 🔧 Solución de Problemas

### Las fotos no se cargan:
- Verifica que las rutas de las fotos sean correctas
- Asegúrate de que los archivos de imagen existan en la carpeta

### Las animaciones no funcionan:
- Verifica que JavaScript esté habilitado en tu navegador
- Asegúrate de que todos los archivos estén en la misma carpeta

### La página se ve mal en móvil:
- La página es responsive, pero si hay problemas, verifica que el viewport esté configurado correctamente

## 📞 Soporte

Si tienes alguna pregunta o necesitas ayuda para personalizar la página, puedes:
1. Revisar los comentarios en el código
2. Modificar los archivos según tus necesidades
3. Agregar nuevas funcionalidades según tus ideas

## 💖 Dedicado a Mi Princesa Anyell

Esta página fue creada con mucho amor y dedicación por Adbel para celebrar el amor por su princesa Anyell en el Día de la Novia. Que cada elemento de esta página refleje la profundidad y belleza de nuestro amor.

---

**¡Que disfrutes esta celebración especial del amor! ❤️** 