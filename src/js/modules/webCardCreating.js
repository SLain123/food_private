'use strict';

import Card from './cardsConstructor.js';
import {getData} from '../services/services';

const webCardCreating = (rate, urlBD) => {
    const rub = rate;
    
    getData(urlBD)
        .then(data => {
            createCard(data);
        }).catch(data => {
            console.error(data);
        });

    const createCard = arr => {
        const cardParentBlock = document.querySelector('.menu__field div.container');

        arr.forEach(({img, altimg, title, descr, price}) => {
            new Card(img, altimg, title, descr, '', (price * rub), cardParentBlock).createNewCard();
        });
    };
};

export default webCardCreating;