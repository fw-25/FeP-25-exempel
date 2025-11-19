const IMAGE_ID = [16, 28, 61, 49];
for (const id of IMAGE_ID) {
    document.getElementById("thumbnail-container").innerHTML += `
        <img data-id="${id}" src="./lightbox-img/thumb-img-0${id}.png">
    `;
}

for (const img of document.querySelectorAll("#thumbnail-container > img")) {
    console.log(img);
    img.addEventListener('click', () => {
        const id = img.dataset.id; // samma som img.getAttribute("data-id")
        document.getElementById("lightbox").innerHTML = `
            <img src="./lightbox-img/img-0${id}.png">
        `;
        document.getElementById("lightbox").classList.remove("hidden");
    });
}
function closeLightbox() {
    document.getElementById("lightbox").classList.add("hidden");
}

document.querySelector("#lightbox").addEventListener('click', closeLightbox);
// stäng bilden med Esc
window.addEventListener('keydown', (evt) => {
    if (!document.getElementById("lightbox").classList.contains("hidden") 
        && evt.key === "Escape") {
        closeLightbox();
    }
});