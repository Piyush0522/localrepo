// Scroll left function
function scrollLeft() {
    const cardWrapper = document.getElementById('card-wrapper');
    cardWrapper.scrollBy({
        left: -300, // Adjust scrolling distance as needed
        behavior: 'smooth'
    });
}

// Scroll right function
function scrollRight() {
    const cardWrapper = document.getElementById('card-wrapper');
    cardWrapper.scrollBy({
        left: 300, // Adjust scrolling distance as needed
        behavior: 'smooth'
    });
}
