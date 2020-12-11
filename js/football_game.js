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
    requestAnimationFrame(drawField);
    movement(1);
    $("#player-1").text(player1.name);
    $("#player-2").text(player2.name);
}


const drawField = () => {
    fieldContext.fillStyle = "green";
    fieldContext.fillRect(0,0,footballField.width, footballField.height)
    movement(1);
    drawPlayer1(player1);
    drawPlayer2(player2);

}

let drawPlayer1 = (player) => {
    fieldContext.drawImage(player.playerImage, p1X, p1Y);
    // console.log(p1Y);
}

let drawPlayer2 = (player) => {
    fieldContext.drawImage(player.playerImage, p2X, p2Y);
}

let p2X = 30;

let p1X = 60

let p1Y = 150

let p2Y = 50

// let movement = (speed) => {
//     $("document").key((event) => {
//         console.log(event.keyCode);
//         if(event.keyCode == 119){
//             p2Y-=speed;
//         }   if(event.keyCode == 115){
//             p2Y+=speed;
//         }   if(event.keyCode == 150){
//             p2X-=speed;
//         }   if(event.keyCode == 150){
//             p2X+=speed;
//         }
//     })
// }


// let player1X = position;
// let player1Y = 50;
//
// let player2X = position;
// let player2Y = 150;

// document.addEventListener('keydown', keyDownHandler, false);
// document.addEventListener('keyup', keyUpHandler, false);
//
// let rightPressed = false;
// let leftPressed = false;
// let upPressed = false;
// let downPressed = false;
//
// function keyDownHandler(event) {
//     if(event.keyCode == p1Keys.right) {
//         rightPressed = true;
//         console.log(event);
//     }
//     else if(event.keyCode == p1Keys.left) {
//         leftPressed = true;
//     }
//     if(event.keyCode == p1Keys.down) {
//         downPressed = true;
//     }
//     else if(event.keyCode == p1Keys.up) {
//         upPressed = true;
//     }
// }
//
// // function keyUpHandler(event) {
// //     if(event.keyCode == p1Keys.right) {
// //         rightPressed = false;
// //     }
// //     else if(event.keyCode == p1Keys.left) {
// //         leftPressed = false;
// //     }
// //     if(event.keyCode == p1Keys.down) {
// //         downPressed = false;
// //     }
// //     else if(event.keyCode == p1Keys.up) {
// //         upPressed = false;
// //     }
// // }
//
// let p1Keys = { left: 37, up: 38, right: 39, down: 40 };
// let p2Keys = { left: 150, up: 119, right: 100, down: 115 };