// Configuración de partículas de fondo
particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: ['#ff6b9d', '#e91e63', '#ffc0cb', '#ff69b4']
        },
        shape: {
            type: 'circle',
            stroke: {
                width: 0,
                color: '#000000'
            }
        },
        opacity: {
            value: 0.5,
            random: false,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#ff6b9d',
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 6,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'repulse'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 400,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
            },
            repulse: {
                distance: 200,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: true
});

// Animaciones al hacer scroll
document.addEventListener('DOMContentLoaded', function() {
    // Navegación suave
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Animación de elementos al hacer scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);

    // Observar elementos de la línea de tiempo
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        observer.observe(item);
    });

    // Observar tarjetas de recuerdos
    const memoryCards = document.querySelectorAll('.memory-card');
    memoryCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
        observer.observe(card);
    });

    // Efecto parallax en el hero
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        const heroContent = document.querySelector('.hero-content');
        
        if (hero && heroContent) {
            heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    // Efecto de navbar al hacer scroll
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        }

        lastScrollTop = scrollTop;
    });

    // Efecto de click en el indicador de scroll
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            const storySection = document.querySelector('#nuestra-historia');
            if (storySection) {
                storySection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }

    // Efectos especiales para las tarjetas de recuerdos
    memoryCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Animación de texto tipo máquina de escribir para el mensaje
    const loveTexts = document.querySelectorAll('.love-text');
    loveTexts.forEach((text, index) => {
        const originalText = text.textContent;
        text.textContent = '';
        text.style.opacity = '0';
        
        setTimeout(() => {
            text.style.opacity = '1';
            typeWriter(text, originalText, 0, 50);
        }, 1000 + (index * 2000));
    });

    // Función de máquina de escribir
    function typeWriter(element, text, i, speed) {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            setTimeout(() => typeWriter(element, text, i + 1, speed), speed);
        }
    }

    // Efecto de corazones que aparecen al hacer click
    document.addEventListener('click', function(e) {
        createHeart(e.clientX, e.clientY);
    });

    function createHeart(x, y) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.style.position = 'fixed';
        heart.style.left = x + 'px';
        heart.style.top = y + 'px';
        heart.style.fontSize = '20px';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '9999';
        heart.style.animation = 'floatHeart 2s ease-out forwards';
        
        document.body.appendChild(heart);
        
        setTimeout(() => {
            document.body.removeChild(heart);
        }, 2000);
    }

    // Agregar animación CSS para corazones flotantes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes floatHeart {
            0% {
                transform: translateY(0) scale(1);
                opacity: 1;
            }
            100% {
                transform: translateY(-100px) scale(1.5);
                opacity: 0;
            }
        }
        
        .memory-card {
            animation: fadeInUp 0.8s ease both;
        }
        
        .timeline-item.animate {
            animation: slideInFromLeft 0.8s ease both;
        }
        
        .timeline-item.animate:nth-child(even) {
            animation: slideInFromRight 0.8s ease both;
        }
        
        @keyframes slideInFromLeft {
            from {
                opacity: 0;
                transform: translateX(-50px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
        
        @keyframes slideInFromRight {
            from {
                opacity: 0;
                transform: translateX(50px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
    `;
    document.head.appendChild(style);

    // Efecto de música de fondo (opcional)
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    
    // Función para crear un tono romántico
    function playRomanticTone() {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(440, audioContext.currentTime);
        oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime + 0.5);
        oscillator.frequency.setValueAtTime(659.25, audioContext.currentTime + 1);
        
        gainNode.gain.setValueAtTime(0, audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.1, audioContext.currentTime + 0.1);
        gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + 1.5);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 1.5);
    }

    // Reproducir tono al hacer click en elementos especiales
    const specialElements = document.querySelectorAll('.hero-title, .message-card, .nav-logo');
    specialElements.forEach(element => {
        element.addEventListener('click', function() {
            if (audioContext.state === 'suspended') {
                audioContext.resume();
            }
            playRomanticTone();
        });
    });

    // Contador de días hasta el día de la novia
    function updateCountdown() {
        const today = new Date();
        const currentYear = today.getFullYear();
        const girlfriendDay = new Date(currentYear, 7, 1); // 1 de Agosto (mes 7 = agosto)
        
        // Si ya pasó este año, calcular para el próximo año
        if (today > girlfriendDay) {
            girlfriendDay.setFullYear(currentYear + 1);
        }
        
        const timeDiff = girlfriendDay.getTime() - today.getTime();
        const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
        
        // Crear o actualizar contador
        let countdownElement = document.querySelector('.countdown');
        if (!countdownElement) {
            countdownElement = document.createElement('div');
            countdownElement.className = 'countdown';
            countdownElement.style.cssText = `
                position: fixed;
                top: 100px;
                right: 20px;
                background: rgba(233, 30, 99, 0.9);
                color: white;
                padding: 15px 20px;
                border-radius: 25px;
                font-weight: bold;
                z-index: 1000;
                box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
                backdrop-filter: blur(10px);
            `;
            document.body.appendChild(countdownElement);
        }
        
        if (daysDiff === 0) {
            countdownElement.innerHTML = '¡Hoy es el Día de la Novia! ❤️';
        } else {
            countdownElement.innerHTML = `${daysDiff} días para el Día de la Novia ❤️`;
        }
    }

    // Actualizar contador cada día
    updateCountdown();
    setInterval(updateCountdown, 86400000); // Actualizar cada 24 horas

    // Efecto de confeti al cargar la página
    function createConfetti() {
        const colors = ['#ff6b9d', '#e91e63', '#ffc0cb', '#ff69b4', '#ff1493'];
        
        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                confetti.style.cssText = `
                    position: fixed;
                    width: 10px;
                    height: 10px;
                    background: ${colors[Math.floor(Math.random() * colors.length)]};
                    left: ${Math.random() * 100}vw;
                    top: -10px;
                    pointer-events: none;
                    z-index: 9998;
                    animation: confettiFall 3s linear forwards;
                `;
                
                document.body.appendChild(confetti);
                
                setTimeout(() => {
                    if (confetti.parentNode) {
                        confetti.parentNode.removeChild(confetti);
                    }
                }, 3000);
            }, i * 100);
        }
    }

    // Agregar animación de confeti
    const confettiStyle = document.createElement('style');
    confettiStyle.textContent = `
        @keyframes confettiFall {
            to {
                transform: translateY(100vh) rotate(360deg);
            }
        }
    `;
    document.head.appendChild(confettiStyle);

    // Lanzar confeti después de 2 segundos
    setTimeout(createConfetti, 2000);
});

// Función para agregar fotos dinámicamente
function addPhotoToMemoryCard(cardIndex, imageUrl, title, description) {
    const memoryCards = document.querySelectorAll('.memory-card');
    if (memoryCards[cardIndex]) {
        const card = memoryCards[cardIndex];
        const placeholder = card.querySelector('.memory-placeholder');
        const overlay = card.querySelector('.memory-overlay');
        
        // Crear imagen
        const img = document.createElement('img');
        img.src = imageUrl;
        img.style.cssText = `
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 20px;
        `;
        
        // Reemplazar placeholder con imagen
        placeholder.innerHTML = '';
        placeholder.appendChild(img);
        
        // Actualizar overlay
        if (overlay) {
            const titleElement = overlay.querySelector('h3');
            const descElement = overlay.querySelector('p');
            
            if (titleElement) titleElement.textContent = title;
            if (descElement) descElement.textContent = description;
        }
    }
}

// ========================================
// AGREGAR FOTOS ESPECIALES CON ANYELL
// ========================================
// Fotos organizadas con textos personales y sentimentales

// Foto 1: Nuestro Primer Encuentro
addPhotoToMemoryCard(0, 'fotos/primer-encuentro.jpg', 'Nuestro Primer Encuentro', 'El día que te vi por primera vez, supe que mi vida cambiaría para siempre...');

// Foto 2: Aventuras Compartidas
addPhotoToMemoryCard(1, 'fotos/aventuras.jpg', 'Después de la Aventura', 'Cada aventura contigo ha sido mágica, llena de risas y recuerdos que atesoro en mi corazón...');

// Foto 3: Risas y Alegría
addPhotoToMemoryCard(2, 'fotos/risas.jpg', 'Me Haces Muy Feliz', 'Tu sonrisa ilumina mis días y hace que cada momento a tu lado sea perfecto...');

// Foto 4: Foto Principal
addPhotoToMemoryCard(3, 'fotos/foto-principal.jpg', 'Mi Foto Principal', 'Esta foto representa todo lo que eres para mí: mi amor, mi felicidad, mi todo...');

// Foto 5: Celebraciones
addPhotoToMemoryCard(4, 'fotos/celebraciones.jpg', 'Las Primeras Cartas', 'Cada carta que escribí para ti está llena del amor más puro y sincero que siento...');

// Foto 6: Nuestro Futuro
addPhotoToMemoryCard(5, 'fotos/futuro.jpg', 'Eres Mi Compañera', 'Contigo quiero construir un futuro hermoso lleno de amor eterno...');

// ========================================
// CONTROL DE MÚSICA SIMPLE
// ========================================

let isPlaying = false;

// Función para reproducir música
function playMusic() {
    const musicButton = document.querySelector('.music-button');
    const backgroundMusic = document.getElementById('background-music');
    
    if (!isPlaying) {
        // Reproducir archivo sample.mp3
        if (backgroundMusic) {
            backgroundMusic.volume = 0.3;
            backgroundMusic.play().then(() => {
                isPlaying = true;
                musicButton.classList.add('playing');
                musicButton.innerHTML = '<i class="fas fa-pause"></i><span>⏸️ Pausar Música</span>';
                console.log('✅ Música sample.mp3 reproduciéndose');
            }).catch(error => {
                console.error('❌ Error al reproducir sample.mp3:', error);
                alert('No se pudo reproducir la música. Verifica que el archivo music/sample.mp3 esté disponible.');
            });
        } else {
            alert('Elemento de audio no encontrado. Verifica que el archivo music/sample.mp3 esté disponible.');
        }
    } else {
        // Pausar música
        if (backgroundMusic) {
            backgroundMusic.pause();
            console.log('⏸️ Música pausada');
        }
        
        isPlaying = false;
        musicButton.classList.remove('playing');
        musicButton.innerHTML = '<i class="fas fa-music"></i><span>🎵 Activar Música</span>';
    }
}

// Configurar eventos cuando la página carga
document.addEventListener('DOMContentLoaded', () => {
    console.log('✅ Página cargada, música sample.mp3 lista para activar');
    
    const backgroundMusic = document.getElementById('background-music');
    
    if (backgroundMusic) {
        // Configurar eventos del archivo de audio
        backgroundMusic.addEventListener('loadeddata', () => {
            console.log('✅ Archivo sample.mp3 cargado correctamente');
        });
        
        backgroundMusic.addEventListener('error', (e) => {
            console.log('❌ Error al cargar sample.mp3');
        });
        
        backgroundMusic.addEventListener('ended', () => {
            console.log('🔄 Archivo terminado, reiniciando...');
            backgroundMusic.currentTime = 0;
            backgroundMusic.play();
        });
    }
}); 