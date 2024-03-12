document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.querySelector('.to-top');
    const staticBackToTopButton = document.getElementById('back-to-top');
    let allowScrollListener = true; // Flag to control the scroll listener

    backToTopButton.style.opacity = '0'; // Initially hide the floating button
    backToTopButton.style.visibility = 'hidden';

    // Function to handle Back to Top button visibility
    function checkButtonVisibility() {
        if (!allowScrollListener) return; // Exit if scroll listener is disabled

        const aboutUsSection = document.getElementById('about-us');
        const footer = document.querySelector('footer');
        const aboutUsPosition = aboutUsSection.getBoundingClientRect().bottom;
        const footerPosition = footer.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Show or hide floating button based on scroll position
        if (window.scrollY > aboutUsPosition && footerPosition > windowHeight) {
            backToTopButton.style.opacity = '1';
            backToTopButton.style.visibility = 'visible';
        } else {
            backToTopButton.style.opacity = '0';
            backToTopButton.style.visibility = 'hidden';
        }
    }

    // Event listener for scrolling
    window.addEventListener('scroll', checkButtonVisibility);

    // Event listener for floating Back to Top button click
    backToTopButton.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Static Back to Top button functionality
    staticBackToTopButton.addEventListener('click', function(e) {
        e.preventDefault();
        allowScrollListener = false; // Disable scroll listener temporarily
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Re-enable scroll listener and check button visibility after scrolling
        setTimeout(function() {
            allowScrollListener = true;
            checkButtonVisibility();
        }, 700); // Delay should match the scroll animation duration
    });

    // Discover Seminars button smooth scrolling
    document.getElementById('discover-seminars').addEventListener('click', function(event) {
        event.preventDefault();
        const servicesSection = document.getElementById('services');
        servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    // Contact Us button - Scroll to contact information section
    document.getElementById('contact-us').addEventListener('click', function() {
        window.location.href = '#contact-info';
    });

    // Scroll-triggered animation for sections
    const sections = document.querySelectorAll('#about-us, #services, #testimonials, #partnership');
    sections.forEach(section => {
        section.dataset.animated = 'false'; // Initialize the animation flag as false
    });

    window.addEventListener('scroll', () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight - 100 && section.dataset.animated === 'false') {
                section.style.opacity = '1';
                section.style.transform = 'translateX(0)';
                section.style.animation = '1s ease-out 0s 1 slideInFromLeft';
                section.dataset.animated = 'true'; // Mark as animated
            }
        });
    });

    // Modal functionality for contact form
    const modal = document.getElementById("contactModal");
    const modalBtn = document.getElementById("contact-us");
    const closeModalBtn = document.getElementsByClassName("close-button")[0];

    modalBtn.onclick = function() {
        modal.style.display = "block";
    }

    closeModalBtn.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Change button color with delay on mobile devices
    setTimeout(function() {
        const discoverButton = document.getElementById('discover-seminars');
        if (window.innerWidth <= 767) { // Check for mobile resolution
            discoverButton.classList.add('mobile-fade');
        }
    }, 2000); // 2s after page load
});
