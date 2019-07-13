$(window).on("load", () => {
    $('.slot div').addClass('join-us');
})

$(window).scroll(function(){
    if ($(window).scrollTop() >= $('.header-wrapper').height()/2) {
     
        $('.header-wrapper').addClass('fixed-header');
        $('.resizer').css('display','block');
    }
    else {
        $('.header-wrapper').removeClass('fixed-header');
        $('.resizer').css('display','none');
    }
});
