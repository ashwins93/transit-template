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

function scrollSlider(x, y, z, element) {
  let scrollPos = y + z / 2 - x / 2;
  TweenMax.to(element, 1.5, {
    scrollLeft: scrollPos,
    easing: Sine.easeInOut,
  });
}

const cards = document.querySelectorAll('.card');
const slider = document.querySelector('.slider');
const dots = document.querySelectorAll('.pagination__dots');

cards.forEach(card => {
  card.addEventListener('click', function() {
    const z = card.clientWidth;
    const y = card.offsetLeft - slider.offsetLeft;
    const x = slider.clientWidth;

    scrollSlider(x, y, z, slider);
  });
});

dots.forEach(dot => {
  dot.addEventListener('click', function() {
    const card = document.querySelector(
      `.card[data-card="${dot.dataset.card}"]`,
    );
    const z = card.clientWidth;
    const y = card.offsetLeft - slider.offsetLeft;
    const x = slider.clientWidth;

    scrollSlider(x, y, z, slider);

    dots.forEach(innerDot => {
      innerDot.classList.remove('pagination__dots--selected');
      dot.classList.add('pagination__dots--selected');
    });
  });
});
