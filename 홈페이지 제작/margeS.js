let rollmain = document.querySelector(".main").offsetTop;
let rollinfo = document.querySelector(".gameinfo").offsetTop;
let rollevent = document.querySelector(".event").offsetTop;
let rollfooter = document.querySelector("footer").offsetTop;
$(function() {
    $(window).scroll(function() {
        let scroll = getCurrentScroll();
        if (scroll < rollinfo) {
            $('.header_p1').css('color', '#815236');
            $('.header_p2').css('color', 'black');
            $('.header_p3').css('color', 'black');
            $('.bottom').css('position', 'fixed');
        } else if ( scroll >= rollinfo && scroll < rollevent) {
            $('.header_p2').css('color', '#815236');
            $('.header_p1').css('color', 'black');
            $('.header_p3').css('color', 'black');
            $('.bottom').css('position', 'fixed');
        } else if (scroll >= rollevent && scroll < rollfooter) {
            $('.header_p3').css('color', '#815236');
            $('.header_p1').css('color', 'black');
            $('.header_p2').css('color', 'black');
            $('.bottom').css('position', 'fixed');
        } else if (scroll >= rollfooter) {
            $('.bottom').css('position', 'relative');
        }
    });
    function getCurrentScroll() {
        return window.pageYOffset || document.documentElement.scrollTop;
    }
});