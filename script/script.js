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
        $('.menu-btn i').toggleClass("fa-bars fa-times");
    });

    let toogle = 0
    $('#theme').click(function () {
        $('#theme').toggleClass("fa-lightbulb fa-moon").animate(1000);
        if (toogle === 0) {
            // $(this).animate({ backgroundText: "black" }, 1000);
            document.documentElement.style.setProperty('--background-profil', 'aliceblue',);
            document.documentElement.style.setProperty('--background-home', 'white');
            document.documentElement.style.setProperty('--main-text', 'black');
            toogle++;
        }
        else {
            document.documentElement.style.setProperty('--background-profil', 'black');
            document.documentElement.style.setProperty('--background-home', '#191919');
            document.documentElement.style.setProperty('--main-text', 'white');
            toogle--;
        }
    })

    $('#accueil_decouvrir').click(function () {
        $('#accueil').hide(100);
        $(".portfolio").show(300);
        var lebody = document.getElementById("body");
        lebody.style.overflow = "auto";
        $(this).animate({ scrollTop: 0 });
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
    $(".accueil_notif").show(500);
    window.setTimeout(masquernotification, 10000);
    // var now = new Date();
    // if (now.getHours() < 19) { document.getElementById("accueil_heure").innerHTML = "Bonjour" }
    // else {
    //     document.getElementById("accueil_heure").innerHTML = "Bonsoir"
    // }

    function masquernotification() {
        $(".accueil_notif").hide(400);
    }

    $('#params').click(function () {
        var x = document.getElementById("parametre");
        if (x.style.display === "none") {
            $(".parametre").show(100);
        } else {
            $(".parametre").hide(100);
        }
    })

    $('#theme_rouge').click(function () {
        document.documentElement.style.setProperty('--secondary-text', 'red');
    })

    $('#theme_vert').click(function () {
        document.documentElement.style.setProperty('--secondary-text', 'lime');
    })

    $('#theme_bleu').click(function () {
        document.documentElement.style.setProperty('--secondary-text', 'rgb(0, 128, 255)');
    })
})