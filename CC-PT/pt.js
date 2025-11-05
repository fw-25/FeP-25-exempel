
function pt() {
    minTime = 20;
    maxTime = 180;

    const trainingTime = Number(document.getElementById("training-time").value);
    
    console.log(trainingTime);

    // Guard statement
    if (isNaN(trainingTime)) return alert("Mata in ett tal!");
    
    let ptComment = "";

    if (trainingTime < minTime) {
        ptComment = "Bättre kan du!";
    } else if (trainingTime > maxTime) {
        ptComment = "Bra, men kom ihåg att chilla emellanåt!";
    } else {
        ptComment = "Fortsätt i samma stil!";
    }

    document.getElementById("pt-comment").innerHTML = ptComment;
}



document.getElementById("btn-run").addEventListener("click", function () {
    console.log("Du klickade på knappen!");
    pt();
});

function btn2Handler() {
    console.log("Du klickade på knapp2!");
    pt();
}

// Ett annat alternativ
document.getElementById("btn-2").addEventListener("click", btn2Handler);

