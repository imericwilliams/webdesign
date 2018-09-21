var images = ["morocco.jpg"]


function newCountry() {
    var random = Math.floor(Math.random() * (images.length));

    document.getElementById("morocco").innerHTML = images[random];
    }
