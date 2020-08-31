'use strict';

const tabsEngine = ({mainContainerSelector, btnsSelector, slidesSelector, activeSlideClass, activeBtnClass}) => {
    const tabBtns = document.querySelectorAll(btnsSelector);
    const tabContainer = document.querySelector(mainContainerSelector);
    const contentWindows = document.querySelectorAll(slidesSelector);

// Скрывает все слайды в табах, а также делает все кнопки табов не активными через стили;

    const disableAllBtnAndWindow = () => {
        contentWindows.forEach(window => {
            window.classList.remove(activeSlideClass);
        });
        tabBtns.forEach(btn => {
            btn.classList.remove(activeBtnClass);
        });
    };

// Отображает конкретный указанный слайд, делает таб(кнопку) активной через стили;
    const activateTabAndWindow = (num) => {
        tabBtns[num].classList.add(activeBtnClass);
        contentWindows[num].classList.add(activeSlideClass);
    };

// Навешивает событие через делегирование;

    tabContainer.addEventListener('click', (e) => {
        if (e.target && e.target.classList.contains(btnsSelector.slice(1))) {
            tabBtns.forEach((btn, i) => {
                if (e.target === btn) {
                    disableAllBtnAndWindow();
                    activateTabAndWindow(i);
                }
            });
        }
    });
};

export default tabsEngine;