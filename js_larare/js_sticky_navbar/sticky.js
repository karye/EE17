/* 
* Se till att navigationsmenyn stannar kvar på sidan
* när man skrollar ned.
*/

/* Vänta tills sidan laddats innan koden körs. */
window.onload = start;

function start() {
    /* Ta tag i elementet som vi vill jobba med */
    const elementKontainer = document.querySelector('.kontainer');
    const elementNav = document.querySelector('nav');
    const navTop = elementNav.offsetTop;
    console.log('navTop = ' + navTop);

    /* Lyssna på skrollning */
    window.addEventListener('scroll', stickIt);

    /* Vad göra när man skrollar */
    function stickIt() {
        console.log('window.scrollY = ' + window.scrollY);
        
        if (window.scrollY >= navTop) {
            elementKontainer.classList.add('fixNav');
        } else {
            elementKontainer.classList.remove('fixNav');
        }
    }
}