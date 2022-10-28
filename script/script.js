$(document).ready(function () {
    $('html').animate({ scrollTop: 0 }, 'fast');
    $(window).scroll(function () {
        if (this.scrollY > 500) {
            $('.up').addClass("show");
        }
        else {
            $('.up').removeClass("show");
        }
    });

    $('.up').click(function () {
        $('html').animate({ scrollTop: 0 });
    });

    $('.menu-btn').click(function () {
        $('.nav .ul').toggleClass("active");
        $('.menu-btn i').toggleClass("bi-list bi-x");
    });

    let toogle = 0
    $('#theme').click(function () {
        $('#theme').toggleClass("bi-sun bi-moon").animate(1000);
        if (toogle === 0) {
            // $(this).animate({ backgroundText: "black" }, 1000);
            document.documentElement.style.setProperty('--background-profil', 'aliceblue',);
            document.documentElement.style.setProperty('--background-home', 'white');
            document.documentElement.style.setProperty('--main-text', 'black');
            document.documentElement.style.setProperty('--secondary-text', 'darksalmon');
            toogle++;
        }
        else {
            document.documentElement.style.setProperty('--background-profil', 'black');
            document.documentElement.style.setProperty('--background-home', '#191919');
            document.documentElement.style.setProperty('--main-text', 'white');
            document.documentElement.style.setProperty('--secondary-text', 'royalblue');

            toogle--;
        }
    })

    $('#accueil_decouvrir').click(function () {
        $('#accueil').hide(100);
        $(".portfolio").show(500);
        var lebody = document.getElementById("body");
        lebody.style.overflow = "auto";
    })

    let nom = new Typed(".accueil_nom", {
        strings: ["Alexandre OURSEL"],
        backSpeed: 20,
        typeSpeed: 70,
        loop: false,
        startDelay: 200,
        showCursor: false
    })
    let metier = new Typed(".accueil_metier", {
        strings: ["front ", "back"],
        backSpeed: 20,
        typeSpeed: 70,
        loop: true,
        startDelay: 300,
        showCursor: false
    });
        $(".accueil_msg").show(500);
    window.setTimeout(masquernotification, 12000);
    // var now = new Date();
    // if (now.getHours() < 19) { document.getElementById("accueil_heure").innerHTML = "Bonjour" }
    // else {
    //     document.getElementById("accueil_heure").innerHTML = "Bonsoir"
    // }
})
function masquernotification(){
   $(".accueil_msg").hide(500);
}