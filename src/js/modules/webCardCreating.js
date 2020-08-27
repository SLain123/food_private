'use strict';

import Card from './cardsConstructor.js';

const webCardCreating = () => {
    const rub = 75;
    const getData = () => {
        fetch('http://localhost:3000/menu')
        .then(data => {
            if(!data.ok) {
                throw new Error(`Не удалось получить данные из ${data.url}, статус ${data.status}`);
            }
            return data.json();
        })
        .then(data => {
            createCard(data);
        }).catch(data => {
            console.error(data);
        });
    };

    const createCard = arr => {
        const cardParentBlock = document.querySelector('.menu__field div.container');

        arr.forEach(({img, altimg, title, descr, price}) => {
            new Card(img, altimg, title, descr, '', (price * rub), cardParentBlock).createNewCard();
        });
    };

    getData();
};

export default webCardCreating;