const toggleButton = document.getElementsByClassName("toggle-button")[0];

const navbarItems = document.getElementsByClassName("navbar-items")[0];

toggleButton.addEventListener("click", () => {
  navbarItems.classList.toggle("active");
});

$(document).ready(function () {
  $(".btn").click(function () {
    $("nav").toggleClass("show");
    $(".items").toggleClass("show");
    $("ul li").toggleClass("hide");
  });
});
