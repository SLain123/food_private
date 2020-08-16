'use strict';

const modal = () => {
    const modalActiveBtns = document.querySelectorAll('[data-modal]');
    const modalWindow = document.querySelector('.modal');
    const modalCloseBtn = document.querySelector('[data-close]');
    const modalSendBtn = document.querySelector('[data-send]');
    const allFormInputs = document.querySelectorAll('.modal__content input');

    const detectPadding = () => {
        return window.innerWidth - document.documentElement.clientWidth;
    };

    const displayModalWindow = () => {
        modalWindow.classList.add('modal_show');
        modalWindow.classList.remove('modal_hide');
        document.body.style.paddingRight = `${detectPadding()}px`;
        document.body.classList.add('no-scroll');

        modalActiveBtns.forEach(btn => {
            btn.removeEventListener('click', displayModalWindow);
        });
    };

    const hideModalWindow = () => {
        modalWindow.classList.remove('modal_show');

        modalActiveBtns.forEach(btn => {
            btn.addEventListener('click', displayModalWindow);
        });

        setTimeout(() => {
            document.body.style.paddingRight = 0;
            document.body.classList.remove('no-scroll');
            modalWindow.classList.add('modal_hide');
        }, 800);
    };

    const checkValidate = () => {
        let result = true;
        allFormInputs.forEach(inpt => {
            if (inpt.value === '' || inpt.value.length < 4) {
                inpt.style.border = '1px red solid';
                result = false;
            }
            else {
                inpt.style.border = 'none';
            }
        });
        return result;
    };

    modalActiveBtns.forEach(btn => {
        btn.addEventListener('click', displayModalWindow);
    });
    modalCloseBtn.addEventListener('click', hideModalWindow);
    modalWindow.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            hideModalWindow();
        }
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === "Escape" && modalWindow.classList.contains('modal_show')) {
            hideModalWindow();
        }
    });
    modalSendBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (checkValidate()) {
            allFormInputs.forEach(inpt => {
                inpt.value = '';
            });
            hideModalWindow();
        }
    });
};

export default modal;