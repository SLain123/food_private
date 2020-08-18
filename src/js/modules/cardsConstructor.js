'use strict';

class Card {
    constructor(imgSrc, imgDesc, title, desc, delvr, price, parent, ...extraClasses) {
        this.imgSrc = imgSrc;
        this.imgDesc = imgDesc;
        this.title = title;
        this.desc = desc;
        this.delvr = delvr;
        this.price = price;
        this.parentBlock = parent;
        this.extraClasses = extraClasses;
    }

    _createBlock(tag, classCss = 'empty', inText = '') {
        const block = document.createElement(tag);
        block.classList.add(classCss);
        block.innerText = inText;
        return block;
    }

    _appendBlock(parent, arrOfChildren) {
        let parentBlock = parent;
        arrOfChildren.forEach(child => {
            parentBlock.append(child);
        });
        return parentBlock;
    }

    createNewCard() {
        const mainBlock = this._createBlock('div', 'menu__item');
        const img = this._createBlock('img', 'menu__item-img');
        const h3 = this._createBlock('h3', 'menu__item-subtitle', this.title);
        const describeBlock = this._createBlock('div', 'menu__item-descr', this.desc);
        const deliveryBlock = this._createBlock('div', 'menu__item-divider', this.delvr);
        const priceBlock = this._createBlock('div', 'menu__item-price');
        const costBlock = this._createBlock('div', 'menu__item-cost', 'Цена:');
        const spanOfPrice = this._createBlock('span', 'menu__item-cost-num', this.price);
        const totalBlock = this._createBlock('div', 'menu__item-total');

        if (this.extraClasses.length !== 0) {
            this.extraClasses.forEach(className => {
                mainBlock.classList.add(className);
            });
        }
        img.src = this.imgSrc;
        img.alt = this.imgDesc;
        
        this._appendBlock(totalBlock, [spanOfPrice, ' грн/день']);
        this._appendBlock(priceBlock, [costBlock, totalBlock]);
        this._appendBlock(mainBlock, [img, h3, describeBlock, deliveryBlock, priceBlock]);
        
        this.parentBlock.append(mainBlock);
    }
}

export default Card;