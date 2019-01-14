/* 
I den här uppgiften ska du skapa en slagsmålssimulator med två inblandade slagskämpar.
Simulatorn ska hålla reda på slagskämparnas namn och hp.
Simulatorn körs så länge båda slagskämparna har hp kvar.
Varje gång loopen körs – varje “runda” – så ska slagskämpe A slå B, och B ska slå A.
Ett slag innebär att motståndaren blir av med en slumpmässig mängd hp.
När striden är slut, presentera vinnaren – eller om båda slagskämparna kom under 0 samtidigt, förklara att det blev oavgjort.
VIKTIGT: Om du får mycket hjälp av en kamrat, skriv det i dina kommentarer!
*/

window.onload = start;

/* Koden som körs från start */
function start() {
    /* Alla element vi behöver komma åt */
    const eInput1 = document.querySelector("#spelare1");
    const eInput2 = document.querySelector("#spelare2");
    const eP = document.querySelector("#resultat");
    const eButton = document.querySelector("#knapp");

    /* Ange hp vid start */
    let hp1 = 100;
    let hp2 = 100;

    eButton.addEventListener("click", runda);
    function runda() {
        /* Läs in namnen på spelarna */
        let spelare1 = eInput1.value;
        let spelare2 = eInput2.value;
        console.log("spelare1 =" + spelare1);
        console.log("spelare2 =" + spelare2);

        /* Slumpa ett tal mellan 1 och 10 */
        let slumptal1 = Math.ceil(Math.random() * 10 + 1);
        let slumptal2 = Math.ceil(Math.random() * 10 + 1);

        /* Drav slumptal från hp */
        hp1 = hp1 - slumptal1;
        hp2 = hp2 - slumptal2;

        /* Skriv resultatet av slaget */
        eP.innerHTML += spelare1 + " förlorar med " + slumptal1 + " har nu " + hp1 + ", " + spelare2 + " förlorar med " + slumptal2 + " har nu " + " har " + hp2 + "<br>";

        /* Vem har vunnit? */
        if (hp1 <= 0 && hp2 > 0) {
            eP.innerHTML += spelare2 + " har vunnit!";
        } else {
            if (hp2 <= 0 && hp1 > 0) {
                eP.innerHTML += spelare1 + " har vunnit!"; 
            } else {
                if (hp1 == 0 && hp2 == 0) {
                    eP.innerHTML += "Matchen är oavgjord!";
                }
            }
        }
    }
}