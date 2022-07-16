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
})