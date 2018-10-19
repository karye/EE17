/* 
 * Klicka för att hitta den gömda bilden.
 */

/* När webbsidan laddtas klart kör start() */
window.onload = start;

/* Start-delen */
function start() {

    /* Lyssna på klick på hela sidan */
    const elementKontainer = document.querySelector('.grid');
    elementKontainer.addEventListener('click', klick);

    /* Vad händer när man klickat på sidan? */
    function klick(e) {
        console.log('Nu har vi en klick event på ' + e.target.nodeName);

        /* Har man klickat på en cell (td) */
        if (e.target.className === 'ruta') {
            tittaEfter(e.target);
        }
    }

    /* Slumpa fram en position */
    var slumptal = Math.ceil(Math.random() * 9);
    
    /* Funktion för att göra fotot suddigt */
    function tittaEfter(div) {
        console.log('tittaEfter');
        
        /* Läs av doldt tal */
        var tal = div.textContent;

        /* Visa dolda bilden */
        if (tal == slumptal) {
            div.classList.add('hit');
        } else {
            div.classList.add('animated', 'zoomOut');
        }
    }
}