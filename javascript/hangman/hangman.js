window.onload = start;

function start() {
    var canvas = document.querySelector("#myCanvas");
    var ctx = canvas.getContext("2d");
    var raknare = 0;

    /* Element vi jobbar med */
    const eKnapp = document.querySelector("button");

    /* Lyssna på knappen */
    eKnapp.addEventListener("click", visaHangman);

    function visaHangman() {
        raknare++;
        console.log(raknare);

        if (raknare == 1) {
            /* Jorden */
            ctx.arc(300, 800, 400, 0, 2 * Math.PI);
            ctx.stroke();
        }

        if (raknare == 2) {
            /* Galgen 1:3 */
            ctx.moveTo(200, 420);
            ctx.lineTo(200, 30);
            ctx.stroke();
        }

        if (raknare == 3) {
            /* Galgen 2:3 */
            ctx.moveTo(200, 30);
            ctx.lineTo(450, 30);
            ctx.stroke();
        }

        if (raknare == 4) {
            /* Galgen 3:3 */
            ctx.moveTo(400, 30);
            ctx.lineTo(400, 70);
            ctx.stroke();
        }

        if (raknare == 5) {
            /* Huvudet */
            ctx.beginPath();
            ctx.arc(400, 100, 30, 0, 2 * Math.PI);
            ctx.stroke();
        }

        if (raknare == 6) {
            /* Kroppen */
            ctx.moveTo(400, 130);
            ctx.lineTo(400, 250);
            ctx.stroke();
        }

        if (raknare == 7) {
            /* Höger arm */
            ctx.moveTo(400, 150);
            ctx.lineTo(450, 200);
            ctx.stroke();
        }

        if (raknare == 8) {
            /* Vänster arm */
            ctx.moveTo(400, 150);
            ctx.lineTo(350, 200);
            ctx.stroke();
        }

        if (raknare == 9) {
            /* Höger ben */
            ctx.moveTo(400, 250);
            ctx.lineTo(450, 350);
            ctx.stroke();
        }

        if (raknare == 10) {
            /* Vänster ben */
            ctx.moveTo(400, 250);
            ctx.lineTo(350, 350);
            ctx.stroke();
        }
    }
}