/* 
 * Skapa ett spamskydd
 * Två slumptal presenteras
 * Användaren räknar ut summan
 */

/* Kör koden när webbsidan laddats klart */
window.onload = start;
function start() {

    /* Ta tag i elementen som vi vill jobba med */
    const eFragan = document.querySelector('.fragan');
    const eOutput = document.querySelector('.output');
    /* Ta tag i knappen */
    const eKnappen = document.querySelector(".knappen");

    /* Skapar globala variabler */
    var tal1, tal2;

    /* Slumpa fram två tal */
    tal1 = Math.ceil(Math.random() * 5);
    tal2 = Math.ceil(Math.random() * 10);

    /* Skriv ut frågan */
    /* Tex "Vad är 2+3?"; */
    eFragan.textContent = "Vad är " + tal1 + " + " + tal2 + "?";

    /* Aktivera knappen, dvs lyssna på knappen */
    /* Lyssna på knappen */
    eKnappen.addEventListener("click", spamSkydd);

    function spamSkydd() {
        /* Testa att det funka att klicka på knappen */
        console.log("spamSkydd anropat!");

        /* Läs in det som användaren skriver i textrutan summa */
        /* 1. Ta tag i textrutan */
        const eSvar = document.querySelector(".svar");
        /* 2. Läs av innehållet */
        var svar = Number(eSvar.value);
        console.log(svar);

        /* Jämför summa med svaret */
        if (svar == (tal1 + tal2)) {
            console.log("Rätt!");

            /* Skriv ut svar: "Rätt svar, du är en människa!" */
            eOutput.value = "Rätt svar, du är en människa!";
        } else {
            console.log("Fel!");

            /* Skriv ut svar: "Fel svar, du en robot eller en människa som räknar fel!" */
            eOutput.value = "Fel svar, du en robot eller en människa som räknar fel!";
        }
    }
}