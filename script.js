/* ================= Mobile Menu Toggle ================= */
// Selecting the hamburger icon and the navbar list
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// When the icon is clicked, toggle the 'X' icon and show/hide the menu
menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};

/* ================= Active Link on Scroll ================= */
// Select all sections and nav links to highlight the current section
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150; // Offset ensures the link activates slightly before reaching the section
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        // Check if the current scroll position is within this section
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                // Remove active class from all links first
                links.classList.remove('active');
                // Add active class to the link corresponding to the current section
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /* ================= Sticky Navbar ================= */
    // Add the 'sticky' class to the header when scrolled down 100px
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /* ================= Auto-Close Mobile Menu ================= */
    // Remove the toggle icon and hide navbar when a link is clicked (useful for mobile)
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

/* ================= Scroll Reveal Animations ================= */
// Configuration for the ScrollReveal library
ScrollReveal({
    reset: true,      // Animations repeat on scroll up/down
    distance: '80px', // Movement distance
    duration: 2000,   // Animation speed
    delay: 200
});

// Defining specific animations for different elements
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .skills-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/* ================= Typed.js (Typewriter Effect) ================= */
// Configuration for the typing animation in the hero section
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Diploma Student', 'AI Enthusiast'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});