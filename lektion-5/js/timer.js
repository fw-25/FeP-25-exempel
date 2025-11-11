
let counter = 0;
let myTimer = null;

myTimer = setInterval(() => {
    console.log(counter);
    counter++;
}, 1000);

document.getElementById("stop-timer").addEventListener("click", () => {
    clearInterval(myTimer);
});

document.getElementById("my-list").style.backgroundColor = "red";

const imgFile = document.getElementById("mole").getAttribute("src");
console.log(imgFile);



