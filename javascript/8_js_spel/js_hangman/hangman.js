window.onload = start;

function start() {
    /* Hur vi kontaktar webbtjänsten */
    const url = "http://localhost:8080/EE16/json";
    const canvas = document.querySelector("canvas");
    var ctx = canvas.getContext("2d");
    ctx.canvas.width = 400;
    ctx.canvas.height = 300;

    /* Variabler vi behöver */
    var stader = [];
    var stad = "";
    var svaret = [];
    var bokstaverKvar = 0;
    var fel = 0;

    /* Element vi behöver läsa av eller skriva till */
    const eKnapp = document.querySelector("button");
    const eRuta = document.querySelector("#bokstav");
    const eResultat = document.querySelector("#resultat");

    /* Hämta hem lista på alla svenska städer */
    function hamtaStader() {

        /* Skicka ajax-anrop till webbtjänsten */
        var ajax = new XMLHttpRequest();
        ajax.addEventListener("loadend", hamtaJson);

        function hamtaJson() {
            stader = JSON.parse(this.responseText);
            console.log(stader.length);
            slumpa();
        }

        ajax.open("GET", url, true);
        ajax.send();
    }
    hamtaStader();

    /* Välj en stad med slump */
    function slumpa() {
        const index = Math.ceil(Math.random() * 161);
        stad = stader[index];
        bokstaverKvar = stad.length;
        console.log(stad);

        for (let i = 0; i < bokstaverKvar; i++) {
            svaret[i] = '_';
        }
        eResultat.value = svaret;
    }

    /* Spelaren testar en bokstav: rätt eller fel? Resultat visas */
    eKnapp.addEventListener("click", testaBokstav);

    function testaBokstav() {
        const bokstav = eRuta.value;
        var hittad = false;
        console.log(bokstav);

        for (let i = 0; i < stad.length; i++) {
            console.log(stad[i], bokstav);

            if (stad[i] == bokstav || stad[i] == bokstav.toUpperCase()) {
                svaret[i] = bokstav;
                hittad = true;
                bokstaverKvar--;
            }
        }
        if (!hittad) {
            fel++;
            ritaHangman(fel);
        }
        console.log(bokstav, bokstaverKvar, fel);

        eResultat.value = svaret;

        if (bokstaverKvar == 0) {
            ctx.font = '30px sans-serif';
            ctx.fillText('Du vann!', 100, 50);
        }
    }

    /* https://medium.com/@zfrisch/understanding-start-and-end-angles-487dabe1d9ce */
    function ritaHangman(fel) {
        if (fel == 1) {
            ctx.arc(150, 350, 100, 0, Math.PI, true);
            ctx.stroke();
        } else if (fel == 2) {
            ctx.moveTo(150, 250);
            ctx.lineTo(150, 100);
            ctx.stroke();
        } else if (fel == 3) {
            ctx.lineTo(250, 100);
            ctx.stroke();
        } else if (fel == 4) {
            ctx.moveTo(225, 100);
            ctx.lineTo(225, 120);
            ctx.stroke();
        } else if (fel == 5) {
            ctx.moveTo(225, 120);
            ctx.arc(225, 130, 10, 1.5 * Math.PI, -0.5 * Math.PI, true);
            ctx.stroke();
        } else if (fel == 6) {
            ctx.moveTo(225, 140);
            ctx.lineTo(200, 150);
            ctx.moveTo(225, 140);
            ctx.lineTo(250, 150);
            ctx.stroke();
        } else if (fel == 7) {
            ctx.moveTo(225, 140);
            ctx.lineTo(225, 180);
            ctx.stroke();
        } else if (fel == 8) {
            ctx.moveTo(225, 180);
            ctx.lineTo(200, 210);
            ctx.moveTo(225, 180);
            ctx.lineTo(250, 210);
            ctx.stroke();
            ctx.font = '30px sans-serif';
            ctx.fillText('Du förlorade!', 100, 50);
        }
    }

}