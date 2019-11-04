window.onload = start;

function start() {
    const eRuta = document.querySelector("input");
    const eKnapp = document.querySelector("button");
    const eTextRuta = document.querySelector("textarea");
    
    eKnapp.addEventListener("click", ärMyndig);

    function ärMyndig() {
        var födelsedag = eRuta.value;

        ålder = räknaUtÅlder(födelsedag);
        eTextRuta.value = ålder;

        if (ålder < 18) {
            eTextRuta.value = "Din ålder är " + ålder + ". Du är inte myndig.";
        } else {
            eTextRuta.value = "Din ålder är " + ålder + ". Du är myndig!";
        }
    }

    function räknaUtÅlder(datum) {
        console.log(datum);
        
        var födelsedag = new Date(datum);
        console.log(födelsedag);
        
        var skillnad = Date.now() - födelsedag.getTime();
        console.log(skillnad);
        
        var ålder = new Date(skillnad);
        return Math.abs(ålder.getUTCFullYear() - 1970);
    }

}