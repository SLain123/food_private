'use strict';

import Card from './cardsConstructor.js';

const webCardCreating = () => {

    const cardParentBlock = document.querySelector('.menu__field div.container');
    
    const firstCard = 
    new Card(
        'img/tabs/vegy.jpg', 
        'vegy', 
        'Меню "Фитнес"', 
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!', 
        '', 
        '229'
    );
    const secondCard = 
    new Card(
        'img/tabs/elite.jpg',
        'elite',
        'Меню "Премиум"',
        'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        '',
        '550'
    );
    const thirdCard = 
    new Card(
        'img/tabs/post.jpg',
        'post',
        'Меню "Постное"',
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
        '',
        '430'
    );
    

    const addCardToWeb = (parent, arrOfCards) => {
        arrOfCards.forEach(card => {
            parent.append(card);
        });
    };

    addCardToWeb(cardParentBlock, [firstCard.createNewCard(), secondCard.createNewCard(), thirdCard.createNewCard()]);
};

export default webCardCreating;