window.onload = start;

function start() {
    /* Element vi jobbar med */
    const elementYta = document.querySelector('.yta');
    const elementVanster = document.querySelector('.fa-arrow-circle-left');
    const elementHoger = document.querySelector('.fa-arrow-circle-right');

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

    /* Lyssna på knapparna */
    elementVanster.addEventListener('click', bytBild);
    elementHoger.addEventListener('click', bytBild);

    /* Byter bild */
    function bytBild() {
        console.log(this.dataset.riktning);
        
    }
}