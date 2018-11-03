/* Kör koden när webbsidan laddats klart */
window.onload = start;

function start() {

    /* HTML-elementen vi jobbar med */
    const elementTal1 = document.querySelector('#tal1');
    const elementTal2 = document.querySelector('#tal2');
    const elementResultat = document.querySelector('#resultat');
    const elementPlus = document.querySelector('#plus');
    const elementMinus = document.querySelector('#minus');
    const elementGanger = document.querySelector('#ganger');
    const elementDividera = document.querySelector('#dividera');
    
    /* Lyssna på knapp plus */
    elementPlus.addEventListener('click', plus);

    /* Lyssna på knapp minus */
    elementMinus.addEventListener('click', minus);

    /* Lyssna på knapp gånger */
    elementGanger.addEventListener('click', ganger);

    /* Lyssna på knapp dividera */
    elementDividera.addEventListener('click', dividera);

    /* Addera tal1 + tal2 = resultat */
    function plus() {
        /* Läs av värdet av inputruta 1 */
        var tal1 = parseInt(elementTal1.value);
        /* Läs av värdet av inputruta 2 */
        var tal2 = parseInt(elementTal2.value);

        /* Summera */
        var resultat = tal1 + tal2;

        /* Skriv resultatet i inputruta 3 */
        elementResultat.value = resultat;
    }

    /* Knappen - (minus) */
    function minus() {
        /* Läs av värdet av inputruta 1 */
        var tal1 = elementTal1.value;
        /* Läs av värdet av inputruta 2 */
        var tal2 = elementTal2.value;

        /* Summera */
        var resultat = tal1 - tal2;

        /* Skriv resultatet i inputruta 3 */
        elementResultat.value = resultat;
    }

    /* Knappen * (gånger) */
    function ganger() {
        /* Läs av värdet av inputruta 1 */
        var tal1 = elementTal1.value;
        /* Läs av värdet av inputruta 2 */
        var tal2 = elementTal2.value;

        /* Summera */
        var resultat = tal1 * tal2;

        /* Skriv resultatet i inputruta 3 */
        elementResultat.value = resultat;
    }

    /* Knappen / (dividera) */
    function dividera() {
        /* Läs av värdet av inputruta 1 */
        var tal1 = elementTal1.value;
        /* Läs av värdet av inputruta 2 */
        var tal2 = elementTal2.value;

        /* Summera */
        var resultat = tal1 / tal2;

        /* Skriv resultatet i inputruta 3 */
        elementResultat.value = resultat;
    }
    
}