window.onload = start;

function start() {
    /* Element vi jobbar med */
    const eAlien = document.querySelector("img");

    /* Skeppets position */
    var x = 0;
    var y = 0;

    console.log(window.innerWidth);
    console.log(window.innerHeight);

    /* Lyssna efter tangenttryck */
    document.addEventListener("keydown", flygaSkepp);
    function flygaSkepp(event) {

        /* Minska vid tryck på vänsterpil */
        if (event.key == "ArrowLeft") {
            x -= 10;
        }
        /* Öka vid tryck på högerpil */
        if (event.key == "ArrowRight") {
            x += 10;
        }
        /* Minska vid tryck på pil upp */
        if (event.key == "ArrowUp") {
            y -= 10;
        }
        /* Öka vid tryck på pil ned */
        if (event.key == "ArrowDown") {
            y += 10;
        }
        console.log(x + " " + y);
        
        /* När skeppet når kanter börja om på andra sidan */
        if (x > window.innerWidth - 100) {
            x = 0;
        } else if (x < 0) {
            x = window.innerWidth - 100;
        }
        if (y > window.innerHeight - 100) {
            y = 0;
        } else if (y < 0) {
            y = window.innerHeight - 100;
        }

        /* Flytta på skeppet */
        eAlien.style.left = x + "px";
        eAlien.style.top = y + "px";
    }

}