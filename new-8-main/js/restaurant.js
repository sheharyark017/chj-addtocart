var lastScroll = 40;

jQuery(document).ready(function($) {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll > 100) {
            $(".navbar-top").addClass("sticky");
        } else if (scrollY < 20) {
            $(".navbar-top").removeClass("sticky");
        }
        lastScroll = scroll;
    });
});

const page = document.querySelector('.page');

console.log(page);

const products = document.querySelector

if(page.classList.contains('col-9')){
    document.querySelectorAll('.product-col').style.width = '50%';
    // alert('helo')
}

// console.log(page.classList.contains('col-9'));