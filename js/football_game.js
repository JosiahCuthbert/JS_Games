"use strict";

// $("h1").click((event) => {
//     $(event.currentTarget).css("color", "orange");
// });

//players object
let players = [
    {
        name: "Joe",
        playerImage: $("#joe-image").get(0)
    },
    {
        name: "Kirsten",
        playerImage: $("#kirsten").get(0)
    },
    {
        name: "Dak",
        playerImage: $("#dak-image").get(0)
    }
]

let playerPosXEQ = (player) => {
    return player.playerImage.width/2;
}

let playerPosYEQ = (player) => {
    return player.playerImage.height/2;
}

// let keys = [];

// let movementY = (speed) => {
//     $( document).keydown((e) => {
//         keys[e.which] = true;
//         console.log("p2Y: " + (p2Y));
//         console.log("p2X: " + (p2X));
//         console.log("p1Y: " + (p1Y));
//         console.log("p1X: " + (p1X));
//         if((p2Y === p1Y) && (p1X === p2X)){
//             console.log("tackle");
//         }
//         // console.log(keys.length);
//         //up
//         if(e.keyCode == 87){
//             p2Y-=speed;
//             console.log(speed);
//         }
//         //down
//         if(e.keyCode == 83){
//             console.log(speed);
//             p2Y+=speed;
//         }
//         //right
//         if(e.keyCode == 65){
//             console.log(speed);
//             p2X-=speed;
//         }
//         // left
//         if(e.keyCode == 68){
//             console.log(speed);
//             p2X+=speed;
//         }
//
//         //up
//         if(e.keyCode == 38){
//             p1Y-=speed;
//             console.log(speed);
//         }
//         //down
//         if(e.keyCode == 40){
//             console.log(speed);
//             p1Y+=speed;
//         }
//         //right
//         if(e.keyCode == 37){
//             console.log(speed);
//             p1X-=speed;
//         }
//         // left
//         if(e.keyCode == 39){
//             console.log(speed);
//             p1X+=speed;
//         }
//     })
// }

let p1X = 30;
let p1Y = 400;
let p2X = 30;
let p2Y = 100;

let speed = 5;

const incrementPos = (speed) => {
    p2Y+=speed;
}

const decrementPos = (speed) => {
    p2Y-=speed;
}

const controller = {
    //p2Y
    87: {pressed: false, func: function(){
            p2Y-=speed;
        }},
    83: {pressed: false, func: function(){
            p2Y+=speed
        }},
    //p2X
    65: {pressed: false, func: function(){
            p2X-=speed
        }},
    68: {pressed: false, func: function(){
        p2X+=speed
        }},
    //p1Y
    38: {pressed: false, func: function(){
        p1Y-=speed
        }},
    40: {pressed: false, func: function(){
        p1Y+=speed
        }},
    //p1X
    37: {pressed: false, func: function(){
        p1X-=speed
        }},
    39: {pressed: false, func: function(){
        p1X+=speed
        }}
}



document.addEventListener("keydown", (e) => {
    if(controller[e.keyCode]){
        controller[e.keyCode].pressed = true
    }
})

document.addEventListener("keyup", (e) => {
    if(controller[e.keyCode]){
        controller[e.keyCode].pressed = false
    }
})

const executeMoves = () => {
    Object.keys(controller).forEach(key=> {
        controller[key].pressed && controller[key].func()
    })
}

// let keyControl = () => {
//     $(document).keyup((e) => {
//         delete keys[e.which];
//     })
//
// }

//players and fieldcontext declared
let footballField;
let fieldContext;

//note: changing player order determines which player renders on top of other
let player2 = players[2];
let player1 = players[0];
// movement(1);

//initial call to draw the field and create the players
window.onload = () => {
    console.log("hello from football game");
    footballField = $("#football-field").get(0);
    fieldContext = footballField.getContext("2d");
    // movementX(3);
    // movementY(10);
    // keyControl();

    window.requestAnimationFrame(drawField);
    $("#p1-name").text(player1.name);
    $("#p2-name").text(player2.name);
}



let drawField = () => {
    //field
    fieldContext.fillStyle = "green";
    fieldContext.fillRect(0,0,footballField.width, footballField.height)
    //p1 endzone
    fieldContext.fillStyle = "red";
    fieldContext.fillRect(0,0,150, footballField.height)
    fieldContext.fillStyle = "white"
    fieldContext.fillRect(150,0,5, footballField.height)
    //p2 endzone
    fieldContext.fillStyle = "blue"
    fieldContext.fillRect(footballField.width-150,0,150, footballField.height)
    fieldContext.fillStyle = "white"
    fieldContext.fillRect(footballField.width-155,0,5, footballField.height)
    //midfield
    // fieldContext.fillStyle = "white"
    // fieldContext.fillRect(footballField.width/2,0,5, footballField.height)

    executeMoves();


    drawPlayer2(player2);
    drawPlayer1(player1);

    window.requestAnimationFrame(drawField)
}



let drawPlayer1 = (player) => {
    fieldContext.drawImage(player.playerImage, p1X - playerPosXEQ(player), p1Y - playerPosYEQ(player));
}

let drawPlayer2 = (player) => {
    fieldContext.drawImage(player.playerImage, p2X - playerPosXEQ(player), p2Y - playerPosYEQ(player));
}


// let p2YEQ = p2Y - playerPosYEQ(player2);
// let p2XEQ = p2X - playerPosXEQ(player2);
// let p1XEQ = p1X - playerPosXEQ(player1);
// let p1YEQ = p1Y - playerPosYEQ(player1);

// let drawPlayer1 = (player) => {
//     fieldContext.drawImage(player.playerImage, p1XEQ, p1YEQ);
//     // console.log(p1Y);
// }
//
// let drawPlayer2 = (player) => {
//     fieldContext.drawImage(player.playerImage, p2XEQ, p2YEQ);
// }
//not working
// let tackle = (range) => {
//     if(((p2X - playerPosXEQ(player2) <= p1X - playerPosXEQ(player1) + range) && (p2X - playerPosXEQ(player2) >= p1X - playerPosXEQ(player1) - range)) && ((p2Y - playerPosYEQ(player2) <= p1Y - playerPosYEQ(player1) + range) && (p2Y - playerPosYEQ(player2) >= p1Y - playerPosYEQ(player1) - range))){
//         console.log("tackle");
//     }
// }

// let tackle = () => {
//
// }
//
// const movementX = (speed) => {
//     $(document).keydown((e) => {
//         console.log(event.keyCode);
//
//     })
// }

// const movement = (speed) => {
//     $("document").keypress((event) => {
//         console.log(event.keyCode);
//         if(event.keyCode == 119){
//             p2Y-=speed;
//             console.log(speed);
//         }   if(event.keyCode == 115){
//             console.log(speed);
//             p2Y+=speed;
//         }   if(event.keyCode == 150){
//             console.log(speed);
//             p2X-=speed;
//         }   if(event.keyCode == 150){
//             console.log(speed);
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