window.onload = start;

function start() {
    const elementYta = document.querySelector('.yta');
    const elementVanster = document.querySelector('.fa-arrow-left');
    const elementHoger = document.querySelector('.fa-arrow-right');

    elementVanster.addEventListener('click', bytBild);
    elementHoger.addEventListener('click', bytBild);

    function bytBild() {
        console.log(this.dataset.pil);

        if (this.dataset.pi == "vanster") {
            
        }
    }
}