window.onload = start;

function start() {
    /* Element vi använder */
    const eOrdet = document.querySelector("#ordet");
    const eSvaret = document.querySelector("#svaret");
    const eKnappRatta = document.querySelector("#ratta");
    const eOutput = document.querySelector("#output");
    const eKnappNytt = document.querySelector("#nytt");

    /* En massa ord */
    let ordlistaEn = [
        "Fun",
        "Correct",
        "Easy",
        "Hungry",
        "Fast",
        "Car",
        "Library",
        "Cat",
        "Plane",
        "Holiday"
    ];
    let ordlistaSv = [
        "Kul",
        "Korrekt",
        "Lätt",
        "Hungrig",
        "Fort",
        "Bil",
        "Bibliotek",
        "Katt",
        "Flygplan",
        "Semester"
    ];

    /* För att komma ihåg ordet och översättningen */
    let ordetEn = "";
    let ordetSv = "";

    /* Slumpa fram ett ord */
    function slumpaOrd() {
        let slumptal = Math.ceil(Math.random() * 10 - 1);
        ordetEn = ordlistaEn[slumptal];
        ordetSv = ordlistaSv[slumptal];
    }

    /* Kör funktionen och skapa slumpade ord */
    slumpaOrd();
    console.log(ordetEn + " " +  ordetSv);
    eOrdet.textContent = ordetEn;

    eKnappRatta.addEventListener("click", rattaSvaret);
    function rattaSvaret() {
        let svaret = eSvaret.value;
        if (svaret == ordetSv) {
            eOutput.textContent = "Rätt svar";
        } else {
            eOutput.textContent = "Fel svar";
        }
    }

    eKnappNytt.addEventListener("click", nyFraga);
    function nyFraga() {
        slumpaOrd();
        eOrdet.textContent = ordetEn;
        eSvaret.value = "";
        eOutput.textContent = "";
    }
}