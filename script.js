document.addEventListener('DOMContentLoaded', function() {
    // Back to Top button functionality
    const backToTopButton = document.querySelector('.to-top');
    backToTopButton.style.opacity = '0'; // Initially hide the button
    backToTopButton.style.visibility = 'hidden';

    // Function to handle Back to Top button visibility
    function checkButtonVisibility() {
        const aboutUsSection = document.getElementById('about-us');
        const footer = document.querySelector('footer');
        const aboutUsPosition = aboutUsSection.getBoundingClientRect().bottom;
        const footerPosition = footer.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Show button when user scrolls past 'About Us' section and hide when the footer is visible
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

    // Event listener for Back to Top button click
    backToTopButton.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
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

    // Dynamic styling using JavaScript
    document.body.style.fontFamily = "'Roboto Slab', serif";
    document.body.style.margin = "0";
    document.body.style.padding = "0 20px";
    document.body.style.color = "#000000";
    document.body.style.backgroundColor = "#FFFFFF";
    document.body.style.textAlign = "center";
    document.body.style.letterSpacing = "0.5px";
    document.body.style.lineHeight = "1.8";

    const banners = document.getElementsByClassName("banner");
    for(let i = 0; i < banners.length; i++) {
        banners[i].style.backgroundImage = "linear-gradient(to bottom, #005f73, #004853)";
        banners[i].style.color = "white";
        banners[i].style.textAlign = "center";
        banners[i].style.padding = "8px 0";
        banners[i].style.fontSize = "20px";
        banners[i].style.fontWeight = "bold";
        banners[i].style.textShadow = "2px 2px 4px rgba(0, 0, 0, 0.7)";
    }

    // Responsive font size adjustment for header on smaller screens
    window.addEventListener('resize', function() {
        const headerH1 = document.querySelector("header h1");
        if(window.innerWidth <= 767 && headerH1) {
            headerH1.style.fontSize = "36px";
            headerH1.style.marginTop = "-80px";
        }
    });
});
