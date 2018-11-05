/* När webbsidan laddats klart kör start() */
window.onload = start;

/* Start-delen */
function start() {

    /* Välj ut alla elementen att jobba med: target */
    const elementFriend = document.querySelector('.friend');
    console.log(elementFriend);

    const elementFuture = document.querySelector('.future');
    console.log(elementFuture);

    const elementHappy = document.querySelector('.happy');
    console.log(elementHappy);

    const elementSlump = document.querySelector('.friend');
    console.log(elementSlump);

    const elementDiv = document.querySelector('div');
    console.log(elementDiv);

    /* Knapp 1: skriv ut en cookie i loggen */
    elementFriend.addEventListener('click', infogaText);
    function infogaText() {
        console.log('There is a true and sincere friendship between you and your friends.');
    }

    /* Knapp 2: skriv ut cookie i webbsidan */
    elementFuture.addEventListener('click', infogaTexten);
    function infogaTexten() {
        elementDiv.textContent = 'A thrilling time is in your immediate future.';
    }

    /* Knapp 3: skriv ut nya cookies en-efter-en som en lista */
    elementHappy.addEventListener('click', infogaTexter);
    function infogaTexter() {
        elementDiv.innerHTML += 'Happy news is on its way to you. <br>';
    }

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
        'Make two grins grow where there was only a grouch before.'
    ];

    function slumpaCookies() {
        var SlumpTal = Math.ceil(Math.random() * 10 - 1);
        elementDiv.innerHTML += cookies[SlumpTal] + '<br>';
    }
}