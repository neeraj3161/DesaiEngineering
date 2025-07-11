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

var adu = document.querySelectorAll('.adu');
var bil = document.querySelectorAll('.bil');
var zi = document.querySelectorAll('.zi');



$(window).scroll(function () {
    var opTopClass = $('.counter');


    adu.forEach(element => {
        if (element.getBoundingClientRect().top < window.innerHeight) {
            element.classList.add('animate__animated', 'animate__fadeInUp');
        }
    });

    bil.forEach(element => {
        if (element.getBoundingClientRect().top < window.innerHeight) {
            element.classList.add('animate__animated', 'animate__backInLeft');
        }
    });

    zi.forEach(element => {
        if (element.getBoundingClientRect().top < window.innerHeight) {
            element.classList.add('animate__animated', 'animate__zoomIn');
        }
    });

    if (opTopClass.length > 0) {

        var oTop = $('.counter')?.offset().top - window.innerHeight;

        if ($(window).scrollTop() > oTop) {
            console.log("reached");

            $('.countPlant').each(function () {
                var $this = $(this),
                    countTo = $this.attr('data-count');  // Get the number from the data-count attribute
                $({
                    countNum: $this.text()
                }).animate({
                    countNum: countTo
                },
                    {
                        duration: 2000,
                        easing: 'swing',
                        step: function () {
                            $this.text(Math.floor(this.countNum));  // Update the text as it animates
                        },
                        complete: function () {
                            $this.text(this.countNum);  // Set the final value once the animation is complete
                        }
                    });
            });
        }
    }
});
