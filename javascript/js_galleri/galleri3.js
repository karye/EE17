window.onload = start;

function start() {
    const elementBild = document.querySelector('.bild');
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
        if (this.dataset.pil == 'hoger') {
            index++;
        } else {
            index--;
        }

        if (index == -1) {
            index = bilder.length - 1;
        }
        if (index == bilder.length) {
            index = 0;
        }

        /* elementYta.style.cssText = 'background: url(' + bilder[index] + ') no-repeat center;'; */

        elementBild.innerHTML = '<img src=' + bilder[index] + '>';
        elementBild.firstChild.classList.add('fadeIn');
    }
}