window.onload = start;

function start() {
    
    function hamtaGeo() {
        navigator.geolocation.getCurrentPosition(svar, fel);

        function svar(position) {
            alert("Din position är latitude=" + position.coords.latitude + " och longitude=" + position.coords.longitude);
        }
        function fel(meddelande) {
            alert("Något blev fel: " + meddelande);
        }
    }

}