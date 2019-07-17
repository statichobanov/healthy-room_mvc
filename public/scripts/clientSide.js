function headerEvents () {
    $(window).on("load", () => {
        $('.slot div').addClass('join-us');
        $('.slot').removeClass('transperent');
    });
    
    $(document).on('scroll', () => {
        if ($(window).scrollTop() >= $('.header-wrapper').height()/2) {
            $('.header-wrapper').addClass('fixed-header');
            $('.resizer').removeClass('hidden'); // empty div under header resizing the fixed header
        }
        else {
            $('.header-wrapper').removeClass('fixed-header');
            $('.resizer').addClass('hidden'); 
        }
    }).on('click', '#join-us-btn', () => {
        $('#join-us-form').fadeIn();
        
    });
}

function productPageEvents () {
    $(document).ready(() => {
        var swiper = new Swiper('.swiper-container', {
            slidesPerView: 3,
            centeredSlides: true,
            spaceBetween: 30,
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
        });
        swiper.init();
    });
}

headerEvents();
productPageEvents();


