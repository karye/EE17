/* 
* Testar tre oilka filter på en bild.* Testar tre oilka filter på en bild.
*/

/* När webbsidan laddats klart kör start() */
window.onload = start;

/* Start-delen */
function start() {
    
    /* Välj ut alla elementen att jobba med: target */
    const elementSuddigt = document.querySelector('.knappSuddigt');
    const elementGraskala = document.querySelector('.knappGra');
    const elementSepia = document.querySelector('.knappSepia');
    const elementFoto = document.querySelector('img');
    const elementOutput = document.querySelector('.output');

    /* Lyssna på knapparna */
    elementSuddigt.addEventListener('click', suddigt);
    elementGraskala.addEventListener('click', graskala);
    elementSepia.addEventListener('click', sepia);

    /* Gör fotot suddigt */
    function suddigt() {
        elementFoto.classList.remove('suddigt', 'graskala', 'sepia');
        elementFoto.classList.add('suddigt');
        elementOutput.textContent = 'Använder filter: blur(5px)';
    }

    /* Gör fotot gråskala */
    function graskala() {
        elementFoto.classList.remove('suddigt', 'graskala', 'sepia');
        elementFoto.classList.add('graskala');
        elementOutput.textContent = 'Använder filter: grayscale(80%)';
    }

    /* Gör fotot sepia-färgat */
    function sepia() {
        elementFoto.classList.remove('suddigt', 'graskala', 'sepia');
        elementFoto.classList.add('sepia');
        elementOutput.textContent = 'Använder filter: sepia(60%)';
    }
}
