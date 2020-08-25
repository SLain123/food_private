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

// Функция подсчитывает ширину скролла на экране и возвращает ее;

    const detectPadding = () => {
        return window.innerWidth - document.documentElement.clientWidth;
    };

// Функция отображает модальное окно;

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

// Функция скрывает модальное окно;

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

// Функция отображает окно успешной отправки или ошибки для формы на сайте;

    const displayExstraModalWindow = () => {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.offsetHeight) {
            displayModalWindow();
            window.removeEventListener('scroll', displayExstraModalWindow);
        }
    };

// Функция шаблон для генерации POST запросов;

    const sendPost = async (url, data) => {
        const request = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: data
        });

        return await request.json();
    };

// Функция постит данные из формы на сайте в json базу;

    const sendDataToServer = (form) => {
        const formData = new FormData(form);
        const obj = {};
        formData.forEach((value, key) => {
            obj[key] = value;
        });

        sendPost('http://localhost:3000/requests', JSON.stringify(obj))
        .then(response => {
            console.log(response);
            totalBlockMessage(messages.success);
            form.reset();
        })
        .catch(() => {
            totalBlockMessage(messages.failure);
        });
    };

// под-Функция отображаение статуса загрузки при отправки данных из формы;

    const statusBlockMessage = (form) => {
        const img = document.createElement('img');
        img.classList.add('modal__spinner');
        img.src = messages.load;

        form.insertAdjacentElement('afterEnd', img);
    };

// под-Функция отображаение статуса успех\ошибка при отправки данных из формы;

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

// События связанные с модальными окнами или отправкой данных;

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