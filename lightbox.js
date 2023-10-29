const images = ['assets/gallery1.png', 'assets/gallery2.png', 'assets/gallery3.png', 'assets/gallery4.png']; // Gallery images
let currentImageIndex = 0;

function showImage(offset) { // This part creates an infinite loop
    currentImageIndex += offset;
    if (currentImageIndex < 0) { // If Index is below 0, it loops back.
        currentImageIndex = images.length - 1;
    } else if (currentImageIndex >= images.length) { // If Index is over last image, it loops back.
        currentImageIndex = 0;
    }
    const galleryImage = document.getElementById('galleryImage');
    galleryImage.src = images[currentImageIndex];
}

document.addEventListener('DOMContentLoaded', () => {
    showImage(0);
});
