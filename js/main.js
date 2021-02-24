$("#hamburger").click(function () {
    $(this).toggleClass("active");
    $(".hamburger-menu").toggleClass("open");
});
$(".concept-scroll").click(function () {
  var concept = $(".concept").offset().top;
  $('html, body').animate({ scrollTop: concept });
});
$(".menu-scroll").click(function () {
  var menu = $(".menu").offset().top;
  $('html,body').animate({ scrollTop: menu });
});
$(".shop-info-scroll").click(function () {
  var shopinfo = $(".shop-info").offset().top;
  $('html,body').animate({ scrollTop: shopinfo });
});

const modalmenu = document.getElementsByClassName(".modal-menu");
