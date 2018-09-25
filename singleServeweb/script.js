var images = ("images/australia2.jpg", "images/france.jpg", "images/greece.jpg", "images/india2.jpg", "images/ireland.jpg", "images/italy2.jpg", "images/japan.jpg", "images/mexico.jpg", "images/morocco.jpg", "images/netherlands.jpg", "images/southAfrica.jpg", "images/spain.jpg","images/sriLanka.jpg", "images/thailand.jpg", "images/turkey.jpg", "images/unitedStates.jpg")
  function choosePic() {
      var random = Math.floor(Math.random() * (images.length));
      document.getElementById("countries").innerHTML = images[random];
      }
