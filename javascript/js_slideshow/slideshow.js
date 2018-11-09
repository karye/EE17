window.onload = start;

function start() {
    /* Element vi jobbar med */
    const elementYta = document.querySelector('.yta');
    const elementVanster = document.querySelector('.fa-arrow-circle-left');
    const elementHoger = document.querySelector('.fa-arrow-circle-right');
    const elementPunkter = document.querySelector('.punkter');

    /* Lista på alla bilder */
    var bildLista = [
        './foton/chris-lawton-475897-unsplash.jpg',
        './foton/colin-watts-1138048-unsplash.jpg',
        './foton/ezra-comeau-jeffrey-336626-unsplash.jpg',
        './foton/ghost-presenter-1076897-unsplash.jpg',
        './foton/jack-millard-1138486-unsplash.jpg',
        './foton/jeremy-bishop-1138388-unsplash.jpg',
        './foton/kaleb-dortono-87610-unsplash.jpg',
        './foton/oscar-helgstrand-1138481-unsplash.jpg',
        './foton/philipp-raifer-1136704-unsplash.jpg',
        './foton/stephen-kraakmo-1138352-unsplash.jpg'
    ];

    /* Position på bilden man tittar på */
    var index = 0;

    /* Visa första bilden */
    elementYta.style.cssText = 'background: url("' + bildLista[0] + '") no-repeat center;';

    /* Skapa alla punkter */
    for (let i = 0; i < bildLista.length; i++) {
        elementPunkter.innerHTML += '<i class="fas fa-circle"></i>';
    }

    /* Lyssna på knapparna */
    elementVanster.addEventListener('click', bytBild);
    elementHoger.addEventListener('click', bytBild);

    /* Byter bild */
    function bytBild() {
        /* Om man klickat på pil höger */
        if (this.dataset.riktning == 'höger') {
            index++;
        }

        /* Om man klickat på pil vänster */
        if (this.dataset.riktning == 'vänster') {
            index--;
        }

        /* Om man går förbi 0, dvs -1, ta bort vänster knapp */
        if (index == -1) {
            index = bildLista.length - 1;
        }

        /* Om man går förbi sista, ta bort höger knapp */
        if (index == bildLista.length) {
            index = 0;
        }

        console.log(this.dataset.riktning + ' ' + index + ' ' + bildLista[index]);

        /* Byt ut bakgrundsbilden */
        elementYta.style.cssText = 'background: url("' + bildLista[index] + '") no-repeat center;';
    }
}