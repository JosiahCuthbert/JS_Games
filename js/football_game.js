"use strict";

// $("h1").click((event) => {
//     $(event.currentTarget).css("color", "orange");
// });

//players object

let icons = [
    {
        image: $("#football-icon").get(0),
        xEQ: -10,
        yEQ: -20
    },
    {
        image: $("#test").get(0),
        xEQ: 0,
        yEQ: 0
    }
]

let players = [
    {
        name: "Joe",
        playerImage: $("#joe-image").get(0),
        possession: false,
        X: null,
        Y: null,
        xEQ: ($("#joe-image").get(0).width/2)+3,
        yEQ: ($("#joe-image").get(0).height/2),
        tacklingArea: 15,
        speed: 5,
        agility: 5,
        score: 0
    },
    {
        name: "Dak",
        playerImage: $("#dak-image").get(0),
        possession: false,
        X: null,
        Y: null,
        xEQ: ($("#dak-image").get(0).width/2),
        yEQ: ($("#dak-image").get(0).height/2)-18,
        tacklingArea: 10,
        speed: 5,
        agility: 5,
        score: 0
    }
]



let down;
let half;
let locked = false;


// const incrementPos = (speed) => {
//     player2.Y+=speed;
// }
//
// const decrementPos = (speed) => {
//     player2.Y-=speed;
// }

const controller = {
    87: {pressed: false, func: function(){
            player2.Y-=player2.agility;
        }},
    83: {pressed: false, func: function(){
            player2.Y+=player2.agility
        }},
    65: {pressed: false, func: function(){
            player2.X-=player2.speed
        }},
    68: {pressed: false, func: function(){
            player2.X+=player2.speed
        }},
    38: {pressed: false, func: function(){
            player1.Y-=player1.agility
        }},
    40: {pressed: false, func: function(){
            player1.Y+=player1.agility
        }},
    37: {pressed: false, func: function(){
            player1.X-=player1.speed
        }},
    39: {pressed: false, func: function(){
            player1.X+=player1.speed
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
    if(locked === false){
        Object.keys(controller).forEach(key=> {
            controller[key].pressed && controller[key].func()
        })
    }

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

// movement(1);
//note: changing player order determines which player renders on top of other
let player1 = players[0];
let player2 = players[1];

let possessionSetter = (half) => {

    if(player1.possession === false && player2.possession === false){
        if(half === 1){
            player1.possession = true;
        }   if(half === 2){
            player2.possession = true;
        }   else{
            player1.possession = true;
        }

    }
}

possessionSetter();

//initial call to draw the field and create the players
window.onload = () => {
    console.log("hello from football game");
    footballField = $("#football-field").get(0);
    fieldContext = footballField.getContext("2d");
    window.requestAnimationFrame(drawField);
    $("#p1-name").text(player1.name);
    $("#p2-name").text(player2.name);
    $("#p1-score").text(player1.score)
    $("#p2-score").text(player2.score)
}

const scoreboard = () => {
    $("#p1-name").text(player1.name);
    $("#p2-name").text(player2.name);
    $("#p1-score").text(player1.score)
    $("#p2-score").text(player2.score)
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

    gameStructure();

    p1Tackle();
    p2Tackle();
    touchdown();

    scoreboard();

    drawPlayers(player1, player2, icons[0]);

    window.requestAnimationFrame(drawField)
}



let drawPlayers = (playerA, playerB, football) => {
    if(playerA.possession === true){
        fieldContext.drawImage(playerA.playerImage, playerA.X - playerA.xEQ, playerA.Y - playerA.yEQ);
        fieldContext.drawImage(football.image, playerA.X - football.xEQ, playerA.Y - football.yEQ);
        fieldContext.drawImage(playerB.playerImage, playerB.X - playerB.xEQ, playerB.Y - playerB.yEQ);
        //testing eq
        // fieldContext.drawImage(football.image, playerB.X - football.xEQ, playerB.Y - football.yEQ);
    }
    if(playerB.possession === true){
        fieldContext.drawImage(playerB.playerImage, playerB.X - playerB.xEQ, playerB.Y - playerB.yEQ);
        fieldContext.drawImage(football.image, playerB.X - football.xEQ, playerB.Y - football.yEQ);
        fieldContext.drawImage(playerA.playerImage, playerA.X - playerA.xEQ, playerA.Y - playerA.yEQ);
    }
}

const newSetOfDowns = () => {
    down = 1;
    if (player1.possession) {
        player1.X = 250;
        player1.Y = (footballField.height / 2);
        player2.X = player1.X + 250;
        player2.Y = (footballField.height / 2);
    }
    if (player2.possession) {
        player2.X = footballField.width - 250;
        player2.Y = (footballField.height / 2);
        player1.X = player2.X - 250;
        player1.Y = (footballField.height / 2);
    }
}

const gameStructure = () => {
    if(player1.X == null && player2.X == null && player2.Y == null && player2.Y == null){
        newSetOfDowns();
    }


}

const p1Tackle = () => {

    if (!player1.possession && player2.X >= player1.X - player1.tacklingArea && player2.X <= player1.X + player1.tacklingArea && player2.Y >= player1.Y - player1.tacklingArea && player2.Y <= player1.Y + player1.tacklingArea) {
        console.log("p1 tackle")
    }
}

const p2Tackle = () => {

    if(!player2.possession && player1.X >= player2.X-player2.tacklingArea  && player1.X <= player2.X+player2.tacklingArea  && player1.Y >= player2.Y-player2.tacklingArea  && player1.Y <= player2.Y+player2.tacklingArea){
        console.log("p2 tackle")
        player1.Y = footballField.height/2;
        player2.Y = footballField.height/2;
        player2.X = player1.X + 250
    }
}

// console.log(footballField.length - 150);

// const p1Touchdown = () => {
//
// }



const touchdown = () => {
    if(player2.possession && player2.X < 150){
        console.log("p2 touchdown");
        player2.score+=7;
        player2.possession = false;
        player1.possession = true;
        locked = true;
        newSetOfDowns();
        downSetHut()



        setTimeout(function(){
            locked = false;
        }, 3000)
    }
    if(player1.possession && player1.X > 1250){
        console.log("p1 touchdown");
        player1.score+=7;
        player1.possession = false;
        player2.possession = true;
        locked = true;
        newSetOfDowns()
        downSetHut()

    }
}

const downSetHut = () => {
   $("#instruction").text("Press spacebar to play the next down")
   $(window).keydown(function(event){
        if(event.which == "32"){
            setTimeout(function(){
                $("#instruction").text("Down...")
            }, 0);
            setTimeout(function(){
                $("#instruction").text("Set...")
            }, 1000);
            setTimeout(function(){
                $("#instruction").text("Hut!")
                locked = false;
            }, 2000);
            setTimeout(function(){
                $("#instruction").text("")
            }, 3000);
            $(window).off()
        }
    })

}







// const playerStart = (player) => {
//     if(player.possession === true){
//         player.X = 200;
//         player.Y = 500;
//     }   else if(player.possession === false){
//         player.X = 400;
//         player.Y = 500;
//     }
// }

// fieldContext.drawImage(footballIcon, player.X - playerPosXEQ(player), p1Y - playerPosYEQ(player));
// let drawPlayer2 = (player) => {
//     fieldContext.drawImage(player.playerImage, player2.X - playerPosXEQ(player), p2Y - playerPosYEQ(player));
//     fieldContext.drawImage(footballIcon, p2X, p2Y);
//
// }


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
//
// let keys = [];
//
// // let movementY = (speed) => {
// //     $( document).keydown((e) => {
// //         keys[e.which] = true;
// //         console.log("p2Y: " + (p2Y));
// //         console.log("p2X: " + (p2X));
// //         console.log("p1Y: " + (p1Y));
// //         console.log("p1X: " + (p1X));
// //         if((p2Y === p1Y) && (p1X === p2X)){
// //             console.log("tackle");
// //         }
// //         // console.log(keys.length);
// //         //up
// //         if(e.keyCode == 87){
// //             p2Y-=speed;
// //             console.log(speed);
// //         }
// //         //down
// //         if(e.keyCode == 83){
// //             console.log(speed);
// //             p2Y+=speed;
// //         }
// //         //right
// //         if(e.keyCode == 65){
// //             console.log(speed);
// //             p2X-=speed;
// //         }
// //         // left
// //         if(e.keyCode == 68){
// //             console.log(speed);
// //             p2X+=speed;
// //         }
// //
// //         //up
// //         if(e.keyCode == 38){
// //             p1Y-=speed;
// //             console.log(speed);
// //         }
// //         //down
// //         if(e.keyCode == 40){
// //             console.log(speed);
// //             p1Y+=speed;
// //         }
// //         //right
// //         if(e.keyCode == 37){
// //             console.log(speed);
// //             p1X-=speed;
// //         }
// //         // left
// //         if(e.keyCode == 39){
// //             console.log(speed);
// //             p1X+=speed;
// //         }
// //     })
// // }

// let playerPosXEQ = (player) => {
//     return player.playerImage.width/2;
// }
//
// let playerPosYEQ = (player) => {
//     return player.playerImage.height/2;
// }