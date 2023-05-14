var players = 2;
var scores = [];

for (var i=0;i<players;i++) {
    var number = Math.floor((Math.random() * 6) + 1)
    scores.push(number);
    document.getElementsByClassName("dices")[0].getElementsByClassName("dice")[i].getElementsByTagName("img")[0].src = "./images/dice" + number + ".png"
}

var winner = scores.indexOf(Math.max(...scores)) + 1;

if (scores.every( (val, i, arr) => val === arr[0] )) {document.querySelector("h1").innerHTML = "It's a draw!"}
else {document.querySelector("h1").innerHTML = "Player " + winner + " wins!"}