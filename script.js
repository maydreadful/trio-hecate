// script.js

// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            // Calculate offset for fixed header
            const headerOffset = document.querySelector('header').offsetHeight;
            const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - headerOffset - 20; // Added 20px extra padding

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Image Carousel
document.addEventListener('DOMContentLoaded', () => {
    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    // Show the first image
    if (carouselItems.length > 0) {
        carouselItems[currentIndex].classList.add('opacity-100');
    }

    function showNextImage() {
        // Hide current image
        carouselItems[currentIndex].classList.remove('opacity-100');
        carouselItems[currentIndex].classList.add('opacity-0');

        // Move to next image
        currentIndex = (currentIndex + 1) % carouselItems.length;

        // Show next image
        carouselItems[currentIndex].classList.remove('opacity-0');
        carouselItems[currentIndex].classList.add('opacity-100');
    }

    // Change image every 5 seconds (5000 milliseconds)
    setInterval(showNextImage, 5000);
});