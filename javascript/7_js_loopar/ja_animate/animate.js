window.onload = start;

function start() {
    const elementRubrik = document.querySelector("h1");
    const elementText = document.querySelectorAll("p");
    const elementButtonFade = document.querySelector(".fade");
    const elementButtonVisa = document.querySelector(".visa");

    elementButtonVisa.addEventListener("click", visaText);
    elementButtonFade.addEventListener("click", fade);

    elementText.forEach(function(item) {
        item.setAttribute("hidden", "true")
    });

    function visaText() {
        elementText.forEach(function(item) {
            item.removeAttribute("hidden");
            item.classList.add("fadeIn");
        });
    }

    function fade() {
        if (elementRubrik.classList.contains("fadeOut")) {
            elementRubrik.classList.remove("fadeOut");
            elementRubrik.classList.add("fadeIn");
        } else {
            elementRubrik.classList.remove("fadeIn");
            elementRubrik.classList.add("fadeOut");
        }
    }
}