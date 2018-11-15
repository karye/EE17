/* http://www.chinese-fortune-cookie.com/fortune-cookie-quotes.html */
/* När webbsidan laddats klart kör start() */
window.onload = start;

/* Start-delen */
function start() {

    /* Välj ut alla elementen att jobba med: target */
    const elementKnapp1 = document.querySelector('.loggen');
    console.log(elementKnapp1);

    const elementKnapp2 = document.querySelector('.webbsidan');
    console.log(elementKnapp2);

    const elementKnapp3 = document.querySelector('.lista');
    console.log(elementKnapp3);

    const elementKnapp4 = document.querySelector('.slump');
    console.log(elementKnapp4);

    const elementDiv = document.querySelector('.output');
    console.log(elementDiv);

    /* Knapp 1: skriv ut en cookie i loggen */
    elementKnapp1.addEventListener('click', infogaText);
    function infogaText() {
        console.log('There is a true and sincere friendship between you and your friends.');
    }

    /* Knapp 2: skriv ut cookie i webbsidan */
    elementKnapp2.addEventListener('click', infogaTexten);
    function infogaTexten() {
        elementDiv.textContent = 'A thrilling time is in your immediate future.';
    }

    /* Knapp 3: skriv ut nya cookies en-efter-en som en lista */
    elementKnapp3.addEventListener('click', infogaTexter);
    function infogaTexter() {
        elementDiv.innerHTML += 'Happy news is on its way to you. <br>';
    }

    /* Slumpa fram cookies */
    elementKnapp4.addEventListener('click', slumpaCookies);
    let cookies = [
        'There is a true and sincere friendship between you and your friends.',
        'You find beauty in ordinary things, do not lose this ability.',
        'Ideas are like children; there are none so wonderful as your own.',
        'It takes more than good memory to have good memories.',
        'A thrilling time is in your immediate future.',
        'Your blessing is no more than being safe and sound for the whole lifetime.',
        'Plan for many pleasures ahead.',
        'The joyfulness of a man prolongeth his days.',
        'Your everlasting patience will be rewarded sooner or later.',
        'Make two grins grow where there was only a grouch before.'
    ];

    function slumpaCookies() {
        let slumpTal = Math.ceil(Math.random() * 10 - 1);
        elementDiv.innerHTML += cookies[slumpTal] + '<br>';
    }
}