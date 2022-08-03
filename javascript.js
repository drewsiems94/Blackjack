
const pot = document.getElementById('pot');
const hit = document.getElementById('hit');
const stay = document.getElementById('stay');
const form = document.querySelector('form');

let playerCards = [];
let computerCards = [];
let deck = [];
let potTotal = 0;
let playerTotal = 0;
let computerTotal = 0;
let computerSum = 0;

let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let suits = ["\u2660", "\u2665", "\u2666", "\u2663"];
for (i = 0; i < values.length; i++) {
    for (j = 0; j < suits.length; j++) {
        if (values[i] == "A") {
            let card = {value: values[i], suit: suits[j], weight: 1};
            deck.push(card);
        } else if (values[i] == "J" || values[i] == "Q" || values[i] == "K") {
            let card = {value: values[i], suit: suits[j], weight: 10};
            deck.push(card)
        } else {
            let card = {value: values[i], suit: suits[j], weight: parseInt(values[i])};
            deck.push(card);
        }
    }
}


//When the user enters a bet and presses enter, display the pot and deal the cards
pot.addEventListener('keypress', function (e) {
    if (e.code === "Enter") {
        e.preventDefault();
        e.stopPropagation();
        potTotal = Number(e.target.value) * 2;
        pot.disabled = true;
        form.setAttribute('style', 'font-family: Georgia, "Times New Roman", Times, serif; font-size: 30px;');
        form.innerHTML = `The pot is $${potTotal}`;
        shuffle(deck);
        dealCards();
    }
})

//When the user hits the "hit" button, deal a new card
let x = 2;
hit.addEventListener('click', function hitPlayer () {
    playerCards[x] = deck[deck.length - 1];
    const pCard1 = document.getElementById('pCard1');
    deck.pop();
    const newDiv = document.createElement("div");
    newDiv.className = "displayCards";
    newDiv.setAttribute('id', `pCard${x + 1}`);
    newDiv.setAttribute('style', 'background: white; height: 200px; width: 150px;');
    bottomCards.appendChild(newDiv);
    newDiv.innerHTML = `${playerCards[x].value}` + " " + `${playerCards[x].suit}`;
    ++x;
});

//Whent he user decides to stay, tun the computer's strategy
//Will hit until 17
let k = 2;
stay.addEventListener('click', function computerPlay () {
    computerSum = computerCards[0].weight + computerCards[1].weight;
    while (computerSum < 17) {
        if (computerCards[0].weight == 1 && computerCards[1].weight == 1) {
            computerCards[k] = deck[deck.length - 1];
            deck.pop();
            computerSum = computerSum + computerCards[k].weight;
            const newDiv = document.createElement("div");
            newDiv.className = "displayCards";
            newDiv.setAttribute('id', `cCard${k + 1}`);
            newDiv.setAttribute('style', 'background: white; height: 200px; width: 150px;');
            topCards.appendChild(newDiv);
            newDiv.innerHTML = `${computerCards[k].value}` + " " + `${computerCards[k].suit}`;
            ++k;
        } else if (computerCards[0].weight == 1) {
            if (computerCards[1].weight + 1 < 17 && computerCards[1].weight + 11 < 17) {
                computerCards[k] = deck[deck.length - 1];
                deck.pop();
                computerSum = computerSum + computerCards[k].weight;
                const newDiv = document.createElement("div");
                newDiv.className = "displayCards";
                newDiv.setAttribute('id', `cCard${k + 1}`);
                newDiv.setAttribute('style', 'background: white; height: 200px; width: 150px;');
                topCards.appendChild(newDiv);
                newDiv.innerHTML = `${computerCards[k].value}` + " " + `${computerCards[k].suit}`;
                ++k;
            } else {
                break;
            }
        } else if (computerCards[1].weight == 1) {
            if (computerCards[0].weight + 1 < 17 && computerCards[0].weight + 11 < 17) {
                computerCards[k] = deck[deck.length - 1];
                deck.pop();
                computerSum = computerSum + computerCards[k].weight;
                const newDiv = document.createElement("div");
                newDiv.className = "displayCards";
                newDiv.setAttribute('id', `cCard${k + 1}`);
                newDiv.setAttribute('style', 'background: white; height: 200px; width: 150px;');
                topCards.appendChild(newDiv);
                newDiv.innerHTML = `${computerCards[k].value}` + " " + `${computerCards[k].suit}`;
                ++k;
            } else {
                break;
            }
        } else {
            computerCards[k] = deck[deck.length - 1];
            deck.pop();
            computerSum = computerSum + computerCards[k].weight;
            const newDiv = document.createElement("div");
            newDiv.className = "displayCards";
            newDiv.setAttribute('id', `cCard${k + 1}`);
            newDiv.setAttribute('style', 'background: white; height: 200px; width: 150px;');
            topCards.appendChild(newDiv);
            newDiv.innerHTML = `${computerCards[k].value}` + " " + `${computerCards[k].suit}`;
            ++k;
        }
    }
    checkWinner(playerCards, computerCards);
})

function dealCards() {
    playerCards[0] = deck[deck.length - 1];
    const pCard1 = document.getElementById('pCard1');
    pCard1.innerHTML = `${playerCards[0].value}` + " " + `${playerCards[0].suit}`;
    deck.pop();
    
    computerCards[0] = deck[deck.length - 1];
    const cCard1 = document.getElementById('cCard1');
    cCard1.innerHTML = `${computerCards[0].value}` + " " + `${computerCards[0].suit}`;
    deck.pop();

    playerCards[1] = deck[deck.length - 1];   
    const pCard2 = document.getElementById('pCard2');   
    pCard2.innerHTML = `${playerCards[1].value}` + " " + `${playerCards[1].suit}`;
    deck.pop(); 

    computerCards[1] = deck[deck.length - 1];
    const cCard2 = document.getElementById('cCard2');
    cCard2.innerHTML = `${computerCards[1].value}` + " " + `${computerCards[1].suit}`;
    deck.pop();
}

function checkWinner(player, computer) {
    const ace = (card) => card.weight == 1;
    if (!playerCards.some(ace)) {
        for (n = 0; n < playerCards.length; n++) {
            playerTotal = playerTotal + playerCards[n].weight;
        }
    } else {
        for (n = 0; n < playerCards.length; n++) {
            playerTotal = playerTotal + playerCards[n].weight;
        }
        let highTotal = (playerTotal - 1) + 11;
        if (highTotal <= 21) {
            playerTotal = highTotal
        } 
    }
    console.log(playerTotal);
    if (!computerCards.some(ace)) {
        for (n = 0; n < computerCards.length; n++) {
            computerTotal = computerTotal + computerCards[n].weight;
        }
    } else {
        for (n = 0; n < computerCards.length; n++) {
            computerTotal = computerTotal + computerCards[n].weight;
        }
        let highTotal = (computerTotal - 1) + 11;
        if (highTotal <= 21) {
            computerTotal = highTotal
        } 
    }
    console.log(computerTotal);
    if (computerTotal == playerTotal) {
        alert("It is a tie.");
    } else if (computerTotal > 21 && playerTotal > 21) {
        alert("It is a tie.");
    } else if (playerTotal <= 21 && computerTotal > 21) {
        alert("You win!");
    } else if (playerTotal > 21 && computerTotal <= 21) {
        alert("You lose.");
    } else if (playerTotal <= 21 && computerTotal <= 21 && playerTotal > computerTotal) {
        alert("You win!");
    } else {
        alert("You lose.");
    }
}

function shuffle(arr) {
    for (i = 0; i < 500; i++) {
        let position1 = Math.floor(Math.random() * 52);
        let position2 = Math.floor(Math.random() * 52);
        let placeHolder = arr[position1];

        arr[position1] = arr[position2];
        arr[position2] = placeHolder;
    }
    return arr;
}
