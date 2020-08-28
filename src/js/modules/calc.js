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
        if(input.value < min || input.value > max) {
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
        if(checkAllParams()) {
            let calcResult = null;
            const activeArr = [1.2, 1.375, 1.55, 1.725];
            const gender = checkBtnParams(genderBlock.children);
            const active = checkBtnParams(activeBlock.children);
            
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

    calculateIt();
};

export default calc;