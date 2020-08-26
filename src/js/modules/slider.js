const slider = () => {
    const allSlides = document.querySelectorAll('.offer__slide');
    const prevBtn = document.querySelector('.offer__slider-prev');
    const nextBtn = document.querySelector('.offer__slider-next');
    const currentSlideSpan = document.querySelector('#current');
    const totalSlideSpan = document.querySelector('#total');

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
        let current = findActiveSlide();
        if(current < 10) {
            currentSlideSpan.innerHTML = `0${current}`;
        }
        else {
            currentSlideSpan.innerHTML = current;
        }
    };

// Функция скрывающая все слайды;

    const hideAllSlides = () => {
        allSlides.forEach(slide => {
            slide.classList.add('offer__slide_hide');
        });
    };

// Функция возвращает номер активного слайда;

    const findActiveSlide = () => {
        let active;
        allSlides.forEach(slide => {
            if(!slide.classList.contains('offer__slide_hide')) {
                active = slide.getAttribute('data-slide');
            }
        });
        return active;
    };

// Общая функция которая вызовется после нажатия на кнопки слайдера next & prev;

    const clickOnButton = btn => {
        let current = findActiveSlide();
        hideAllSlides();

        if(btn === 'next') {
            if(current < allSlides.length) {
                current++;
            }
            else {
                current = 1;
            }
        }
        else {
            if(current <= 1) {
                current = allSlides.length;
            }
            else {
                current--;
            }
        }

        displaySlide(current);
        fillCurrentSpan();
    };

// Функция отображает один слайд, который должен быть активен в данный момент;

    const displaySlide = number => {
        allSlides.forEach(slide => {
            if(+slide.getAttribute('data-slide') === number) {
                slide.classList.remove('offer__slide_hide');
            }
        });
    };

// Стартовое заполнение счетчика слайдов;

    fillTotalSpan();
    fillCurrentSpan();

// Обработчик событий на кнопки;

    prevBtn.addEventListener('click', () => {
        clickOnButton('prev');
    });
    nextBtn.addEventListener('click', () => {
        clickOnButton('next');
    });
};

export default slider;