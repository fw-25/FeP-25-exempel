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
    //console.log(greeting);
    
    return greeting;

}

const greetDennis = greeter("Dennis");
document.getElementById("greeter-output").innerHTML = greetDennis;

document.getElementById("other-output").innerHTML = greeter("Fredde");

