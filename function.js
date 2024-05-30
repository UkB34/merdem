// script.js
document.getElementById('yesButton').addEventListener('click', function() {
    const image = document.getElementById('mainImage');
    const currentSrc = image.getAttribute('src');
    image.setAttribute('src', currentSrc === 'erik.jpeg' ? 'cilek.jpeg' : 'erik.jpeg');
});

document.getElementById('noButton').addEventListener('mouseover', function() {
    const button = document.getElementById('noButton');
    const randomX = Math.random() * 500;
    const randomY = Math.random() * 150;
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
});
