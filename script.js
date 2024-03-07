document.addEventListener('DOMContentLoaded', function() {
  let backToTopButton = document.querySelector('.to-top');
  let aboutUsSection = document.getElementById('about-us');
  let windowHeight = window.innerHeight;

  window.addEventListener('scroll', () => {
    let aboutUsPosition = aboutUsSection.getBoundingClientRect().top;

    if (aboutUsPosition < windowHeight / 2) {
      backToTopButton.classList.add('visible'); // Fade in
    } else {
      backToTopButton.classList.remove('visible'); // Fade out
    }
  });
});


document.addEventListener('DOMContentLoaded', function () {
  // This checks if the screen width is 767px or less
  if (window.innerWidth <= 767) {
    var discoverSeminarsButton = document.getElementById('discover-seminars');
    // Add the class that starts the animation
    discoverSeminarsButton.classList.add('fade-to-white');
  }
});

document.getElementById('discover-seminars').addEventListener('click', function() {
  window.location.href = '#services'; // Scrolls to the services section
});

document.getElementById('contact-us').addEventListener('click', function() {
  window.location.href = '#contact-info'; // Scrolls to the contact information section
});

// Scroll-triggered animation for sections
document.addEventListener('DOMContentLoaded', (event) => {
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
});

// Modal functionality
var modal = document.getElementById("contactModal");
var btn = document.getElementById("contact-us");
var span = document.getElementsByClassName("close-button")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Back to Top functionality
document.querySelector('.to-top').addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Dynamic styling using JavaScript
document.body.style.fontFamily = "'Roboto Slab', serif";
document.body.style.margin = "0";
document.body.style.padding = "0 20px";
document.body.style.color = "#000000";
document.body.style.backgroundColor = "#FFFFFF";
document.body.style.textAlign = "center";
document.body.style.letterSpacing = "0.5px";
document.body.style.lineHeight = "1.8";

var banners = document.getElementsByClassName("banner");
for(var i = 0; i < banners.length; i++) {
    banners[i].style.backgroundImage = "linear-gradient(to bottom, #005f73, #004853)";
    banners[i].style.color = "white";
    banners[i].style.textAlign = "center";
    banners[i].style.padding = "8px 0";
    banners[i].style.fontSize = "20px";
    banners[i].style.fontWeight = "bold";
    banners[i].style.textShadow = "2px 2px 4px rgba(0, 0, 0, 0.7)";
}

window.addEventListener('resize', function() {
    if(window.innerWidth <= 767) {
        var headerH1 = document.querySelector("header h1");
        if(headerH1) {
            headerH1.style.fontSize = "36px";
            headerH1.style.marginTop = "-80px";
        }
    }
});
