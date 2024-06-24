'use strict';

const menuOpen = document.querySelector('.header__menu');
const menu = document.querySelector('.menu');
const body = document.querySelector('.body');

menuOpen.addEventListener('click', () => {
  menu.classList.toggle('menu-open');
  menuOpen.classList.toggle('menu-icon-open');
  body.classList.toggle('page-body');
});

const menuLink = document.querySelectorAll('.menu__link--hide');
const links = Array.from(menuLink);

function removePageBodyOnClick() {
  links.forEach((link) => {
    link.addEventListener('click', () => {
      document.body.classList.remove('page-body');
      menu.classList.remove('menu-open');
      menuOpen.classList.toggle('menu-icon-open');
    });
  });
}

removePageBodyOnClick(links);

const languageLink = document.querySelector('.menu__link--language');
const languageIconClose = document.querySelector('.language__icon-close');
const languageMenu = document.querySelector('.language');

languageLink.addEventListener('click', () => {
  languageMenu.classList.add('menu-open');
});

languageIconClose.addEventListener('click', () => {
  languageMenu.classList.remove('menu-open');
});

const helpLink = document.querySelector('.menu__link--help');
const helpMenu = document.querySelector('.help');
const helpIconClose = document.querySelector('.help__icon-close');

helpLink.addEventListener('click', () => {
  helpMenu.classList.add('menu-open');
});

helpIconClose.addEventListener('click', () => {
  helpMenu.classList.remove('menu-open');
});

const prev = document.querySelector('.header__link--prev');
const next = document.querySelector('.header__link--next');
const slideOne = document.querySelector('.header__image--one');
const slideTwo = document.querySelector('.header__image--two');
const buttonsAfter = document.querySelector('.header__list--buttons');

const toggleSlideState = (addClasses, removeClasses) => {
  if (addClasses) {
    slideOne.classList.add('swiper-slide');
    slideTwo.classList.add('swiper-slide');
    next.classList.add('white-color');
    prev.classList.add('gray-color');
    buttonsAfter.classList.add('after-transform');
  } else {
    slideOne.classList.remove('swiper-slide');
    slideTwo.classList.remove('swiper-slide');
    next.classList.remove('white-color');
    prev.classList.remove('gray-color');
    buttonsAfter.classList.remove('after-transform');
  }
};

next.addEventListener('click', () => {
  toggleSlideState(true, false);
});

prev.addEventListener('click', () => {
  toggleSlideState(false, true);
});

const swiperWrapper = document.querySelector('.swiper__wrapper');
const buttons = document.querySelectorAll('.swiper__pagination-bullet');
const aboutPrev = document.querySelector('.about__link--prev');
const aboutNext = document.querySelector('.about__link--next');
const aboutAfter = document.querySelector('.about__list--buttons');
const currentNumber = document.querySelector('.about__number--current');
let slideIndex = 0;
const slideCount = swiperWrapper.children.length; // Отримуємо кількість слайдів
let distance = 0;
currentNumber.textContent = slideIndex + 1;

function swiperTransform() {
  swiperWrapper.style.transform = `translateX(${distance}%)`;
}

function updateButtons() {
  buttons.forEach((button, index) => {
    button.classList.toggle('pagination__bullet--active', index === slideIndex);
  });
}

function updateNavigationButtons() {
  if (slideIndex === 0) {
    aboutPrev.classList.add('gray-color');
    aboutNext.classList.add('white-color');
  } else {
    aboutPrev.classList.remove('gray-color');
  }

  if (slideIndex === slideCount - 1) {
    aboutNext.classList.remove('white-color');
  } else {
    aboutNext.classList.add('white-color');
  }
}

function numberSlide() {
  currentNumber.textContent = slideIndex + 1;
}

function showPreviousSlide() {
  if (slideIndex > 0) {
    slideIndex -= 1;
    distance = -100 * slideIndex;
    swiperTransform();
    updateButtons();
    updateNavigationButtons();
    numberSlide();
  }
}

function showNextSlide() {
  if (slideIndex < slideCount - 1) {
    slideIndex += 1;
    distance = -100 * slideIndex;
    swiperTransform();
    updateButtons();
    updateNavigationButtons();
    numberSlide();
  }
}

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    slideIndex = index;
    distance = -100 * index;
    swiperTransform();
    updateButtons();
    updateNavigationButtons();
    numberSlide();
  });
});

aboutPrev.addEventListener('click', () => {
  showPreviousSlide();
});

aboutNext.addEventListener('click', () => {
  showNextSlide();
});

// Початкове налаштування
updateButtons();
updateNavigationButtons();
numberSlide();

const techButtons = document.querySelectorAll('.tech__button');
const techBlocks = document.querySelectorAll('.tech__item');

techButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    // Закрити всі блоки, якщо вони відкриті
    if (techBlocks[index].classList.contains('display-flex')) {
      techBlocks[index].classList.remove('display-flex');
      button.classList.remove('gray-button');
    } else {
      // Видалити класи з усіх кнопок та блоків
      techButtons.forEach(btn => btn.classList.remove('gray-button'));
      techBlocks.forEach(block => block.classList.remove('display-flex'));

      // Відкрити поточний блок та додати клас для кнопки
      techBlocks[index].classList.add('display-flex');
      button.classList.add('gray-button');
    }
  });
});

const video = document.querySelector('.video');
const iconClose = document.querySelector('.video__icon-close');
const headerButton = document.querySelector('.header__video-button');
const aboutButton = document.querySelector('.about__video-button');

headerButton.addEventListener('click', () => {
  video.classList.add('display-block');
  iconClose.classList.add('display-block');
  body.classList.add('page-body');
});

aboutButton.addEventListener('click', () => {
  video.classList.add('display-block');
  iconClose.classList.add('display-block');
  body.classList.add('page-body');
});

iconClose.addEventListener('click', () => {
  video.currentTime = 0;
  // video.pause();
  controlVideo('pauseVideo');

  iconClose.classList.remove('display-block');
  body.classList.remove('page-body');
  video.classList.remove('display-block');
});

function controlVideo(vidFunc) {
  const iframe = document.getElementsByTagName('iframe')[0].contentWindow;

  iframe.postMessage(
    '{"event":"command","func":"' + vidFunc + '","args":""}',
    '*',
  );
}

const labels = document.querySelectorAll('.questions__label');
const inputs = document.querySelectorAll('.questions__input');

inputs.forEach((input, index) => {
  const label = labels[index];

  input.addEventListener('focusin', () => {
    label.classList.add('input-before');
    input.dataset.placeholder = input.getAttribute('placeholder');
    input.setAttribute('placeholder', '');
  });

  input.addEventListener('focusout', () => {
    label.classList.remove('input-before');
    input.setAttribute('placeholder', input.dataset.placeholder);
  });
});
