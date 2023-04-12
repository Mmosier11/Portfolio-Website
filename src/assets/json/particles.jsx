const particlesSettings = {
    fpsLimit: 60,
    interactivity: {
        events: {
            resize: true,
        },
    },
    particles: {
        color: {
            value: "#ffffff",
        },
        move: {
            direction: "top",
            enable: true,
            outModes: {
                default: "out",
            },
            random: false,
            speed: 3,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                area: 800,
            },
            value: 80,
        },
        opacity: {
            value: 0.25,
        },
        shape: {
            type: "circle",
        },
        size: {
            value: { min: 1, max: 3 },
        },
    },
    detectRetina: true,
};

export default particlesSettings;