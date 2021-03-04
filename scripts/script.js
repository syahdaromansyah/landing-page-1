//? ## Script for mobile nav ##
const menuMobile = document.querySelector(".nav-right > ul.flex");

document.addEventListener("click", function (e) {
  if (!e.target.closest(".nav-right")) {
    menuMobile.classList.remove("active-m-nav");
  }

  if (e.target.classList.contains("fa-bars"))
    menuMobile.classList.add("active-m-nav");

  if (e.target.classList.contains("fa-times")) {
    menuMobile.classList.remove("active-m-nav");
    e.preventDefault();
  }
});
//? ########################## END ###############################
