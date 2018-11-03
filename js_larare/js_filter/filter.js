/* 
* Testar tre oilka filter på en bild.* Testar tre oilka filter på en bild.
*/

/* När webbsidan laddats klart kör start() */
window.onload = start;

/* Start-delen */
function start() {
    
    /* Välj ut alla elementen att jobba med: target */
    const elementSuddigt = ???;
    const elementGraskala = ???;
    const elementSepia = ???;
    const elementFoto = ???;
    const elementOutput = ???;

    /* Lyssna på knapparna */
    elementSuddigt.addEventListener(???);
    elementGraskala.addEventListener(???);
    elementSepia.addEventListener(???);

    /* Gör fotot suddigt */
    function suddigt() {
        elementFoto.classList.remove('???');
        elementFoto.classList.add('???');
        elementOutput.textContent = ???;
    }

    /* Gör fotot gråskala */
    function graskala() {
        ???;
        ???;
        ???;
    }

    /* Gör fotot sepia-färgat */
    function sepia() {
        ???;
        ???;
        ???;
    }
}
