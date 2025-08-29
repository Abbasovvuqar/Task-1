   const cards = document.querySelectorAll('.card-9');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('active');
        });
    });


   particlesJS("particles-js", {
    particles: {
        number: {
            value: 90, 
            density: {
                enable: true,
                value_area: 900
            }
        },
        color: {
            value: "#ffffff" 
        },
        shape: {
            type: "circle"
        },
        opacity: {
            value: 1
        },
        size: {
            value: 2.5
        },
        line_linked: {
            enable_auto: true,
            distance: 100,
            color: "#ffffff",
            opacity: 1,
            width: 1
        },
        move: {
            enable: true,
            speed: 4
        
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "grab"
            },
            onclick: {
                enable: true,
                mode: "push"
            }
        },
        modes: {
            grab: {
                distance: 80,
                line_linked: {
                    opacity: 0.9
                }
            },
            push: {
                particles_nb: 5
            }
        }
    },
    retina_detect: true
});