/* Starten */
window.onload = start;

function start() {
    
    /* Lista på alla elementet vi behöver jobba med: läsa av, skrivi i eller lyssna på händelser */
    const eGodkand = document.querySelector("#godkand");
    const eGiltig = document.querySelector("#giltig");
    const eBetalt = document.querySelector("#betalt");
    const eMomssats = document.querySelector("#momssats");
    const eBelopp = document.querySelector("#belopp");
    const eKnapp = document.querySelector("button");
    const eTotal = document.querySelector("#total");

    eKnapp.addEventListener("click", registreraKvitto);
    function registreraKvitto() {
        
        /* Läs av alla värden */
        var godkand = eGodkand.checked;
        var giltig = eGiltig.checked;
        var betalt = eBetalt.checked;
        var momssats = eMomssats.value;
        var belopp = Number(eBelopp.value);
        console.log(godkand + " " + giltig + " " + betalt + " " + momssats + " " + belopp);
        
        /* Räkna ut belopp plus vald momssats */
        var total = belopp * (1 + momssats / 100);

        /* Om kvittot är godkänt, giltigt och betalt så fyll i totalen */
        if (godkand && giltig && betalt ) {
            /* Skriv ut totalen på webbsidan */
            eTotal.value = total;
        } else {
            alert("Kvittot måste vara godkänt, giltigt och betalt!");
        }
    }
}