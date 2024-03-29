
//Carrocel
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

//Movimento
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

//Menu lateral

function menuHamburguer() {
    var menu = document.getElementById("menu-lateral");
    if (menu.style.right === "-660px") {
        menu.style.right = "0";
    } else {
        menu.style.right = "-660px";
    }
}






