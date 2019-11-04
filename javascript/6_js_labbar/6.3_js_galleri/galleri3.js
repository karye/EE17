window.onload = start;

function start() {
    const elementBild = document.querySelector('.bild');
    const elementVanster = document.querySelector('.fa-arrow-left');
    const elementHoger = document.querySelector('.fa-arrow-right');

    elementVanster.addEventListener('click', bytBild);
    elementHoger.addEventListener('click', bytBild);

    var bilder = [
        'chris-lawton-475897-unsplash.jpg',
        'ezra-comeau-jeffrey-336626-unsplash.jpg',
        'ghost-presenter-1076897-unsplash.jpg',
        'nad-hemnani-41314-unsplash.jpg',
        'philipp-raifer-1136704-unsplash.jpg',
        'stephen-kraakmo-1138352-unsplash.jpg'
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

        elementBild.innerHTML = '<img class="animated" src=./../../bilder/' + bilder[index] + '>';
        elementBild.firstChild.classList.add('fadeIn');
    }

    elementBild.innerHTML = '<img class="animated" src=./../../bilder/' + bilder[index] + '>';
}