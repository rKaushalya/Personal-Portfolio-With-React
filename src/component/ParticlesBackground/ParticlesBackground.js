import React, { useEffect } from 'react';

const ParticlesBackground = () => {
    useEffect(() => {
        if (window.particlesJS) {
            window.particlesJS('particles-js', {
                particles: {
                    number: {
                        value: 60,
                        density: {
                            enable: true,
                            value_area: 800,
                        },
                    },
                    color: { value: "#000000" },
                    shape: {
                        type: 'circle',
                    },
                    opacity: {
                        value: 0.5,
                    },
                    size: {
                        value: 3,
                    },
                    line_linked: {
                        enable: true,
                        distance: 150,
                        color: '#000000',
                        opacity: 0.4,
                        width: 1,
                    },
                    move: {
                        enable: true,
                        speed: 5,
                    },
                },
                interactivity: {
                    detect_on: 'canvas',
                    events: {
                        onhover: { enable: true, mode: 'repulse' },
                        onclick: { enable: true, mode: 'push' },
                    },
                    modes: {
                        repulse: { distance: 200, duration: 0.4 },
                        push: { particles_nb: 4 },
                    },
                },
                retina_detect: true,
            });
        }
    }, []);

    return <div id="particles-js" className="absolute w-full h-full"></div>;
};

export default ParticlesBackground;
