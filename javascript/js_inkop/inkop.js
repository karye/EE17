/* Vänta tills hela laddats klart, innan man kör koden */
window.onload = start;

function start() {
    /* Elementen vi jobbar med */
    const elementVara = document.querySelector('#vara');
    const elementPris = document.querySelector('#pris');
    const elementKnapp = document.querySelector('button');
    const elementSmaVara = document.querySelector('.smaVara');
    const elementStoraVara = document.querySelector('.storaVara');
    const elementSmaTot = document.querySelector('.smaTot');
    const elementStoraTot = document.querySelector('.storaTot');

    /* Lyssna av knappen */
    elementKnapp.addEventListener('click', mataIn);

    function mataIn() {
        /* Läs av innehållet i input-rutorna */
        var vara = elementVara.value;
        console.log(elementVara);
        console.log(elementVara.value);
        var pris = elementPris.value;
        console.log(elementPris);
        console.log(elementPris.value);

        /* Om priset mindre än 100 skriv in i vänstra listan, annars högra listan */
        if (pris < 100) {
            elementSmaVara.textContent = vara + ' ' + pris + ' kr';
        }
    }
}