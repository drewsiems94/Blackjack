
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
    let symbol = '';
    if (suite == 1) {
        symbol = "\u2660";
    } else if (suite == 2) {
        symbol = "\u2665";
    } else if (suite == 3) {
        symbol = "\u2666";
    } else {
        symbol = "\u2663";
    }
    if (number == 1) {
        playerCards[j] = {value: number, suite: suite, face: "A"};
    } else if (number == 10) {
        let face = Math.floor((Math.random() * 4) + 1);
        let faceSymbol = "";
        if (face == 1) {
            faceSymbol = "K";
        } else if (face == 2) {
            faceSymbol = "Q";
        } else if (face == 3) {
            faceSymbol = "J";
        } else {
            faceSymbol = "10";
        }
        playerCards[j] = {value: number, suite: suite, face: faceSymbol};
    } else {
        playerCards[j] = {value: number, suite: suite};
    }
    const newDiv = document.createElement("div");
    newDiv.className = "displayCards";
    newDiv.setAttribute('id', `pCard${j + 1}`);
    newDiv.setAttribute('style', 'background: white; height: 200px; width: 150px;');
    bottomCards.appendChild(newDiv);
    if (playerCards[j].value == 10 || playerCards[j].value == 1) {
        newDiv.innerHTML = `${playerCards[j].face}` + symbol;
    } else {
        newDiv.innerHTML = `${playerCards[j].value}` + symbol;
    }
    ++j;
});

let k = 2;
stay.addEventListener('click', function computerPlay () {
    computerSum = computerCards[0].value + computerCards[1].value;
    while (computerSum < 17) {
        if (computerCards[0].value == 1 && computerCards[1].value == 1) {
            let number = Math.floor((Math.random() * 10) + 1);
            let suite = Math.floor((Math.random() * 4) + 1);
            let symbol = '';
            if (suite == 1) {
                symbol = "\u2660";
            } else if (suite == 2) {
                symbol = "\u2665";
            } else if (suite == 3) {
                symbol = "\u2666";
            } else {
                symbol = "\u2663";
            }
            if (number == 1) {
                computerCards[k] = {value: number, suite: suite, face: "A"};
            } else if (number == 10) {
                let face = Math.floor((Math.random() * 4) + 1);
                if (face == 1) {
                    faceSymbol = "K";
                } else if (face == 2) {
                    faceSymbol = "Q";
                } else if (face == 3) {
                    faceSymbol = "J";
                } else {
                    faceSymbol = "10";
                }
                computerCards[k] = {value: number, suite: suite, face: faceSymbol};
            } else {
                computerCards[k] = {value: number, suite: suite};
            }
            computerSum = computerSum + computerCards[k].value;
            const newDiv = document.createElement("div");
            newDiv.className = "displayCards";
            newDiv.setAttribute('id', `cCard${k + 1}`);
            newDiv.setAttribute('style', 'background: white; height: 200px; width: 150px;');
            topCards.appendChild(newDiv);
            if (computerCards[k].value == 10 || computerCards[k].value == 1) {
                newDiv.innerHTML = `${computerCards[k].face}` + symbol;
            } else {
                newDiv.innerHTML = `${computerCards[k].value}` + symbol;
            }
            ++k;
        } else if (computerCards[0].value == 1) {
            if (computerCards[1].value + 1 < 17 && computerCards[1].value + 11 < 17) {
                let number = Math.floor((Math.random() * 10) + 1);
                let suite = Math.floor((Math.random() * 4) + 1);
                let symbol = '';
                if (suite == 1) {
                    symbol = "\u2660";
                } else if (suite == 2) {
                    symbol = "\u2665";
                } else if (suite == 3) {
                    symbol = "\u2666";
                } else {
                    symbol = "\u2663";
                }
                if (number == 1) {
                    computerCards[k] = {value: number, suite: suite, face: "A"};
                } else if (number == 10) {
                    let face = Math.floor((Math.random() * 4) + 1);
                    if (face == 1) {
                        faceSymbol = "K";
                    } else if (face == 2) {
                        faceSymbol = "Q";
                    } else if (face == 3) {
                        faceSymbol = "J";
                    } else {
                        faceSymbol = "10";
                    }
                    computerCards[k] = {value: number, suite: suite, face: faceSymbol};
                } else {
                    computerCards[k] = {value: number, suite: suite};
                }
                computerSum = computerSum + computerCards[k].value;
                const newDiv = document.createElement("div");
                newDiv.className = "displayCards";
                newDiv.setAttribute('id', `cCard${k + 1}`);
                newDiv.setAttribute('style', 'background: white; height: 200px; width: 150px;');
                topCards.appendChild(newDiv);
                if (computerCards[k].value == 10 || computerCards[k].value == 1) {
                    newDiv.innerHTML = `${computerCards[k].face}` + symbol;
                } else {
                    newDiv.innerHTML = `${computerCards[k].value}` + symbol;
                }
                ++k;
            } else {
                break;
            }
        } else if (computerCards[1].value == 1) {
            if (computerCards[0].value + 1 < 17 && computerCards[0].value + 11 < 17) {
                let number = Math.floor((Math.random() * 10) + 1);
                let suite = Math.floor((Math.random() * 4) + 1);
                let symbol = '';
                if (suite == 1) {
                    symbol = "\u2660";
                } else if (suite == 2) {
                    symbol = "\u2665";
                } else if (suite == 3) {
                    symbol = "\u2666";
                } else {
                    symbol = "\u2663";
                }
                if (number == 1) {
                    computerCards[k] = {value: number, suite: suite, face: "A"};
                } else if (number == 10) {
                    let face = Math.floor((Math.random() * 4) + 1);
                    if (face == 1) {
                        faceSymbol = "K";
                    } else if (face == 2) {
                        faceSymbol = "Q";
                    } else if (face == 3) {
                        faceSymbol = "J";
                    } else {
                        faceSymbol = "10";
                    }
                    computerCards[k] = {value: number, suite: suite, face: faceSymbol};
                } else {
                    computerCards[k] = {value: number, suite: suite};
                }
                computerSum = computerSum + computerCards[k].value;
                const newDiv = document.createElement("div");
                newDiv.className = "displayCards";
                newDiv.setAttribute('id', `cCard${k + 1}`);
                newDiv.setAttribute('style', 'background: white; height: 200px; width: 150px;');
                topCards.appendChild(newDiv);
                if (computerCards[k].value == 10 || computerCards[k].value == 1) {
                    newDiv.innerHTML = `${computerCards[k].face}` + symbol;
                } else {
                    newDiv.innerHTML = `${computerCards[k].value}` + symbol;
                }
                ++k;
            } else {
                break;
            }
        } else {
            let number = Math.floor((Math.random() * 10) + 1);
            let suite = Math.floor((Math.random() * 4) + 1);
            let symbol = '';
            if (suite == 1) {
                symbol = "\u2660";
            } else if (suite == 2) {
                symbol = "\u2665";
            } else if (suite == 3) {
                symbol = "\u2666";
            } else {
                symbol = "\u2663";
            }
            if (number == 1) {
                computerCards[k] = {value: number, suite: suite, face: "A"};
            } else if (number == 10) {
                let face = Math.floor((Math.random() * 4) + 1);
                if (face == 1) {
                    faceSymbol = "K";
                } else if (face == 2) {
                    faceSymbol = "Q";
                } else if (face == 3) {
                    faceSymbol = "J";
                } else {
                    faceSymbol = "10";
                }
                computerCards[k] = {value: number, suite: suite, face: faceSymbol};
            } else {
                computerCards[k] = {value: number, suite: suite};
            }
            computerSum = computerSum + computerCards[k].value;
            const newDiv = document.createElement("div");
            newDiv.className = "displayCards";
            newDiv.setAttribute('id', `cCard${k + 1}`);
            newDiv.setAttribute('style', 'background: white; height: 200px; width: 150px;');
            topCards.appendChild(newDiv);
            if (computerCards[k].value == 10 || computerCards[k].value == 1) {
                newDiv.innerHTML = `${computerCards[k].face}` + symbol;
            } else {
                newDiv.innerHTML = `${computerCards[k].value}` + symbol;
            }
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
            let symbol = '';
            if (suite == 1) {
                symbol = "\u2660";
            } else if (suite == 2) {
                symbol = "\u2665";
            } else if (suite == 3) {
                symbol = "\u2666";
            } else {
                symbol = "\u2663";
            }
            if (number == 1) {
                playerCards[0] = {value: number, suite: suite, face: "A"};
            } else if (number == 10) {
                let face = Math.floor((Math.random() * 4) + 1);
                let faceSymbol = "";
                if (face == 1) {
                    faceSymbol = "K";
                } else if (face == 2) {
                    faceSymbol = "Q";
                } else if (face == 3) {
                    faceSymbol = "J";
                } else {
                    faceSymbol = "10";
                }
                playerCards[0] = {value: number, suite: suite, face: faceSymbol};
            } else {
                playerCards[0] = {value: number, suite: suite};
            }
            const pCard1 = document.getElementById('pCard1');
            if (playerCards[0].value == 10 || playerCards[0].value == 1) {
                pCard1.innerHTML = `${playerCards[0].face}` + symbol;
            } else {
                pCard1.innerHTML = `${playerCards[0].value}` + symbol;
            }
        } else if (i == 1) {
            let number = Math.floor((Math.random() * 10) + 1);
            let suite = Math.floor((Math.random() * 4) + 1);
            let symbol = '';
            if (suite == 1) {
                symbol = "\u2660";
            } else if (suite == 2) {
                symbol = "\u2665";
            } else if (suite == 3) {
                symbol = "\u2666";
            } else {
                symbol = "\u2663";
            }
            if (number == 1) {
                computerCards[0] = {value: number, suite: suite, face: "A"};
            } else if (number == 10) {
                let face = Math.floor((Math.random() * 4) + 1);
                let faceSymbol = "";
                if (face == 1) {
                    faceSymbol = "K";
                } else if (face == 2) {
                    faceSymbol = "Q";
                } else if (face == 3) {
                    faceSymbol = "J";
                } else {
                    faceSymbol = "10";
                }
                computerCards[0] = {value: number, suite: suite, face: faceSymbol};
            } else {
                computerCards[0] = {value: number, suite: suite};
            }
            const cCard1 = document.getElementById('cCard1');
            if (computerCards[0].value == 10 || computerCards[0].value == 1) {
                cCard1.innerHTML = `${computerCards[0].face}` + symbol;
            } else {
                cCard1.innerHTML = `${computerCards[0].value}` + symbol;
            }
        } else if (i == 2) {
            let number = Math.floor((Math.random() * 10) + 1);
            let suite = Math.floor((Math.random() * 4) + 1);
            let symbol = '';
            if (suite == 1) {
                symbol = "\u2660";
            } else if (suite == 2) {
                symbol = "\u2665";
            } else if (suite == 3) {
                symbol = "\u2666";
            } else {
                symbol = "\u2663";
            }
            if (number == 1) {
                playerCards[1] = {value: number, suite: suite, face: "A"};
            } else if (number == 10) {
                let face = Math.floor((Math.random() * 4) + 1);
                let faceSymbol = "";
                if (face == 1) {
                    faceSymbol = "K";
                } else if (face == 2) {
                    faceSymbol = "Q";
                } else if (face == 3) {
                    faceSymbol = "J";
                } else {
                    faceSymbol = "10";
                }
                playerCards[1] = {value: number, suite: suite, face: faceSymbol};
            } else {
                playerCards[1] = {value: number, suite: suite};
            }
            const pCard2 = document.getElementById('pCard2');
            if (playerCards[1].value == 10 || playerCards[1].value == 1) {
                pCard2.innerHTML = `${playerCards[1].face}` + symbol;
            } else {
                pCard2.innerHTML = `${playerCards[1].value}` + symbol;
            }
        } else {
            let number = Math.floor((Math.random() * 10) + 1);
            let suite = Math.floor((Math.random() * 4) + 1);
            let symbol = '';
            if (suite == 1) {
                symbol = "\u2660";
            } else if (suite == 2) {
                symbol = "\u2665";
            } else if (suite == 3) {
                symbol = "\u2666";
            } else {
                symbol = "\u2663";
            }
            if (number == 1) {
                computerCards[1] = {value: number, suite: suite, face: "A"};
            } else if (number == 10) {
                let face = Math.floor((Math.random() * 4) + 1);
                let faceSymbol = "";
                if (face == 1) {
                    faceSymbol = "K";
                } else if (face == 2) {
                    faceSymbol = "Q";
                } else if (face == 3) {
                    faceSymbol = "J";
                } else {
                    faceSymbol = "10";
                }
                computerCards[1] = {value: number, suite: suite, face: faceSymbol};
            } else {
                computerCards[1] = {value: number, suite: suite};
            }
            const cCard2 = document.getElementById('cCard2');
            if (computerCards[1].value == 10 || computerCards[1].value == 1) {
                cCard2.innerHTML = `${computerCards[1].face}` + symbol;
            } else {
                cCard2.innerHTML = `${computerCards[1].value}` + symbol;
            }
        }
    }
    console.log(playerCards[0]);
    console.log(playerCards[1]);
    console.log(computerCards[0]);
    console.log(computerCards[1]);
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
    console.log(playerTotal);
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
    console.log(computerTotal);
    if (computerTotal == playerTotal) {
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
