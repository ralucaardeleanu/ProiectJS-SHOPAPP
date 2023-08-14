let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

//open login page
function openWindowLogIn() {
  var myWindow = window.open("login2.html", "_self");
}

function openWindowHome() {
  var myWindow = window.open("home.html", "_self");
}

function openWindowNewslwtter() {
  var myWindow = window.open("newsletter.html", "_self");
}
const formOpenBtn = document.querySelector("#open-form"),
  main = document.querySelector(".main"),
  formClose = document.querySelector(".form-close"),
  signUp = document.querySelector("#sign-up");
pwShowHide = document.querySelectorAll(".pw-hide");

formOpenBtn.addEventListener("click", () => main.classList.add("show"));
formClose.addEventListener("click", () => home.classList.add("show"));
