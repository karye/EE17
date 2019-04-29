window.onload = start;

function start() {
    const eTextruta = document.querySelector("textarea");
    const eKnapp = document.querySelector("button");
    const eLänk = document.querySelector("a");
    
    eKnapp.addEventListener("click", hämtaPosition);
    function hämtaPosition() {
        navigator.geolocation.getCurrentPosition(svar, fel);

        function svar(position) {
            var lat = position.coords.latitude;
            var lon = position.coords.longitude;

            eTextruta.value = `Din position är latitude=${lat} och longitude=${lon}`;
            eLänk.href = `http://maps.google.com/?q=${lat},${lon}`;
        }
        function fel(meddelande) {
            eTextruta.value = "Något blev fel: " + meddelande;
        }
    }

}