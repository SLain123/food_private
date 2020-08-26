'use strict';

import Card from './cardsConstructor.js';

const webCardCreating = () => {

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

        arr.forEach(data => {
            new Card(
                data.img,
                data.altimg,
                data.title,
                data.descr,
                '',
                data.price,
                cardParentBlock
            ).createNewCard();
        });
    };

    getData();
};

export default webCardCreating;