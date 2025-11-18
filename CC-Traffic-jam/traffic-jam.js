const COLORS = {
    red: "#ff0000",
    yellow: "rgb(255, 200, 0)",
    green: "lime"
};

function resetLights() {
    for (const light of document.querySelectorAll(`#lights > div`)) {
        light.style.backgroundColor = "black";
    }
}

function activateLight(lightNumber) {
    resetLights();
    const light = document.querySelector(`#lights > div:nth-child(${lightNumber})`);
    const color = light.dataset.color;
    light.style.backgroundColor = COLORS[color]; // ta färgen från COLORS-konstanten
}

setInterval(() => {
    const randNumber = Math.ceil(Math.random()*3);
    activateLight(randNumber);
}, 500);

