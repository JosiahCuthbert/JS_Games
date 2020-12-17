"use strict";

$("h1").click((event) => {
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

let keys = [];

let movementY = (speed) => {
    $( document).keydown((e) => {
        keys[e.which] = true;
        console.log("p2Y: " + (p2Y - playerPosYEQ(player2)));
        console.log("p2X: " + (p2X - playerPosXEQ(player2)));
        console.log("p1Y: " + (p1Y - playerPosYEQ(player1)));
        console.log("p1X: " + (p1X - playerPosXEQ(player1)));
        console.log(keys.length);
        //up
        if(e.keyCode == 87){
            p2Y-=speed;
            console.log(speed);
        }
        //down
        if(e.keyCode == 83){
            console.log(speed);
            p2Y+=speed;
        }
        //right
        if(e.keyCode == 65){
            console.log(speed);
            p2X-=speed;
        }
        // left
        if(e.keyCode == 68){
            console.log(speed);
            p2X+=speed;
        }
    })
}

let keyControl = () => {
    $(document).keyup((e) => {
        delete keys[e.which];
    })

}



//
// const movementX = (speed) => {
//     $(document).keydown((e) => {
//         console.log(event.keyCode);
//
//     })
// }

//players declared and field/fieldcontext initialized
let footballField;
let fieldContext;
let player1 = players[0];
let player2 = players[2];
// movement(1);

//initial call to draw the field and create the players
window.onload = () => {
    console.log("hello from football game");
    footballField = $("#football-field").get(0);
    fieldContext = footballField.getContext("2d");
    // movementX(3);
    movementY(10);
    keyControl();
    setInterval(drawField,1);
    tackle(25);
    requestAnimationFrame(drawField);
    $("#player-1").text(player1.name);
    $("#player-2").text(player2.name);
}


const drawField = () => {
    fieldContext.fillStyle = "green";
    fieldContext.fillRect(0,0,footballField.width, footballField.height)
    // movement(1);
    drawPlayer1(player1);
    drawPlayer2(player2);

}

// let drawPlayer1 = (player) => {
//     fieldContext.drawImage(player.playerImage, p1XEQ, p1YEQ);
//     // console.log(p1Y);
// }
//
// let drawPlayer2 = (player) => {
//     fieldContext.drawImage(player.playerImage, p2XEQ, p2YEQ);
// }

let drawPlayer1 = (player) => {
    fieldContext.drawImage(player.playerImage, p1X - playerPosXEQ(player), p1Y - playerPosYEQ(player));
    // console.log(p1Y);
}

let drawPlayer2 = (player) => {
    fieldContext.drawImage(player.playerImage, p2X - playerPosXEQ(player), p2Y - playerPosYEQ(player));
}

//try calculating X/Y with half of img width and height to get img center value

let p1X = 30;
// let p1XEQ = p1X - playerPosXEQ(player1);

let p1Y = 100;
// let p1YEQ = p1Y - playerPosYEQ(player1);

let p2X = 30;
// let p2XEQ = p2X - playerPosXEQ(player2);

let p2Y = 100;
// let p2YEQ = p2Y - playerPosYEQ(player2);


//not working
const tackle = (range) => {
    if(((p2X - playerPosXEQ(player2) >= p1X - playerPosXEQ(player1) + range) && (p2X - playerPosXEQ(player2) >= p1X - playerPosXEQ(player1) - range)) && ((p2Y - playerPosYEQ(player2) >= p1Y - playerPosYEQ(player1) + range) && (p2Y - playerPosYEQ(player2) >= p1Y - playerPosYEQ(player1) - range))){
        console.log("tackle");
    }
}


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