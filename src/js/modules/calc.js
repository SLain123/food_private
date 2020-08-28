'use strict';

const calc = () => {
    const genderBlock = document.querySelector('#gender');
    const humanParametersBlock = document.querySelector('.calculating__choose_medium');
    const activeBlock = document.querySelector('.calculating__choose_big');
    const humanHeight = humanParametersBlock.querySelector('#height');
    const humanWeight = humanParametersBlock.querySelector('#weight');
    const humanAge = humanParametersBlock.querySelector('#age');
    const resultSpan = document.querySelector('.calculating__result span');

// Функция меняет стили для активации кнопок;

    const makeActiveBtn = (elem, parentBlock) => {
        for(let i = 0; i < parentBlock.length; i++) {
            if(parentBlock[i] === elem) {
                parentBlock[i].classList.add('calculating__choose-item_active');
            } else {
                parentBlock[i].classList.remove('calculating__choose-item_active');
            }
        }
    };

// Функции проверяют каждый из инпутов отдельно, а также совместную корректность всех трех инпутов сразу;

    const checkParameter = (input, min, max) => {
        if(input.value < min || input.value > max || input.value.match(/\D/g)) {
            input.style.border = '1px solid red';
            input.setAttribute('data-check', 'false');
        }
        else {
            input.style.border = 'none';
            input.setAttribute('data-check', 'true');
        }
    };

    const checkAllParams = () => {
        const inputs = humanParametersBlock.children;
        let result = true;
        for(let i = 0; i < inputs.length; i++) {
            if(inputs[i].getAttribute('data-check') === 'false') {
                result = false;
            }
        }
        return result;
    };

// Функция проверяет какие именно кнопки в калькуляторе активны для подсчета результов на их основе;

    const checkBtnParams = parentBlock => {
        for(let i = 0; i < parentBlock.length; i++) {
            if(parentBlock[i].classList.contains('calculating__choose-item_active')) {
                return i;
            }
        }
    };

// Основная функция, производит все вычисления и выводит их в спан на странице;

    const calculateIt = () => {
        let calcResult = null;
        const activeArr = [1.2, 1.375, 1.55, 1.725];
        const gender = checkBtnParams(genderBlock.children);
        const active = checkBtnParams(activeBlock.children);

        if(checkAllParams()) {
            if(gender === 0) {
                calcResult = Math.floor((447.6 + 
                (9.2 * +humanWeight.value) + 
                (3.1 * +humanHeight.value) - 
                (4.3 * +humanAge.value)) *
                activeArr[active]);
            } else {
                calcResult = Math.floor((88.36 + 
                    (13.4 * +humanWeight.value) + 
                    (4.8 * +humanHeight.value) - 
                    (5.7 * +humanAge.value)) *
                    activeArr[active]);
            }

            resultSpan.innerHTML = calcResult;
        }
        addToLocalStorage(gender, +humanHeight.value, +humanWeight.value, +humanAge.value, active);
    };

// Функция добавляет данные в localStorage;

    const addToLocalStorage = (gender, height, weight, age, active) => {
        const storage = {gender, height, weight, age, active};
        const storageJSON = JSON.stringify(storage);
        localStorage.setItem('calc', storageJSON);
    };

// Функция извлекает данные из хранилища и после проверки добавляет в поля калькулятора, запускает новый расчет;

    const makeActiveFromLocalData = () => {
        if(localStorage.getItem('calc') !== null) {
            const {gender, height, weight, age, active} = JSON.parse(localStorage.getItem('calc'));

            makeActiveBtn(genderBlock.children[gender], genderBlock.children);
            makeActiveBtn(activeBlock.children[active], activeBlock.children);
            if(height !== 0) {
                humanHeight.value = height;
                checkParameter(humanHeight, 100, 280);
            } else {
                humanHeight.value = '';
            }
            if(weight !== 0) {
                humanWeight.value = weight;
                checkParameter(humanWeight, 40, 180);
            } else {
                humanWeight.value = '';
            }
            if(age !== 0) {
                humanAge.value = age;
                checkParameter(humanAge, 18, 100);
            } else {
                humanAge.value = '';
            }
            calculateIt();
        }
    };

// События кнопок и инпутов;

    genderBlock.addEventListener('click', (e) => {
        if(e.target != genderBlock) {
            makeActiveBtn(e.target, genderBlock.children);
            calculateIt();
        }
    });
    activeBlock.addEventListener('click', (e) => {
        if(e.target != activeBlock) {
            makeActiveBtn(e.target, activeBlock.children);
            calculateIt();
        }
    });
    humanHeight.addEventListener('blur', () => {
        checkParameter(humanHeight, 100, 280);
        calculateIt();
    });
    humanWeight.addEventListener('blur', () => {
        checkParameter(humanWeight, 40, 180);
        calculateIt();
    });
    humanAge.addEventListener('blur', () => {
        checkParameter(humanAge, 18, 100);
        calculateIt();
    });

    makeActiveFromLocalData();
};

export default calc;