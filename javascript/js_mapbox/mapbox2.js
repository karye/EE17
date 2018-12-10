mapboxgl.accessToken = 'pk.eyJ1Ijoia2FyeWUiLCJhIjoiY2pwOXRtbWc1MGdmNjNwc2JmdGxzeDR5byJ9.whp8f2Ttws57ctAf_stuag';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/karye/cjpdr7j6923d82smoeealdqeu', // stylesheet location
    center: [18.0465, 59.3373], // starting position [lng, lat]
    zoom: 13 // starting zoom
});

/* En lista på positioner */
let positioner = [
    [18.0465, 59.3373],
    [18.051522, 59.343276],
    [18.0479766, 59.3386843],
    [18.045847, 59.3414021],
    [18.0461658, 59.339032]
];
/* Lista på beskrivningar till positionerna */
let beskrivningar = [
    "NTI Stockholm",
    "Burger King",
    "Flippin' Burgers",
    "Restaurang Kinamuren",
    "ICA Supermarket Sabbatsberg"
];

/* Loopa igenom listan och placera ut markers på kartan */
/* for (let index = 0; index < positioner.length; index++) {
    let popup = new mapboxgl.Popup({ // Här skapar vi en popup
            offset: 25
        })
        .setText(beskrivningar[index]);

    let marker = new mapboxgl.Marker() // Här skapar vi en marker
        .setLngLat(positioner[index]) // Här ger vi markern en position
        .setPopup(popup)
        .addTo(map); // Här lägger vi till markern på kartan
} */

let lista = [
    [18.0465, 59.3373, "NTI Stockholm"],
    [18.051522, 59.343276, "Burger King"],
    [18.0479766, 59.3386843, "Flippin' Burgers"],
    [18.045847, 59.3414021, "Restaurang Kinamuren"],
    [18.0461658, 59.339032, "ICA Supermarket Sabbatsberg"]
];

let popup, marker;
for (const key in lista) {
    popup = new mapboxgl.Popup({ // Här skapar vi en popup
        offset: 25
    })
    .setText(lista[key][2]);

    marker = new mapboxgl.Marker() // Här skapar vi en marker
    .setLngLat(lista[key]) // Här ger vi markern en position
    .setPopup(popup)
    .addTo(map); // Här lägger vi till markern på kartan
}