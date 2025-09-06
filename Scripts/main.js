// Listen for a click on the mobile menu button
document.getElementById('mobile-menu-btn').addEventListener('click', function() {
    // Find the mobile menu element
    var menu = document.getElementById('mobile-menu');
    
    // Add or remove the 'hidden' class to show or hide the menu
    menu.classList.toggle('hidden');
});

// Slider functionality
document.addEventListener('DOMContentLoaded', (event) => {
    const nextButton = document.getElementById('next');
    const prevButton = document.getElementById('prev');
    const slider = document.getElementById('slider');
    const card = document.querySelector('.card');

    if (nextButton && prevButton && slider && card) {
        nextButton.onclick = function() {
            const width = card.offsetWidth;
            slider.scrollLeft += width + 24; // 24 is for the space-x-6
        };
        prevButton.onclick = function() {
            const width = card.offsetWidth;
            slider.scrollLeft -= width + 24; // 24 is for the space-x-6
        };
    }
});