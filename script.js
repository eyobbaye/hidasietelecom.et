const copyDate = new Date();
let copyRightYear = copyDate.getFullYear();
let allvalues = document.querySelectorAll(".value");
console.log("date");

// NAVBAR MENU
const navbarToggle = document.querySelector(".navbar-toggle");
const navbarMenu = document.querySelector(".navbar-menu");

navbarToggle.addEventListener("click", () => {
  navbarToggle.classList.toggle("active");
  navbarMenu.classList.toggle("active");
});
//start forwach loop for displaying the animated values
allvalues.forEach((singleValue) => {
  const endValue = parseInt(singleValue.getAttribute("data-value"), 10);
  const duration = Math.floor(2000 / endValue);
  let startValue = 0;
  const intervalId = setInterval(() => {
    startValue += 1;
    singleValue.textContent = startValue.toString();
    if (startValue === endValue) {
      clearInterval(intervalId);
    }
  }, duration);
});

const year = document.querySelector("#copy-right-year");
year.innerHTML = copyRightYear;

// Testimonials

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
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

function autoSlide() {
  slideIndex++;
  showSlides(slideIndex);
  setTimeout(autoSlide, 2000);
}

autoSlide();
