// slider
$('.main-carousel').flickity({
    autoPlay: true,
    wrapAround: true,
});

// click categories
$(".scrollto").click(function(event) {
    event.preventDefault();
    var defaultAnchorOffset = 0;
    var anchor = $(this).attr('data-attr-scroll');
    var anchorOffset = $('#'+anchor).attr('data-scroll-offset');
    if (!anchorOffset)
        anchorOffset = defaultAnchorOffset;
    $('html,body').animate({
        scrollTop: $('#'+anchor).offset().top - anchorOffset
    }, 500);
});


// scrollupBtn
var $scrollbtn = $(".scrollup-btn");
function scrollupBtnShow() {
    var scrollTop = $(window).scrollTop();
    if (scrollTop >= $(window).height() / 2) {
        $scrollbtn.removeClass("hide");
    } else {
        $scrollbtn.addClass("hide");
    }
}
scrollupBtnShow();
$(window).scroll(function () {
    scrollupBtnShow();
});
$scrollbtn.click(function () {
    $("html, body").stop().animate({
        scrollTop: 0
    },500)
});