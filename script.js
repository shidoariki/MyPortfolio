// ============================
// Smooth scrolling for nav links
// ============================
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // prevent default jump
    const targetID = this.getAttribute('href').substring(1); // remove #
    const targetSection = document.getElementById(targetID);

    targetSection.scrollIntoView({
      behavior: 'smooth' // smooth scroll
    });
  });
});

// ============================
// Back-to-top button functionality
// ============================
const topBtn = document.getElementById('topBtn');

// Show button after scrolling down 100px
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    topBtn.style.display = 'block';
  } else {
    topBtn.style.display = 'none';
  }
});

// Scroll to top when button is clicked
topBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});