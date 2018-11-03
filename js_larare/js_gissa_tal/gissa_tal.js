/* Våra element i HTML vi läser/skriver */
const elementGissning = document.querySelector('#gissning');
const elementSvar = document.querySelector('#svar');
const elementKnappen = document.querySelector('button');

/* Skapa ett slumptal mellan 1 och 100 */
var slumptal = Math.ceil(Math.random() * 100);
console.log('Nytt slumptal: ' + slumptal);

/* Antalet försök */
var antal = 0;

/* Skriv ut highscore */
console.log('highscore = ' + localStorage.highScore);


/* Reagera på när man trycker på knappen */
function gissa() {
    if (antal == 0) {
        elementSvar.textContent = '';
    }

    /* Räkna upp */
    antal++;

    /* Läsa av gissningen i första input-rutan*/
    var gissning = elementGissning.value;

    /* Om gissning = slumptal, då har man vunnit */
    if (gissning == slumptal) {
        svar = '<p class="animated yipee">' + antal + ') ' + gissning + ' Yippee! Du har vunnit äran!</p>';
        elementSvar.insertAdjacentHTML('beforeend', svar);

        /* Stäng av knappen */
        elementKnappen.disabled = true;

        /* En rolig effekt! */
        document.querySelector('.yipee').classList.add('fadeInDown');

        /* Spara highscore */
        localStorage.highScore = antal;
        return;
    }

    /* Om gissning > 100, skriv ut "Är du dum!" */
    if (gissning > 100) {
        svar = '<p class="dum">' + antal + ') ' + gissning + ' är du dum!</p>';
        elementSvar.insertAdjacentHTML('beforeend', svar);
        return;
    }

    /* Om gissning > slumptal, skriv ut "För högt" */
    if (gissning > slumptal) {
        svar = '<p class="hogt">' + antal + ') ' + gissning + ' för högt!</p>';
        elementSvar.insertAdjacentHTML('beforeend', svar);
        return;
    }

    /* Om gissning < slumptal, skriv ut "För lågt" */
    if (gissning < slumptal) {
        svar = '<p class="lagt">' + antal + ') ' + gissning + ' för lågt!</p>';
        elementSvar.insertAdjacentHTML('beforeend', svar);
        return;
    }
}