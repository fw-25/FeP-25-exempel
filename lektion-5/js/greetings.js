console.log("greetings");
const defaultGreeting = "Hello";

function createGreeting(greeting, name) {
    return `${greeting} ${name}!`;
}

export function hello(name) {
    return createGreeting(defaultGreeting, name);
}

export function morjens(name) {
    return `Morjens ${name}!`;
}
