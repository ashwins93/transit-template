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
    ease: Sine.easeInOut,
  });
}

const cards = document.querySelectorAll('.card');
const slider = document.querySelector('.slider');
const dots = document.querySelectorAll('.pagination__dots');
let currentCard = 1;

function selectCard(dataCard) {
  const card = document.querySelector(`.card[data-card="${dataCard}"]`);
  const dot = document.querySelector(
    `.pagination__dots[data-card="${dataCard}"]`,
  );

  const z = card.clientWidth;
  const y = card.offsetLeft - slider.offsetLeft;
  const x = slider.clientWidth;

  scrollSlider(x, y, z, slider);

  dots.forEach(innerDot => {
    innerDot.classList.remove('pagination__dots--selected');
    dot.classList.add('pagination__dots--selected');
  });

  cards.forEach(element => {
    element.classList.remove('card--active');
    card.classList.add('card--active');
  });

  currentCard = dataCard;
}

cards.forEach(card => {
  card.addEventListener('click', function() {
    selectCard(card.dataset.card);
  });
});

dots.forEach(dot => {
  dot.addEventListener('click', function() {
    selectCard(dot.dataset.card);
  });
});

selectCard(currentCard);

// setInterval(() => selectCard(++currentCard % (cards.length + 1)), 3000);
