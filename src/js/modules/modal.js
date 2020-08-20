'use strict';

const modal = () => {
    const modalActiveBtns = document.querySelectorAll('[data-modal]');
    const modalWindow = document.querySelector('.modal');
    const modalCloseBtn = document.querySelector('[data-close]');
    const allForms = document.querySelectorAll('form');
    const modalContent = document.querySelector('.modal__content');
    const messages = {
        load: './img/spinner.svg',
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
            if (request.status === 200) {
                console.log(request.response);
                
                form.reset();
                totalBlockMessage(messages.success);
            }
            else {
                totalBlockMessage(messages.failure);
            }
        });
    };

    const statusBlockMessage = (form) => {
        const img = document.createElement('img');
        img.classList.add('modal__spinner');
        img.src = messages.load;

        form.insertAdjacentElement('afterEnd', img);
    };

    const totalBlockMessage = (text) => {
        const img = document.querySelector('.modal__spinner');
        const div = document.createElement('div');

        displayModalWindow();
        allForms[1].classList.add('modal_hide');
        img.remove();
        div.classList.add('modal__status');
        div.innerText = text;
        modalContent.append(div);

        setTimeout(() => {
            hideModalWindow();
        },3000);

        setTimeout(() => {
            div.remove();
            allForms[1].classList.remove('modal_hide');
        }, 3800);
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
            statusBlockMessage(form);
            sendDataToServer(form);
        });
    });
};

export default modal;