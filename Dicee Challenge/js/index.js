function rollTheDice() {
    var randomNumber1 = getRandomDice("img1");
    var randomNumber2 = getRandomDice("img2");

    changeMessage(randomNumber1, randomNumber2);
}

function getRandomDice(className) {
    var diceImagePath = "images/dice";

    var randomNumber = Math.floor(Math.random() * 6) + 1;

    className = "." + className;
    diceImagePath = diceImagePath + randomNumber + ".png";

    diceElement = document.querySelector(className);

    diceElement.setAttribute("src", diceImagePath);

    return randomNumber;
}

function changeMessage(diceNumber1, diceNumber2) {
    var messageElement = document.querySelector(".container h1");

    if (diceNumber1 === diceNumber2) {
        messageElement.innerHTML = "Draw";
    } else if (diceNumber1 > diceNumber2) {
        messageElement.innerHTML = "🚩 Player 1 Wins!";
    } else {
        messageElement.innerHTML = "Player 2 Wins! 🚩";
    }
}

rollTheDice();
