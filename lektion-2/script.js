const piName = "Pi";
const piValue = 3.14;
const diametern = 7;
const userName = "Fredde";


// "gamla sättet"
console.log("värdet för " + piName + " är " + piValue);

console.log('värdet för ' + piName + ' är ' + piValue);

// rekommenderade sättet:
console.log(`Värdet för ${piName} är ${piValue}`);

console.log(`Min cirkel har omkretsen ${diametern*piValue}`)

let count = 0;
function clickCounter() {
    count++;
    console.log(`Du har klickat ${count} gånger!`);
}

function hello() {
    let name = prompt("Vad heter du?"); // prompt input
    alert(`Morjens ${name}!`); // alert output
}

function nameHandler() {
    //const namn = document.querySelector("#name").value;
    const namn = document.getElementById("namn").value;
    //console.log(`Hej ${namn}`);
    document.getElementById('name-output').innerHTML = `Hej ${namn}!`;
}




