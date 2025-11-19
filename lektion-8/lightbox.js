const IMAGE_ID = [16, 28, 61, 69];
for (const id of IMAGE_ID) {
    document.getElementById("thumbnail-container").innerHTML += `
        <img data-id="${id}" src="./lightbox-img/thumb-img-0${id}.png">
    `;
}

function openLightbox(id) {
    document.getElementById("lightbox").innerHTML = `
            <img src="./lightbox-img/img-0${id}.png">
        `;
    document.getElementById("lightbox").classList.remove("hidden");
}
function closeLightbox() {
    document.getElementById("lightbox").classList.add("hidden");
}

for (const img of document.querySelectorAll("#thumbnail-container > img")) {
    img.addEventListener('click', () => openLightbox(img.dataset.id)); // samma som img.getAttribute("data-id")
}

// Stäng bilden men klick
document.querySelector("#lightbox").addEventListener('click', closeLightbox);
// Stäng bilden med Esc
window.addEventListener('keydown', (evt) => {
    if (!document.getElementById("lightbox").classList.contains("hidden")
        && evt.key === "Escape") {
        closeLightbox();
    }
});