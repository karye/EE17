window.onload = start;

function start() {
    var canvas = document.querySelector("#myCanvas");
    var ctx = canvas.getContext("2d");

    /* Kroppen */
    ctx.moveTo(250, 100);
    ctx.lineTo(250, 250);
    ctx.stroke();

    /* Höger arm */
    ctx.moveTo(250, 150);
    ctx.lineTo(300, 200);
    ctx.stroke();

    /* Vänster arm */
    ctx.moveTo(250, 150);
    ctx.lineTo(200, 200);
    ctx.stroke();

    /* Höger ben */
    ctx.beginPath();
    ctx.moveTo(250, 250);
    ctx.lineTo(300, 350);
    ctx.stroke();

    /* Vänster ben */
    ctx.moveTo(250, 250);
    ctx.lineTo(200, 350);
    ctx.stroke();

    /* Huvudet */
    ctx.beginPath();
    ctx.arc(250, 70, 30, 0, 2 * Math.PI);
    ctx.stroke();
}