"use strict";

$("h1").click(() => {
    $(event.currentTarget).css("color", "orange");
});

let footballField;
let fieldContext;

window.onload = () => {
    console.log("hello from football game");
    footballField = $("#football-field").get(0);
    fieldContext = footballField.getContext("2d");
    setInterval(drawField,50);
    playerA(joe);
    playerB(kirsten);
    movement(5);
    $("#player-1").text(joe.name);
    $("#player-2").text(kirsten.name);
}


const drawField = () => {
    fieldContext.fillStyle = "green";
    fieldContext.fillRect(0,0,footballField.width, footballField.height)
    movement(5);
    playerA(joe);
    playerB(kirsten);
}

let playerA = (player) => {
    fieldContext.drawImage(player.playerImage, position, 50, 150, 200);
}
let playerB = (player) => {
    fieldContext.drawImage(player.playerImage, position, 150, 150, 200);
}

let joeImage = $("#joe-image").get(0);
let kirstenImage = $("#kirsten-image").get(0);

let joe = {
    name: "Joe",
    playerImage: joeImage
}

let kirsten = {
    name: "Kirsten",
    playerImage: kirstenImage
}

let position = 30;

let movement = (speed) => {
    position+=speed;
    console.log(position);
}