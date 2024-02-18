document.getElementById('discover-seminars').addEventListener('click', function() {
    window.location.href = '#services'; // Scrolls to the services section
});

document.getElementById('contact-us').addEventListener('click', function() {
    // Add the URL you want to redirect to after '#'
    window.location.href = '#contact-info'; 
});

// Scroll-triggered animation for sections
document.addEventListener('DOMContentLoaded', (event) => {
  const sections = document.querySelectorAll('#about-us, #services, #testimonials, #partnership');

  window.addEventListener('scroll', () => {
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight - 100) {
        section.style.opacity = '1';
        section.style.transform = 'translateX(0)';
        section.style.animation = '1s ease-out 0s 1 slideInFromLeft';
      }
    });
  });
});
