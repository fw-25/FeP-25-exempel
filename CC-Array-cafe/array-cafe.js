//                0         1       2
const names =  [ "Kaffe", "Munk", "Glass" ]
const prices = [  3,       3.5,    4 ]    // mellanslagen bara för att det ska bli tydligare
const stock =  [  100,     15,     45 ]   

// Array of objects:
const products = [
    { name: "Kaffe", price: 3, stock: 100},
    { name: "Munk", price: 3.5, stock: 15},
    { name: "Glass", price: 4, stock: 45},
]

console.log(`En ${names[1]} kostar ${prices[1]} € vi har ${stock[1]} st.`)
prices[1] = 5;
stock[1]--; // nån kar köpt en munk
console.log(`En ${names[1]} kostar ${prices[1]} € vi har ${stock[1]} st.`)

let htmlListItems = "";
for (let i = 0; i < names.length; i++) {
    htmlListItems += `<li>${names[i]}</li>`;
}

htmlListItems = "";
for (const i in names) { // for-in är bra när man behöver "i"
    htmlListItems += `<li>${i} - ${names[i]} kostar ${prices[i]} € vi har ${stock[i]} st.</li>`;
}

for (const name of names) { // enklast av alla, ingen i behövs
    htmlListItems += `<li>${name}</li>`;
}

// Loopa array of objects
htmlListItems = "";
for (const product of products) {
    htmlListItems += `
        <li>${product.name} 
            kostar ${product.price} € 
            vi har ${product.stock} st.
        </li>
    `;
}
htmlListItems += "--";
for (const i in products) {
    htmlListItems += `
        <li>${Number(i)+1} - ${products[i].name} 
            kostar ${products[i].price} € 
            vi har ${products[i].stock} st.
        </li>
    `;
}



document.getElementById('products').innerHTML = htmlListItems;

