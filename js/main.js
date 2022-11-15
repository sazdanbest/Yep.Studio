$(document).ready(() => {

var options = {
    showCursor: false,
    strings: ['We create fun.', 'We create games.', 'We create future.'],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000,
    loop: true
};
var typed = new Typed('.autotext', options);

window.showNews = function(e) {
    let item = $(e.children[0].children[2]);
    item.slideDown();
}

window.hideNews = function(e) {
    let item = $(e.children[0].children[2]);
    item.slideUp();
}

$('a[href^="#"]').bind('click.smoothscroll',function (e) {
    e.preventDefault();

    let target  = this.hash,
        $target = $(target);

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top-200
    }, 900, 'swing', function () {
        window.location.hash = target-200;
        $('a[href="#' + $(this).attr('id') + '"] .navig').addClass('current');
    });
});

$(window).on('scroll', function(){
    let viewportTop = $(window).scrollTop();
    let viewportBottom = viewportTop + $(window).height();

    $('section').each(function(){
        let elementTop = $(this).offset().top;
        let elementBottom = elementTop + $(this).outerHeight();
        if(elementBottom-200 < viewportBottom){
            $('.navig').removeClass('current');
            $('a[href="#' + $(this).attr('id') + '"] .navig').addClass('current');
        }
    });
});
    
});

$(window).on('load',() => {
	$('#beforeLoad').fadeOut().end().delay(400).fadeOut('slow');
});