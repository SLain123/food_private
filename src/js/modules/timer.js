'use strict';

const timer = () => {
    const detectFinishDate = () => {
        const date = new Date();
        const result = new Date(date.getFullYear(), date.getMonth() + 1);

        return +result;
    };

    const countRestTime = (current, finish) => {
        const date = new Date();
        return finish - current;
    };
    
    const convertToRightFormat = (ms) => {
        const dayBlock = document.querySelector('#days');
        const hourBlock = document.querySelector('#hours');
        const minuteBlock = document.querySelector('#minutes');
        const secondBlock = document.querySelector('#seconds');
        const dayTimer = Math.floor(ms / 86400000);
        const hourTimer = Math.floor((ms % 86400000) / 3600000);
        const minuteTimer = Math.floor(((ms % 86400000) % 3600000) / 60000);
        const secondTimer = Math.floor((((ms % 86400000) % 3600000) % 60000) / 1000);

        // const checkTime = (num)

        dayBlock.innerHTML = dayTimer;
        hourBlock.innerHTML = hourTimer;
        minuteBlock.innerHTML = minuteTimer;
        secondBlock.innerHTML = secondTimer;
    };

    const startTimer = setInterval(() => {
        convertToRightFormat(countRestTime(new Date(), detectFinishDate()));
    }, 1000);

    convertToRightFormat(countRestTime(new Date(), detectFinishDate()));
};

export default timer;