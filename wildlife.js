const photos = document.querySelectorAll(".photo-item img");

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const photoCaption = document.getElementById("photoCaption");

const closeLightbox = document.getElementById("closeLightbox");
const prevPhoto = document.getElementById("prevPhoto");
const nextPhoto = document.getElementById("nextPhoto");

let currentIndex = 0;

// MEMBUKA FOTO
photos.forEach((photo, index) => {
    photo.addEventListener("click", function () {
        currentIndex = index;
        showPhoto();
        lightbox.classList.add("show");
    });
});

// MENAMPILKAN FOTO
function showPhoto() {
    lightboxImage.src = photos[currentIndex].src;
    photoCaption.textContent = photos[currentIndex].alt;
}

// FOTO BERIKUTNYA
nextPhoto.addEventListener("click", function () {
    currentIndex++;

    if (currentIndex >= photos.length) {
        currentIndex = 0;
    }

    showPhoto();
});

// FOTO SEBELUMNYA
prevPhoto.addEventListener("click", function () {
    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = photos.length - 1;
    }

    showPhoto();
});

// MENUTUP LIGHTBOX
closeLightbox.addEventListener("click", function () {
    lightbox.classList.remove("show");
});

// TUTUP JIKA KLIK AREA GELAP
lightbox.addEventListener("click", function (event) {
    if (event.target === lightbox) {
        lightbox.classList.remove("show");
    }
});

// NAVIGASI KEYBOARD
document.addEventListener("keydown", function (event) {
    if (!lightbox.classList.contains("show")) return;

    if (event.key === "Escape") {
        lightbox.classList.remove("show");
    }

    if (event.key === "ArrowRight") {
        nextPhoto.click();
    }

    if (event.key === "ArrowLeft") {
        prevPhoto.click();
    }
});