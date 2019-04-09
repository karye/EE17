window.onload = start;

function start() {
    /* Element vi använder */
    const eOrdet = document.querySelector("#ordet");
    const eSvaret = document.querySelector("#svaret");
    const eKnappRatta = document.querySelector("#ratta");
    const eOutput = document.querySelector("#output");
    const eKnappNytt = document.querySelector("#nytt");

    /* En massa ord */
    var ordLista = [
        ["Fun", "Kul"],
        ["Correct", "Korrekt"],
        ["Easy", "Lätt"],
        ["Hungry", "Hungrig"],
        ["Fast", "Fort"],
        ["Car", "Bil"],
        ["Library", "Bibliotek"],
        ["Cat", "Katt"],
        ["Plane", "Flygplan"],
        ["Holiday", "Semester"]
    ];

    /* För att komma ihåg ordet och översättningen */
    var slumptal = 0;

    /* Slumpa fram ett ord */
    function slumpaOrd() {
        var slumptal = Math.ceil(Math.random() * 10 - 1);
        eOrdet.value = ordlistaEn[slumptal][0];
    }

    eKnappRatta.addEventListener("click", rattaSvaret);
    function rattaSvaret() {
        var svaret = eSvaret.value;
        if (svaret == ordlistaEn[slumptal][1]) {
            eOutput.textContent = "Rätt svar";
        } else {
            eOutput.textContent = "Fel svar";
        }
    }

    eKnappNytt.addEventListener("click", nyFraga);
    function nyFraga() {
        eOrdet.textContent = ordetEn;
        eSvaret.value = "";
        eOutput.textContent = "";
        slumpaOrd();
    }

    slumpaOrd();
}