

function resetColors() {
    for (const elem of document.querySelectorAll('.divs')) {
        elem.style.backgroundColor = "#333333";
    }
}

// Metod 1: loopa igenom och sätt lyssnare på varje element
document.querySelectorAll('#container2 > .divs').forEach(elem => {
    const color = elem.getAttribute("data-color");

    elem.addEventListener('click', () => {
        resetColors();
        elem.style.backgroundColor = color;
    });
});

// Metod 2: sätt lyssnaren på container-elementet
document.getElementById("container").addEventListener('click', evt => {
    const elem = evt.target;

    if (!elem.classList.contains("divs")) return; // om elemenetet inte har klassen divs

    console.log(evt.target); // evt.target = det vi klickat på
    const color = elem.id.split("-")[1];
    elem.style.backgroundColor = color;
});






/*
document.getElementById("div-1").addEventListener('click', () => {
    document.getElementById("div-1").style.backgroundColor = "red";
}); 
*/

