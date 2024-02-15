
$(document).ready(function () {
    $("#banner").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000, // Tempo em milissegundos
        autoplayHoverPause: true,
        dots: false,
        nav: false
    })
})


//document.addEventListener("DOMContentLoaded", function () {
  //  window.addEventListener("scroll", function () {
  //      var element1 = document.querySelector(".c1");
  //      var element2 = document.querySelector(".c2");
   //     var element3 = document.querySelector(".c3");
   //     var element4 = document.querySelector(".c4");
  //      var position = element1.getBoundingClientRect();
  //      var position = element2.getBoundingClientRect();
  //      var position = element3.getBoundingClientRect();
   //     var position = element4.getBoundingClientRect();

        // Verifica se o elemento está no viewport
   //     if (position.top < window.innerHeight && position.bottom >= 0) {
 //           element1.classList.add("animated");
 //           element2.classList.add("animated");
  //          element3.classList.add("animated");
  //          element4.classList.add("animated");
 //       }
 //   });
//});

document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        // Lista de classes dos elementos alvos
        var targetClasses = [".c1", ".c2", ".c3", ".c4"];

        // Itera sobre cada classe
        targetClasses.forEach(function(className) {
            var element = document.querySelector(className);
            var position = element.getBoundingClientRect();

            // Verifica se o elemento está no viewport
            if (position.top < window.innerHeight && position.bottom >= 0) {
                element.classList.add("animated");
            }
        });
    });
});





