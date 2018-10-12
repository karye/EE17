/* Våra globala variabler */
/* Skapa ett slumptal mellan 1 och 100 */
var slumptal = Math.ceil(Math.random() * 100);
var elementGissning = document.querySelector('#gissning');
var elementSvar = document.querySelector('#svar');

console.log('Nytt slumptal: ' + slumptal);

/* Reagera på när man trycker på knappen */
function gissa() {
    /* Läsa av gissningen i första input-rutan*/
    var gissning = elementGissning.value;
    console.log('Gissningen: ' + gissning);

    /* Om gissning = slumptal, då har man vunnit */
    if (gissning == slumptal) {
        elementSvar.value = 'Yippee! Du har vunnit äran!';
    }

    /* Om gissning > slumptal, skriv ut "För högt" */
    if (gissning > slumptal) {
        elementSvar.value = 'För högt!';
    }

    /* Om gissning < slumptal, skriv ut "För lågt" */
    if (gissning < slumptal) {
        elementSvar.value = 'För lågt!';
    }

    /* Om gissning > 100, skriv ut "Är du dum!" */
    if (gissning > 100) {
        elementSvar.value = 'Är du dum!';
    }
}