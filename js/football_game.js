"use strict";

$("h1").click(() => {
    $(event.currentTarget).css("color", "orange");
});

//players object
let players = [
    {
        name: "Joe",
        playerImage: $("#joe-image").get(0)
    },
    {
        name: "Kirsten",
        playerImage: $("#kirsten-image").get(0)
    },
    {
        name: "Dak",
        playerImage: $("#dak-image").get(0)
    }
]

//players declared and field/fieldcontext initialized
let footballField;
let fieldContext;
let player1 = players[0];
let player2 = players[2];

//initial call to draw the field and create the players
window.onload = () => {
    console.log("hello from football game");
    footballField = $("#football-field").get(0);
    fieldContext = footballField.getContext("2d");
    setInterval(drawField,50);
    movement(5);
    $("#player-1").text(player1.name);
    $("#player-2").text(player2.name);
}


const drawField = () => {
    fieldContext.fillStyle = "green";
    fieldContext.fillRect(0,0,footballField.width, footballField.height)
    movement(5);
    drawPlayer1(player1);
    drawPlayer2(player2);
}

let drawPlayer1 = (player) => {
    fieldContext.drawImage(player.playerImage, position, 150);
}

let drawPlayer2 = (player) => {
    fieldContext.drawImage(player.playerImage, position, 50);
}

let position = 30;

let movement = (speed) => {
    position += speed;
    console.log(position);
}

// let player1X = position;
// let player1Y = 50;
//
// let player2X = position;
// let player2Y = 150;





