/*Name this external file gallery.js*/

function upDate(previewPic) {
  /* 
    1) Cambiar la imagen de fondo del div con id="image" a la fuente de la imagen previa
    2) Cambiar el texto del div con id="image" al texto alternativo (alt) de la imagen previa 
  */
  let imageDiv = document.getElementById("image");
  imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
  imageDiv.innerHTML = previewPic.alt;
}

function unDo() {
  /*
    1) Restaurar la imagen de fondo original del div con id="image"
    2) Restaurar el texto original del div
  */
  let imageDiv = document.getElementById("image");
  imageDiv.style.backgroundImage = "url('')"; // o a la url original si la sabes, ej: "url('images/original.jpg')"
  imageDiv.innerHTML = "Hover over an image below to display here.";
}
