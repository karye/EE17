window.onload = start;

function start() {
    /* Element vi jobbar med */
    const eKnapp1 = document.querySelector("#knapp1");
    const eKnapp2 = document.querySelector("#knapp2");
    const eTalet = document.querySelector("#talet");

    eKnapp1.addEventListener("click", raknaNed);
    eKnapp2.addEventListener("click", raknaUpp);

    function raknaNed() {
        /* Läs av innehållet i rutan */
        let talet = Number(eTalet.value);

        /* Gör beräkningen */
        let summaNed = talet - 1;

        /* Skriv ut resultatet */
        eTalet.value = summaNed;
    }

    function raknaUpp() {
        /* Läs av innehållet i rutan */
        let talet = Number(eTalet.value);

        /* Gör beräkningen */
        let summaNed = talet + 1;

        /* Skriv ut resultatet */
        eTalet.value = summaNed;
    }
}