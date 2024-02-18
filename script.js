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

// Get the modal
var modal = document.getElementById("contactModal");

// Get the button that opens the modal
var btn = document.getElementById("contact-us");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-button")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
