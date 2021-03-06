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


const openbuttonClick= Array.from(document.querySelectorAll(".menu-button"));
openbuttonClick.forEach((button) => {
  button.addEventListener('click', () => {
    document.getElementById("modal-window").style.visibility = "visible";
    document.body.style.position = 'fixed';
    document.body.style.top = `-${window.scrollY}px`;

  })
});
const closebuttonClick = document.getElementById("modal-close");
closebuttonClick.addEventListener('click', () => {
  document.getElementById("modal-window").style.visibility
    = "hidden";
  document.body.style.position = "";
  document.body.style.top = "";
});