
let counter = 0;
let myTimer = null;

myTimer = setInterval(() => {
    console.log(counter);
    counter++;
}, 1000);

document.getElementById("stop-timer").addEventListener("click", () => {
    clearInterval(myTimer);
});



