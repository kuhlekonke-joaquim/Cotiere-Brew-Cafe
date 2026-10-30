
// Wait until the HTML page has loaded
document.addEventListener("DOMContentLoaded", function () {

    // Find the gallery section
    const gallery = document.querySelector(".gallery-grid");

    // Stop if the gallery does not exist
    if (!gallery) {
        return;
    }

    // Create the lightbox container
    const lightbox = document.createElement("div");
    lightbox.className = "lightbox";

    lightbox.innerHTML = `
        <button class="lightbox-close" aria-label="Close image">&times;</button>
        <img class="lightbox-image" src="" alt="">
        <p class="lightbox-caption"></p>
    `;

    // Add the lightbox to the page
    document.body.appendChild(lightbox);

    const lightboxImage = lightbox.querySelector(".lightbox-image");
    const lightboxCaption = lightbox.querySelector(".lightbox-caption");
    const closeButton = lightbox.querySelector(".lightbox-close");

    // Open an image when a gallery image is clicked
    gallery.addEventListener("click", function (event) {

        const clickedImage = event.target.closest("img");

        if (!clickedImage || !gallery.contains(clickedImage)) {
            return;
        }

        lightboxImage.src = clickedImage.src;
        lightboxImage.alt = clickedImage.alt;

        const galleryItem = clickedImage.closest(".gallery-item");
        const caption = galleryItem
            ? galleryItem.querySelector(".gallery-caption")
            : null;

        lightboxCaption.textContent = caption
            ? caption.textContent.trim()
            : clickedImage.alt;

        lightbox.classList.add("active");
        document.body.classList.add("lightbox-open");

        closeButton.focus();
    });

    // Close the lightbox
    function closeLightbox() {
        lightbox.classList.remove("active");
        document.body.classList.remove("lightbox-open");
    }

    closeButton.addEventListener("click", closeLightbox);

    // Close when the background is clicked
    lightbox.addEventListener("click", function (event) {
        if (event.target === lightbox) {
            closeLightbox();
        }
    });

    // Close when Escape is pressed
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape" && lightbox.classList.contains("active")) {
            closeLightbox();
        }
    });

});
