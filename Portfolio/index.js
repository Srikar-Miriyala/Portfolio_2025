
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".work-container").forEach((container, index) => {
        gsap.to(container, {
            opacity: 1,
            y: 0,
            zIndex: index + 1, // Ensuring the latest container is on top
            scrollTrigger: {
                trigger: container,
                start: "top 80%", 
                end: "top 30%",
                scrub: 1,
                toggleActions: "play none none reverse",
            }
        });
    });

