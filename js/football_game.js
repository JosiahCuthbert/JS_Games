"use strict";

//players object

let icons = [
    {
        image: $("#football-icon").get(0),
        xEQ: -20,
        yEQ: -35
    },
    {
        image: $("#test").get(0),
        xEQ: 0,
        yEQ: 0
    },
    {
        image: $("#cowboys").get(0),
        xEQ: 95,
        yEQ: 110
    }
]

let players = [
    {
        id: 1,
        name: "Joe",
        playerImage: $("#joe-image").get(0),
        possession: false,
        X: null,
        Y: null,
        xEQ: ($("#joe-image").get(0).width/2)+3,
        yEQ: ($("#joe-image").get(0).height/2),
        tacklingArea: 60,
        speed: 4,
        agility: 3.5,
        score: 0,
        timeouts: 2,
        stamina: 5,
        offense: 1.0,
        defense: 1.2,
        bio: "Joe's best days of playing football may be behind him, but that doesn't mean he's still not a threat on the field. With solid all-around stats and an aggressive style of play, he can be tough to handle in many situations."
    },
    {
        id: 2,
        name: "Dak",
        playerImage: $("#dak-image").get(0),
        possession: false,
        X: null,
        Y: null,
        xEQ: ($("#dak-image").get(0).width/2),
        yEQ: ($("#dak-image").get(0).height/2),
        tacklingArea: 100,
        speed: 8,
        agility: 8,
        score: 0,
        timeouts: 2,
        stamina: 5,
        offense: 1.3,
        defense: 1.4,
        bio: "Dak Prescott is the current QB for the Dallas Cowboys. He is not only one of the best QBs in the league but also has perhaps the more important honor of being one of Cade Humphrey's favorite football players. Although he's coming off a severe injury, you can't deny his incredible talent."
    },
    {
        id: 3,
        name: "RaRa",
        playerImage: $("#rara-image").get(0),
        possession: false,
        X: null,
        Y: null,
        xEQ: ($("#rara-image").get(0).width/2)-5,
        yEQ: ($("#rara-image").get(0).height/2)+5,
        tacklingArea: 50,
        speed: 4,
        agility: 3.5,
        score: 0,
        timeouts: 2,
        stamina: 5,
        offense: 1.0,
        defense: 1.2,
        bio: "RaRa may not be well known as a football player, but don't let that fool you. Her desire to win and underrated football knowledge make her an opponent you do not want to face."
    },
    {
        id: 4,
        name: "Linsay",
        playerImage: $("#linsay-image").get(0),
        possession: false,
        X: null,
        Y: null,
        xEQ: ($("#linsay-image").get(0).width/2),
        yEQ: ($("#linsay-image").get(0).height/2),
        tacklingArea: 50,
        speed: 4,
        agility: 3.5,
        score: 0,
        timeouts: 2,
        stamina: 5,
        offense: 1.0,
        defense: 1.2,
        bio: "You don't raise two football stars in the making without learning a thing or two about the game along the way. Linsay's tackling ability and speed have been honed through hours of chasing down Cade and Cole. This is one mother you don't wanna mess with."
    },
    {
        id: 5,
        name: "Chad",
        playerImage: $("#chad-image").get(0),
        possession: false,
        X: null,
        Y: null,
        xEQ: ($("#chad-image").get(0).width/2)-7,
        yEQ: ($("#chad-image").get(0).height/2),
        tacklingArea: 100,
        speed: 4,
        agility: 3.5,
        score: 0,
        timeouts: 2,
        stamina: 5,
        offense: 1.0,
        defense: 1.2,
        bio: "Chad's incredible tackling ability is simply hard to beat. Armed with distinct physical advantages from his days at Chad Humphrey Fitness™, you would be hard pressed to find a competitor more fierce than Chad."
    },
    {
        id: 6,
        name: "Hannah",
        playerImage: $("#hannah-image").get(0),
        possession: false,
        X: null,
        Y: null,
        xEQ: ($("#hannah-image").get(0).width/2),
        yEQ: ($("#hannah-image").get(0).height/2)-4,
        tacklingArea: 50,
        speed: 4,
        agility: 3.5,
        score: 0,
        timeouts: 2,
        stamina: 5,
        offense: 1.0,
        defense: 1.2,
        bio: "Hannah may be best known for her work in the medical field, but her work on the football field shouldn't go overlooked. An agile "
    },
    {
        id: 7,
        name: "Matt",
        playerImage: $("#matt-image").get(0),
        possession: false,
        X: null,
        Y: null,
        xEQ: ($("#matt-image").get(0).width/2),
        yEQ: ($("#matt-image").get(0).height/2)-25,
        tacklingArea: 50,
        speed: 4,
        agility: 3.5,
        score: 0,
        timeouts: 2,
        stamina: 5,
        offense: 1.0,
        defense: 1.2,
        bio: "Matt's ingenuity and persistence make him a tremendous force on the gridiron. You may know him as \"Long Range\" on the basketball court, and he is also known for his ability to break out for long runs on the football field."
    },
    {
        id: 8,
        name: "Cade",
        playerImage: $("#cade-image").get(0),
        possession: false,
        X: null,
        Y: null,
        xEQ: ($("#cade-image").get(0).width/2)-5,
        yEQ: ($("#cade-image").get(0).height/2)-15,
        tacklingArea: 100,
        speed: 8,
        agility: 8,
        score: 0,
        timeouts: 2,
        stamina: 5,
        offense: 1.2,
        defense: 1.5,
        bio: "Cade Humphrey's love of the game is second to none. He lives football, he breathes football, he sleeps football, and you can bet he plays football too. Cade's potential on the field is so great that we may one day have the pleasure of watching him play for the Dallas Cowboys."
    },
    {
        id: 9,
        name: "Cole",
        playerImage: $("#cole-image").get(0),
        possession: false,
        X: null,
        Y: null,
        xEQ: ($("#cole-image").get(0).width/2),
        yEQ: ($("#cole-image").get(0).height/2)-15,
        tacklingArea: 100,
        speed: 10,
        agility: 10,
        score: 0,
        timeouts: 2,
        stamina: 5,
        offense: 1.5,
        defense: 1.7,
        bio: "Cole may be a bit wild at times but his unatched athleticism and motor make him an extremely worthy opponent. His reckless style of play makes him extremely unpredictable."
    },
    {
        id: 10,
        name: "Pop",
        playerImage: $("#pop-image").get(0),
        possession: false,
        X: null,
        Y: null,
        xEQ: ($("#pop-image").get(0).width/2),
        yEQ: ($("#pop-image").get(0).height/2),
        tacklingArea: 50,
        speed: 4,
        agility: 3.5,
        score: 0,
        timeouts: 2,
        stamina: 5,
        offense: 1.0,
        defense: 1.2,
        bio: "What first comes to mind when thinking of Pop is how old and bald he is. However, it is often overlooked how slow he is as well. Perhaps his wit will save him on the gridiron? It seems unlikely."
    },
    {
        id: 11,
        name: "Jill",
        playerImage: $("#jill-image").get(0),
        possession: false,
        X: null,
        Y: null,
        xEQ: ($("#jill-image").get(0).width/2)-5,
        yEQ: ($("#jill-image").get(0).height/2),
        tacklingArea: 50,
        speed: 4,
        agility: 3.5,
        score: 0,
        timeouts: 2,
        stamina: 5,
        offense: 1.0,
        defense: 1.2,
        bio: "bio"
    },
    {
        id: 12,
        name: "Pierson",
        playerImage: $("#pierson-image").get(0),
        possession: false,
        X: null,
        Y: null,
        xEQ: ($("#pierson-image").get(0).width/2)-9,
        yEQ: ($("#pierson-image").get(0).height/2)-15,
        tacklingArea: 100,
        speed: 4,
        agility: 3.5,
        score: 0,
        timeouts: 2,
        stamina: 5,
        offense: 1.0,
        defense: 1.2,
        bio: "bio"
    },
    {
        id: 13,
        name: "Lexie",
        playerImage: $("#lexie-image").get(0),
        possession: false,
        X: null,
        Y: null,
        xEQ: ($("#lexie-image").get(0).width/2)-8,
        yEQ: ($("#lexie-image").get(0).height/2)-5,
        tacklingArea: 50,
        speed: 4,
        agility: 3.5,
        score: 0,
        timeouts: 2,
        stamina: 5,
        offense: 1.0,
        defense: 1.2,
        bio: "bio"
    },
    {
        id: 14,
        name: "Dixie",
        playerImage: $("#dixie-image").get(0),
        possession: false,
        X: null,
        Y: null,
        xEQ: ($("#dixie-image").get(0).width/2)-5,
        yEQ: ($("#dixie-image").get(0).height/2)-15,
        tacklingArea: 50,
        speed: 4,
        agility: 3.5,
        score: 0,
        timeouts: 2,
        stamina: 5,
        offense: 1.0,
        defense: 1.2,
        bio: "bio"
    },
    {
        id: 15,
        name: "Bailey",
        playerImage: $("#bailey-image").get(0),
        possession: false,
        X: null,
        Y: null,
        xEQ: ($("#bailey-image").get(0).width/2)-5,
        yEQ: ($("#bailey-image").get(0).height/2)-5,
        tacklingArea: 50,
        speed: 4,
        agility: 3.5,
        score: 0,
        timeouts: 2,
        stamina: 5,
        offense: 1.0,
        defense: 1.2,
        bio: "bio"
    },
    {
        id: 16,
        name: "Mema",
        playerImage: $("#mema-image").get(0),
        possession: false,
        X: null,
        Y: null,
        xEQ: ($("#mema-image").get(0).width/2)-5,
        yEQ: ($("#mema-image").get(0).height/2)-20,
        tacklingArea: 50,
        speed: 4,
        agility: 3.5,
        score: 0,
        timeouts: 2,
        stamina: 5,
        offense: 1.0,
        defense: 1.2,
        bio: "bio"
    },
    {
        id: 17,
        name: "Granny",
        playerImage: $("#granny-image").get(0),
        possession: false,
        X: null,
        Y: null,
        xEQ: ($("#granny-image").get(0).width/2)-4,
        yEQ: ($("#granny-image").get(0).height/2),
        tacklingArea: 50,
        speed: 4,
        agility: 3.5,
        score: 0,
        timeouts: 2,
        stamina: 5,
        offense: 1.0,
        defense: 1.2,
        bio: "Granny doesn't mess around when it comes to football. Like the carefully crafted baked goods she is so famous for, Granny's approach on the gridiron is meticulous and refined."
    },
]


let player1;
let player2;
let startingPosition = 250;
let defenderDistance = 180;
// let readyToChooseP1 = false;
// let readyToChooseP2 = false;
let player1Chosen = false;
let player2Chosen = false;
let house;

// let player1 = players[0];
// let player2 = players[8];

// let pause = false;
let down;
let halfStart = true;
let half = 0;
let locked = false;
let paused = false;

const interpretDown = () => {

    if(player1.possession){
        $("#p2-football-icon").css("display", "none");
        $("#p1-football-icon").css("display", "flex");

        // $("#p2-down").innerHTML();
        if(down === 1){
            $(".down").text("1st Down");
        }   if(down === 2){
            $(".down").text("2nd Down");
        }   if(down === 3){
            $(".down").text("3rd Down");
        }   if(down === 4){
            $(".down").text("4th Down");
        }   if(down === 5){
            player1.possession = false;
            player2.possession = true;

            setTimeout(function(){
                $(".down").text("Turnover on downs!");
            }, 2000)
            newSetOfDowns();
        }
    }

    if(player2.possession){
        $("#p1-football-icon").css("display", "none");
        $("#p2-football-icon").css("display", "flex");

        // $("#p1-down").innerHTML();
        if(down === 1){
            $(".down").text("1st Down");
        }   if(down === 2){
            $(".down").text("2nd Down");
        }   if(down === 3){
            $(".down").text("3rd Down");
        }   if(down === 4){
            $(".down").text("4th Down");
        }   if(down === 5){
            player1.possession = true;
            player2.possession = false;
            $(".down").text("Turnover on downs!");
            setTimeout(function(){
                $("#down").text("1st Down");
            }, 2000)
            newSetOfDowns();
        }
    }


}



// const incrementPos = (speed) => {
//     player2.Y+=speed;
// }
//
// const decrementPos = (speed) => {
//     player2.Y-=speed;
// }

const controller = {
    38: {pressed: false, func: function(){
        if(player2.possession === true){
            player2.Y-=player2.agility * player2.offense;
        }   if(player2.possession === false){
            player2.Y-=(player2.agility * player2.defense);
        }
        }},
    40: {pressed: false, func: function(){
            if(player2.possession === true){
            player2.Y+=player2.agility * player2.offense;
        }   if(player2.possession === false){
            player2.Y+=(player2.agility * player2.defense);
        }
        }},
    37: {pressed: false, func: function(){
            if(player2.possession === true){
            player2.X-=player2.speed * player2.offense;
        }   if(player2.possession === false){
            player2.X-=(player2.speed * player2.defense);
        }
        }},
    39: {pressed: false, func: function(){
            if(player2.possession === true){
            player2.X+=player2.speed * player2.offense;
        }   if(player2.possession === false){
            player2.X+=(player2.speed * player2.defense);
        }
        }},
    87: {pressed: false, func: function(){
            if(player1.possession === true){
            player1.Y-=player1.agility * player1.offense;
        }   if(player1.possession === false){
            player1.Y-=(player1.agility * player1.defense);
        }
        }},
    83: {pressed: false, func: function(){
            if(player1.possession === true){
            player1.Y+=player1.agility * player1.offense;
        }   if(player1.possession === false){
            player1.Y+=(player1.agility * player1.defense);
        }
        }},
    65: {pressed: false, func: function(){
            if(player1.possession === true){
            player1.X-=player1.speed * player1.offense;
        }   if(player1.possession === false){
            player1.X-=(player1.speed * player1.defense);
        }
        }},
    68: {pressed: false, func: function(){
            if(player1.possession === true){
            player1.X+=player1.speed * player1.offense;
        }   if(player1.possession === false){
            player1.X+=(player1.speed * player1.defense);
        }
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


let possessionSetter = () => {

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



//initial call to draw the field and create the players
const game = () => {
    console.log("hello from football game");
    footballField = $("#football-field").get(0);
    fieldContext = footballField.getContext("2d");
    window.requestAnimationFrame(drawField);
}

const scoreboard = () => {
    $("#p1-name").text(player1.name);
    $("#p2-name").text(player2.name);
    $("#p1-score").text(player1.score)
    $("#p2-score").text(player2.score)
}


let drawField = () => {
    //field
    fieldContext.fillStyle = "rgb(76,165,81)";
    fieldContext.fillRect(0,0,footballField.width, footballField.height)

    //p1 endzone
    fieldContext.fillStyle = "maroon";
    fieldContext.fillRect(0,0,150, footballField.height)
    fieldContext.fillStyle = "white"
    fieldContext.fillRect(150,0,5, footballField.height)
    //p2 endzone
    fieldContext.fillStyle = "darkblue"
    fieldContext.fillRect(footballField.width-150,0,150, footballField.height)
    fieldContext.fillStyle = "white"
    fieldContext.fillRect(footballField.width-155,0,5, footballField.height)
    //midfield
    // fieldContext.fillStyle = "white"
    // fieldContext.fillRect(footballField.width/2,0,5, footballField.height)


    // ready();

    executeMoves();
    possessionSetter();
    startGame();

    p1Tackle();
    p2Tackle();
    p1OutOfBounds();
    p2OutOfBounds();
    touchdown();

    interpretDown();

    scoreboard();

    drawPlayers(player1, player2, icons[0], icons[2]);

    window.requestAnimationFrame(drawField)
}



let drawPlayers = (playerA, playerB, football, centerField) => {
    fieldContext.drawImage(centerField.image, footballField.width/2-centerField.xEQ, footballField.height/2-centerField.yEQ)
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
        player1.X = startingPosition;
        player1.Y = (footballField.height / 2);
        player2.X = player1.X + defenderDistance;
        player2.Y = (footballField.height / 2);
    }
    if (player2.possession) {
        player2.X = footballField.width - startingPosition;
        player2.Y = (footballField.height / 2);
        player1.X = player2.X - defenderDistance;
        player1.Y = (footballField.height / 2);
    }
}

const startGame = () => {
    if(player1.X == null && player2.X == null && player2.Y == null && player2.Y == null){
        newSetOfDowns();
        downSetHut()
    }


}

const p1Tackle = () => {

    if (!player1.possession && player2.X >= player1.X - player1.tacklingArea && player2.X <= player1.X + player1.tacklingArea && player2.Y >= player1.Y - player1.tacklingArea && player2.Y <= player1.Y + player1.tacklingArea && locked === false) {
        locked = true;
        console.log("p1 tackle")
        down++;
        player2.Y = footballField.height/2;
        player1.Y = footballField.height/2;
        player1.X = player2.X -defenderDistance
        if(down<5){
            $("#instruction").text(player1.name + " tackled " + player2.name + "!");
            setTimeout(function(){
                downSetHut();
            }, 1500)
        }   if(down === 5){
            $("#instruction").text("Turnover on downs by " + player2.name +"!");
            setTimeout(function(){
                downSetHut();
            }, 1500)
        }

    }
}

const p2Tackle = () => {

    if(!player2.possession && player1.X >= player2.X-player2.tacklingArea  && player1.X <= player2.X+player2.tacklingArea  && player1.Y >= player2.Y-player2.tacklingArea  && player1.Y <= player2.Y+player2.tacklingArea && locked === false){
        locked = true;
        console.log("p2 tackle")
        down++;
        player1.Y = footballField.height/2;
        player2.Y = footballField.height/2;
        player2.X = player1.X + defenderDistance
        $("#instruction").text(player2.name + " tackled " + player1.name + "!");
        setTimeout(function(){
            downSetHut();
        }, 1500)
    }
}

const touchdown = () => {
    if(player2.possession && player2.X < 150 && locked === false){
        // console.log("p2 touchdown");
        // player2.score+=7;
        // player2.possession = false;
        // player1.possession = true;
        // newSetOfDowns()
        // downSetHut()

        // player2.position+=100;
        console.log("p2 touchdown");
        player2.score+=7;
        // $("#p2-score").text("+7");
        $("#instruction").text("Touchdown " + player2.name + "!!!");
        locked = true;

        setTimeout(function(){

            // $("#p2-score").text(player2.score);
            player2.possession = false;
            player1.possession = true;
            newSetOfDowns();
            downSetHut()

        }, 3000)

    }
    if(player1.possession && player1.X > 1250 && locked === false){
        // console.log("p1 touchdown");
        // player1.score+=7;
        // player1.possession = false;
        // player2.possession = true;
        // newSetOfDowns()
        // downSetHut()
        // player1.position-=100;
        console.log("p1 touchdown");
        player1.score+=7;
        // $("#p2-score").text("+7");
        $("#instruction").text("Touchdown " + player1.name + "!!!");
        locked = true;

        setTimeout(function(){

            // $("#p2-score").text(player2.score);
            player1.possession = false;
            player2.possession = true;
            newSetOfDowns();
            downSetHut()

        }, 3000)
    }
}


const downSetHut = () => {
    locked = true;
   $("#instruction").text("Press spacebar to play the next down")
   $(window).keydown(function(event){
        if(event.which == "32"){
            if(halfStart === true){
                half++;
                halfStart = false;
                $('#clock').html("2:00");
                countdown();
            }
            setTimeout(function(){
                $("#instruction").text("Down...")
            }, 0);
            setTimeout(function(){
                $("#instruction").text("Set...")
            }, 1000);
            setTimeout(function(){
                $("#instruction").text("Hut!")
                locked = false;
                paused = false;
            }, 2000);
            $(window).off()
            $("#instruction").text();
        }
    })

}

// let timer = 60;
// function onTimer() {
//     $("#clock").text(timer)
//     timer--;
//     if (timer < 0) {
//         alert('end of half');
//     }
//     else {
//         setTimeout(onTimer, 1000);
//     }
// }

let interval;

function countdown() {

    clearInterval(interval);
    interval = setInterval( function() {
        var timer = $("#clock").html();
        timer = timer.split(':');
        var minutes = timer[0];
        var seconds = timer[1];
        if(paused === false){
            seconds -= 1;
        }
        if (minutes < 0) return;
        else if (seconds < 0 && minutes != 0) {
            minutes -= 1;
            seconds = 59;
        }
        else if (seconds < 10 && length.seconds != 2) seconds = '0' + seconds;

        $("#clock").html(minutes + ':' + seconds);

        if (minutes == 0 && seconds == 0){
            clearInterval(interval);
            locked = true;
            halfStart = true;
            half++
            console.log(half);
            player1.X = null;
            player2.X = null;
            player1.Y = null;
            player2.Y = null;
        }
    }, 1000);


}



$("#play-button").click(() => {
    $("#landing-screen").css("display", "none");
    $("#player-selection-window").css("display", "inline");
    $("body").css("background-image", "none");
    $("body").css("background-color", "rgb(76,165,81)");
    if($("#house").val() == "Pop's House"){
        $(".pops-house").css("display", "flex");
        house = ".pops-house"
    }if($("#house").val() == "RaRa's House"){
        $(".raras-house").css("display", "flex");
        house = ".raras-house"
    }
})



// $('#pause-clock').click(function () {
//     paused = true;
// });

$(".player-img").hover(function (){
    $(this).css("transform", "scale(1.2)");
}, function(){
    $(this).css("transform", "scale(1)");
})

// players.forEach((player) => {
//
// })
const speedScale = 10;
const agilityScale = 10;
const tacklingScale = 100;
const offenseScale = 1.5;
const defenseScale = 1.7;

// let chosenPlayer;


$(".player-img").click(function(){
    // console.log($(this).data("name"));
    if(player1Chosen === false){
        for(let i = 0;i<players.length;i++){
            if($(this).data("name") === players[i].name) {
                $(house).css("display", "flex")
                $(this).parent().css("display", "none")
                $(this).parent().addClass("chosen-player")
                $("#p1-card .chosen-name").text(players[i].name)

                let scale = $(".scale").width();

                $("#p1-speed").css("width", (players[i].speed/speedScale)*scale + "px")
                $("#p1-speed").css("height", "15px")
                $("#p1-speed").css("background-color", "darkblue")

                $("#p1-agility").css("width", (players[i].agility/agilityScale)*scale + "px")
                $("#p1-agility").css("height", "15px")
                $("#p1-agility").css("background-color", "darkblue")

                $("#p1-tackling").css("width", (players[i].tacklingArea/tacklingScale)*scale + "px")
                $("#p1-tackling").css("height", "15px")
                $("#p1-tackling").css("background-color", "darkblue")

                $("#p1-agility").css("width", (players[i].agility/agilityScale)*scale + "px")
                $("#p1-agility").css("height", "15px")
                $("#p1-agility").css("background-color", "darkblue")

                $("#p1-offense").css("width", (players[i].offense/offenseScale)*scale + "px")
                $("#p1-offense").css("height", "15px")
                $("#p1-offense").css("background-color", "darkblue")

                $("#p1-defense").css("width", (players[i].defense/defenseScale)*scale + "px")
                $("#p1-defense").css("height", "15px")
                $("#p1-defense").css("background-color", "darkblue")

                $("#p1-bio").text(players[i].bio);

                player1 = players[i];
                $("#p1-card .select-player").css("display", "inline");
                break;
            }
        }
    }

})

$(".player-img").click(function(){
    // console.log($(this).data("name"));
    if(player1Chosen === true){
        for(let i = 0;i<players.length;i++){
            if($(this).data("name") === players[i].name) {
                $(this).parent().css("display", "none")
                // $(".chosen-player").css("display", "none")
                // $(house).css("display", "flex")

                $("#p2-card .chosen-name").text(players[i].name)

                let scale = $(".scale").width();

                $("#p2-speed").css("width", (players[i].speed/speedScale)*scale + "px")
                $("#p2-speed").css("height", "15px")
                $("#p2-speed").css("background-color", "maroon")

                $("#p2-agility").css("width", (players[i].agility/agilityScale)*scale + "px")
                $("#p2-agility").css("height", "15px")
                $("#p2-agility").css("background-color", "maroon")

                $("#p2-tackling").css("width", (players[i].tacklingArea/tacklingScale)*scale + "px")
                $("#p2-tackling").css("height", "15px")
                $("#p2-tackling").css("background-color", "maroon")

                $("#p2-agility").css("width", (players[i].agility/agilityScale)*scale + "px")
                $("#p2-agility").css("height", "15px")
                $("#p2-agility").css("background-color", "maroon")

                $("#p2-offense").css("width", (players[i].offense/offenseScale)*scale + "px")
                $("#p2-offense").css("height", "15px")
                $("#p2-offense").css("background-color", "maroon")

                $("#p2-defense").css("width", (players[i].defense/defenseScale)*scale + "px")
                $("#p2-defense").css("height", "15px")
                $("#p2-defense").css("background-color", "maroon")

                $("#p2-bio").text(players[i].bio);


                player2 = players[i];
                $("#p2-card .select-player").css("display", "inline");
                break;
            }
        }
    }

})

$("#p1-card .select-player").click(() => {
    player1Chosen = true;
    $("#p1-card .select-player").css("display", "none");
    $("#choose").text("Choose Player 2");
});

$("#p2-card .select-player").click(() => {
    player2Chosen = true;
    $("#p2-card .select-player").css("display", "none");
    $("#choose").text("Click Here to Play!");
    $("#choose").click(function(){
        $("#player-selection-window").css("display", "none");
        $("#game-screen").css("display", "flex");
        $("#game-screen").css("flex-wrap", "wrap");
        $("#game-screen").css("justify-content", "center");
        $("body").css("background-color", "black");
        game();
    })
});

// $("#ready").click(() => {
//
// });




const p1OutOfBounds = () => {
    if (player1.possession === true && (player1.Y < 0 || player1.Y > footballField.height)){
        console.log("out of bounds");
        down++;
        player2.Y = footballField.height/2;
        player1.Y = footballField.height/2;
        player2.X = player1.X + defenderDistance;
        downSetHut();
    }
}

const p2OutOfBounds = () => {
    if (player1.possession === true && (player1.Y < 0 || player1.Y > footballField.height)){
        console.log("out of bounds");
        down++;
        player2.Y = footballField.height/2;
        player1.Y = footballField.height/2;
        player1.X = player2.X - defenderDistance;
        downSetHut();
    }
}

$("#play-button").hover(function(){
    $("#play-button").css("transform", "scale(1.2)")
}, function(){
    $("#play-button").css("transform", "scale(1)")
})




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