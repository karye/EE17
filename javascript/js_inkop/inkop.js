/* Vänta tills hela laddats klart, innan man kör koden */
window.onload = start;

function start() {
    /* För att summera */
    var summaSma = 0;
    var summaStora = 0;

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
        var pris = Number(elementPris.value);
        console.log(elementPris);
        console.log(elementPris.value);

        /* Om priset mindre än 100 skriv in i vänstra listan, annars högra listan */
        if (pris < 100) {
            elementSmaVara.innerHTML += vara + ' ' + pris + ' kr<br>';
            summaSma += pris;
            elementSmaTot.textContent = summaSma;
        } else {
            elementStoraVara.innerHTML += vara + ' ' + pris + ' kr<br>';
            summaStora += pris;
            elementStoraTot.textContent = summaStora;
        }

        /* Om hela inköpen större än 3000, ändra färg till rött */
        if (summaSma + summaStora > 3000) {
            elementSmaTot.style.backgroundColor = "red";
            elementStoraTot.style.backgroundColor = "red";
        }
    }
}