'use strict';

const slider = () => {
    const allSlides = document.querySelectorAll('.offer__slide');
    const prevBtn = document.querySelector('.offer__slider-prev');
    const nextBtn = document.querySelector('.offer__slider-next');
    const currentSlideSpan = document.querySelector('#current');
    const totalSlideSpan = document.querySelector('#total');
    const wrapper = document.querySelector('.offer__slider-wrapper');
    const inner = document.querySelector('.offer__slider-inner');
    const slider = document.querySelector('.offer__slider');
    let currentSlide = 0;

    inner.style.width = `${100 * allSlides.length}${'%'}`; // задает ширину иннер блока по сумме ширины всех слайдов;

// Функции отвечающие за заполнение строк текущего номер слайда и общешл количества;

    const fillTotalSpan = () => {
        const count = allSlides.length;
        if (count < 10) {
            totalSlideSpan.innerHTML = `0${count}`;
        }
        else {
            totalSlideSpan.innerHTML = count;
        }
    };

    const fillCurrentSpan = () => {
        if(currentSlide < 10) {
            currentSlideSpan.innerHTML = `0${currentSlide + 1}`;
        } else {
            currentSlideSpan.innerHTML = currentSlide;
        }
    };

// Функция возвращает ширину слайдера;

    const findWidthSlide = () => {
        return wrapper.clientWidth;
    };

// Главная функция прокручивающая слайды;

    const nextSlide = btn => {
        if(btn === 'next') {
            if(currentSlide >= 3) {
                currentSlide = 0;
            }
            else {
                currentSlide++;
            }
        } else if (btn === 'prev'){
            if(currentSlide <= 0) {
                currentSlide = 3;
            }
            else {
                currentSlide--;
            }
        }
        inner.style.transform = `translateX(-${findWidthSlide() * currentSlide}px)`;
        fillCurrentSpan();
        makeActive();
    };

// Обработчики событий нажатия кнопок и первый запуск функций для счетчика слайдов;

    nextBtn.addEventListener('click', () => {
        nextSlide('next');
    });
    prevBtn.addEventListener('click', () => {
        nextSlide('prev');
    });

    fillTotalSpan();
    fillCurrentSpan();

// ======== Точки Индикаторы ==============

// Функции создают динамически блок индикаторов и наполняют его нужным количеством блоков-ссылок;

    const createIndicateBlock = () => {
        const div = document.createElement('div');
        div.classList.add('carousel-indicators');

        for(let i = 0; i < allSlides.length; i++) {
            createDot(div, i);
        }

        slider.append(div);
        makeActive();
    };

    const createDot = (main, i) => {
        const div = document.createElement('div');
        div.classList.add('dot');
        div.addEventListener('click', () => {
            switchSlide(i);
        });

        main.append(div);
    };

// Функция делает блок-ссылку индикатора активной в соответствии с активным на текущий момент слайдом;

    const makeActive = () => {
        const dots = document.querySelectorAll('.dot');
        dots.forEach((dot, i) => {
            if (currentSlide === i) {
                dot.classList.add('dot_active');
            }
            else {
                dot.classList.remove('dot_active');
            }
        });
    };

// Функция отвечает за переключение активного слайда при клике на блок-ссылку индикатора;

    const switchSlide = num => {
        currentSlide = num;
        nextSlide('');
    };

// Запуск динамического создания блока индикатора;

    createIndicateBlock();
};

export default slider;