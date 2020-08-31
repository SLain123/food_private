import tabsEngine from './modules/tabs';
import timer from './modules/timer';
import modal from './modules/modal';
import webCardCreating from './modules/webCardCreating';
import slider from './modules/slider_2.js';
import calc from './modules/calc.js';

tabsEngine({
    mainContainerSelector: '.tabheader__items',
    btnsSelector: '.tabheader__item',
    slidesSelector: '.tabcontent',
    activeSlideClass: 'tabcontent_active',
    activeBtnClass: 'tabheader__item_active'
});

timer();
modal('[data-modal]', 30000);
webCardCreating(75, 'http://localhost:3000/menu');

slider({
    slideSelector: '.offer__slide',
    prevBtnSelector: '.offer__slider-prev',
    nextBtnSelector: '.offer__slider-next',
    currentSlideBlockID: '#current',
    totalSlideBlockID: '#total',
    wrapperBlockSelector: '.offer__slider-wrapper',
    innerBlockSelector: '.offer__slider-inner',
    sliderBlockSelector: '.offer__slider'
});

calc();