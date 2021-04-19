var limit = 100;
var maxTentativi = limit - 16;
var arrBombe = bombsGenerator(16, 100);
var arrNumberPlayed = [];

console.log(arrBombe);
var endGame = false;

while (endGame === false) {
    var number = parseInt(prompt("inserisci un numero"));
    if (arrNumberPlayed.includes(number) === true) {
        alert("Il numero è già stato inserito")
    } else if (arrBombe.includes(number) === true) {
        alert("Hai perso\nHai fatto " + arrNumberPlayed.length + " tentativi");
        console.log("Tentativi fatti " + arrNumberPlayed.join() + ". Il numero che ti ha fatto perdere è stato il " + number);
        endGame = true;
    } else if (number > limit) {
        alert("il numero è superiore a" + limit + "\nRiprova");
    } else if (number < 1) {
        alert("il numero è inferiore a 1.\nRiprova");
    } else if (isNaN(number) === true) {
        alert("Non hai inserito un numero.\nRiprova");
    } else {
        arrNumberPlayed.push(number);
        if (maxTentativi === arrNumberPlayed.length) {
            alert("Hai vinto");
            endGame = true;
        }
    }
}



function bombsGenerator(numBombs, max) {
    var arrBombs = [];

    while (arrBombs.length < numBombs) {
        var bomb = getRandomNumber(max);
        if (arrBombs.includes(bomb) === false) {
            arrBombs.push(bomb);
        }
    }
    return arrBombs;
}

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}