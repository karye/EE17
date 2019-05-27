/* 
https://nostarch.com/download/JS4K_ch7.pdf

1. Pick a random word.
2. Take the player’s guess.
3. Quit the game if the player wants to.
4. Check that the player’s guess is a valid letter.
5. Keep track of letters the player has guessed.
6. Show the player their progress.
7. Finish when the player has guessed the word.
*/

window.onload = start;

function start() {
    var canvas = document.querySelector("#myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.canvas.width = 500;
    ctx.canvas.height = 500;
    var raknare = 0;

    /* Element vi jobbar med */
    const eKnapp = document.querySelector("button");

    /* Lyssna på knappen */
    eKnapp.addEventListener("click", visaHangman);

    function visaHangman() {
        raknare++;
        console.log(raknare);

        /* Jorden */
        if (raknare == 1) {
            ctx.arc(300, 800, 400, 0, 2 * Math.PI);
            ctx.stroke();
        }

        /* Galgen 1:3 */
        if (raknare == 2) {
            ctx.moveTo(200, 420);
            ctx.lineTo(200, 30);
            ctx.stroke();
        }

        /* Galgen 2:3 */
        if (raknare == 3) {
            ctx.moveTo(200, 30);
            ctx.lineTo(450, 30);
            ctx.stroke();
        }

        /* Galgen 3:3 */
        if (raknare == 4) {
            ctx.moveTo(400, 30);
            ctx.lineTo(400, 70);
            ctx.stroke();
        }

        /* Huvudet */
        if (raknare == 5) {
            ctx.beginPath();
            ctx.arc(400, 100, 30, 0, 2 * Math.PI);
            ctx.stroke();
        }

        /* Kroppen */
        if (raknare == 6) {
            ctx.moveTo(400, 130);
            ctx.lineTo(400, 250);
            ctx.stroke();
        }

        /* Höger arm */
        if (raknare == 7) {
            ctx.moveTo(400, 150);
            ctx.lineTo(450, 200);
            ctx.stroke();
        }

        /* Vänster arm */
        if (raknare == 8) {
            ctx.moveTo(400, 150);
            ctx.lineTo(350, 200);
            ctx.stroke();
        }

        /* Höger ben */
        if (raknare == 9) {
            ctx.moveTo(400, 250);
            ctx.lineTo(450, 350);
            ctx.stroke();
        }

        /* Vänster ben */
        if (raknare == 10) {
            ctx.moveTo(400, 250);
            ctx.lineTo(350, 350);
            ctx.stroke();
        }
    }
}