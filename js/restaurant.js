var lastScroll = 40;

jQuery(document).ready(function ($) {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 100) {
      $(".navbar-top").addClass("sticky");
    } else if (scrollY < 20) {
      $(".navbar-top").removeClass("sticky");
    }
    lastScroll = scroll;
  });
});
