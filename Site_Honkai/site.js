window.addEventListener("DOMContentLoaded", function() {

    var form = document.querySelector("form");
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var messageInput = document.getElementById("message");


    form.addEventListener("submit", function(event) {
event.preventDefault(); 


    var name = nameInput.value;
    var email = emailInput.value;
    var message = messageInput.value;


    console.log("Nome:", name);
    console.log("Email:", email);
    console.log("Mensagem:", message);


    nameInput.value = "";
    emailInput.value = "";
    messageInput.value = "";
    });
});

$(document).ready(function(){
    $('#carrossel_imagens').slick({
        autoplay: true,
        arrows: false,
        autoplaySpeed: 1000,
    });

    $('.menu_hamburger').click(function(){
        $('nav').slideToggle();
    })
})
var carousel = document.getElementById('musicCarousel');
var slides = carousel.getElementsByClassName('carousel-item');
var currentIndex = 0;

function showSlide(index) {
  if (index < 0 || index >= slides.length) {
    return;
  }

  for (var i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active');
  }

  slides[index].classList.add('active');
  currentIndex = index;
}

function previousSlide() {
  var newIndex = currentIndex - 1;
  if (newIndex < 0) {
    newIndex = slides.length - 1;
  }
  showSlide(newIndex);
}

function nextSlide() {
  var newIndex = currentIndex + 1;
  if (newIndex >= slides.length) {
    newIndex = 0;
  }
  showSlide(newIndex);
}