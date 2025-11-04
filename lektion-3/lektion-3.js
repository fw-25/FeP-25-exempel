console.log("js funkar");

function greeter(userName) {

    let greeting = "";
    
    if (userName == "Fredde" || userName == "fredde") {
        greeting = "Dig känner jag!";
    } else if (userName == "Dennis") {
        greeting = "Hur mår robotarna?";
    } else {
        greeting = "Vem är du?";
    }

    greeting = `Hej ${userName}! ${greeting}`;
    console.log(greeting);
    document.getElementById("greeter-output").innerHTML = greeting;
}
greeter("Dennis");
