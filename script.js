// Get the navbar element
const navbar = document.getElementById('navbar');

// Add scroll event listener
window.addEventListener('scroll', function () {
    // When the page is scrolled, add the 'scrolled' class to the navbar
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
