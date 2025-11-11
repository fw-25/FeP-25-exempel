document.getElementById("my-list").innerHTML = `<li>sak</li>`;
document.getElementById("my-list").innerHTML += `<li>sak2</li>`;

const colors = [ "red", "green", "blue" ];
console.log(colors[0])
console.log(colors)

const saker = [ 1, "hej", colors];
console.log(saker[2][1])

colors[2] = "yellow";
console.log(colors)

colors.push("purple");
console.log(colors)
console.log(colors.indexOf("yellow")) // 2

console.log(colors.join(".. "))
const str = "item-1";
console.log(str.split("-"))
console.log(str.split("-")[1])
const names = "john, jane, lisa";
const namesArr = names.split(", ");
console.log(namesArr);

// OBS array.sort() sorterar numeriska tal som strings 
const letters = ["b", "22", "d", "m", "e", 11, 2];
console.log(letters);
letters.sort();
console.log(letters);

const person = {
    name: "Linus",
    age: 50,
    likes: "C"
};
console.log(`${person.name} gillar ${person.likes}`) // Linus gillar C
//console.log(`${person["name"]} gillar ${person["likes"]}`)
const persons = [
    { name: "Linus", likes: "Linux" },
    { name: "Dennis", likes: "Robotar" },
    { name: "Jonny", likes: "Unity" },
    { name: "Niraj", likes: "Java"}
];
persons.push({
    name: "Fredde", 
    likes: "JS"
});

console.log(persons);
console.log(`${persons[0].name} gillar ${persons[0].likes}`);

for (let i = 0; i < persons.length; i++) {
    const personStr = `
        <li>
            ${i} - ${persons[i].name} gillar ${persons[i].likes}
        </li> 
    `;
    console.log(personStr);
    document.getElementById("persons").innerHTML += personStr;
}

