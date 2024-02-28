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

document.querySelector('.to-top').addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Example: Applying styles to the body element
document.body.style.fontFamily = "'Roboto Slab', serif";
document.body.style.margin = "0";
document.body.style.padding = "0 20px";
document.body.style.color = "#000000";
document.body.style.backgroundColor = "#FFFFFF";
document.body.style.textAlign = "center";
document.body.style.letterSpacing = "0.5px";
document.body.style.lineHeight = "1.8";

// Example: Applying styles to the banner class
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

// Example: Applying responsive design using JavaScript
window.addEventListener('resize', function() {
    if(window.innerWidth <= 767) {
        // Apply responsive styles here
        var headerH1 = document.querySelector("header h1");
        if(headerH1) {
            headerH1.style.fontSize = "36px";
            headerH1.style.marginTop = "-80px";
        }
    } else {
        // Revert back to original styles if needed
    }
});
