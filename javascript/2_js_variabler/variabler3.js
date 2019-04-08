/* 
Svaret = "Hej ..., du är född ..."
*/

window.onload = start;

function start() {
    /* Lista på alla element vi ska jobba med */
    const eRuta1 = document.querySelector("#ruta1");
    const eRuta2 = document.querySelector("#ruta2");
    const eKnapp1 = document.querySelector("#knapp1");
    const eRuta3 = document.querySelector("#ruta3");

    /* Lyssna på knapp1 */
    eKnapp1.addEventListener("click", mixa);

    function mixa() {

    }
}