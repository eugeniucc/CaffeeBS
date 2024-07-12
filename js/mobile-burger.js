const burgerMenu = document.querySelector(".header_mobile-burger");
const customBtnClose = document.querySelector(".custom-burger-close");

burgerMenu.addEventListener("click", function () {
  this.classList.toggle("active");
});

customBtnClose.addEventListener("click", function () {
  if (burgerMenu.classList.contains("active")) {
    this.classList.remove("active");
  }
});
