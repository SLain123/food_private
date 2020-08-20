/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_tabs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tabs.js */ "./src/js/modules/tabs.js");
/* harmony import */ var _modules_timer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/timer.js */ "./src/js/modules/timer.js");
/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal.js */ "./src/js/modules/modal.js");
/* harmony import */ var _modules_webCardCreating_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/webCardCreating.js */ "./src/js/modules/webCardCreating.js");




Object(_modules_tabs_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
Object(_modules_timer_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
Object(_modules_modal_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
Object(_modules_webCardCreating_js__WEBPACK_IMPORTED_MODULE_3__["default"])();

/***/ }),

/***/ "./src/js/modules/cardsConstructor.js":
/*!********************************************!*\
  !*** ./src/js/modules/cardsConstructor.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


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

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./src/js/modules/modal.js":
/*!*********************************!*\
  !*** ./src/js/modules/modal.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


const modal = () => {
  const modalActiveBtns = document.querySelectorAll('[data-modal]');
  const modalWindow = document.querySelector('.modal');
  const modalCloseBtn = document.querySelector('[data-close]');
  const allForms = document.querySelectorAll('form');
  const modalContent = document.querySelector('.modal__content');
  const messages = {
    load: './img/spinner.svg',
    success: 'Данные отправлены',
    failure: 'Произошла ошибка при отправке'
  };

  const detectPadding = () => {
    return window.innerWidth - document.documentElement.clientWidth;
  };

  const displayModalWindow = () => {
    modalWindow.classList.add('modal_show');
    modalWindow.classList.remove('modal_hide');
    document.body.style.paddingRight = `${detectPadding()}px`;
    document.body.classList.add('no-scroll');
    modalActiveBtns.forEach(btn => {
      btn.removeEventListener('click', displayModalWindow);
    });
    window.removeEventListener('scroll', displayExstraModalWindow);
  };

  const hideModalWindow = () => {
    modalWindow.classList.remove('modal_show');
    modalActiveBtns.forEach(btn => {
      btn.addEventListener('click', displayModalWindow);
    });
    setTimeout(() => {
      document.body.style.paddingRight = 0;
      document.body.classList.remove('no-scroll');
      modalWindow.classList.add('modal_hide');
    }, 800);
  };

  const displayExstraModalWindow = () => {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.offsetHeight) {
      displayModalWindow();
      window.removeEventListener('scroll', displayExstraModalWindow);
    }
  };

  const sendDataToServer = form => {
    const request = new XMLHttpRequest();
    request.open('POST', './php/server.php');
    const formData = new FormData(form);
    request.send(formData);
    request.addEventListener('load', () => {
      if (request.status === 200) {
        console.log(request.response);
        form.reset();
        totalBlockMessage(messages.success);
      } else {
        totalBlockMessage(messages.failure);
      }
    });
  };

  const statusBlockMessage = form => {
    const img = document.createElement('img');
    img.classList.add('modal__spinner');
    img.src = messages.load;
    form.insertAdjacentElement('afterEnd', img);
  };

  const totalBlockMessage = text => {
    const img = document.querySelector('.modal__spinner');
    const div = document.createElement('div');
    displayModalWindow();
    allForms[1].classList.add('modal_hide');
    img.remove();
    div.classList.add('modal__status');
    div.innerText = text;
    modalContent.append(div);
    setTimeout(() => {
      hideModalWindow();
    }, 3000);
    setTimeout(() => {
      div.remove();
      allForms[1].classList.remove('modal_hide');
    }, 3800);
  };

  modalActiveBtns.forEach(btn => {
    btn.addEventListener('click', displayModalWindow);
  });
  modalCloseBtn.addEventListener('click', hideModalWindow);
  modalWindow.addEventListener('click', e => {
    if (e.target.classList.contains('modal')) {
      hideModalWindow();
    }
  });
  document.addEventListener('keydown', e => {
    if (e.key === "Escape" && modalWindow.classList.contains('modal_show')) {
      hideModalWindow();
    }
  });
  window.addEventListener('scroll', displayExstraModalWindow);
  allForms.forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      statusBlockMessage(form);
      sendDataToServer(form);
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (modal);

/***/ }),

/***/ "./src/js/modules/tabs.js":
/*!********************************!*\
  !*** ./src/js/modules/tabs.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


const tabsWorks = () => {
  const tabBtns = document.querySelectorAll('.tabheader__item');
  const tabContainer = document.querySelector('.tabheader__items');
  const contentWindows = document.querySelectorAll('.tabcontent');

  const disableAllBtnAndWindow = () => {
    contentWindows.forEach(window => {
      window.classList.remove('tabcontent_active');
    });
    tabBtns.forEach(btn => {
      btn.classList.remove('tabheader__item_active');
    });
  };

  const activateTabAndWindow = num => {
    tabBtns[num].classList.add('tabheader__item_active');
    contentWindows[num].classList.add('tabcontent_active');
  };

  tabContainer.addEventListener('click', e => {
    if (e.target && e.target.classList.contains('tabheader__item')) {
      tabBtns.forEach((btn, i) => {
        if (e.target === btn) {
          disableAllBtnAndWindow();
          activateTabAndWindow(i);
        }
      });
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (tabsWorks);

/***/ }),

/***/ "./src/js/modules/timer.js":
/*!*********************************!*\
  !*** ./src/js/modules/timer.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


const timer = () => {
  const detectFinishDate = () => {
    const date = new Date();
    const result = new Date(date.getFullYear(), date.getMonth() + 1);
    return +result;
  };

  const countRestTime = (current, finish) => {
    return finish - current;
  };

  const convertToRightFormat = ms => {
    const days = Math.floor(ms / 86400000);
    const hours = Math.floor(ms % 86400000 / 3600000);
    const minutes = Math.floor(ms % 86400000 % 3600000 / 60000);
    const seconds = Math.floor(ms % 86400000 % 3600000 % 60000 / 1000);
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
    } else {
      return num;
    }
  };

  const timer = setInterval(displayRestTime, 1000);
  displayRestTime();
};

/* harmony default export */ __webpack_exports__["default"] = (timer);

/***/ }),

/***/ "./src/js/modules/webCardCreating.js":
/*!*******************************************!*\
  !*** ./src/js/modules/webCardCreating.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cardsConstructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cardsConstructor.js */ "./src/js/modules/cardsConstructor.js");




const webCardCreating = () => {
  const cardParentBlock = document.querySelector('.menu__field div.container');
  new _cardsConstructor_js__WEBPACK_IMPORTED_MODULE_0__["default"]('img/tabs/vegy.jpg', 'vegy', 'Меню "Фитнес"', 'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!', '', '229', cardParentBlock).createNewCard();
  new _cardsConstructor_js__WEBPACK_IMPORTED_MODULE_0__["default"]('img/tabs/elite.jpg', 'elite', 'Меню "Премиум"', 'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!', '', '550', cardParentBlock).createNewCard();
  new _cardsConstructor_js__WEBPACK_IMPORTED_MODULE_0__["default"]('img/tabs/post.jpg', 'post', 'Меню "Постное"', 'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.', '', '430', cardParentBlock).createNewCard();
};

/* harmony default export */ __webpack_exports__["default"] = (webCardCreating);

/***/ })

/******/ });
//# sourceMappingURL=script.js.map