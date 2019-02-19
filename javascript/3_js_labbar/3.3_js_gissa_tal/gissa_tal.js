/* Kör när sidan laddat klart */
window.onload = start;

function start() {

    /* Elementen vi jobbar med */
    const elementTal = document.querySelector('#tal');
    const elementGissa = document.querySelector('#gissa');
    const elementResultat = document.querySelector('#resultat');
    const elementGissningar = document.querySelector('#gissningar');
    const elementHogsta = document.querySelector('#hogsta');
    const elementValjTal = document.querySelector('#valjTal');
    const elementStartaOm = document.querySelector('#startaOm');

    /* Lyssna på knappen */
    elementGissa.addEventListener("click", gissa);
    elementValjTal.addEventListener("click", valjTal);
    elementStartaOm.addEventListener("click", startaOm);

    function startaOm() {
        elementTal.value = "";
        elementResultat.value = "";
        elementHogsta.value = "";
        elementGissningar.value = "";
        elementHogsta.disabled = false;
        elementTal.disabled = false;
    }
    var slumptal;

    /* Skapa ett slumptal */
    function valjTal() {
        var hogsta = Number(elementHogsta.value);
        slumptal = Math.ceil(Math.random() * hogsta);
        console.log(slumptal);
        elementHogsta.disabled = true;
    }

    var gissningar = 5;
    elementGissningar.value = gissningar;

    function gissa() {
        /* Läs av rutan */
        var tal = Number(elementTal.value);
        console.log(tal);

        if (tal == 0) {
            elementResultat.value = "Skriv en siffra!";
        } else {
            if (tal > slumptal) {
                elementResultat.value = "Talet är för högt!";
                gissningar--;
                elementGissningar.value = gissningar;
            }
            if (tal < slumptal) {
                elementResultat.value = "Talet är för lågt!";
                gissningar--;
                elementGissningar.value = gissningar;
            }
            if (tal == slumptal) {
                elementResultat.value = "Rätt gissat!";
            }
            if (gissningar == 0) {
                elementTal.disabled = true;
                elementGissa.disabled = true;
                elementResultat.value = "Du förlorade!";
            }
        }
    }
}