'use strict';

const modal = () => {
    const modalActiveBtns = document.querySelectorAll('[data-modal]');
    const modalWindow = document.querySelector('.modal');
    const modalCloseBtn = document.querySelector('[data-close]');
    const allForms = document.querySelectorAll('form');
    const messages = {
        load: 'Загрузка',
        success: 'Данные отправлены',
        failure: 'Произошла ошибка при отправке'
    };

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
        window.removeEventListener('scroll', displayExstraModalWindow);
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

    const displayExstraModalWindow = () => {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.offsetHeight) {
            displayModalWindow();
            window.removeEventListener('scroll', displayExstraModalWindow);
        }
    };

    const sendDataToServer = (form) => {
        const request = new XMLHttpRequest();
        request.open('POST', './php/server.php');

        const formData = new FormData(form);
        request.send(formData);

        request.addEventListener('load', () => {
            const textBlock = document.querySelector('.modal__status');

            if (request.status === 200) {
                console.log(request.response);
                form.reset();
                textBlock.innerText = messages.success;
                setTimeout(() => {
                    textBlock.remove();
                }, 3000);
            }
            else {
                textBlock.innerText = messages.error;
            }
        });
    };

    const statusBlockMessage = (text, form) => {
        const div = document.createElement('div');
        div.classList.add('modal__status');
        div.innerText = text;

        form.insertAdjacentElement('afterEnd', div);
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
    window.addEventListener('scroll', displayExstraModalWindow);
    allForms.forEach(form => {
        form.addEventListener('submit', e => {
            e.preventDefault();
            statusBlockMessage(messages.load, form);
            sendDataToServer(form);
        });
    });
};

export default modal;