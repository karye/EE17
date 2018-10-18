/* http://www.chinese-fortune-cookie.com/fortune-cookie-quotes.html */

/* När webbsidan laddats klart kör start() */
window.onload = start;

/* Start-delen */
function start() {

    const elementSlump = document.querySelector('.knapp3');
    const elementDiv = document.querySelector('div');

    /* Knapp 1: skriv ut en cookie i loggen */

    /* Knapp 2: skriv ut cookie i webbsidan */

    /* Knapp 3: skriv ut nya cookies en-efter-en som en lista */

    /* Slumpa fram cookies */
    elementSlump.addEventListener('click', slumpaCookies);
    var cookies = [
        'There is a true and sincere friendship between you and your friends.',
        'You find beauty in ordinary things, do not lose this ability.',
        'Ideas are like children; there are none so wonderful as your own.',
        'It takes more than good memory to have good memories.',
        'A thrilling time is in your immediate future.',
        'Your blessing is no more than being safe and sound for the whole lifetime.',
        'Plan for many pleasures ahead.',
        'The joyfulness of a man prolongeth his days.',
        'Your everlasting patience will be rewarded sooner or later.',
        'Make two grins grow where there was only a grouch before.'];
    function slumpaCookies() {
        /* Slumpa fram ett tal mellan 0 till 9 */
        var slumpTal = Math.ceil(Math.random() * 10 - 1);
        elementDiv.innerHTML += cookies[slumpTal] + '<br>';
    }

}