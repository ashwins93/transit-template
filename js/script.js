const hamburger = document.querySelector('#hamburger');
const navbar = document.querySelector('#nav');
const closeBtn = document.querySelector('#nav-close');

hamburger.addEventListener('click', function() {
  navbar.classList.add('nav--open');
});

closeBtn.addEventListener('click', function() {
  navbar.classList.remove('nav--open');
});
