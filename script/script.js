$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 500){
            $('.up').addClass("show");
        }
        else{
            $('.up').removeClass("show");
        }
    });

    $('.up').click(function(){
        $('html').animate({scrollTop: 0});
    });

    $('.menu-btn').click(function(){
       $('.nav .ul').toggleClass("active");
       $('.menu-btn i').toggleClass("bi bi-list bi bi-x");
    });
})