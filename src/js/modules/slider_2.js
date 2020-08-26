const slider = () => {
    const allSlides = document.querySelectorAll('.offer__slide');
    const prevBtn = document.querySelector('.offer__slider-prev');
    const nextBtn = document.querySelector('.offer__slider-next');
    const currentSlideSpan = document.querySelector('#current');
    const totalSlideSpan = document.querySelector('#total');
    const wrapper = document.querySelector('.offer__slider-wrapper');
    const inner = document.querySelector('.offer__slider-inner');
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
        } else {
            if(currentSlide <= 0) {
                currentSlide = 3;
            }
            else {
                currentSlide--;
            }
        }
        inner.style.transform = `translateX(-${findWidthSlide() * currentSlide}px)`;
        fillCurrentSpan();
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
};

export default slider;