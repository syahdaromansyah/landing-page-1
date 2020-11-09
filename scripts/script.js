//? ## Script for mobile nav ##
//* Declaring menu bars icon, and mobile nav menu
const menuBars = document.querySelector('.nav-right > i');
const menuMobile = document.querySelector('.nav-right > ul.flex');

//* When menu bars clicked
menuBars.addEventListener('click', function () {
  menuMobile.classList.add('active-m-nav');
});

menuMobile.addEventListener('click', function (e) {
  //* When close mobile menu clicked
  if (e.target.classList.contains('fa-times')) {
    menuMobile.classList.remove('active-m-nav');
    e.preventDefault();
  }
});
//? ########################## END ###############################
