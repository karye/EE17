window.onload = start;

function start() {
    /* Lista på alla element vi ska jobba med */
    const eRuta1 = document.querySelector("#ruta1");
    const eRuta2 = document.querySelector("#ruta2");
    const eKnapp1 = document.querySelector("#knapp1");
    const eRuta3 = document.querySelector("#ruta3");
    const eKnapp2 = document.querySelector("#knapp2");
    const eRuta4 = document.querySelector("#ruta4");

    /* Lyssna på knapp1 */
    eKnapp1.addEventListener("click", addera);

    function addera() {
        /* Läsa av innehållet på rutorna */
        var tal1 = Number(eRuta1.value);
        var tal2 = Number(eRuta2.value);

        /* Addera tal1 + tal2 */
        var summa = tal1 + tal2;

        /* Skriv ut summa i ruta 3 */
        eRuta3.value = summa;
    }

    /* Lyssna på knapp1 */
    eKnapp2.addEventListener("click", subtrahera);

    function subtrahera() {
        /* Läsa av innehållet på rutorna */
        var tal1 = Number(eRuta1.value);
        var tal2 = Number(eRuta2.value);

        /* Addera tal1 + tal2 */
        var subtraktion = tal1 - tal2;

        /* Skriv ut summa i ruta 3 */
        eRuta4.value = subtraktion;
    }
}