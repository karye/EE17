/* 
 * Räknar ut en körsträckan för en bil.
 * Mata in hastighet och tid.
 * Få avtsånd som svar.
 */

/* Kör koden när webbsidan laddats klart */
window.onload = start;

function start() {

    /* Välj ut alla elementen att jobba med: target */
    const elementHastighet = ???;
    const elemenTid = ???;
    const elementRaknaUt = ???;
    const elementSvar = ???;

    /* Lyssna på knappen */
    elementRaknaUt.addEventListener(???);

    /* Räkna ut avståndet */
    function raknaUt() {
        
        /* Läs av hastigheten och tiden */
        var hastighet = Number(???);
        var tid = Number(???);

        /* Räkna ut avståndet = hastigheten * tid */
        var avstand = hastighet * tid / 60;

        /* Skriv ut resultatet tex 'Körsträckan blir 57 km.' */
        elementSvar.textContent = ???;
    }
}