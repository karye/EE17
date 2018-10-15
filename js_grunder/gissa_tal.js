/* Våra element i HTML vi läser/skriver */
var elementGissning = document.querySelector('#gissning');
var elementSvar = document.querySelector('#svar');

/* Skapa ett slumptal mellan 1 och 100 */
var slumptal = Math.ceil(Math.random() * 100);
console.log('Nytt slumptal: ' + slumptal);

/* Antal försök */
var antal = 0;

/* Reagera på när man trycker på knappen */
function gissa() {

    /* Räkna upp */
    antal++;

    /* Läsa av gissningen i första input-rutan*/
    var gissning = elementGissning.value;
    console.log('Gissningen: ' + gissning);

    /* Om gissning = slumptal, då har man vunnit */
    if (gissning == slumptal) {
        svar = '<p class="animated yipee">' + antal + ') ' + gissning + ' Yippee! Du har vunnit äran!</p>';
        elementSvar.insertAdjacentHTML('beforeend', svar);
    }

    /* Om gissning > slumptal, skriv ut "För högt" */
    if (gissning > slumptal) {
        svar = '<p class="hogt">' + antal + ') ' + gissning + ' för högt!</p>';
        elementSvar.insertAdjacentHTML( 'beforeend', svar);
    }

    /* Om gissning < slumptal, skriv ut "För lågt" */
    if (gissning < slumptal) {
        svar = '<p class="lagt">' + antal + ') ' + gissning + ' för lågt!</p>';
        elementSvar.insertAdjacentHTML( 'beforeend', svar);
    }

    /* Om gissning > 100, skriv ut "Är du dum!" */
    if (gissning > 100) {
        svar = '<p class="dum">' + antal + ') ' + gissning + ' är du dum!</p>';
        elementSvar.insertAdjacentHTML( 'beforeend', svar);
    }
}