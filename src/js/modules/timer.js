'use strict';

const timer = () => {

// Определяет последний день месяца;

    const detectFinishDate = () => {
        const date = new Date();
        const result = new Date(date.getFullYear(), date.getMonth() + 1);
        return +result;
    };

// Считает оставшееся время от текущей даты до последнего месяца (мс);

    const countRestTime = (current, finish) => {
        return finish - current;
    };

// Перегоняет мс в дни, часы, минуты и секунды, затем возвращает в обекте;

    const convertToRightFormat = (ms) => {
        const days = Math.floor(ms / 86400000);
        const hours = Math.floor((ms % 86400000) / 3600000);
        const minutes = Math.floor(((ms % 86400000) % 3600000) / 60000);
        const seconds = Math.floor((((ms % 86400000) % 3600000) % 60000) / 1000);

        return {
            days,
            hours,
            minutes,
            seconds
        };
    };

// Парсит временные значения в блок таймера на сайте;

    const displayRestTime = () => {
        const dayBlock = document.querySelector('#days');
        const hourBlock = document.querySelector('#hours');
        const minuteBlock = document.querySelector('#minutes');
        const secondBlock = document.querySelector('#seconds');
        const timeObj = convertToRightFormat(countRestTime(new Date(), detectFinishDate()));

        dayBlock.innerHTML = checkZero(timeObj.days);
        hourBlock.innerHTML = checkZero(timeObj.hours);
        minuteBlock.innerHTML = checkZero(timeObj.minutes);
        secondBlock.innerHTML = checkZero(timeObj.seconds);
    };

// Добавляет "0" к числу по необходимости перед парсингом;

    const checkZero = num => {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        }
        else {
            return num;
        }
    };

// Запуск таймера каждую секунду и первый раз после загрузки страницы;

    const timer = setInterval(displayRestTime, 1000);
    displayRestTime();
};

export default timer;