'use strict';

const timer = () => {
    const detectFinishDate = () => {
        const date = new Date();
        const result = new Date(date.getFullYear(), date.getMonth() + 1);
        return +result;
    };

    const countRestTime = (current, finish) => {
        return finish - current;
    };
    
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

    const checkZero = num => {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        }
        else {
            return num;
        }
    };

    const timer = setInterval(displayRestTime, 1000);
    displayRestTime();
};

export default timer;