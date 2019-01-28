window.onload = start;

function start() {
    /* Element vi jobbar med */
    const eKnapp = document.querySelector("button");
    const eRuta1 = document.querySelector("#ruta1");
    const eRuta2 = document.querySelector("#ruta2");
    const eBild = document.querySelector("img");

    /* Lista på spelkaraktärer */
    var listaKarak = [
        "Sonic",    // 0
        "Mario",    // 1
        "Vault Boy",  // 2
        "Gordon Freeman",    // 3
        "Zelda",    // 4
        "Lara Croft",    // 5
        "Sam & Max",     // 6
        "Prince of Persia",  // 7
        "Duke Nukem",   // 8
        "The Lemmings"     // 9
    ];

    var listaBilder = [
        "https://cdn.empireonline.com/jpg/50/0/0/640/480/aspectfit/0/0/0/0/0/0/c/features/560ec14650e6c513721c3993/sonic-hedgehog-nintendo.jpg",
        "https://cdn.empireonline.com/jpg/50/0/0/640/480/aspectfit/0/0/0/0/0/0/c/features/560ec14650e6c513721c3993/mario-smash-bros.jpg",
        "https://cdn.empireonline.com/jpg/50/0/0/640/480/aspectfit/0/0/0/0/0/0/c/features/560ec14650e6c513721c3993/fallout-vault-boy.jpg",
        "https://cdn.empireonline.com/jpg/50/0/0/640/480/aspectfit/0/0/0/0/0/0/c/features/560ec14650e6c513721c3993/gordon-freeman-half-life.jpg",
        "https://cdn.empireonline.com/jpg/50/0/0/640/480/aspectfit/0/0/0/0/0/0/c/features/560ec14650e6c513721c3993/link-legend-zelda.jpg",
        "https://cdn.empireonline.com/jpg/50/0/0/640/480/aspectfit/0/0/0/0/0/0/c/features/560ec14650e6c513721c3993/lara-croft-tomb-raider.jpg",
        "https://cdn.empireonline.com/jpg/50/0/0/640/480/aspectfit/0/0/0/0/0/0/c/features/560ec14650e6c513721c3993/sam-max-hit-road.jpg",
        "https://cdn.empireonline.com/jpg/50/0/0/640/480/aspectfit/0/0/0/0/0/0/c/features/560ec14650e6c513721c3993/prince-persia.jpg",
        "https://cdn.empireonline.com/jpg/50/0/0/640/480/aspectfit/0/0/0/0/0/0/c/features/560ec14650e6c513721c3993/duke-nukem.jpg",
        "https://cdn.empireonline.com/jpg/50/0/0/640/480/aspectfit/0/0/0/0/0/0/c/features/560ec14650e6c513721c3993/lemmings-game.jpg"
    ]

    /* Lyssna på knappen */
    eKnapp.addEventListener("click", slumpaTal);

    function slumpaTal() {
        /* Skapa ett slumptal 1-10*/
        var slumptal = Math.ceil(Math.random() * 10 - 1);

        /* Skriv ut slumptalet i rutan */
        /* Rutans värde skall vara slumptalet */
        eRuta1.value = slumptal;
        eRuta2.value = listaKarak[slumptal];
        eBild.src = listaBilder[slumptal];
    }
}