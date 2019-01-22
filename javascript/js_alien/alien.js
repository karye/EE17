/* https://www.smashingmagazine.com/2018/02/freebie-hand-drawn-space-icons/ */

/* När webbsidan laddats klart kör start() */
window.onload = start;

/* Start-delen */
function start() {
    
    /* Infoga en text på sidan när du klickar på knapp 1: Här kommer freebies Space ikoner */
    const elementFire = document.querySelector(".fire");
    console.log(elementFire);
    const elementIce = document.querySelector(".ice");
    console.log(elementIce);
    const elementAttack = document.querySelector(".attack");
    console.log(elementAttack);
    const elementOutput = document.querySelector(".output");
    console.log(elementOutput);
    
    /* Lyssna på klick-signalen */
    elementFire.addEventListener("click", infogaText);
    function infogaText() {
        elementOutput.textContent = "Booooooommmmm!!!!!";
    }

    /* Infoga en bild när du klickar på knapp 2 */
    elementIce.addEventListener("click", infogaBild);
    function infogaBild() {
        elementOutput.innerHTML = "<img src=\"../ikoner/alien-1-64x64.png\" alt=\"Alien\">";
    }

    /* Skjut in en till ikon för varje klick på knapp 3 */
    elementAttack.addEventListener("click", infogaBilder);
    function infogaBilder() {
        elementOutput.innerHTML += "<img src=\"../ikoner/alien-3-64x64.png\" alt=\"Alien\">";
    }

    /* Extra uppgift infoga slumpvis vald ikon */
    elementOutput.addEventListener("click", infogaSlumpBild);
    let ikoner = [
        "ikoner/alien-3-64x64.png",
        "ikoner/alien-5-64x64.png",
        "ikoner/alien-1-64x64.png",
        "ikoner/alien-ship-64x64.png",
        "ikoner/asteroid-2-64x64.png",
        "ikoner/astronaut-helmet-64x64.png",
        "ikoner/earth-64x64.png"];
        
    function infogaSlumpBild() {
        let slump = Math.ceil(Math.random() * 7 - 1);
        elementOutput.innerHTML += "<img src=\"../\"" + ikoner[slump] + "alt=\"Ikon\">";
    }
}