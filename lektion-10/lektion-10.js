

async function getJoke() {
    const resp = await fetch("https://icanhazdadjoke.com/", {
        headers: { "Accept": "application/json" }
    });
    const jokeObj = await resp.json();
    console.log(jokeObj);
    document.getElementById("joke").innerText = jokeObj.joke;
}
getJoke();

const product = { name: `Kaffe`, price: 3, stock: 100};
console.log(product);
const productJSON = JSON.stringify(product);
console.log(productJSON);

// teckensträng med JSON:
const jsonString = `
    {"name":"Kaffe","price":3,"stock":100}
`;
const productObj = JSON.parse(jsonString);
productObj.price = 3.5;
console.log(productObj);
console.log(JSON.stringify(productObj))

console.log(JSON.stringify([
    { name: "Kaffe", price: 3, stock: 100},
    { name: "Munk", price: 3.5, stock: 15},
    { name: "Glass", price: 4, stock: 45},
]));
