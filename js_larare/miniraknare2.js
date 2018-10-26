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
    elementPlus.addEventListener('click', rakna);

    /* Lyssna på knapp minus */
    elementMinus.addEventListener('click', rakna);

    /* Lyssna på knapp gånger */
    elementGanger.addEventListener('click', rakna);

    /* Lyssna på knapp dividera */
    elementDividera.addEventListener('click', rakna);

    /* Addera tal1 + tal2 = resultat */
    function rakna(e) {
        console.log('Nu har vi en klick event på ' + e.target.nodeName);
        var operator = e.target.id;

        /* Läs av värdet av inputruta 1 */
        var tal1 = Number(elementTal1.value);
        /* Läs av värdet av inputruta 2 */
        var tal2 = Number(elementTal2.value);

        console.log(operator);

        switch (operator) {
            case 'plus':
                var resultat = tal1 + tal2;
                break;
            case 'minus':
                var resultat = tal1 - tal2;
                break;
            case 'ganger':
                var resultat = tal1 * tal2;
                break;
            case 'dividera':
                var resultat = tal1 / tal2;
                break;

            default:
                break;
        }

        /* Skriv resultatet i inputruta 3 */
        elementResultat.value = resultat;
    }
}