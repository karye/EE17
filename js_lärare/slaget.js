/* 
I den här uppgiften ska du skapa en slagsmålssimulator med två inblandade slagskämpar.
Simulatorn ska hålla reda på slagskämparnas namn och hp.
Simulatorn körs så länge båda slagskämparna har hp kvar.
Varje gång loopen körs – varje “runda” – så ska slagskämpe A slå B, och B ska slå A.
Ett slag innebär att motståndaren blir av med en slumpmässig mängd hp.
När striden är slut, presentera vinnaren – eller om båda slagskämparna kom under 0 samtidigt, förklara att det blev oavgjort.
VIKTIGT: Om du får mycket hjälp av en kamrat, skriv det i dina kommentarer!
*/

window.onload = init;

function init() {
    var hp1 = 100;
    var hp2 = 100;
    var namn1;
    var namn2;

    document.querySelector('#knapp').addEventListener('click', runda);

    function runda() {
        namn1 = document.querySelector('#spelare1').value;
        namn2 = document.querySelector('#spelare2').value;

        slump1 = Math.ceil(Math.random() * 5) + 5;
        slump2 = Math.ceil(Math.random() * 5) + 5;

        hp1 -= slump1;
        hp2 -= slump2;

        document.querySelector('#resultat').insertAdjacentHTML("beforeend", namn1 + ' har ' + hp1 + ' poäng, ' + namn2 + ' har ' + hp2 + ' poäng.<br>');

        if (hp1 <= 0) {
            document.querySelector('#resultat').insertAdjacentHTML("beforeend", 'Spelare ' + namn2 + ' har vunnit!<br>');
            document.querySelector('#knapp').removeEventListener('click', runda);
        }
        if (hp2 <= 0) {
            document.querySelector('#resultat').insertAdjacentHTML("beforeend", 'Spelare ' + namn1 + ' har vunnit!<br>');
            document.querySelector('#knapp').removeEventListener('click', runda);
        }
    }
}