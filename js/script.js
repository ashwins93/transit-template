const hamburger = document.querySelector('#hamburger');
const navbar = document.querySelector('#nav');
const closeBtn = document.querySelector('#nav-close');

function closeNav() {
  navbar.classList.remove('nav--open');
  document.body.classList.remove('nav-menu-open');
}

hamburger.addEventListener('click', function(event) {
  event.stopPropagation();
  navbar.classList.add('nav--open');
  document.body.classList.add('nav-menu-open');
});

closeBtn.addEventListener('click', closeNav);

document.body.addEventListener('click', closeNav);

navbar.addEventListener('click', function(event) {
  event.stopPropagation();
});
