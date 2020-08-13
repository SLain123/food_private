'use strict';

const tabsWorks = () => {
    const tabBtns = document.querySelectorAll('.tabheader__item');
    const tabContainer = document.querySelector('.tabheader__items');
    const contentWindows = document.querySelectorAll('.tabcontent');

    const disableAllBtnAndWindow = () => {
        contentWindows.forEach(window => {
            window.classList.remove('tabcontent_active');
        });
        tabBtns.forEach(btn => {
            btn.classList.remove('tabheader__item_active');
        });
    };
    const activateTabAndWindow = (num) => {
        tabBtns[num].classList.add('tabheader__item_active');
        contentWindows[num].classList.add('tabcontent_active');
    };

    tabContainer.addEventListener('click', (e) => {
        if (e.target && e.target.classList.contains('tabheader__item')) {
            disableAllBtnAndWindow();
            activateTabAndWindow(e.target.getAttribute('data-num'));
        }
    });

};

export default tabsWorks;