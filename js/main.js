$("#hamburger").click(function () {
    $(this).toggleClass("active");
    $(".hamburger-menu").toggleClass("open");
});
$(".js_smooth-scroll").click(function (){
  const clicked = this;
  const scrollTargetSelector = $(this).data("scroll-target");
  var offset = $(scrollTargetSelector).offset().top;
  $('html.body').animate({
    scrollTop: offset});
});

const openbuttonClick = document.getElementById("modal-open");
const closebuttonClick = document.getElementById("modal-close");
openbuttonClick.addEventListener('click', () => {
  document.getElementById("modal-window").style.visibility = "visible";
  document.body.style.position = 'fixed';
  document.body.style.top = `-${window.scrollY}px`;
});
closebuttonClick.addEventListener('click', () => {
  document.getElementById("modal-window").style.visibility
    = "hidden";
  document.body.style.position = "";
  document.body.style.top = "";
});