var slide = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slider");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slide++;
  if (slide > slides.length) {
    slide = 1
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slide - 1].style.display = "block";
  dots[slide - 1].className += " active";
  setTimeout(showSlides, 7000); // Change image every 7 seconds
}