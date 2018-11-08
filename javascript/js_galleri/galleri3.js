window.onload = start;

function start() {
    const elementYta = document.querySelector('.yta');
    const elementVanster = document.querySelector('.fa-arrow-left');
    const elementHoger = document.querySelector('.fa-arrow-right');

    elementVanster.addEventListener('click', bytBild);
    elementHoger.addEventListener('click', bytBild);

    var bilder = [
        './bilder/chris-lawton-475897-unsplash.jpg',
        './bilder/ezra-comeau-jeffrey-336626-unsplash.jpg',
        './bilder/ghost-presenter-1076897-unsplash.jpg',
        './bilder/nad-hemnani-41314-unsplash.jpg',
        './bilder/philipp-raifer-1136704-unsplash.jpg',
        './bilder/stephen-kraakmo-1138352-unsplash.jpg'
    ];

    var index = 0;

    function bytBild() {
        console.log(this.dataset.pil);

        if (this.dataset.pil == 'hoger') {
            index++;
        }

        console.log(bilder[index]);
        
        elementYta.style.cssText = 'background: url(' + bilder[index] + ') no-repeat center;';
    }
}