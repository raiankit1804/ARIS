document.addEventListener('DOMContentLoaded', () => {
    const splashScreen = document.getElementById('splash-screen');
    const mainContent = document.getElementById('main-content');
    const body = document.body;

    // --- Splash Screen Logic --- 
    // Set a timeout to hide the splash screen and show the main content
    setTimeout(() => {
        if (splashScreen) {
            splashScreen.classList.add('fade-out');
        }

        // Wait for splash screen fade-out transition to complete
        setTimeout(() => {
            if (splashScreen) {
                splashScreen.style.display = 'none'; // Completely remove from layout
            }
            if (mainContent) {
                mainContent.classList.remove('hidden');
                mainContent.classList.add('visible');
            }
            // Restore scrolling on body
            body.style.overflowY = 'auto';
        }, 800); // Match this delay to the CSS transition duration

    }, 2500); // Adjust this delay (in milliseconds) for how long the splash screen should show

    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navbar = document.querySelector('.navbar');
    const navLinkItems = document.querySelectorAll('.nav-links li');

    // --- Hamburger Menu Toggle --- 
    hamburger.addEventListener('click', () => {
        // Toggle Nav
        navLinks.classList.toggle('active');
        
        // Hamburger Animation
        hamburger.classList.toggle('active');
    });

    // --- Close Mobile Menu on Link Click --- 
    navLinkItems.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    });

    // --- Close Mobile Menu on Clicking Outside --- 
    document.addEventListener('click', (e) => {
        // Check if the click is outside the navLinks and the hamburger itself
        if (navLinks.classList.contains('active') && !navLinks.contains(e.target) && !hamburger.contains(e.target)) {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });

    // --- Navbar Scroll Animation --- 
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) { // Add 'scrolled' class after 50px scroll
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

}); 