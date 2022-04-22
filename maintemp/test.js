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