mapboxgl.accessToken = 'pk.eyJ1Ijoia2FyeWUiLCJhIjoiY2pwOXRtbWc1MGdmNjNwc2JmdGxzeDR5byJ9.whp8f2Ttws57ctAf_stuag';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/karye/cjpdr7j6923d82smoeealdqeu', // stylesheet location
    center: [17.90, 59.36], // starting position [lng, lat]
    zoom: 12 // starting zoom
});

var marker1 = new mapboxgl.Marker() // Här skapar vi en marker
    .setLngLat([17.90, 59.36]) // Här ger vi markern en position
    .addTo(map); // Här lägger vi till markern på kartan

var popup1 = new mapboxgl.Popup() // Här skapar vi en popup
    .setLngLat([17.905, 59.365]) // Här ger vi popupen en position
    .setHTML("<p>Min gata</p>") // Här skriver vi in texten
    .addTo(map); // Här infogar vi popupen till kartan

var popup2 = new mapboxgl.Popup({ // Här skapar vi en popup
        offset: 25
    })
    .setHTML("<p>Här bor jag</p>"); // Här skriver vi in texten

var marker2 = new mapboxgl.Marker() // Här skapar vi en marker
    .setLngLat([17.91, 59.35]) // Här ger vi markern en position
    .setPopup(popup2)
    .addTo(map); // Här lägger vi till markern på kartan