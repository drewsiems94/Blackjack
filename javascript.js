// 1=diamond, 2=heart, 3=spade, 4=clover
const pot = document.getElementById('pot');
const hit = document.getElementById('hit');
const stay = document.getElementById('stay');

let playerCards = [];
let computerCards = [];
let potTotal = 0;
let playerTotal = 0;
let computerTotal = 0;
let computerSum = 0;

pot.addEventListener('keypress', function (e) {
    if (e.code === "Enter") {
        e.preventDefault();
        e.stopPropagation();
        potTotal = Number(e.target.value) * 2;
        pot.disabled = true;
        dealCards();
    }
})

let j = 2;
hit.addEventListener('click', function hitPlayer () {
    let number = Math.floor((Math.random() * 10) + 1);
    let suite = Math.floor((Math.random() * 4) + 1);
    if (number == 1) {
        playerCards[j] = {value: number, suite: suite, face: "ace"};
    } else if (number == 10) {
        let face = Math.floor((Math.random() * 4) + 1);
        playerCards[j] = {value: number, suite: suite, face: face};
    } else {
        playerCards[j] = {value: number, suite: suite};
    }
    const newDiv = document.createElement("div");
    newDiv.className = "displayCards";
    newDiv.setAttribute('id', `pCard${j + 1}`);
    bottomCards.appendChild(newDiv);
    ++j;
});

let k = 2;
stay.addEventListener('click', function computerPlay () {
    computerSum = computerCards[0].value + computerCards[1].value;
    while (computerSum < 17) {
        if (computerCards[0].value == 1 && computerCards[1].value == 1) {
            let number = Math.floor((Math.random() * 10) + 1);
            let suite = Math.floor((Math.random() * 4) + 1);
            if (number == 1) {
                computerCards[k] = {value: number, suite: suite, face: "ace"};
            } else if (number == 10) {
                let face = Math.floor((Math.random() * 4) + 1);
                computerCards[k] = {value: number, suite: suite, face: face};
            } else {
                computerCards[k] = {value: number, suite: suite};
            }
            computerSum = computerSum + computerCards[k].value;
            ++k;
        } else if (computerCards[0].value == 1) {
            if (computerCards[1].value + 1 < 17 && computerCards[1].value + 11 < 17) {
                let number = Math.floor((Math.random() * 10) + 1);
                let suite = Math.floor((Math.random() * 4) + 1);
                if (number == 1) {
                    computerCards[k] = {value: number, suite: suite, face: "ace"};
                } else if (number == 10) {
                    let face = Math.floor((Math.random() * 4) + 1);
                    computerCards[k] = {value: number, suite: suite, face: face};
                } else {
                    computerCards[k] = {value: number, suite: suite};
                }
                computerSum = computerSum + computerCards[k].value;
                ++k;
            } else {
                break;
            }
        } else if (computerCards[1].value == 1) {
            if (computerCards[0].value + 1 < 17 && computerCards[0].value + 11 < 17) {
                let number = Math.floor((Math.random() * 10) + 1);
                let suite = Math.floor((Math.random() * 4) + 1);
                if (number == 1) {
                    computerCards[k] = {value: number, suite: suite, face: "ace"};
                } else if (number == 10) {
                    let face = Math.floor((Math.random() * 4) + 1);
                    computerCards[k] = {value: number, suite: suite, face: face};
                } else {
                    computerCards[k] = {value: number, suite: suite};
                }
                computerSum = computerSum + computerCards[k].value;
                ++k;
            } else {
                break;
            }
        } else {
            let number = Math.floor((Math.random() * 10) + 1);
            let suite = Math.floor((Math.random() * 4) + 1);
            if (number == 1) {
                computerCards[k] = {value: number, suite: suite, face: "ace"};
            } else if (number == 10) {
                let face = Math.floor((Math.random() * 4) + 1);
                computerCards[k] = {value: number, suite: suite, face: face};
            } else {
                computerCards[k] = {value: number, suite: suite};
            }
            computerSum = computerSum + computerCards[k].value;
            ++k;
        }
    }
    console.log(checkWinner(playerCards, computerCards));
})

function dealCards() {
    for (i = 0; i < 4; i++) {
        if (i == 0) {
            let number = Math.floor((Math.random() * 10) + 1);
            let suite = Math.floor((Math.random() * 4) + 1);
            if (number == 1) {
                playerCards[0] = {value: number, suite: suite, face: "ace"};
            } else if (number == 10) {
                let face = Math.floor((Math.random() * 4) + 1);
                playerCards[0] = {value: number, suite: suite, face: face};
            } else {
                playerCards[0] = {value: number, suite: suite};
            }
        } else if (i == 1) {
            let number = Math.floor((Math.random() * 10) + 1);
            let suite = Math.floor((Math.random() * 4) + 1);
            if (number == 1) {
                computerCards[0] = {value: number, suite: suite, face: "ace"};
            } else if (number == 10) {
                let face = Math.floor((Math.random() * 4) + 1);
                computerCards[0] = {value: number, suite: suite, face: face};
            } else {
                computerCards[0] = {value: number, suite: suite};
            }
        } else if (i == 2) {
            let number = Math.floor((Math.random() * 10) + 1);
            let suite = Math.floor((Math.random() * 4) + 1);
            if (number == 1) {
                playerCards[1] = {value: number, suite: suite, face: "ace"};
            } else if (number == 10) {
                let face = Math.floor((Math.random() * 4) + 1);
                playerCards[1] = {value: number, suite: suite, face: face};
            } else {
                playerCards[1] = {value: number, suite: suite};
            }
        } else {
            let number = Math.floor((Math.random() * 10) + 1);
            let suite = Math.floor((Math.random() * 4) + 1);
            if (number == 1) {
                computerCards[1] = {value: number, suite: suite, face: "ace"};
            } else if (number == 10) {
                let face = Math.floor((Math.random() * 4) + 1);
                computerCards[1] = {value: number, suite: suite, face: face};
            } else {
                computerCards[1] = {value: number, suite: suite};
            }
        }
    }
}

function checkWinner(player, computer) {
    const ace = (card) => card.value == 1;
    if (!playerCards.some(ace)) {
        for (n = 0; n < playerCards.length; n++) {
            playerTotal = playerTotal + playerCards[n].value;
        }
    } else {
        for (n = 0; n < playerCards.length; n++) {
            playerTotal = playerTotal + playerCards[n].value;
        }
        let highTotal = (playerTotal - 1) + 11;
        if (highTotal <= 21) {
            playerTotal = highTotal
        } 
    }
    if (!computerCards.some(ace)) {
        for (n = 0; n < computerCards.length; n++) {
            computerTotal = computerTotal + computerCards[n].value;
        }
    } else {
        for (n = 0; n < computerCards.length; n++) {
            computerTotal = computerTotal + computerCards[n].value;
        }
        let highTotal = (computerTotal - 1) + 11;
        if (highTotal <= 21) {
            computerTotal = highTotal
        } 
    }
    if (computerTotal = playerTotal) {
        return "It is a tie.";
    } else if (computerTotal > 21 && playerTotal > 21) {
        return "It is a tie.";
    } else if (playerTotal <= 21 && computerTotal > 21) {
        return "You win!";
    } else if (playerTotal > 21 && computerTotal <= 21) {
        return "You lose.";
    } else if (playerTotal <= 21 && computerTotal <= 21 && playerTotal > computerTotal) {
        return "You win!";
    } else {
        return "You lose.";
    }
}
