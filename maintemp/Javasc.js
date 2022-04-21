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
let array = "<br/> Telefon: 24220956~ E-Mail: mail@hcandersenfestspillerne.dk~ Adresse: Kanalvej 154C~ Odense C";

var splitArray = array.split('~');
var finalString = splitArray.join('<br/><br/>');

document.getElementById('foot1').innerHTML = finalString;

function initMap() {
  const uluru = { lat: 55.418969064295474, lng: 10.376959240657936 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: uluru,
  });
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
let slideIndex1 = 1;
showSlides1(slideIndex1);

function plusSlides1(n) {
  showSlides1(slideIndex1 += n);
}

function currentSlide1(n) {
  showSlides1(slideIndex1 = n);
}

function showSlides1(n) {
  let i;
  let slides1 = document.getElementsByClassName("ourSlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides1.length) {slideIndex1 = 1}
  if (n < 1) {slideIndex1 = slides1.length}
  for (i = 0; i < slides1.length; i++) {
    slides1[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides1[slideIndex1-1].style.display = "block";
  dots[slideIndex1-1].className += " active";
}

let slideIndex2 = 1;
showSlides2(slideIndex2);

function plusSlides2(y) {
  showSlides2(slideIndex2 += y);
}

function currentSlide2(y) {
  showSlides2(slideIndex2 = y);
}

function showSlides2(y) {
  let x;
  let slides2 = document.getElementsByClassName("mySlides2");
  let dots2 = document.getElementsByClassName("dot2");
  if (y > slides2.length) {slideIndex2 = 1}    
  if (y < 1) {slideIndex2 = slides2.length}
  for (x = 0; x < slides2.length; x++) {
    slides2[x].style.display = "none";  
  }
  for (x = 0; x < dots2.length; x++) {
    dots2[x].className = dots2[x].className.replace(" active", "");
  }
  slides2[slideIndex2-1].style.display = "block";  
  dots2[slideIndex2-1].className += " active";
}