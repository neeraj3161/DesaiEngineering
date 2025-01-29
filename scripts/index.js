anime.timeline({ loop: false })
    .add({
        targets: '.ml15 .word',
        scale: [14, 1],
        opacity: [0, 1],
        easing: "easeOutCirc",
        duration: 1000,
        delay: 1000
    }).add({
        targets: '.ml15',
        opacity: 1,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });


const animatedElements = document.querySelectorAll('.animate__animated');

// Create an Intersection Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add the animation class
            const animation = entry.target.dataset.animation;
            entry.target.classList.add(animation);
            entry.target.style.opacity = 1; // Make the element visible
            observer.unobserve(entry.target); // Stop observing once animated
        }
    });
}, { threshold: 0.1 }); // Trigger when 10% of the element is visible

// Osbserve each animated element
animatedElements.forEach(element => observer.observe(element));