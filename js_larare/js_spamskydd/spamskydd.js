/* 
 * Skapa ett spamskydd
 * Två slumptal presenteras
 * Användaren räknar ut summan
 */

/* Kör koden när webbsidan laddats klart */
window.onload = start;

function start() {

    /* Skapar globala variabler */
    var tal1, tal2;

    /* Slumpa fram två tal */
    tal1 = ???;
    tal2 = ???;

    /* Skriv ut frågan */
    /* 1. Ta tag i elementet som vi vill jobba med */
    const elementFragan = ???;
    /* 2. Skriv ut */
    /* eleFragan.textContent = Tex "Vad är 2+3?"; */
    elementFragan.textContent = ???;

    /* Aktivera knappen, dvs lyssna på knappen */
    /* 1. Ta tag i knappen */
    const elementKnappen = ???;
    /* 2. Lyssna på knappen */
    elementKnappen.addEventListener(???);

    function spamSkydd() {
        /* Testa att det funka att klicka på knappen */
        console.log("spamSkydd anropat!");

        /* Läs in det som användaren skriver i textrutan summa */
        /* 1. Ta tag i textrutan */
        const elementSvar = ???;
        /* 2. Läs av innehållet */
        var svar = Number(???);
        console.log(svar);

        /* Jämför summa med svaret */
        if (svar ??? (tal1 + tal2)) {
            console.log("Rätt!");

            /* Skriv ut svar: "Rätt svar, du är en människa!" */

        } else {
            console.log("Fel!");

            /* Skriv ut svar: "Fel svar, du en robot eller en människa som räknar fel!" */
        }
    }
}