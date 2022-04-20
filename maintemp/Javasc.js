let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3500);
}
let array = "Telefon: 24220956~E-Mail: mail@hcandersenfestspillerne.dk~ Adresse: Kanalvej 154C~ Odense C";

var quizArray = array.split('~');
var finalString = quizArray.join('<br/>');

document.getElementById('foot1').innerHTML = finalString;

// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: 55.418969064295474, lng: 10.376959240657936 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("foot1"), {
    zoom: 4,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

window.initMap = initMap;

const dropdownBtn = document.querySelector(".dropdown_button");
const dropdownMenu = document.querySelector(".dropdown_menu");

dropdownBtn.addEventListener('click',() => {
dropdownMenu.classList.toggle('hide');
})

window.addEventListener("click", (e) => {
if (e.target !== dropdownBtn) {
    dropdownMenu.classList.add("hide");
}
});
