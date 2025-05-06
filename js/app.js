$(document).ready(function() {
    /* Smoth scroll */
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();
        var $this = $(this),
            blockId = $this.data("scroll"),
            blockOffset = $(blockId).offset().top

        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);
    });

    // Projects 
    $('.projects__btn__block').on('click', function(event) {
        event.preventDefault();
        if ($(this).hasClass('clicked')) {
            $('.projects__item.hidden').css('display', 'none')
            $(this).removeClass('clicked')
            $('.projects__btn__inner').html('Показать еще');
        } else {
            $('.projects__item.hidden').css('display', 'block')
            $(this).addClass('clicked')
            $('.projects__btn__inner').html('Скрыть');
        }
    });

    // Form
    $('.tasks-files_input').on('click', function() {
        $('#technical_task').click()
    });

    // Slider
    $('[data-slider]').slick({
        arrows: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
    });
    $('.certificates--prev').on('click', function() {
        $('[data-slider]').slick('slickPrev');
    });
    $('.certificates--next').on('click', function() {
        $('[data-slider]').slick('slickNext');
    });
});