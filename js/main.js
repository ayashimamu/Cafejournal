$("#hamburger").click(function () {
    $(this).toggleClass("active");
    $(".hamburger-menu").toggleClass("open");
});
$(".js_smooth_scroll").click(function () {
  const clicked = this;
  const scrollTargetSelector = $(this).data("scroll-target");
  var offset = $(scrollTargetSelector).offset().top;
  $('html,body').animate({
    scrollTop: offset
  });
});

let scrolledPos
const openbuttonClick= Array.from(document.querySelectorAll(".menu-button"));
openbuttonClick.forEach((button) => {
  button.addEventListener('click', () => {
   scrolledPos = window.scrollY;
    document.getElementById
    ("modal-window").style.visibility = "visible";
    document.body.style.top = `-${window.scrollY}px`;
    document.body.style.position = 'fixed';
  })
});
const closebuttonClick = document.getElementById("modal-close");
closebuttonClick.addEventListener('click', () => {
  document.getElementById("modal-window").style.visibility
    = "hidden";
  document.body.removeAttribute("style");
  window.scrollTo(0, scrolledPos);
  console.log(scrolledPos);
});
$(function () {
  $("#eyecatch-slide").slick({
    autoplay: true,
    autoplayspeed: 1000,
    speed: 3000,
    dots: false,
    fade: true,
    arrows: false,
  });
});