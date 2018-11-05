/* 
* När man klickar på en knapp byts bilden ut till aktuell bild.
*/

/* När webbsidan laddats klart kör start() */
window.onload = start;

/* Start-delen */
function start() {

    /* Vilka element arbetar vi med? */
    const elementImg = document.querySelector('.bild img');
    const elementP = document.querySelector('.bild p');
    const elementMiniatyr1 = document.querySelector('.knapp1');
    const elementMiniatyr2 = document.querySelector('.knapp2');
    const elementMiniatyr3 = document.querySelector('.knapp3');
    const elementMiniatyr4 = document.querySelector('.knapp4'); 

    /* Vilka händelser behöver vi lyssna på? */
    elementMiniatyr1.addEventListener('click', visaBild1);
    elementMiniatyr2.addEventListener('click', visaBild2);
    elementMiniatyr3.addEventListener('click', visaBild3);
    elementMiniatyr4.addEventListener('click', visaBild4);

    /* Vad ska hända när man klickat på knapp1? */
    function visaBild1() {
        elementImg.src = '../bilder/jpeg/michael-olsen-584366-unsplash.jpg';
        elementP.textContent = 'Photo by Michael Olsen';
    }
    /* Vad ska hända när man klickat på knapp2? */
    function visaBild2() {
        elementImg.src = '../bilder/jpeg/diogo-sousa-457381-unsplash.jpg';
        elementP.textContent = 'Photo by Diogo Sousa';
    }
    /* Vad ska hända när man klickat på knapp3? */
    function visaBild3() {
        elementImg.src = '../bilder/jpeg/kees-streefkerk-352781-unsplash.jpg';
        elementP.textContent = 'Photo by Kees Streefkerk';
    }
    /* Vad ska hända när man klickat på knapp4? */
    function visaBild4() {
        elementImg.src = '../bilder/jpeg/jose-duarte-317893-unsplash.jpg';
        elementP.textContent = 'Photo by Jose Duarte';
    }
}