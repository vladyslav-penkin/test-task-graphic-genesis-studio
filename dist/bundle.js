/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/burger-menu.js":
/*!************************************!*\
  !*** ./src/scripts/burger-menu.js ***!
  \************************************/
/***/ (() => {

document.querySelector('.header__burger').addEventListener('click', function (event) {
  var burger = document.querySelector('#burger');
  var menu = document.querySelector('#menu');
  var isOpen = burger.getAttribute('data-menu') === 'true';
  burger.setAttribute('data-menu', !isOpen);
  menu.classList.toggle('active', !isOpen);
});
document.querySelectorAll('.menu__link').forEach(function (link) {
  link.addEventListener('click', function () {
    var burger = document.querySelector('#burger');
    var menu = document.querySelector('#menu');
    burger.setAttribute('data-menu', 'false');
    menu.classList.remove('active');
  });
});

/***/ }),

/***/ "./src/scripts/module-detail-toggle.js":
/*!*********************************************!*\
  !*** ./src/scripts/module-detail-toggle.js ***!
  \*********************************************/
/***/ (() => {

var moduleData = {
  1: {
    title: 'Модуль №1. ChatGPT. Технологічна Грамотність',
    bullet1: 'Технологічна грамотність LLM',
    bullet2: 'Наслідки для бізнесу',
    bullet3: 'Приклади використання людьми з різних сфер',
    bullet4: 'Best practices',
    resultTitle: 'В результаті:',
    resultDescription: 'На цьому занятті ми з вами надихнемость технологією та на реальних випадках навчимось працювати з ChatGPT, як експерти І надихнемось можливостями АІ в 2024',
    link: '#'
  },
  2: {
    title: 'Модуль №2. Art generation. Технологічна Грамотність',
    bullet1: 'Технологічна грамотність LLM',
    bullet2: 'Наслідки для бізнесу 2',
    bullet3: 'Приклади використання людьми з різних сфер 2',
    bullet4: 'Best practices 2',
    resultTitle: 'В результаті: 2',
    resultDescription: 'На цьому занятті ми з вами надихнемость технологією та на реальних випадках навчимось працювати з ChatGPT, як експерти І надихнемось можливостями АІ в 2024',
    link: '#'
  },
  3: {
    title: 'Модуль №3. База. Інтро в АІ. Основи напряму. Що так штучний інтелект.',
    bullet1: 'Технологічна грамотність LLM',
    bullet2: 'Наслідки для бізнесу 3',
    bullet3: 'Приклади використання людьми з різних сфер 3',
    bullet4: 'Best practices 3',
    resultTitle: 'В результаті 3:',
    resultDescription: 'На цьому занятті ми з вами надихнемость технологією та на реальних випадках навчимось працювати з ChatGPT, як експерти І надихнемось можливостями АІ в 2024',
    link: '#'
  },
  4: {
    title: 'Модуль №4. Гроші та ROI. Розумніння профітабільності з АІ. Як рахувати профіт проектів з АІ та довгострокові нюанси',
    bullet1: 'Технологічна грамотність LLM',
    bullet2: 'Наслідки для бізнесу 4',
    bullet3: 'Приклади використання людьми з різних сфер 4',
    bullet4: 'Best practices 4',
    resultTitle: 'В результаті 4:',
    resultDescription: 'На цьому занятті ми з вами надихнемость технологією та на реальних випадках навчимось працювати з ChatGPT, як експерти І надихнемось можливостями АІ в 2024',
    link: '#'
  },
  5: {
    title: 'Модуль №5. Інтеграція 1. Знайти місця застосування АІ. Як люди заробляють з АІ сервіси',
    bullet1: 'Технологічна грамотність LLM',
    bullet2: 'Наслідки для бізнесу 5',
    bullet3: 'Приклади використання людьми з різних сфер 5',
    bullet4: 'Best practices 5',
    resultTitle: 'В результаті 5:',
    resultDescription: 'На цьому занятті ми з вами надихнемость технологією та на реальних випадках навчимось працювати з ChatGPT, як експерти І надихнемось можливостями АІ в 2024',
    link: '#'
  },
  6: {
    title: 'Модуль №6. Інтеграція 2. Зони використання АІ для великих компаній: Як великі компанії використовують АІ для ліпшого ROI',
    bullet1: 'Технологічна грамотність LLM',
    bullet2: 'Наслідки для бізнесу 6',
    bullet3: 'Приклади використання людьми з різних сфер 6',
    bullet4: 'Best practices 6',
    resultTitle: 'В результаті 6:',
    resultDescription: 'На цьому занятті ми з вами надихнемость технологією та на реальних'
  },
  7: {
    title: 'Модуль №7. Розуміння Даних. Бути готовим до Штучного інтелекту. Приклади задач які вирішуються тільки машинним навчанням. Види Візуалізації даних. Маніпуляції за рахунок візуалізації даних',
    bullet1: 'Технологічна грамотність LLM',
    bullet2: 'Наслідки для бізнесу 7',
    bullet3: 'Приклади використання людьми з різних сфер 7',
    bullet4: 'Best practices 7',
    resultTitle: 'В результаті 7:',
    resultDescription: 'На цьому занятті ми з вами надихнемость технологією та на реальних'
  }
};
var moduleItems = document.querySelectorAll('.module');
var modulesContainer = document.querySelector('.modules__container');
var moduleDetailsDesktop = modulesContainer.querySelector('.module-details');
var currentModule = null;
var loadModuleDetails = function loadModuleDetails(event) {
  var item = event ? event.currentTarget : moduleItems[0];
  var moduleId = item.getAttribute('data-module-id');
  console.log("Loading details for module ID: ".concat(moduleId));
  if (currentModule && currentModule !== item) {
    var moduleContainer = currentModule.querySelector('.module__container');
    moduleContainer.classList.remove('module__container--active');
    var moduleDetails = currentModule.querySelector('.module-details');
    if (moduleDetails) {
      moduleDetails.remove();
    }
  }
  if (currentModule !== item) {
    var currentModuleContainer = item.querySelector('.module__container');
    currentModuleContainer.classList.add('module__container--active');
    currentModule = item;
    if (window.innerWidth <= 1200) {
      loadMobileModuleDetails(moduleId, item);
    } else {
      loadDesktopModuleDetails(moduleId);
    }
  }
};
var loadMobileModuleDetails = function loadMobileModuleDetails(moduleId, moduleItem) {
  var details = document.createElement('div');
  details.className = 'module-details module-details--mobile';
  var moduleDetails = moduleData[moduleId];
  if (!moduleDetails) {
    console.error("Module data not found for module ID: ".concat(moduleId));
    return;
  }
  details.innerHTML = "\n    <h2 class=\"module-details__title\">\n      ".concat(moduleDetails.title, "\n    </h2>\n\n    <div class=\"module-details__points\">\n      <div class=\"module-details__point\">\n        <div class=\"module-details__point-bullet\"></div>\n        <p class=\"module-details__point-title\">").concat(moduleDetails.bullet1, "</p>\n      </div>\n\n      <div class=\"module-details__point\">\n        <div class=\"module-details__point-bullet\"></div>\n        <p class=\"module-details__point-title\">").concat(moduleDetails.bullet2, "</p>\n      </div>\n\n      <div class=\"module-details__point\">\n        <div class=\"module-details__point-bullet\"></div>\n        <p class=\"module-details__point-title\">").concat(moduleDetails.bullet3, "</p>\n      </div>\n\n      <div class=\"module-details__point\">\n        <div class=\"module-details__point-bullet\"></div>\n        <p class=\"module-details__point-title\">").concat(moduleDetails.bullet4, "</p>\n      </div>\n    </div>\n\n    <div class=\"module-details__results\">\n      <h4 class=\"module-details__results-title\">").concat(moduleDetails.resultTitle, "</h4>\n      <p class=\"module-details__results-description\">\n        ").concat(moduleDetails.resultDescription, "\n      </p>\n    </div>\n\n    <button class=\"module-details__button\">\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u0438\u0441\u044F \u043D\u0430 \u043A\u0443\u0440\u0441</button>\n  ");
  moduleItem.appendChild(details);
};
var loadDesktopModuleDetails = function loadDesktopModuleDetails(moduleId) {
  var moduleDetails = moduleData[moduleId];
  if (!moduleDetails) {
    console.error("Module data not found for module ID: ".concat(moduleId));
    return;
  }
  moduleDetailsDesktop.innerHTML = "\n    <h2 class=\"module-details__title\">\n      ".concat(moduleDetails.title, "\n    </h2>\n\n    <div class=\"module-details__points\">\n      <div class=\"module-details__point\">\n        <div class=\"module-details__point-bullet\"></div>\n        <p class=\"module-details__point-title\">").concat(moduleDetails.bullet1, "</p>\n      </div>\n\n      <div class=\"module-details__point\">\n        <div class=\"module-details__point-bullet\"></div>\n        <p class=\"module-details__point-title\">").concat(moduleDetails.bullet2, "</p>\n      </div>\n\n      <div class=\"module-details__point\">\n        <div class=\"module-details__point-bullet\"></div>\n        <p class=\"module-details__point-title\">").concat(moduleDetails.bullet3, "</p>\n      </div>\n\n      <div class=\"module-details__point\">\n        <div class=\"module-details__point-bullet\"></div>\n        <p class=\"module-details__point-title\">").concat(moduleDetails.bullet4, "</p>\n      </div>\n    </div>\n\n    <div class=\"module-details__results\">\n      <h4 class=\"module-details__results-title\">").concat(moduleDetails.resultTitle, "</h4>\n      <p class=\"module-details__results-description\">\n        ").concat(moduleDetails.resultDescription, "\n      </p>\n    </div>\n\n    <button class=\"module-details__button\">\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u0438\u0441\u044F \u043D\u0430 \u043A\u0443\u0440\u0441</button>\n  ");
};
moduleItems.forEach(function (item) {
  item.addEventListener('click', loadModuleDetails);
});
loadModuleDetails();

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/ai-applications/ai-applications.scss":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/ai-applications/ai-applications.scss ***!
  \*********************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.ai-applications {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.ai-applications > h2, .ai-applications > p {
  text-align: center;
  max-width: 500px;
}
@media (min-width: 1200px) {
  .ai-applications > h2, .ai-applications > p {
    max-width: 880px;
  }
}
.ai-applications__title {
  font-size: 2rem;
}
@media (min-width: 640px) {
  .ai-applications__title {
    font-size: 4rem;
  }
}
.ai-applications__description {
  font-size: 1.1rem;
}
@media (min-width: 640px) {
  .ai-applications__description {
    font-size: 1.45rem;
  }
}
.ai-applications__list {
  display: flex;
  flex-direction: column;
  gap: 1.45rem;
  margin: 2.8rem 0;
}
@media (min-width: 1200px) {
  .ai-applications__list {
    flex-direction: row;
  }
}
.ai-applications__conclusion {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 221px;
}
.ai-applications__conclusion-image {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 160px;
  max-height: 221px;
}
.ai-applications__conclusion-title {
  text-align: center;
  z-index: 2;
}
@media (min-width: 640px) {
  .ai-applications__conclusion-title {
    font-size: 1.45rem;
    max-width: 556px;
  }
}
@media (min-width: 1200px) {
  .ai-applications__conclusion-title {
    max-width: 895px;
  }
}`, "",{"version":3,"sources":["webpack://./src/styles/blocks/ai-applications/ai-applications.scss","webpack://./src/styles/mixins.scss"],"names":[],"mappings":"AAEA;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;AADF;AAIE;EACE,kBAAA;EACA,gBAAA;AAFJ;ACKE;EDLA;IAKI,gBAAA;EADJ;AACF;AAGE;EACE,eAAA;AADJ;ACTE;EDSA;IAII,eAAA;EAAJ;AACF;AAGE;EACE,iBAAA;AADJ;ACjBE;EDiBA;IAII,kBAAA;EAAJ;AACF;AAGE;EACE,aAAA;EACA,sBAAA;EACA,YAAA;EACA,gBAAA;AADJ;ACtBE;EDmBA;IAOI,mBAAA;EAAJ;AACF;AAGE;EACE,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,iBAAA;AADJ;AAGI;EACE,kBAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;EACA,gBAAA;EACA,iBAAA;AADN;AAII;EACE,kBAAA;EACA,UAAA;AAFN;ACpDE;EDoDE;IAKI,kBAAA;IACA,gBAAA;EADN;AACF;ACpDE;ED8CE;IASI,gBAAA;EACN;AACF","sourcesContent":["@import '../../mixins.scss';\r\n\r\n.ai-applications {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n\r\n\r\n  & > h2, & > p {\r\n    text-align: center;\r\n    max-width: 500px;\r\n\r\n    @include onDesktop {\r\n      max-width: 880px;\r\n    }\r\n  }\r\n  &__title {\r\n    font-size: 2rem;\r\n\r\n    @include onTablet {\r\n      font-size: 4rem;\r\n    }\r\n  }\r\n\r\n  &__description {\r\n    font-size: 1.1rem;\r\n\r\n    @include onTablet {\r\n      font-size: 1.45rem;\r\n    }\r\n  }\r\n  \r\n  &__list {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1.45rem;\r\n    margin: 2.8rem 0;\r\n\r\n    @include onDesktop {\r\n      flex-direction: row;\r\n    }\r\n  }\r\n\r\n  &__conclusion {\r\n    position: relative;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    min-height: 221px;\r\n\r\n    &-image {\r\n      position: absolute;\r\n      top: 50%;\r\n      left: 50%;\r\n      transform: translate(-50%, -50%);\r\n      max-width: 160px;\r\n      max-height: 221px;\r\n    }\r\n\r\n    &-title {\r\n      text-align: center;\r\n      z-index: 2;\r\n\r\n      @include onTablet {\r\n        font-size: 1.45rem;\r\n        max-width: 556px;\r\n      }\r\n      @include onDesktop {\r\n        max-width: 895px;\r\n      }\r\n    }\r\n  }\r\n}","@mixin onMobile {\r\n  @media (min-width: 375px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin onTablet {\r\n  @media (min-width: 640px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin onDesktop {\r\n  @media (min-width: 1200px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin onLaptop {\r\n  @media (min-width: 1400px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n%flex-center {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/ai-applications/profession-card.scss":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/ai-applications/profession-card.scss ***!
  \*********************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.profession-card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: radial-gradient(100% 586.65% at 0% 100%, #504740 0%, #5C4359 16.36%, #382B3F 42.19%, #171717 100%);
  border-radius: 32px;
  padding: 40px 32px;
}
.profession-card__icon {
  width: 48px;
  height: 48px;
}
.profession-card__title {
  font-size: 1.1rem;
  color: var(--accent-color);
}
.profession-card__description {
  font-size: 0.9rem;
}
@media (min-width: 1200px) {
  .profession-card {
    max-width: 400px;
  }
}`, "",{"version":3,"sources":["webpack://./src/styles/blocks/ai-applications/profession-card.scss","webpack://./src/styles/mixins.scss"],"names":[],"mappings":"AAEA;EACE,aAAA;EACA,sBAAA;EACA,SAAA;EACA,8GAAA;EACA,mBAAA;EACA,kBAAA;AADF;AAGE;EACE,WAAA;EACA,YAAA;AADJ;AAIE;EACE,iBAAA;EACA,0BAAA;AAFJ;AAKE;EACE,iBAAA;AAHJ;ACLE;EDXF;IAuBI,gBAAA;EAHF;AACF","sourcesContent":["@import '../../mixins.scss';\r\n\r\n.profession-card {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n  background: radial-gradient(100% 586.65% at 0% 100%, #504740 0%, #5C4359 16.36%, #382B3F 42.19%, #171717 100%);\r\n  border-radius: 32px;\r\n  padding: 40px 32px;\r\n\r\n  &__icon {\r\n    width: 48px;\r\n    height: 48px;\r\n  }\r\n\r\n  &__title {\r\n    font-size: 1.1rem;\r\n    color: var(--accent-color);\r\n  }\r\n\r\n  &__description {\r\n    font-size: .9rem;\r\n  }\r\n\r\n  @include onDesktop {\r\n    max-width: 400px;\r\n  }\r\n}","@mixin onMobile {\r\n  @media (min-width: 375px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin onTablet {\r\n  @media (min-width: 640px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin onDesktop {\r\n  @media (min-width: 1200px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin onLaptop {\r\n  @media (min-width: 1400px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n%flex-center {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/ai-info/ai-info.scss":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/ai-info/ai-info.scss ***!
  \*****************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.ai-info {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 3rem;
}
@media (min-width: 1200px) {
  .ai-info {
    flex-direction: row-reverse;
  }
}
.ai-info__content {
  display: flex;
  flex-basis: 50%;
  flex-direction: column;
  gap: 0.5rem;
}
.ai-info__title {
  font-size: 2rem;
}
@media (min-width: 640px) {
  .ai-info__title {
    font-size: 3.1rem;
  }
}
.ai-info__question {
  font-size: 1.55rem;
}
@media (min-width: 640px) {
  .ai-info__question {
    font-size: 2rem;
  }
}
@media (min-width: 640px) {
  .ai-info__description {
    font-size: 1.5rem;
  }
}
.ai-info__image {
  flex-basis: 50%;
  margin: 40px 0 0 0;
  width: 100%;
  height: max-content;
}`, "",{"version":3,"sources":["webpack://./src/styles/blocks/ai-info/ai-info.scss","webpack://./src/styles/mixins.scss"],"names":[],"mappings":"AAEA;EACE,kBAAA;EACA,aAAA;EACA,sBAAA;EACA,SAAA;AADF;ACQE;EDXF;IAOI,2BAAA;EAAF;AACF;AAEE;EACE,aAAA;EACA,eAAA;EACA,sBAAA;EACA,WAAA;AAAJ;AAEE;EACE,eAAA;AAAJ;ACZE;EDWA;IAII,iBAAA;EACJ;AACF;AACE;EACE,kBAAA;AACJ;ACpBE;EDkBA;IAII,eAAA;EAEJ;AACF;ACzBE;EDyBA;IAGI,iBAAA;EACJ;AACF;AACE;EACE,eAAA;EACA,kBAAA;EACA,WAAA;EACA,mBAAA;AACJ","sourcesContent":["@import '../../mixins.scss';\r\n\r\n.ai-info {\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 3rem;\r\n\r\n  @include onDesktop {\r\n    flex-direction: row-reverse;\r\n  }\r\n\r\n  &__content {\r\n    display: flex;\r\n    flex-basis: 50%;\r\n    flex-direction: column;\r\n    gap: .5rem;\r\n  }\r\n  &__title {\r\n    font-size: 2rem;\r\n\r\n    @include onTablet {\r\n      font-size: 3.1rem;\r\n    }\r\n  }\r\n  &__question {\r\n    font-size: 1.55rem;\r\n\r\n    @include onTablet {\r\n      font-size: 2rem;\r\n    }\r\n  }\r\n  &__description {\r\n\r\n    @include onTablet {\r\n      font-size: 1.5rem;\r\n    }\r\n  }\r\n  &__image {\r\n    flex-basis: 50%;\r\n    margin: 40px 0 0 0;\r\n    width: 100%;\r\n    height: max-content;\r\n  }\r\n}","@mixin onMobile {\r\n  @media (min-width: 375px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin onTablet {\r\n  @media (min-width: 640px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin onDesktop {\r\n  @media (min-width: 1200px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin onLaptop {\r\n  @media (min-width: 1400px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n%flex-center {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/ai-usage/ai-usage.scss":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/ai-usage/ai-usage.scss ***!
  \*******************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.ai-usage__title {
  font-size: 2rem;
  text-align: center;
  max-width: 600px;
  margin: 0 auto 2rem auto;
}
@media (min-width: 640px) {
  .ai-usage__title {
    font-size: 3.5rem;
    max-width: 100%;
  }
}
.ai-usage__intro {
  font-size: 1.3rem;
  margin: 0 0 4rem 0;
  text-align: center;
  max-width: 600px;
  margin: 0 auto 4rem auto;
}
.ai-usage__cards {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}
@media (min-width: 1200px) {
  .ai-usage__cards {
    grid-template-columns: repeat(2, 1fr);
  }
}
.ai-usage__card {
  display: flex;
  align-items: flex-start;
  gap: 1.3rem;
  background: radial-gradient(68.63% 463.3% at 100% 100%, #504740 0%, #5C4359 16.36%, #382B3F 42.19%, #171717 100%);
  border-radius: 20px;
  padding: 40px 20px;
}
@media (min-width: 640px) {
  .ai-usage__card {
    gap: 2.8rem;
    padding: 40px;
  }
}
.ai-usage__info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.ai-usage__heading {
  font-size: 1.3rem;
}
@media (min-width: 640px) {
  .ai-usage__heading {
    font-size: 1.8rem;
  }
}
.ai-usage__conclusion {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px 0;
  min-height: 200px;
}
.ai-usage__conclusion-image {
  min-width: 236px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
@media (min-width: 1200px) {
  .ai-usage__conclusion-image {
    min-width: 180px;
  }
}
.ai-usage__conclusion-title {
  font-size: 1.15rem;
  font-weight: 400;
  text-align: center;
  z-index: 1;
}
@media (min-width: 640px) {
  .ai-usage__conclusion-title {
    font-size: 1.7rem;
  }
}`, "",{"version":3,"sources":["webpack://./src/styles/blocks/ai-usage/ai-usage.scss","webpack://./src/styles/mixins.scss"],"names":[],"mappings":"AAGE;EACE,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,wBAAA;AAFJ;ACEE;EDJA;IAOI,iBAAA;IACA,eAAA;EADJ;AACF;AAGE;EACE,iBAAA;EACA,kBAAA;EACA,kBAAA;EACA,gBAAA;EACA,wBAAA;AADJ;AAIE;EACE,aAAA;EACA,0BAAA;EACA,SAAA;AAFJ;ACVE;EDSA;IAMI,qCAAA;EADJ;AACF;AAIE;EACE,aAAA;EACA,uBAAA;EACA,WAAA;EACA,iHAAA;EACA,mBAAA;EACA,kBAAA;AAFJ;AC7BE;EDyBA;IASI,WAAA;IACA,aAAA;EADJ;AACF;AAIE;EACE,aAAA;EACA,sBAAA;EACA,8BAAA;AAFJ;AAIE;EACE,iBAAA;AAFJ;AC3CE;ED4CA;IAII,iBAAA;EADJ;AACF;AAIE;EACE,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,cAAA;EACA,iBAAA;AAFJ;AAII;EACE,gBAAA;EACA,kBAAA;EACA,SAAA;EACA,QAAA;EACA,gCAAA;AAFN;ACzDE;EDsDE;IAQI,gBAAA;EADN;AACF;AAGI;EACE,kBAAA;EACA,gBAAA;EACA,kBAAA;EACA,UAAA;AADN;AC1EE;EDuEE;IAOI,iBAAA;EAAN;AACF","sourcesContent":["@import '../../mixins.scss';\r\n\r\n.ai-usage {\r\n  &__title {\r\n    font-size: 2rem;\r\n    text-align: center;\r\n    max-width: 600px;\r\n    margin: 0 auto 2rem auto;\r\n\r\n    @include onTablet {\r\n      font-size: 3.5rem;\r\n      max-width: 100%;\r\n    }\r\n  }\r\n  &__intro {\r\n    font-size: 1.3rem;\r\n    margin: 0 0 4rem 0;\r\n    text-align: center;\r\n    max-width: 600px;\r\n    margin: 0 auto 4rem auto;\r\n  }\r\n\r\n  &__cards {\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    gap: 20px;\r\n\r\n    @include onDesktop {\r\n      grid-template-columns: repeat(2, 1fr);\r\n    }\r\n  }\r\n\r\n  &__card {\r\n    display: flex;\r\n    align-items: flex-start;\r\n    gap: 1.3rem;\r\n    background: radial-gradient(68.63% 463.3% at 100% 100%, #504740 0%, #5C4359 16.36%, #382B3F 42.19%, #171717 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;\r\n    border-radius: 20px;\r\n    padding: 40px 20px;\r\n\r\n    @include onTablet {\r\n      gap: 2.8rem;\r\n      padding: 40px;\r\n    }\r\n  }\r\n\r\n  &__info {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n  }\r\n  &__heading {\r\n    font-size: 1.3rem;\r\n\r\n    @include onTablet {\r\n      font-size: 1.8rem;\r\n    }\r\n  }\r\n\r\n  &__conclusion {\r\n    position: relative;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin: 40px 0;\r\n    min-height: 200px;\r\n\r\n    &-image {\r\n      min-width: 236px;\r\n      position: absolute;\r\n      left: 50%;\r\n      top: 50%;\r\n      transform: translate(-50%, -50%);\r\n\r\n      @include onDesktop {\r\n        min-width: 180px;\r\n      }\r\n    }\r\n    &-title {\r\n      font-size: 1.15rem;\r\n      font-weight: 400;\r\n      text-align: center;\r\n      z-index: 1;\r\n\r\n      @include onTablet {\r\n        font-size: 1.7rem;\r\n      }\r\n    }\r\n  }\r\n}","@mixin onMobile {\r\n  @media (min-width: 375px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin onTablet {\r\n  @media (min-width: 640px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin onDesktop {\r\n  @media (min-width: 1200px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin onLaptop {\r\n  @media (min-width: 1400px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n%flex-center {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/ai-usage/usage-card.scss":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/ai-usage/usage-card.scss ***!
  \*********************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.usage-card {
  display: flex;
  align-items: flex-start;
  gap: 1.3rem;
  background: radial-gradient(68.63% 463.3% at 100% 100%, #504740 0%, #5C4359 16.36%, #382B3F 42.19%, #171717 100%);
  border-radius: 20px;
  padding: 40px 20px;
}
@media (min-width: 640px) {
  .usage-card {
    gap: 2.8rem;
    padding: 40px;
  }
}
.usage-card__info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.usage-card__heading {
  font-size: 1.3rem;
}
@media (min-width: 640px) {
  .usage-card__heading {
    font-size: 1.8rem;
  }
}`, "",{"version":3,"sources":["webpack://./src/styles/blocks/ai-usage/usage-card.scss","webpack://./src/styles/mixins.scss"],"names":[],"mappings":"AAEA;EACE,aAAA;EACA,uBAAA;EACA,WAAA;EACA,iHAAA;EACA,mBAAA;EACA,kBAAA;AADF;ACAE;EDLF;IASI,WAAA;IACA,aAAA;EAAF;AACF;AAEE;EACE,aAAA;EACA,sBAAA;EACA,8BAAA;AAAJ;AAEE;EACE,iBAAA;AAAJ;ACdE;EDaA;IAII,iBAAA;EACJ;AACF","sourcesContent":["@import '../../mixins.scss';\r\n\r\n.usage-card {\r\n  display: flex;\r\n  align-items: flex-start;\r\n  gap: 1.3rem;\r\n  background: radial-gradient(68.63% 463.3% at 100% 100%, #504740 0%, #5C4359 16.36%, #382B3F 42.19%, #171717 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;\r\n  border-radius: 20px;\r\n  padding: 40px 20px;\r\n\r\n  @include onTablet {\r\n    gap: 2.8rem;\r\n    padding: 40px;\r\n  }\r\n\r\n  &__info {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n  }\r\n  &__heading {\r\n    font-size: 1.3rem;\r\n\r\n    @include onTablet {\r\n      font-size: 1.8rem;\r\n    }\r\n  }\r\n}","@mixin onMobile {\r\n  @media (min-width: 375px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin onTablet {\r\n  @media (min-width: 640px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin onDesktop {\r\n  @media (min-width: 1200px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin onLaptop {\r\n  @media (min-width: 1400px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n%flex-center {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/benefits/benefits-option.scss":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/benefits/benefits-option.scss ***!
  \**************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.benefits-option {
  display: flex;
  align-items: flex-start;
  gap: 1.1rem;
}
@media (min-width: 640px) {
  .benefits-option {
    font-size: 1.45rem;
    gap: 2rem;
  }
}
.benefits-option--advantage {
  align-items: center;
  font-size: 1rem;
}
.benefits-option__icon {
  width: max-content;
  height: max-content;
}
.benefits-option__icon--advantage {
  width: 48px;
  height: 48px;
}
@media (min-width: 640px) {
  .benefits-option__icon--advantage {
    width: 64px;
    height: 64px;
  }
}
.benefits-option__description {
  margin: 0;
}`, "",{"version":3,"sources":["webpack://./src/styles/blocks/benefits/benefits-option.scss","webpack://./src/styles/mixins.scss"],"names":[],"mappings":"AAEA;EACE,aAAA;EACA,uBAAA;EACA,WAAA;AADF;ACGE;EDLF;IAMI,kBAAA;IACA,SAAA;EAAF;AACF;AAEE;EACE,mBAAA;EACA,eAAA;AAAJ;AAGE;EACE,kBAAA;EACA,mBAAA;AADJ;AAGI;EACE,WAAA;EACA,YAAA;AADN;ACfE;EDcE;IAKI,WAAA;IACA,YAAA;EAAN;AACF;AAIE;EACE,SAAA;AAFJ","sourcesContent":["@import '../../mixins.scss';\r\n\r\n.benefits-option {\r\n  display: flex;\r\n  align-items: flex-start;\r\n  gap: 1.1rem;\r\n\r\n  @include onTablet {\r\n    font-size: 1.45rem;\r\n    gap: 2rem;\r\n  }\r\n\r\n  &--advantage {\r\n    align-items: center;\r\n    font-size: 1rem;\r\n  }\r\n\r\n  &__icon {\r\n    width: max-content;\r\n    height: max-content;\r\n\r\n    &--advantage {\r\n      width: 48px;\r\n      height: 48px;\r\n\r\n      @include onTablet {\r\n        width: 64px;\r\n        height: 64px;\r\n      }\r\n    }\r\n  }\r\n\r\n  &__description {\r\n    margin: 0;\r\n  }\r\n}","@mixin onMobile {\r\n  @media (min-width: 375px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin onTablet {\r\n  @media (min-width: 640px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin onDesktop {\r\n  @media (min-width: 1200px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin onLaptop {\r\n  @media (min-width: 1400px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n%flex-center {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/benefits/benefits.scss":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/benefits/benefits.scss ***!
  \*******************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.benefits {
  display: flex;
  flex-direction: column;
  gap: 2.85rem;
  background: radial-gradient(100% 586.65% at 0% 100%, #504740 0%, #5C4359 16.36%, #382B3F 42.19%, #171717 100%);
  padding: 60px 20px;
  border-radius: 20px;
}
@media (min-width: 640px) {
  .benefits {
    padding: 80px 40px;
    gap: 4.3rem;
  }
}
@media (min-width: 1200px) {
  .benefits {
    flex-direction: row;
    justify-content: space-between;
    padding: 104px 80px;
  }
}
.benefits__advantages {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
@media (min-width: 640px) {
  .benefits__advantages {
    gap: 2.8rem;
  }
}
.benefits__title {
  font-size: 2rem;
  font-weight: 700;
}
@media (min-width: 640px) {
  .benefits__title {
    font-size: 3.5rem;
  }
}
.benefits__option {
  display: flex;
  align-items: flex-start;
  gap: 1.1rem;
}
@media (min-width: 640px) {
  .benefits__option {
    font-size: 1.45rem;
    gap: 2rem;
  }
}
.benefits__option--advantage {
  align-items: center;
  font-size: 1rem;
}
.benefits__icon {
  width: max-content;
  height: max-content;
}
.benefits__icon--advantage {
  width: 48px;
  height: 48px;
}
@media (min-width: 640px) {
  .benefits__icon--advantage {
    width: 64px;
    height: 64px;
  }
}
.benefits__description {
  margin: 0;
}
.benefits__usage {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 400px;
}
.benefits__algorithms {
  font-size: 1.2rem;
}
@media (min-width: 640px) {
  .benefits__algorithms {
    font-size: 1.45rem;
  }
}`, "",{"version":3,"sources":["webpack://./src/styles/blocks/benefits/benefits.scss","webpack://./src/styles/mixins.scss"],"names":[],"mappings":"AAEA;EACE,aAAA;EACA,sBAAA;EACA,YAAA;EACA,8GAAA;EACA,kBAAA;EACA,mBAAA;AADF;ACAE;EDLF;IASI,kBAAA;IACA,WAAA;EAAF;AACF;ACAE;EDXF;IAaI,mBAAA;IACA,8BAAA;IACA,mBAAA;EAEF;AACF;AAAE;EACE,aAAA;EACA,sBAAA;EACA,WAAA;AAEJ;AClBE;EDaA;IAMI,WAAA;EAGJ;AACF;AAAE;EACE,eAAA;EACA,gBAAA;AAEJ;AC3BE;EDuBA;IAKI,iBAAA;EAGJ;AACF;AAAE;EACE,aAAA;EACA,uBAAA;EACA,WAAA;AAEJ;ACrCE;EDgCA;IAMI,kBAAA;IACA,SAAA;EAGJ;AACF;AADI;EACE,mBAAA;EACA,eAAA;AAGN;AACE;EACE,kBAAA;EACA,mBAAA;AACJ;AACI;EACE,WAAA;EACA,YAAA;AACN;ACvDE;EDoDE;IAKI,WAAA;IACA,YAAA;EAEN;AACF;AAEE;EACE,SAAA;AAAJ;AAGE;EACE,aAAA;EACA,sBAAA;EACA,SAAA;EACA,gBAAA;AADJ;AAIE;EACE,iBAAA;AAFJ;ACzEE;ED0EA;IAGI,kBAAA;EAAJ;AACF","sourcesContent":["@import '../../mixins.scss';\r\n\r\n.benefits {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 2.85rem;\r\n  background: radial-gradient(100% 586.65% at 0% 100%, #504740 0%, #5C4359 16.36%, #382B3F 42.19%, #171717 100%);\r\n  padding: 60px 20px;\r\n  border-radius: 20px;\r\n\r\n  @include onTablet {\r\n    padding: 80px 40px;\r\n    gap: 4.3rem;\r\n  }\r\n  @include onDesktop {\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    padding: 104px 80px;\r\n  }\r\n\r\n  &__advantages {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1.5rem;\r\n\r\n    @include onTablet {\r\n      gap: 2.8rem;\r\n    }\r\n  }\r\n\r\n  &__title {\r\n    font-size: 2rem;\r\n    font-weight: 700;\r\n\r\n    @include onTablet {\r\n      font-size: 3.5rem;\r\n    }\r\n  }\r\n\r\n  &__option {\r\n    display: flex;\r\n    align-items: flex-start;\r\n    gap: 1.1rem;\r\n\r\n    @include onTablet {\r\n      font-size: 1.45rem;\r\n      gap: 2rem;\r\n    }\r\n\r\n    &--advantage {\r\n      align-items: center;\r\n      font-size: 1rem;\r\n    }\r\n  }\r\n\r\n  &__icon {\r\n    width: max-content;\r\n    height: max-content;\r\n\r\n    &--advantage {\r\n      width: 48px;\r\n      height: 48px;\r\n\r\n      @include onTablet {\r\n        width: 64px;\r\n        height: 64px;\r\n      }\r\n    }\r\n  }\r\n\r\n  &__description {\r\n    margin: 0;\r\n  }\r\n  \r\n  &__usage {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 2rem;\r\n    max-width: 400px;\r\n  }\r\n\r\n  &__algorithms {\r\n    font-size: 1.2rem;\r\n    @include onTablet {\r\n      font-size: 1.45rem;\r\n    }\r\n  }\r\n}","@mixin onMobile {\r\n  @media (min-width: 375px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin onTablet {\r\n  @media (min-width: 640px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin onDesktop {\r\n  @media (min-width: 1200px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin onLaptop {\r\n  @media (min-width: 1400px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n%flex-center {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/container/container.scss":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/container/container.scss ***!
  \*********************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.container {
  padding: 0 20px;
}
@media (min-width: 640px) {
  .container {
    padding: 0 82px;
  }
}
@media (min-width: 1200px) {
  .container {
    max-width: 1400px;
    padding: 0 105px;
    margin: 0 auto;
  }
}`, "",{"version":3,"sources":["webpack://./src/styles/blocks/container/container.scss","webpack://./src/styles/mixins.scss"],"names":[],"mappings":"AAEA;EACE,eAAA;AADF;ACKE;EDLF;IAII,eAAA;EAAF;AACF;ACME;EDXF;IAOI,iBAAA;IACA,gBAAA;IACA,cAAA;EAEF;AACF","sourcesContent":["@import '../../mixins.scss';\r\n\r\n.container {\r\n  padding: 0 20px;\r\n\r\n  @include onTablet {\r\n    padding: 0 82px;\r\n  }\r\n  @include onDesktop {\r\n    max-width: 1400px;\r\n    padding: 0 105px;\r\n    margin: 0 auto;\r\n  }\r\n}","@mixin onMobile {\r\n  @media (min-width: 375px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin onTablet {\r\n  @media (min-width: 640px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin onDesktop {\r\n  @media (min-width: 1200px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin onLaptop {\r\n  @media (min-width: 1400px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n%flex-center {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/course-details/course-card.scss":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/course-details/course-card.scss ***!
  \****************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.course-card {
  background: radial-gradient(100% 586.65% at 0% 100%, #504740 0%, #5C4359 16.36%, #382B3F 42.19%, #171717 100%);
  display: flex;
  gap: 1.2rem;
  padding: 40px 20px;
  border-radius: 20px;
}
@media (min-width: 640px) {
  .course-card {
    gap: 2.2rem;
    padding: 40px;
  }
}
.course-card__icon {
  width: 72px;
  height: 72px;
}
.course-card__content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 320px;
}
.course-card__title {
  color: var(--accent-color);
  font-size: 1.2rem;
  font-weight: 700;
  margin: 0;
}
@media (min-width: 640px) {
  .course-card__title {
    font-size: 1.45rem;
  }
}
.course-card__description {
  font-size: 0.9rem;
  margin: 0;
}
@media (min-width: 640px) {
  .course-card__description {
    font-size: 1rem;
  }
}`, "",{"version":3,"sources":["webpack://./src/styles/blocks/course-details/course-card.scss","webpack://./src/styles/mixins.scss"],"names":[],"mappings":"AAEA;EACE,8GAAA;EACA,aAAA;EACA,WAAA;EACA,kBAAA;EACA,mBAAA;AADF;ACCE;EDLF;IAQI,WAAA;IACA,aAAA;EAAF;AACF;AAEE;EACE,WAAA;EACA,YAAA;AAAJ;AAGE;EACE,aAAA;EACA,sBAAA;EACA,SAAA;EACA,gBAAA;AADJ;AAIE;EACE,0BAAA;EACA,iBAAA;EACA,gBAAA;EACA,SAAA;AAFJ;ACrBE;EDmBA;IAOI,kBAAA;EADJ;AACF;AAIE;EACE,iBAAA;EACA,SAAA;AAFJ;AC9BE;ED8BA;IAKI,eAAA;EADJ;AACF","sourcesContent":["@import '../../mixins.scss';\r\n\r\n.course-card {\r\n  background: radial-gradient(100% 586.65% at 0% 100%, #504740 0%, #5C4359 16.36%, #382B3F 42.19%, #171717 100%);\r\n  display: flex;\r\n  gap: 1.2rem;\r\n  padding: 40px 20px;\r\n  border-radius: 20px;\r\n\r\n  @include onTablet {\r\n    gap: 2.2rem;\r\n    padding: 40px;\r\n  }\r\n\r\n  &__icon {\r\n    width: 72px;\r\n    height: 72px;\r\n  }\r\n\r\n  &__content {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n    max-width: 320px;\r\n  }\r\n\r\n  &__title {\r\n    color: var(--accent-color);\r\n    font-size: 1.2rem;\r\n    font-weight: 700;\r\n    margin: 0;\r\n\r\n    @include onTablet {\r\n      font-size: 1.45rem;\r\n    }\r\n  }\r\n\r\n  &__description {\r\n    font-size: .9rem;\r\n    margin: 0;\r\n\r\n    @include onTablet {\r\n      font-size: 1rem;\r\n    }\r\n  }\r\n}","@mixin onMobile {\r\n  @media (min-width: 375px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin onTablet {\r\n  @media (min-width: 640px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin onDesktop {\r\n  @media (min-width: 1200px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin onLaptop {\r\n  @media (min-width: 1400px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n%flex-center {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/course-details/course-details.scss":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/course-details/course-details.scss ***!
  \*******************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.course-details__title {
  font-size: 2rem;
  text-align: center;
  font-weight: 700;
  max-width: 390px;
  margin: 0 auto 40px auto;
}
@media (min-width: 640px) {
  .course-details__title {
    font-size: 4rem;
  }
}
@media (min-width: 1200px) {
  .course-details__title {
    max-width: 100%;
  }
}
.course-details__list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.45rem;
}
@media (min-width: 1200px) {
  .course-details__list {
    grid-template-columns: repeat(2, 1fr);
  }
}`, "",{"version":3,"sources":["webpack://./src/styles/blocks/course-details/course-details.scss","webpack://./src/styles/mixins.scss"],"names":[],"mappings":"AAGE;EACE,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,gBAAA;EACA,wBAAA;AAFJ;ACCE;EDJA;IAQI,eAAA;EADJ;AACF;ACEE;EDVA;IAWI,eAAA;EACJ;AACF;AAEE;EACE,aAAA;EACA,0BAAA;EACA,YAAA;AAAJ;ACRE;EDKA;IAMI,qCAAA;EACJ;AACF","sourcesContent":["@import '../../mixins.scss';\r\n\r\n.course-details {\r\n  &__title {\r\n    font-size: 2rem;\r\n    text-align: center;\r\n    font-weight: 700;\r\n    max-width: 390px;\r\n    margin: 0 auto 40px auto;\r\n\r\n    @include onTablet {\r\n      font-size: 4rem;\r\n    }\r\n    @include onDesktop {\r\n      max-width: 100%;\r\n    }\r\n  }\r\n\r\n  &__list {\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    gap: 1.45rem;\r\n\r\n    @include onDesktop {\r\n      grid-template-columns: repeat(2, 1fr);\r\n    } \r\n  }\r\n}","@mixin onMobile {\r\n  @media (min-width: 375px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin onTablet {\r\n  @media (min-width: 640px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin onDesktop {\r\n  @media (min-width: 1200px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin onLaptop {\r\n  @media (min-width: 1400px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n%flex-center {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/course-form/course-form.scss":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/course-form/course-form.scss ***!
  \*************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.course-form__timer, .course-form__information {
  display: flex;
  align-items: center;
  justify-content: center;
}

.course-form {
  display: flex;
  flex-direction: column;
  gap: 100px;
}
@media (min-width: 1200px) {
  .course-form {
    flex-direction: row;
  }
}
.course-form__container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.course-form__information {
  gap: 1rem;
}
@media (min-width: 1200px) {
  .course-form__information {
    justify-content: flex-start;
  }
}
.course-form__title {
  font-size: 2.6rem;
  text-align: center;
  margin-top: 1.45rem;
  text-transform: uppercase;
}
@media (min-width: 640px) {
  .course-form__title {
    font-size: 3.1rem;
  }
}
@media (min-width: 1200px) {
  .course-form__title {
    text-align: start;
  }
}
.course-form__intro {
  font-weight: 700;
  font-size: 1.45rem;
  text-align: center;
  margin-top: 1.1rem;
}
@media (min-width: 640px) {
  .course-form__intro {
    font-size: 1.8rem;
  }
}
@media (min-width: 1200px) {
  .course-form__intro {
    text-align: start;
  }
}
.course-form__description {
  font-size: 1.45rem;
  text-align: center;
  margin-top: 3.5rem;
}
@media (min-width: 1200px) {
  .course-form__description {
    text-align: start;
  }
}
.course-form__price {
  font-size: 1.1rem;
  margin-top: 1rem;
  text-align: center;
}
@media (min-width: 1200px) {
  .course-form__price {
    text-align: start;
  }
}
.course-form__timers {
  display: flex;
  justify-content: center;
  gap: 1rem;
}
@media (min-width: 1200px) {
  .course-form__timers {
    justify-content: flex-start;
  }
}
.course-form__timer {
  flex-direction: column;
  background-color: var(--input-color);
  color: var(--black-color);
  padding: 12px 20px;
  border-radius: 10px;
  width: 60px;
  max-height: 64px;
}
@media (min-width: 640px) {
  .course-form__timer {
    width: 88px;
  }
}
.course-form__time {
  font-weight: 700;
}
@media (min-width: 640px) {
  .course-form__time {
    font-size: 1.45rem;
  }
}
.course-form__label {
  font-size: 0.9rem;
}`, "",{"version":3,"sources":["webpack://./src/styles/mixins.scss","webpack://./src/styles/blocks/course-form/course-form.scss"],"names":[],"mappings":"AAwBA;EACE,aAAA;EACA,mBAAA;EACA,uBAAA;ACvBF;;AAFA;EACE,aAAA;EACA,sBAAA;EACA,UAAA;AAKF;ADGE;ECXF;IAMI,mBAAA;EAMF;AACF;AAJE;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;AAMJ;AAHE;EAEE,SAAA;AAIJ;ADVE;ECIA;IAKI,2BAAA;EAKJ;AACF;AAFE;EACE,iBAAA;EACA,kBAAA;EACA,mBAAA;EACA,yBAAA;AAIJ;AD3BE;ECmBA;IAOI,iBAAA;EAKJ;AACF;AD1BE;ECaA;IAUI,iBAAA;EAOJ;AACF;AAJE;EACE,gBAAA;EACA,kBAAA;EACA,kBAAA;EACA,kBAAA;AAMJ;AD3CE;ECiCA;IAOI,iBAAA;EAOJ;AACF;AD1CE;EC2BA;IAUI,iBAAA;EASJ;AACF;AANE;EACE,kBAAA;EACA,kBAAA;EACA,kBAAA;AAQJ;ADpDE;ECyCA;IAKI,iBAAA;EAUJ;AACF;AAPE;EACE,iBAAA;EACA,gBAAA;EACA,kBAAA;AASJ;AD9DE;ECkDA;IAKI,iBAAA;EAWJ;AACF;AARE;EACE,aAAA;EACA,uBAAA;EACA,SAAA;AAUJ;ADxEE;EC2DA;IAKI,2BAAA;EAYJ;AACF;AATE;EAEE,sBAAA;EACA,oCAAA;EACA,yBAAA;EACA,kBAAA;EACA,mBAAA;EACA,WAAA;EACA,gBAAA;AAUJ;AD5FE;EC0EA;IAWI,WAAA;EAWJ;AACF;AARE;EACE,gBAAA;AAUJ;ADpGE;ECyFA;IAGI,kBAAA;EAYJ;AACF;AATE;EACE,iBAAA;AAWJ","sourcesContent":["@mixin onMobile {\r\n  @media (min-width: 375px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin onTablet {\r\n  @media (min-width: 640px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin onDesktop {\r\n  @media (min-width: 1200px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin onLaptop {\r\n  @media (min-width: 1400px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n%flex-center {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}","@import '../../mixins.scss';\r\n\r\n.course-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 100px;\r\n\r\n  @include onDesktop {\r\n    flex-direction: row;\r\n  }\r\n\r\n  &__container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n  }\r\n\r\n  &__information {\r\n    @extend %flex-center;\r\n    gap: 1rem;\r\n\r\n    @include onDesktop {\r\n      justify-content: flex-start;\r\n    }\r\n  }\r\n\r\n  &__title {\r\n    font-size: 2.6rem;\r\n    text-align: center;\r\n    margin-top: 1.45rem;\r\n    text-transform: uppercase;\r\n\r\n    @include onTablet {\r\n      font-size: 3.1rem;\r\n    }\r\n    @include onDesktop {\r\n      text-align: start;\r\n    }\r\n  }\r\n\r\n  &__intro {\r\n    font-weight: 700;\r\n    font-size: 1.45rem;\r\n    text-align: center;\r\n    margin-top: 1.1rem;\r\n\r\n    @include onTablet {\r\n      font-size: 1.8rem;\r\n    }\r\n    @include onDesktop {\r\n      text-align: start;\r\n    }\r\n  }\r\n\r\n  &__description {\r\n    font-size: 1.45rem;\r\n    text-align: center;\r\n    margin-top: 3.5rem;\r\n    @include onDesktop {\r\n      text-align: start;\r\n    }\r\n  }\r\n\r\n  &__price {\r\n    font-size: 1.1rem;\r\n    margin-top: 1rem;\r\n    text-align: center;\r\n    @include onDesktop {\r\n      text-align: start;\r\n    }\r\n  }\r\n\r\n  &__timers {\r\n    display: flex;\r\n    justify-content: center;\r\n    gap: 1rem;\r\n    @include onDesktop {\r\n      justify-content: flex-start\r\n    }\r\n  }\r\n\r\n  &__timer {\r\n    @extend %flex-center;\r\n    flex-direction: column;\r\n    background-color: var(--input-color);\r\n    color: var(--black-color);\r\n    padding: 12px 20px;\r\n    border-radius: 10px;\r\n    width: 60px;\r\n    max-height: 64px;\r\n    \r\n    @include onTablet {\r\n      width: 88px;\r\n    }\r\n  }\r\n\r\n  &__time {\r\n    font-weight: 700;\r\n    @include onTablet {\r\n      font-size: 1.45rem;\r\n    }\r\n  }\r\n\r\n  &__label {\r\n    font-size: .9rem;\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/course-form/form.scss":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/course-form/form.scss ***!
  \******************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.form__discount, .form__image-container, .form {
  display: flex;
  align-items: center;
  justify-content: center;
}

.form {
  position: relative;
  flex-direction: column;
  background-color: var(--primary-color);
  border-radius: 20px;
  padding: 60px 20px;
  width: 100%;
}
.form__title {
  font-size: 1.45rem;
  color: var(--black-color);
  max-width: 180px;
  text-align: center;
}
@media (min-width: 640px) {
  .form__title {
    max-width: 236px;
    font-size: 2.2rem;
  }
}
.form__description {
  color: var(--black-color);
  max-width: 236px;
  text-align: center;
}
@media (min-width: 640px) {
  .form__description {
    max-width: 400px;
    font-size: 1.45rem;
  }
}
.form__list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
@media (min-width: 640px) {
  .form__list {
    min-width: 400px;
  }
}
.form__phone {
  position: relative;
}
.form__tel {
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translate(0%, -50%);
}
.form__input {
  background-color: var(--input-color);
  border: 1px solid var(--border-color);
  border-radius: 4px;
  padding: 16px 32px;
  width: 100%;
}
.form__input.form__input--tel {
  padding: 16px 32px 16px 70px;
}
.form__input::placeholder {
  color: var(--black-color);
}
.form__button {
  outline: 0;
  border: none;
  margin: 1.1rem 0 0 0;
  color: var(--primary-color);
  border-radius: 10px;
  min-width: 237px;
  min-width: 47px;
  padding: 12px 44px;
  background-color: var(--accent-color);
  transition: opacity 0.3s ease;
  cursor: pointer;
}
.form__button:hover {
  opacity: 0.7;
}
.form__button:active {
  opacity: 0.5;
}
.form__availability {
  text-align: center;
  color: var(--border-color);
}
.form__disclaimer {
  text-align: center;
  font-size: 0.9rem;
  font-weight: 300;
  color: var(--border-color);
  max-width: 319px;
}
.form__image-container {
  position: absolute;
  top: 0;
  right: 0;
}
.form__discount {
  position: absolute;
  top: -40px;
  right: -10px;
}
@media (min-width: 640px) {
  .form__discount {
    top: -40px;
    right: -55px;
  }
}
.form__discount-background {
  position: relative;
  width: 134px;
}
@media (min-width: 640px) {
  .form__discount-background {
    width: 197px;
  }
}
.form__discount-title {
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  width: 64px;
}
@media (min-width: 640px) {
  .form__discount-title {
    width: 93px;
  }
}`, "",{"version":3,"sources":["webpack://./src/styles/mixins.scss","webpack://./src/styles/blocks/course-form/form.scss"],"names":[],"mappings":"AAwBA;EACE,aAAA;EACA,mBAAA;EACA,uBAAA;ACvBF;;AAFA;EACE,kBAAA;EAEA,sBAAA;EACA,sCAAA;EACA,mBAAA;EACA,kBAAA;EACA,WAAA;AAIF;AAFE;EACE,kBAAA;EACA,yBAAA;EACA,gBAAA;EACA,kBAAA;AAIJ;ADZE;ECIA;IAOI,gBAAA;IACA,iBAAA;EAKJ;AACF;AAFE;EACE,yBAAA;EACA,gBAAA;EACA,kBAAA;AAIJ;ADvBE;ECgBA;IAMI,gBAAA;IACA,kBAAA;EAKJ;AACF;AAFE;EACE,aAAA;EACA,sBAAA;EACA,WAAA;AAIJ;ADlCE;EC2BA;IAKI,gBAAA;EAMJ;AACF;AAHE;EACE,kBAAA;AAKJ;AAFE;EACE,kBAAA;EACA,QAAA;EACA,UAAA;EACA,8BAAA;AAIJ;AADE;EACE,oCAAA;EACA,qCAAA;EACA,kBAAA;EACA,kBAAA;EACA,WAAA;AAGJ;AADI;EACE,4BAAA;AAGN;AAAI;EACE,yBAAA;AAEN;AAEE;EACE,UAAA;EACA,YAAA;EACA,oBAAA;EACA,2BAAA;EACA,mBAAA;EACA,gBAAA;EACA,eAAA;EACA,kBAAA;EACA,qCAAA;EACA,6BAAA;EACA,eAAA;AAAJ;AAEI;EACE,YAAA;AAAN;AAGI;EACE,YAAA;AADN;AAKE;EACE,kBAAA;EACA,0BAAA;AAHJ;AAME;EACE,kBAAA;EACA,iBAAA;EACA,gBAAA;EACA,0BAAA;EACA,gBAAA;AAJJ;AAOE;EACE,kBAAA;EAEA,MAAA;EACA,QAAA;AANJ;AASE;EACE,kBAAA;EACA,UAAA;EACA,YAAA;AAPJ;ADrGE;ECyGA;IAOI,UAAA;IACA,YAAA;EAPJ;AACF;AASI;EACE,kBAAA;EACA,YAAA;AAPN;AD/GE;ECoHE;IAKI,YAAA;EANN;AACF;AASI;EACE,kBAAA;EACA,QAAA;EACA,UAAA;EACA,+BAAA;EACA,WAAA;AAPN;AD3HE;EC6HE;IAQI,WAAA;EANN;AACF","sourcesContent":["@mixin onMobile {\r\n  @media (min-width: 375px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin onTablet {\r\n  @media (min-width: 640px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin onDesktop {\r\n  @media (min-width: 1200px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin onLaptop {\r\n  @media (min-width: 1400px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n%flex-center {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}","@import '../../mixins.scss';\r\n\r\n.form {\r\n  position: relative;\r\n  @extend %flex-center;\r\n  flex-direction: column;\r\n  background-color: var(--primary-color);\r\n  border-radius: 20px;\r\n  padding: 60px 20px;\r\n  width: 100%;\r\n\r\n  &__title {\r\n    font-size: 1.45rem;\r\n    color: var(--black-color);\r\n    max-width: 180px;\r\n    text-align: center;\r\n\r\n    @include onTablet {\r\n      max-width: 236px;\r\n      font-size: 2.2rem;\r\n    }\r\n  }\r\n\r\n  &__description {\r\n    color: var(--black-color);\r\n    max-width: 236px;\r\n    text-align: center;\r\n\r\n    @include onTablet {\r\n      max-width: 400px;\r\n      font-size: 1.45rem;\r\n    }\r\n  }\r\n\r\n  &__list {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: .5rem;\r\n    @include onTablet {\r\n      min-width: 400px;\r\n    }\r\n  }\r\n\r\n  &__phone {\r\n    position: relative;\r\n  }\r\n\r\n  &__tel {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 20px;\r\n    transform: translate(0%, -50%);\r\n  }\r\n\r\n  &__input {\r\n    background-color: var(--input-color);\r\n    border: 1px solid var(--border-color);\r\n    border-radius: 4px;\r\n    padding: 16px 32px;\r\n    width: 100%;\r\n\r\n    &.form__input--tel {\r\n      padding: 16px 32px 16px 70px;\r\n    }\r\n\r\n    &::placeholder {\r\n      color: var(--black-color);\r\n    }\r\n  }\r\n\r\n  &__button {\r\n    outline: 0;\r\n    border: none;\r\n    margin: 1.1rem 0 0 0;\r\n    color: var(--primary-color);\r\n    border-radius: 10px;\r\n    min-width: 237px;\r\n    min-width: 47px;\r\n    padding: 12px 44px;\r\n    background-color: var(--accent-color);\r\n    transition: opacity .3s ease;\r\n    cursor: pointer;\r\n\r\n    &:hover {\r\n      opacity: .7;\r\n    }\r\n\r\n    &:active {\r\n      opacity: 0.5;\r\n    }\r\n  }\r\n\r\n  &__availability {\r\n    text-align: center;\r\n    color: var(--border-color);\r\n  }\r\n\r\n  &__disclaimer {\r\n    text-align: center;\r\n    font-size: .9rem;\r\n    font-weight: 300;\r\n    color: var(--border-color);\r\n    max-width: 319px;\r\n  }\r\n\r\n  &__image-container {\r\n    position: absolute;\r\n    @extend %flex-center;\r\n    top: 0;\r\n    right: 0;\r\n  }\r\n\r\n  &__discount {\r\n    position: absolute;\r\n    top: -40px;\r\n    right: -10px;\r\n    @extend %flex-center;\r\n\r\n    @include onTablet {\r\n      top: -40px;\r\n      right: -55px;\r\n    }\r\n\r\n    &-background {\r\n      position: relative;\r\n      width: 134px;\r\n\r\n      @include onTablet {\r\n        width: 197px;\r\n      }\r\n    }\r\n\r\n    &-title {\r\n      position: absolute;\r\n      top: 50%;\r\n      right: 50%;\r\n      transform: translate(50%, -50%);\r\n      width: 64px;\r\n\r\n      @include onTablet {\r\n        width: 93px;\r\n      }\r\n    }\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/course/course.scss":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/course/course.scss ***!
  \***************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../assets/images/course-background.png */ "./src/assets/images/course-background.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.course {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 60px 24px;
  border-radius: 32px;
  background-color: var(--card-color);
  background: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.2509803922);
}
@media (min-width: 640px) {
  .course {
    padding: 80px 52px;
    gap: 3.5rem;
  }
}
@media (min-width: 1200px) {
  .course {
    padding: 80px 104px;
  }
}
.course__title {
  font-size: 2rem;
  text-align: center;
}
@media (min-width: 640px) {
  .course__title {
    font-size: 4rem;
  }
}
.course__group {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.7rem;
}
@media (min-width: 640px) {
  .course__group {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 1200px) {
  .course__group {
    grid-template-columns: repeat(4, 1fr);
  }
}
.course__group-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.7rem;
  padding: 60px 38px;
  background-color: var(--card-color);
  border-radius: 32px;
}
@media (min-width: 640px) {
  .course__group-container {
    padding: 60px 16px;
  }
}
@media (min-width: 1200px) {
  .course__group-container {
    padding: 40px 18px;
  }
}
.course__group-icon {
  width: 48px;
  height: 48px;
}
.course__group-title {
  font-size: 1.1rem;
  text-align: center;
}
.course__group-description {
  text-align: center;
}`, "",{"version":3,"sources":["webpack://./src/styles/blocks/course/course.scss","webpack://./src/styles/mixins.scss"],"names":[],"mappings":"AAEA;EACE,aAAA;EACA,sBAAA;EACA,SAAA;EACA,kBAAA;EACA,mBAAA;EACA,mCAAA;EACA,mDAAA;EACA,sBAAA;EACA,4BAAA;EACA,2BAAA;EACA,uDAAA;AADF;ACLE;EDLF;IAcI,kBAAA;IACA,WAAA;EAAF;AACF;ACLE;EDXF;IAkBI,mBAAA;EAEF;AACF;AAAE;EACE,eAAA;EACA,kBAAA;AAEJ;ACpBE;EDgBA;IAKI,eAAA;EAGJ;AACF;AAAE;EACE,aAAA;EACA,0BAAA;EACA,WAAA;AAEJ;AC9BE;EDyBA;IAMI,qCAAA;EAGJ;AACF;AC7BE;EDmBA;IAUI,qCAAA;EAIJ;AACF;AAFI;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EACA,WAAA;EACA,kBAAA;EACA,mCAAA;EACA,mBAAA;AAIN;AClDE;EDsCE;IAWI,kBAAA;EAKN;AACF;ACjDE;EDgCE;IAcI,kBAAA;EAON;AACF;AAJI;EACE,WAAA;EACA,YAAA;AAMN;AAHI;EACE,iBAAA;EACA,kBAAA;AAKN;AAFI;EACE,kBAAA;AAIN","sourcesContent":["@import '../../mixins.scss';\r\n\r\n.course {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 2rem;\r\n  padding: 60px 24px;\r\n  border-radius: 32px;\r\n  background-color: var(--card-color);\r\n  background: url(../../../assets/images/course-background.png);\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  background-position: bottom;\r\n  box-shadow: 0px 4px 4px 0px #00000040;\r\n\r\n  @include onTablet {\r\n    padding: 80px 52px;\r\n    gap: 3.5rem;\r\n  }\r\n  @include onDesktop {\r\n    padding: 80px 104px;\r\n  }\r\n\r\n  &__title {\r\n    font-size: 2rem;\r\n    text-align: center;\r\n\r\n    @include onTablet {\r\n      font-size: 4rem;\r\n    }\r\n  }\r\n\r\n  &__group {\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    gap: 1.7rem;\r\n\r\n    @include onTablet {\r\n      grid-template-columns: repeat(2, 1fr);\r\n    }\r\n\r\n    @include onDesktop {\r\n      grid-template-columns: repeat(4, 1fr);\r\n    }\r\n\r\n    &-container {\r\n      display: flex;\r\n      flex-direction: column;\r\n      align-items: center;\r\n      justify-content: center;\r\n      gap: 1.7rem;\r\n      padding: 60px 38px;\r\n      background-color: var(--card-color);\r\n      border-radius: 32px;\r\n\r\n      @include onTablet {\r\n        padding: 60px 16px;\r\n      }\r\n      @include onDesktop {\r\n        padding: 40px 18px;\r\n      }\r\n    }\r\n\r\n    &-icon {\r\n      width: 48px;\r\n      height: 48px;\r\n    }\r\n\r\n    &-title {\r\n      font-size: 1.1rem;\r\n      text-align: center;\r\n    }\r\n\r\n    &-description {\r\n      text-align: center;\r\n    }\r\n  }\r\n}","@mixin onMobile {\r\n  @media (min-width: 375px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin onTablet {\r\n  @media (min-width: 640px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin onDesktop {\r\n  @media (min-width: 1200px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin onLaptop {\r\n  @media (min-width: 1400px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n%flex-center {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/employment/employment-card.scss":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/employment/employment-card.scss ***!
  \****************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.employment-card {
  display: flex;
  align-items: flex-start;
  gap: 1.45rem;
}
.employment-card__icon {
  width: 4rem;
  height: 4rem;
}
.employment-card__title {
  margin: 0;
}`, "",{"version":3,"sources":["webpack://./src/styles/blocks/employment/employment-card.scss"],"names":[],"mappings":"AAAA;EACE,aAAA;EACA,uBAAA;EACA,YAAA;AACF;AACE;EACE,WAAA;EACA,YAAA;AACJ;AAEE;EACE,SAAA;AAAJ","sourcesContent":[".employment-card {\r\n  display: flex;\r\n  align-items: flex-start;\r\n  gap: 1.45rem;\r\n\r\n  &__icon {\r\n    width: 4rem;\r\n    height: 4rem;\r\n  }\r\n\r\n  &__title {\r\n    margin: 0;\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/employment/employment.scss":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/employment/employment.scss ***!
  \***********************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.employment {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.8rem;
}
@media (min-width: 640px) {
  .employment {
    padding: 80px 104px;
    border-radius: 32px;
    background-color: var(--dark-color);
  }
}
@media (min-width: 1200px) {
  .employment {
    flex-direction: row;
    gap: 5rem;
  }
}
.employment__content {
  display: flex;
  flex-direction: column;
  gap: 2.8rem;
}
.employment__title {
  font-size: 1.65rem;
  text-align: center;
}
@media (min-width: 640px) {
  .employment__title {
    font-size: 3rem;
  }
}
@media (min-width: 1200px) {
  .employment__title {
    text-align: start;
  }
}
.employment__list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.employment__image {
  max-width: 256px;
  max-height: 204px;
}
@media (min-width: 640px) {
  .employment__image {
    max-width: 396px;
    max-height: 314px;
  }
}
@media (min-width: 1200px) {
  .employment__image {
    max-width: 356px;
    max-height: max-content;
  }
}`, "",{"version":3,"sources":["webpack://./src/styles/blocks/employment/employment.scss","webpack://./src/styles/mixins.scss"],"names":[],"mappings":"AAEA;EACE,kBAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,WAAA;AADF;ACCE;EDLF;IAQI,mBAAA;IACA,mBAAA;IACA,mCAAA;EAAF;AACF;ACAE;EDXF;IAcI,mBAAA;IACA,SAAA;EACF;AACF;AACE;EACE,aAAA;EACA,sBAAA;EACA,WAAA;AACJ;AAEE;EACE,kBAAA;EACA,kBAAA;AAAJ;ACrBE;EDmBA;IAKI,eAAA;EACJ;AACF;ACpBE;EDaA;IAQI,iBAAA;EAGJ;AACF;AAAE;EACE,aAAA;EACA,sBAAA;EACA,SAAA;AAEJ;AACE;EACE,gBAAA;EACA,iBAAA;AACJ;ACxCE;EDqCA;IAKI,gBAAA;IACA,iBAAA;EAEJ;AACF;ACxCE;ED+BA;IAUI,gBAAA;IACA,uBAAA;EAGJ;AACF","sourcesContent":["@import '../../mixins.scss';\r\n\r\n.employment {\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 2.8rem;\r\n\r\n  @include onTablet {\r\n    padding: 80px 104px;\r\n    border-radius: 32px;\r\n    background-color: var(--dark-color);\r\n  }\r\n\r\n  @include onDesktop {\r\n    flex-direction: row;\r\n    gap: 5rem;\r\n  }\r\n\r\n  &__content {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 2.8rem;\r\n  }\r\n\r\n  &__title {\r\n    font-size: 1.65rem;\r\n    text-align: center;\r\n\r\n    @include onTablet {\r\n      font-size: 3rem;\r\n    }\r\n    @include onDesktop {\r\n      text-align: start;\r\n    }\r\n  }\r\n\r\n  &__list {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 2rem;\r\n  }\r\n\r\n  &__image {\r\n    max-width: 256px;\r\n    max-height: 204px;\r\n\r\n    @include onTablet {\r\n      max-width: 396px;\r\n      max-height: 314px;\r\n    }\r\n\r\n    @include onDesktop {\r\n      max-width: 356px;\r\n      max-height: max-content;\r\n    }\r\n  }\r\n}","@mixin onMobile {\r\n  @media (min-width: 375px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin onTablet {\r\n  @media (min-width: 640px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin onDesktop {\r\n  @media (min-width: 1200px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin onLaptop {\r\n  @media (min-width: 1400px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n%flex-center {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/faq/faq.scss":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/faq/faq.scss ***!
  \*********************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.faq {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.65rem;
  padding: 100px 12px;
  background-color: var(--faq-bg-color);
}
@media (min-width: 640px) {
  .faq {
    padding: 120px 82px;
    gap: 3rem;
  }
}
.faq__title {
  text-align: center;
  font-size: 2rem;
}
@media (min-width: 640px) {
  .faq__title {
    font-size: 3.5rem;
    max-width: 509px;
  }
}
.faq__list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.faq__item {
  display: flex;
  align-items: center;
  gap: 1.45rem;
  padding: 16px;
  border-radius: 10px;
  background-color: var(--faq-color);
}
.faq__icon {
  width: 24px;
  height: 24px;
}
.faq__question {
  font-weight: 700;
}
@media (min-width: 640px) {
  .faq__question {
    font-size: 1.45rem;
  }
}`, "",{"version":3,"sources":["webpack://./src/styles/blocks/faq/faq.scss","webpack://./src/styles/mixins.scss"],"names":[],"mappings":"AAEA;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,YAAA;EACA,mBAAA;EACA,qCAAA;AADF;ACDE;EDLF;IAUI,mBAAA;IACA,SAAA;EAAF;AACF;AAEE;EACE,kBAAA;EACA,eAAA;AAAJ;ACXE;EDSA;IAKI,iBAAA;IACA,gBAAA;EACJ;AACF;AAEE;EACE,aAAA;EACA,sBAAA;EACA,SAAA;AAAJ;AAGE;EACE,aAAA;EACA,mBAAA;EACA,YAAA;EACA,aAAA;EACA,mBAAA;EACA,kCAAA;AADJ;AAIE;EACE,WAAA;EACA,YAAA;AAFJ;AAKE;EACE,gBAAA;AAHJ;ACrCE;EDuCA;IAII,kBAAA;EAFJ;AACF","sourcesContent":["@import '../../mixins.scss';\r\n\r\n.faq {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 1.65rem;\r\n  padding: 100px 12px;\r\n  background-color: var(--faq-bg-color);\r\n\r\n  @include onTablet {\r\n    padding: 120px 82px;\r\n    gap: 3rem;\r\n  }\r\n\r\n  &__title {\r\n    text-align: center;\r\n    font-size: 2rem;\r\n\r\n    @include onTablet {\r\n      font-size: 3.5rem;\r\n      max-width: 509px;\r\n    }\r\n  }\r\n\r\n  &__list {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n  }\r\n\r\n  &__item {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 1.45rem;\r\n    padding: 16px;\r\n    border-radius: 10px;\r\n    background-color: var(--faq-color);\r\n  }\r\n\r\n  &__icon {\r\n    width: 24px;\r\n    height: 24px;\r\n  }\r\n\r\n  &__question {\r\n    font-weight: 700;\r\n\r\n    @include onTablet {\r\n      font-size: 1.45rem;\r\n    }\r\n  }\r\n}","@mixin onMobile {\r\n  @media (min-width: 375px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin onTablet {\r\n  @media (min-width: 640px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin onDesktop {\r\n  @media (min-width: 1200px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin onLaptop {\r\n  @media (min-width: 1400px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n%flex-center {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/feedbacks/feedbacks.scss":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/feedbacks/feedbacks.scss ***!
  \*********************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../assets/images/arrow-left.png */ "./src/assets/images/arrow-left.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.feedbacks {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
  overflow: hidden;
  gap: 2.5rem;
}
@media (min-width: 640px) {
  .feedbacks {
    gap: 4rem;
  }
}
.feedbacks__image {
  width: 100%;
}
.feedbacks__title {
  font-size: 2rem;
  text-align: center;
}
@media (min-width: 640px) {
  .feedbacks__title {
    font-size: 3.4rem;
    max-width: 604px;
  }
}
@media (min-width: 1200px) {
  .feedbacks__title {
    text-align: start;
    max-width: 689px;
  }
}
.feedbacks__slider {
  overflow: hidden;
}
.feedbacks__slider__image {
  width: 100%;
  max-height: max-content;
}
.feedbacks__button {
  outline: 0;
  border: none;
  background-color: var(--accent-color);
  color: var(--primary-color);
  font-weight: 700;
  border-radius: 10px;
  padding: 12px 44px;
  transition: opacity 0.3s ease;
}
.feedbacks__button:hover {
  opacity: 0.7;
}
.feedbacks__button:active {
  opacity: 0.5;
}

.swiper {
  width: 100%;
}
.swiper-container-second {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
}
.swiper-wrapper-second {
  display: flex;
  width: 100%;
}
.swiper-button-prev {
  display: none;
}
@media (min-width: 1200px) {
  .swiper-button-prev {
    display: block;
  }
}
.swiper-button-prev::after {
  content: "";
}
.swiper-button-prev-second {
  width: 44px;
  height: 24px;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}
.swiper-button-next {
  display: none;
}
@media (min-width: 1200px) {
  .swiper-button-next {
    display: block;
  }
}
.swiper-button-next::after {
  content: "";
}
.swiper-button-next-second {
  width: 44px;
  height: 24px;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  transform: rotate(180deg);
}
.swiper-slide-second {
  overflow: hidden;
  transition: opacity 0.2s ease, transform 0.2s ease;
}
@media (min-width: 640px) {
  .swiper-slide-second {
    max-width: 291px;
  }
}
@media (min-width: 1200px) {
  .swiper-slide-second {
    max-width: 395px;
    width: 395px;
    opacity: 0.5;
  }
}
@media (min-width: 1200px) {
  .swiper-slide-active {
    opacity: 1;
  }
}
.swiper-pagination {
  position: static;
  text-align: center;
  margin-top: 10px;
  color: var(--accent-color);
}
.swiper-pagination-bullet {
  background-color: var(--pagination-color);
}
.swiper-pagination-bullet-bullet-active {
  background-color: var(--pink-color);
}

@media (min-width: 1200px) {
  .swiper-container-second .swiper-slide {
    opacity: 0.5;
    transform: scale(0.85);
  }
}

@media (min-width: 1200px) {
  .swiper-container-second .swiper-slide-active {
    opacity: 1;
    transform: scale(1);
  }
}`, "",{"version":3,"sources":["webpack://./src/styles/blocks/feedbacks/feedbacks.scss","webpack://./src/styles/mixins.scss"],"names":[],"mappings":"AAEA;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,eAAA;EACA,gBAAA;EACA,WAAA;AADF;ACAE;EDLF;IASI,SAAA;EAAF;AACF;AAEE;EACE,WAAA;AAAJ;AAGE;EACE,eAAA;EACA,kBAAA;AADJ;ACZE;EDWA;IAKI,iBAAA;IACA,gBAAA;EAAJ;AACF;ACZE;EDKA;IAUI,iBAAA;IACA,gBAAA;EACJ;AACF;AAEE;EACE,gBAAA;AAAJ;AAEI;EACE,WAAA;EACA,uBAAA;AAAN;AAIE;EACE,UAAA;EACA,YAAA;EACA,qCAAA;EACA,2BAAA;EACA,gBAAA;EACA,mBAAA;EACA,kBAAA;EACA,6BAAA;AAFJ;AAII;EACE,YAAA;AAFN;AAII;EACE,YAAA;AAFN;;AAOA;EACE,WAAA;AAJF;AAME;EACE,kBAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,WAAA;EACA,YAAA;AAJJ;AAOE;EACE,aAAA;EACA,WAAA;AALJ;AASI;EACE,aAAA;AAPN;AC5DE;EDkEE;IAII,cAAA;EANN;AACF;AAOM;EACE,WAAA;AALR;AAQM;EACE,WAAA;EACA,YAAA;EACA,yDAAA;AANR;AASI;EACE,aAAA;AAPN;AC5EE;EDkFE;IAGI,cAAA;EALN;AACF;AAMM;EACE,WAAA;AAJR;AAOM;EACE,WAAA;EACA,YAAA;EACA,yDAAA;EACA,yBAAA;AALR;AAUE;EACE,gBAAA;EACA,kDAAA;AARJ;ACpGE;ED0GA;IAKI,gBAAA;EAPJ;AACF;ACnGE;EDoGA;IASI,gBAAA;IACA,YAAA;IACA,YAAA;EANJ;AACF;AC1GE;EDmHA;IAEI,UAAA;EAPJ;AACF;AAUE;EACE,gBAAA;EACA,kBAAA;EACA,gBAAA;EACA,0BAAA;AARJ;AAUI;EACE,yCAAA;AARN;AAUM;EACE,mCAAA;AARR;;AC3HE;EDyIF;IAEI,YAAA;IACA,sBAAA;EAXF;AACF;;AClIE;EDgJF;IAEI,UAAA;IACA,mBAAA;EAXF;AACF","sourcesContent":["@import '../../mixins.scss';\r\n\r\n.feedbacks {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: 0 20px;\r\n  overflow: hidden;\r\n  gap: 2.5rem;\r\n\r\n  @include onTablet {\r\n    gap: 4rem;\r\n  }\r\n\r\n  &__image {\r\n    width: 100%;\r\n  }\r\n\r\n  &__title {\r\n    font-size: 2rem;\r\n    text-align: center;\r\n\r\n    @include onTablet {\r\n      font-size: 3.4rem;\r\n      max-width: 604px;\r\n    }\r\n\r\n    @include onDesktop {\r\n      text-align: start;\r\n      max-width: 689px;\r\n    }\r\n  }\r\n\r\n  &__slider {\r\n    overflow: hidden;\r\n\r\n    &__image {\r\n      width: 100%;\r\n      max-height: max-content;\r\n    }\r\n  }\r\n\r\n  &__button {\r\n    outline: 0;\r\n    border: none;\r\n    background-color: var(--accent-color);\r\n    color: var(--primary-color);\r\n    font-weight: 700;\r\n    border-radius: 10px;\r\n    padding: 12px 44px;\r\n    transition: opacity .3s ease;\r\n\r\n    &:hover {\r\n      opacity: .7;\r\n    }\r\n    &:active {\r\n      opacity: .5;\r\n    }\r\n  }\r\n}\r\n\r\n.swiper {\r\n  width: 100%;\r\n\r\n  &-container-second {\r\n    position: relative;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n\r\n  &-wrapper-second {\r\n    display: flex;\r\n    width: 100%;\r\n  }\r\n\r\n  &-button {\r\n    &-prev {\r\n      display: none;\r\n\r\n      @include onDesktop {\r\n        display: block;\r\n      }\r\n      &::after {\r\n        content: '';\r\n      }\r\n\r\n      &-second {\r\n        width: 44px;\r\n        height: 24px;\r\n        background-image: url(../../../assets/images/arrow-left.png);\r\n      }\r\n    }\r\n    &-next {\r\n      display: none;\r\n      @include onDesktop {\r\n        display: block;\r\n      }\r\n      &::after {\r\n        content: '';\r\n      }\r\n\r\n      &-second {\r\n        width: 44px;\r\n        height: 24px;\r\n        background-image: url(../../../assets/images/arrow-left.png);\r\n        transform: rotate(180deg);\r\n      }\r\n    }\r\n  }\r\n\r\n  &-slide-second {\r\n    overflow: hidden;\r\n    transition: opacity .2s ease, transform .2s ease;\r\n\r\n    @include onTablet {\r\n      max-width: 291px;\r\n    }\r\n\r\n    @include onDesktop {\r\n      max-width: 395px;\r\n      width: 395px;\r\n      opacity: .5;\r\n    }\r\n  }\r\n\r\n  &-slide-active {\r\n    @include onDesktop {\r\n      opacity: 1;\r\n    }\r\n  }\r\n\r\n  &-pagination {\r\n    position: static;\r\n    text-align: center;\r\n    margin-top: 10px;\r\n    color: var(--accent-color);\r\n\r\n    &-bullet {\r\n      background-color: var(--pagination-color);\r\n\r\n      &-bullet-active {\r\n        background-color: var(--pink-color);\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n.swiper-container-second .swiper-slide {\r\n  @include onDesktop {\r\n    opacity: .5;\r\n    transform: scale(0.85);\r\n  }\r\n}\r\n\r\n.swiper-container-second .swiper-slide-active {\r\n  @include onDesktop {\r\n    opacity: 1;\r\n    transform: scale(1);\r\n  }\r\n}\r\n","@mixin onMobile {\r\n  @media (min-width: 375px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin onTablet {\r\n  @media (min-width: 640px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin onDesktop {\r\n  @media (min-width: 1200px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin onLaptop {\r\n  @media (min-width: 1400px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n%flex-center {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/footer/footer.scss":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/footer/footer.scss ***!
  \***************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.footer__info {
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer {
  padding: 100px 0 40px 0;
}
@media (min-width: 640px) {
  .footer {
    padding: 120px 0 40px 0;
  }
}
.footer__container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.2rem;
  justify-items: center;
}
@media (min-width: 1200px) {
  .footer__container {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
  }
}
.footer__info {
  flex-direction: column;
  gap: 2.2rem;
}
@media (min-width: 1200px) {
  .footer__info {
    grid-area: 1/1/2/2;
    align-items: flex-start;
  }
}
.footer__logo {
  width: 84px;
  height: 34px;
}
.footer__address {
  text-align: center;
}
@media (min-width: 1200px) {
  .footer__address {
    text-align: start;
  }
}
.footer__social-media {
  display: flex;
  gap: 1.45rem;
}
.footer__icon {
  width: 24px;
  height: 24px;
}
.footer__about {
  display: none;
  flex-direction: column;
  gap: 2.2rem;
  max-width: 285px;
}
@media (min-width: 1200px) {
  .footer__about {
    display: flex;
    grid-area: 1/2/2/3;
  }
}
.footer__about-title {
  font-size: 1.3rem;
}
.footer__about-list {
  display: flex;
  gap: 2.2rem;
}
.footer__about-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.footer__about-link {
  color: var(--primary-color);
  text-decoration: none;
  cursor: pointer;
}
.footer__contacts {
  display: flex;
  flex-direction: column;
  max-width: 294px;
  gap: 1rem;
}
@media (min-width: 1200px) {
  .footer__contacts {
    grid-area: 1/3/2/-1;
  }
}
.footer__contacts-title {
  display: none;
  font-size: 1.45rem;
  font-weight: 700;
  margin: 0;
}
@media (min-width: 1200px) {
  .footer__contacts-title {
    display: inline;
  }
}
.footer__contact {
  display: flex;
  gap: 0.5rem;
}
.footer__contact-icon {
  width: 24px;
  height: 24px;
}
.footer__contact-text {
  color: var(--primary-color);
}
.footer__rights {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 40px 18px;
  gap: 1.75rem;
  border-top: 1px solid var(--elements-color);
}
@media (min-width: 1200px) {
  .footer__rights {
    grid-area: 3/1/-1/-1;
    flex-direction: row;
    padding: 40px 0;
  }
}
.footer__rights-title {
  font-weight: 700;
  margin-bottom: 1.75rem;
  text-align: center;
  margin: 0;
}
@media (min-width: 1200px) {
  .footer__rights-title {
    text-align: start;
    font-size: 0.8rem;
  }
}
.footer__rights-list {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 1.75rem;
}
@media (min-width: 1200px) {
  .footer__rights-list {
    flex-direction: row;
    justify-content: space-between;
  }
}
.footer__rights-link {
  text-align: center;
  color: var(--rights-color);
  text-decoration: none;
}
@media (min-width: 1200px) {
  .footer__rights-link {
    font-size: 0.8rem;
    text-align: start;
  }
}`, "",{"version":3,"sources":["webpack://./src/styles/mixins.scss","webpack://./src/styles/blocks/footer/footer.scss"],"names":[],"mappings":"AAwBA;EACE,aAAA;EACA,mBAAA;EACA,uBAAA;ACvBF;;AAFA;EACE,uBAAA;AAKF;ADDE;ECLF;IAII,uBAAA;EAMF;AACF;AAJE;EACE,aAAA;EACA,0BAAA;EACA,WAAA;EACA,qBAAA;AAMJ;ADNE;ECJA;IAOI,qCAAA;IACA,uBAAA;EAOJ;AACF;AAJE;EAEE,sBAAA;EACA,WAAA;AAKJ;ADhBE;ECQA;IAMI,kBAAA;IACA,uBAAA;EAMJ;AACF;AAJE;EACE,WAAA;EACA,YAAA;AAMJ;AAJE;EACE,kBAAA;AAMJ;AD7BE;ECsBA;IAII,iBAAA;EAOJ;AACF;AALE;EACE,aAAA;EACA,YAAA;AAOJ;AAJE;EACE,WAAA;EACA,YAAA;AAMJ;AAHE;EACE,aAAA;EACA,sBAAA;EACA,WAAA;EACA,gBAAA;AAKJ;ADhDE;ECuCA;IAOI,aAAA;IACA,kBAAA;EAMJ;AACF;AAJI;EACE,iBAAA;AAMN;AAJI;EACE,aAAA;EACA,WAAA;AAMN;AAJI;EACE,aAAA;EACA,sBAAA;EACA,SAAA;AAMN;AAJI;EACE,2BAAA;EACA,qBAAA;EACA,eAAA;AAMN;AAFE;EACE,aAAA;EACA,sBAAA;EACA,gBAAA;EACA,SAAA;AAIJ;AD7EE;ECqEA;IAOI,mBAAA;EAKJ;AACF;AAHI;EACE,aAAA;EACA,kBAAA;EACA,gBAAA;EACA,SAAA;AAKN;ADxFE;EC+EE;IAOI,eAAA;EAMN;AACF;AAHE;EACE,aAAA;EACA,WAAA;AAKJ;AAJI;EACE,WAAA;EACA,YAAA;AAMN;AAJI;EACE,2BAAA;AAMN;AAFE;EACE,aAAA;EACA,sBAAA;EACA,WAAA;EACA,kBAAA;EACA,YAAA;EACA,2CAAA;AAIJ;ADhHE;ECsGA;IASI,oBAAA;IACA,mBAAA;IACA,eAAA;EAKJ;AACF;AAHI;EACE,gBAAA;EACA,sBAAA;EACA,kBAAA;EACA,SAAA;AAKN;AD7HE;ECoHE;IAOI,iBAAA;IACA,iBAAA;EAMN;AACF;AAJI;EACE,aAAA;EACA,sBAAA;EACA,YAAA;EACA,YAAA;AAMN;ADzIE;EC+HE;IAOI,mBAAA;IACA,8BAAA;EAON;AACF;AALI;EACE,kBAAA;EACA,0BAAA;EACA,qBAAA;AAON;ADpJE;EC0IE;IAMI,iBAAA;IACA,iBAAA;EAQN;AACF","sourcesContent":["@mixin onMobile {\r\n  @media (min-width: 375px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin onTablet {\r\n  @media (min-width: 640px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin onDesktop {\r\n  @media (min-width: 1200px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin onLaptop {\r\n  @media (min-width: 1400px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n%flex-center {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}","@import '../../mixins.scss';\r\n\r\n.footer {\r\n  padding: 100px 0 40px 0;\r\n\r\n  @include onTablet {\r\n    padding: 120px 0 40px 0;\r\n  }\r\n\r\n  &__container {\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    gap: 2.2rem;\r\n    justify-items: center;\r\n\r\n    @include onDesktop {\r\n      grid-template-columns: repeat(3, 1fr);\r\n      grid-template-rows: 1fr;\r\n    }\r\n  }\r\n\r\n  &__info {\r\n    @extend %flex-center;\r\n    flex-direction: column;\r\n    gap: 2.2rem;\r\n    \r\n    @include onDesktop {\r\n      grid-area: 1 / 1 / 2 / 2;\r\n      align-items: flex-start;\r\n    }\r\n  }\r\n  &__logo {\r\n    width: 84px;\r\n    height: 34px;\r\n  }\r\n  &__address {\r\n    text-align: center;\r\n\r\n    @include onDesktop {\r\n      text-align: start;\r\n    }\r\n  }\r\n  &__social-media {\r\n    display: flex;\r\n    gap: 1.45rem;\r\n  }\r\n\r\n  &__icon {\r\n    width: 24px;\r\n    height: 24px;\r\n  }\r\n\r\n  &__about {\r\n    display: none;\r\n    flex-direction: column;\r\n    gap: 2.2rem;\r\n    max-width: 285px;\r\n    \r\n    @include onDesktop {\r\n      display: flex;\r\n      grid-area: 1 / 2 / 2 / 3;\r\n    }\r\n\r\n    &-title {\r\n      font-size: 1.3rem;\r\n    }\r\n    &-list {\r\n      display: flex;\r\n      gap: 2.2rem;\r\n    }\r\n    &-container {\r\n      display: flex;\r\n      flex-direction: column;\r\n      gap: 1rem;\r\n    }\r\n    &-link {\r\n      color: var(--primary-color);\r\n      text-decoration: none;\r\n      cursor: pointer;\r\n    }\r\n  }\r\n\r\n  &__contacts {\r\n    display: flex;\r\n    flex-direction: column;\r\n    max-width: 294px;\r\n    gap: 1rem;\r\n\r\n    @include onDesktop {\r\n      grid-area: 1 / 3 / 2 / -1;\r\n    }\r\n\r\n    &-title {\r\n      display: none;\r\n      font-size: 1.45rem;\r\n      font-weight: 700;\r\n      margin: 0;\r\n\r\n      @include onDesktop {\r\n        display: inline;\r\n      }\r\n    }\r\n  }\r\n  &__contact {\r\n    display: flex;\r\n    gap: .5rem;\r\n    &-icon {\r\n      width: 24px;\r\n      height: 24px;\r\n    }\r\n    &-text {\r\n      color: var(--primary-color);\r\n    }\r\n  }\r\n\r\n  &__rights {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 100%;\r\n    padding: 40px 18px;\r\n    gap: 1.75rem;\r\n    border-top: 1px solid var(--elements-color);\r\n\r\n    @include onDesktop {\r\n      grid-area: 3 / 1 / -1 / -1;\r\n      flex-direction: row;\r\n      padding: 40px 0;\r\n    }\r\n\r\n    &-title {\r\n      font-weight: 700;\r\n      margin-bottom: 1.75rem;\r\n      text-align: center;\r\n      margin: 0;\r\n\r\n      @include onDesktop {\r\n        text-align: start;\r\n        font-size: .8rem;\r\n      }\r\n    }\r\n    &-list {\r\n      display: flex;\r\n      flex-direction: column;\r\n      flex-grow: 1;\r\n      gap: 1.75rem;\r\n\r\n      @include onDesktop {\r\n        flex-direction: row;\r\n        justify-content: space-between;\r\n      }\r\n    }\r\n    &-link {\r\n      text-align: center;\r\n      color: var(--rights-color);\r\n      text-decoration: none;\r\n\r\n      @include onDesktop {\r\n        font-size: .8rem;\r\n        text-align: start;\r\n      }\r\n    }\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/header/burger.scss":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/header/burger.scss ***!
  \***************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.burger {
  position: relative;
  background-color: transparent;
  outline: 0;
  border: none;
  cursor: pointer;
  width: var(--burger-icon-size);
  height: 18px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
@media (min-width: 1200px) {
  .burger {
    display: none;
  }
}
.burger__line {
  width: 100%;
  height: 2px;
  border-radius: 20px;
  background-color: var(--primary-color);
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.burger[data-menu=true] .burger__line--1 {
  transform: rotate(45deg) translate(5px, 5px);
}
.burger[data-menu=true] .burger__line--2 {
  transform: translateX(-50%);
  opacity: 0;
}
.burger[data-menu=true] .burger__line--3 {
  transform: rotate(-45deg) translate(5px, -5px);
}`, "",{"version":3,"sources":["webpack://./src/styles/blocks/header/burger.scss","webpack://./src/styles/mixins.scss"],"names":[],"mappings":"AAEA;EACE,kBAAA;EACA,6BAAA;EACA,UAAA;EACA,YAAA;EACA,eAAA;EACA,8BAAA;EACA,YAAA;EACA,kBAAA;EACA,aAAA;EACA,sBAAA;EACA,8BAAA;AADF;ACCE;EDXF;IAcI,aAAA;EAAF;AACF;AAEE;EACE,WAAA;EACA,WAAA;EACA,mBAAA;EACA,sCAAA;EACA,kDAAA;AAAJ;AAII;EACE,4CAAA;AAFN;AAII;EACE,2BAAA;EACA,UAAA;AAFN;AAII;EACE,8CAAA;AAFN","sourcesContent":["@import '../../mixins.scss';\r\n\r\n.burger {\r\n  position: relative;\r\n  background-color: transparent;\r\n  outline: 0;\r\n  border: none;\r\n  cursor: pointer;\r\n  width: var(--burger-icon-size);\r\n  height: 18px;\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n\r\n  @include onDesktop {\r\n    display: none;\r\n  }\r\n\r\n  &__line {\r\n    width: 100%;\r\n    height: 2px;\r\n    border-radius: 20px;\r\n    background-color: var(--primary-color);\r\n    transition: transform .3s ease, opacity .3s ease;\r\n  }\r\n\r\n  &[data-menu=\"true\"] {\r\n    .burger__line--1 {\r\n      transform: rotate(45deg) translate(5px, 5px);\r\n    }\r\n    .burger__line--2 {\r\n      transform: translateX(-50%);\r\n      opacity: 0;\r\n    }\r\n    .burger__line--3 {\r\n      transform: rotate(-45deg) translate(5px, -5px);\r\n    }\r\n  }\r\n}\r\n","@mixin onMobile {\r\n  @media (min-width: 375px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin onTablet {\r\n  @media (min-width: 640px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin onDesktop {\r\n  @media (min-width: 1200px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin onLaptop {\r\n  @media (min-width: 1400px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n%flex-center {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/header/header.scss":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/header/header.scss ***!
  \***************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.header {
  position: sticky;
  top: 0;
  background-color: var(--bg-color);
  z-index: 100;
}
.header__container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
}
@media (min-width: 1400px) {
  .header__container {
    max-width: 1400px;
  }
}
.header__logo {
  width: 64px;
}
@media (min-width: 640px) {
  .header__logo {
    width: 84px;
  }
}
.header__button {
  min-width: 168px;
  min-height: 42px;
  font-weight: 700;
  border-radius: 10px;
  padding: 12px 44px;
  border: 1px solid var(--primary-color);
  color: var(--primary-color);
  background-color: transparent;
  outline: 0;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
}
.header__button:hover {
  background-color: var(--primary-color);
  color: var(--bg-color);
}
.header__button--tablet {
  display: none;
}
@media (min-width: 640px) {
  .header__button--tablet {
    display: block;
  }
}
@media (min-width: 1200px) {
  .header__button--tablet {
    display: none;
  }
}
.header__button--mobile {
  display: block;
}
@media (min-width: 640px) {
  .header__button--mobile {
    display: none;
  }
}
.header__button--desktop {
  display: none;
}
@media (min-width: 1200px) {
  .header__button--desktop {
    display: block;
  }
}

.nav {
  display: none;
}
@media (min-width: 1200px) {
  .nav {
    display: block;
  }
}
.nav__list {
  display: flex;
  gap: 2.8rem;
  padding: 0;
  list-style: none;
}
.nav__link {
  text-decoration: none;
  color: var(--primary-color);
}`, "",{"version":3,"sources":["webpack://./src/styles/blocks/header/header.scss","webpack://./src/styles/mixins.scss"],"names":[],"mappings":"AAEA;EACE,gBAAA;EACA,MAAA;EACA,iCAAA;EACA,YAAA;AADF;AAGE;EACE,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,eAAA;AADJ;ACQE;EDXA;IAOI,iBAAA;EAAJ;AACF;AAGE;EACE,WAAA;AADJ;ACZE;EDYA;IAII,WAAA;EAAJ;AACF;AAGE;EACE,gBAAA;EACA,gBAAA;EACA,gBAAA;EACA,mBAAA;EACA,kBAAA;EACA,sCAAA;EACA,2BAAA;EACA,6BAAA;EACA,UAAA;EACA,eAAA;EACA,uDAAA;AADJ;AAGI;EACE,sCAAA;EACA,sBAAA;AADN;AAII;EACE,aAAA;AAFN;ACrCE;EDsCE;IAII,cAAA;EADN;AACF;ACpCE;EDgCE;IAOI,aAAA;EACN;AACF;AAEI;EACE,cAAA;AAAN;AClDE;EDiDE;IAII,aAAA;EACN;AACF;AAEI;EACE,aAAA;AAAN;ACpDE;EDmDE;IAII,cAAA;EACN;AACF;;AAIA;EACE,aAAA;AADF;AC7DE;ED6DF;IAII,cAAA;EAAF;AACF;AAEE;EACE,aAAA;EACA,WAAA;EACA,UAAA;EACA,gBAAA;AAAJ;AAGE;EACE,qBAAA;EACA,2BAAA;AADJ","sourcesContent":["@import '../../mixins.scss';\r\n\r\n.header {\r\n  position: sticky;\r\n  top: 0;\r\n  background-color: var(--bg-color);\r\n  z-index: 100;\r\n\r\n  &__container {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    padding: 20px 0;\r\n\r\n    @include onLaptop {\r\n      max-width: 1400px;\r\n    }\r\n  }\r\n\r\n  &__logo {\r\n    width: 64px;\r\n\r\n    @include onTablet {\r\n      width: 84px;\r\n    }\r\n  }\r\n\r\n  &__button {\r\n    min-width: 168px;\r\n    min-height: 42px;\r\n    font-weight: 700;\r\n    border-radius: 10px;\r\n    padding: 12px 44px;\r\n    border: 1px solid var(--primary-color);\r\n    color: var(--primary-color);\r\n    background-color: transparent;\r\n    outline: 0;\r\n    cursor: pointer;\r\n    transition: background-color .3s ease, color .3s ease;\r\n\r\n    &:hover {\r\n      background-color: var(--primary-color);\r\n      color: var(--bg-color);\r\n    }\r\n\r\n    &--tablet {\r\n      display: none;\r\n\r\n      @include onTablet {\r\n        display: block;\r\n      }\r\n      @include onDesktop {\r\n        display: none;\r\n      }\r\n    }\r\n\r\n    &--mobile {\r\n      display: block;\r\n\r\n      @include onTablet {\r\n        display: none;\r\n      }\r\n    }\r\n\r\n    &--desktop {\r\n      display: none;\r\n\r\n      @include onDesktop {\r\n        display: block;\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n.nav {\r\n  display: none;\r\n\r\n  @include onDesktop {\r\n    display: block;\r\n  }\r\n\r\n  &__list {\r\n    display: flex;\r\n    gap: 2.8rem;\r\n    padding: 0;\r\n    list-style: none;\r\n  }\r\n\r\n  &__link {\r\n    text-decoration: none;\r\n    color: var(--primary-color);\r\n  }\r\n}","@mixin onMobile {\r\n  @media (min-width: 375px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin onTablet {\r\n  @media (min-width: 640px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin onDesktop {\r\n  @media (min-width: 1200px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin onLaptop {\r\n  @media (min-width: 1400px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n%flex-center {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/header/menu.scss":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/header/menu.scss ***!
  \*************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../assets/images/union.svg */ "./src/assets/images/union.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.menu {
  position: fixed;
  top: var(--header-size);
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-repeat: no-repeat;
  background-position: 50% 0%;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  background-color: var(--bg-color);
  margin: 0;
  transform: translateX(100%);
  transition: transform 0.3s ease;
  padding: 46px 20px 0 20px;
}
@media (min-width: 640px) {
  .menu {
    padding: 46px 82px 0 82px;
  }
}
@media (min-width: 1200px) {
  .menu {
    display: none;
    padding: 46px 105px 0 105px;
    margin: 0 auto;
  }
}
.menu.active {
  transform: translateX(0%);
}
@media (min-width: 1200px) {
  .menu.active {
    display: none;
  }
}
.menu__list {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
}
.menu__link {
  position: relative;
  color: var(--primary-color);
  text-decoration: none;
  font-size: 1.6rem;
  padding: 10px 0;
  opacity: 0.8;
  transition: opacity 0.3s eases;
}
.menu__link:hover {
  opacity: 1;
}
.menu__link:hover::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  border-radius: 10px;
  background-color: var(--primary-color);
  transition: background-color 0.3 ease;
}`, "",{"version":3,"sources":["webpack://./src/styles/blocks/header/menu.scss","webpack://./src/styles/mixins.scss"],"names":[],"mappings":"AAEA;EACE,eAAA;EACA,uBAAA;EACA,OAAA;EACA,QAAA;EACA,SAAA;EACA,WAAA;EACA,yDAAA;EACA,4BAAA;EACA,2BAAA;EACA,sBAAA;EAEA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,SAAA;EACA,iCAAA;EACA,SAAA;EACA,2BAAA;EACA,+BAAA;EAEA,yBAAA;AAHF;ACbE;EDLF;IAwBI,yBAAA;EAFF;AACF;ACZE;EDXF;IA2BI,aAAA;IACA,2BAAA;IACA,cAAA;EAAF;AACF;AAEE;EACE,yBAAA;AAAJ;ACtBE;EDqBA;IAGI,aAAA;EAEJ;AACF;AACE;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,SAAA;EACA,gBAAA;EACA,SAAA;EACA,UAAA;AACJ;AAEE;EACE,kBAAA;EACA,2BAAA;EACA,qBAAA;EACA,iBAAA;EACA,eAAA;EACA,YAAA;EACA,8BAAA;AAAJ;AAEI;EACE,UAAA;AAAN;AAEM;EACE,WAAA;EACA,kBAAA;EACA,SAAA;EACA,OAAA;EACA,QAAA;EACA,WAAA;EACA,mBAAA;EACA,sCAAA;EACA,qCAAA;AAAR","sourcesContent":["@import '../../mixins.scss';\r\n\r\n.menu {\r\n  position: fixed;\r\n  top: var(--header-size);\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  z-index: 99;\r\n  background-image: url(../../../assets/images/union.svg);\r\n  background-repeat: no-repeat;\r\n  background-position: 50% 0%;\r\n  background-size: cover;\r\n\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 4rem;\r\n  background-color: var(--bg-color);\r\n  margin: 0;\r\n  transform: translateX(100%);\r\n  transition: transform .3s ease;\r\n\r\n  padding: 46px 20px 0 20px;\r\n\r\n  @include onTablet {\r\n    padding: 46px 82px 0 82px;\r\n  }\r\n  @include onDesktop {\r\n    display: none;\r\n    padding: 46px 105px 0 105px;\r\n    margin: 0 auto;\r\n  }\r\n\r\n  &.active {\r\n    transform: translateX(0%);\r\n    @include onDesktop {\r\n      display: none;\r\n    }\r\n  }\r\n\r\n  &__list {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 2rem;\r\n    list-style: none;\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n\r\n  &__link {\r\n    position: relative;\r\n    color: var(--primary-color);\r\n    text-decoration: none;\r\n    font-size: 1.6rem;\r\n    padding: 10px 0;\r\n    opacity: .8;\r\n    transition: opacity .3s eases;\r\n\r\n    &:hover {\r\n      opacity: 1;\r\n\r\n      &::after {\r\n        content: '';\r\n        position: absolute;\r\n        bottom: 0;\r\n        left: 0;\r\n        right: 0;\r\n        height: 2px;\r\n        border-radius: 10px;\r\n        background-color: var(--primary-color);\r\n        transition: background-color .3 ease;\r\n      }\r\n    }\r\n  }\r\n}","@mixin onMobile {\r\n  @media (min-width: 375px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin onTablet {\r\n  @media (min-width: 640px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin onDesktop {\r\n  @media (min-width: 1200px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin onLaptop {\r\n  @media (min-width: 1400px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n%flex-center {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/installment/installment.scss":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/installment/installment.scss ***!
  \*************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../assets/images/installment-image.png */ "./src/assets/images/installment-image.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.installment {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.45rem;
  padding: 80px 20px;
  background-color: var(--dark-color);
  border-radius: 32px;
}
@media (min-width: 640px) {
  .installment {
    padding: 80px 94px;
  }
}
@media (min-width: 1200px) {
  .installment {
    flex-direction: row;
    padding: 97px 90px;
    gap: 0;
  }
}
.installment__info {
  text-align: center;
  max-width: 416px;
}
@media (min-width: 1200px) {
  .installment__info {
    text-align: start;
  }
}
.installment__info-title {
  font-size: 2rem;
  margin-bottom: 2.2rem;
}
@media (min-width: 640px) {
  .installment__info-title {
    font-size: 3.5rem;
  }
}
.installment__info-description {
  font-size: 1.45rem;
}
.installment__offer {
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  padding: 30px 0;
  max-width: 313px;
  height: 324px;
  width: 100%;
}
.installment__offer-image {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  min-width: 100%;
  max-height: 100%;
}
@media (min-width: 640px) {
  .installment__offer-image {
    max-width: 100%;
    max-height: max-content;
  }
}
.installment__offer-card {
  padding: 40px 20px;
  border-radius: 12px;
  background: rgba(18, 18, 18, 0.6980392157);
  z-index: 2;
  backdrop-filter: blur(6px);
  text-align: center;
}
.installment__offer-title {
  font-size: 1.45rem;
  max-width: min-content;
  margin: 0 auto;
}
.installment__offer-date {
  color: var(--accent-color);
  font-size: 4.5rem;
}
.installment__payment {
  max-width: 319px;
  width: 100%;
}
.installment__payment-title {
  font-size: 1.45rem;
}
.installment__payment-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0 0 0 20px;
}
.installment__payment-list > img {
  max-width: max-content;
}
.installment__payment-item {
  font-size: 1rem;
}`, "",{"version":3,"sources":["webpack://./src/styles/blocks/installment/installment.scss","webpack://./src/styles/mixins.scss"],"names":[],"mappings":"AAEA;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,YAAA;EACA,kBAAA;EACA,mCAAA;EACA,mBAAA;AADF;ACDE;EDLF;IAUI,kBAAA;EAAF;AACF;ACAE;EDXF;IAcI,mBAAA;IACA,kBAAA;IACA,MAAA;EACF;AACF;AACE;EACE,kBAAA;EACA,gBAAA;AACJ;ACXE;EDQA;IAKI,iBAAA;EAEJ;AACF;AAAI;EACE,eAAA;EACA,qBAAA;AAEN;AC1BE;EDsBE;IAKI,iBAAA;EAGN;AACF;AAAI;EACE,kBAAA;AAEN;AAEE;EACE,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,mDAAA;EACA,2BAAA;EACA,4BAAA;EACA,qBAAA;EACA,eAAA;EACA,gBAAA;EACA,aAAA;EACA,WAAA;AAAJ;AAGI;EACE,kBAAA;EACA,SAAA;EACA,QAAA;EACA,gCAAA;EACA,eAAA;EACA,gBAAA;AADN;ACvDE;EDkDE;IASI,eAAA;IACA,uBAAA;EAAN;AACF;AAGI;EACE,kBAAA;EACA,mBAAA;EACA,0CAAA;EACA,UAAA;EACA,0BAAA;EACA,kBAAA;AADN;AAII;EACE,kBAAA;EACA,sBAAA;EACA,cAAA;AAFN;AAKI;EACE,0BAAA;EACA,iBAAA;AAHN;AAOE;EACE,gBAAA;EACA,WAAA;AALJ;AAMI;EACE,kBAAA;AAJN;AAOI;EACE,aAAA;EACA,sBAAA;EACA,SAAA;EACA,mBAAA;AALN;AAOM;EACE,sBAAA;AALR;AASI;EACE,eAAA;AAPN","sourcesContent":["@import '../../mixins.scss';\r\n\r\n.installment {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 1.45rem;\r\n  padding: 80px 20px;\r\n  background-color: var(--dark-color);\r\n  border-radius: 32px;\r\n\r\n  @include onTablet {\r\n    padding: 80px 94px;\r\n  }\r\n\r\n  @include onDesktop {\r\n    flex-direction: row;\r\n    padding: 97px 90px;\r\n    gap: 0;\r\n  }\r\n\r\n  &__info {\r\n    text-align: center;\r\n    max-width: 416px;\r\n\r\n    @include onDesktop {\r\n      text-align: start;\r\n    }\r\n\r\n    &-title {\r\n      font-size: 2rem;\r\n      margin-bottom: 2.2rem;\r\n\r\n      @include onTablet {\r\n        font-size: 3.5rem;\r\n      }\r\n    }\r\n\r\n    &-description {\r\n      font-size: 1.45rem;\r\n    }\r\n  }\r\n\r\n  &__offer {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    background: url(../../../assets/images/installment-image.png);\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: 100%;\r\n    padding: 30px 0;\r\n    max-width: 313px;\r\n    height: 324px;\r\n    width: 100%;\r\n    \r\n\r\n    &-image {\r\n      position: absolute;\r\n      left: 50%;\r\n      top: 50%;\r\n      transform: translate(-50%, -50%);\r\n      min-width: 100%;\r\n      max-height: 100%;\r\n\r\n      @include onTablet {\r\n        max-width: 100%;\r\n        max-height: max-content;\r\n      }\r\n    }\r\n\r\n    &-card {\r\n      padding: 40px 20px;\r\n      border-radius: 12px;\r\n      background: #121212B2;\r\n      z-index: 2;\r\n      backdrop-filter: blur(6px);\r\n      text-align: center;\r\n    }\r\n\r\n    &-title {\r\n      font-size: 1.45rem;\r\n      max-width: min-content;\r\n      margin: 0 auto;\r\n    }\r\n\r\n    &-date {\r\n      color: var(--accent-color);\r\n      font-size: 4.5rem;\r\n    }\r\n  }\r\n\r\n  &__payment {\r\n    max-width: 319px;\r\n    width: 100%;\r\n    &-title {\r\n      font-size: 1.45rem;\r\n    }\r\n\r\n    &-list {\r\n      display: flex;\r\n      flex-direction: column;\r\n      gap: 1rem;\r\n      padding: 0 0 0 20px;\r\n\r\n      & > img {\r\n        max-width: max-content;\r\n      }\r\n    }\r\n\r\n    &-item {\r\n      font-size: 1rem;\r\n    }\r\n  }\r\n}","@mixin onMobile {\r\n  @media (min-width: 375px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin onTablet {\r\n  @media (min-width: 640px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin onDesktop {\r\n  @media (min-width: 1200px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin onLaptop {\r\n  @media (min-width: 1400px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n%flex-center {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/learning/learning.scss":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/learning/learning.scss ***!
  \*******************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../assets/images/learning-background.png */ "./src/assets/images/learning-background.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.learning {
  position: relative;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-size: cover;
  background-repeat: no-repeat;
}
.learning__image {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  object-fit: cover;
  z-index: -1;
}
.learning__content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 21px;
}
@media (min-width: 1200px) {
  .learning__content {
    flex-direction: row;
    justify-content: space-between;
    padding: 89px 106px;
    margin: 0 auto;
    max-width: 1200px;
  }
}
.learning__knowledge {
  display: flex;
  flex-direction: column;
  gap: 1.45rem;
  max-width: 460px;
}
.learning__title {
  font-size: 2rem;
  text-align: center;
  margin-top: 24px;
}
@media (min-width: 640px) {
  .learning__title {
    font-size: 4rem;
  }
}
@media (min-width: 1200px) {
  .learning__title {
    text-align: start;
  }
}
.learning__program-link {
  font-size: 1.15rem;
  text-align: center;
}
@media (min-width: 1200px) {
  .learning__program-link {
    text-align: start;
  }
}
.learning__statistics {
  display: flex;
  flex-direction: column;
  gap: 1.45rem;
  max-width: 460px;
}
@media (min-width: 1200px) {
  .learning__statistics {
    max-width: 390px;
  }
}
.learning__description {
  font-size: 1.15rem;
  text-align: center;
}
.learning__program {
  display: flex;
  justify-content: center;
  gap: 1.45rem;
}
@media (min-width: 1200px) {
  .learning__program {
    gap: 2rem;
  }
}
.learning__stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;
}
.learning__stat-number {
  width: 64px;
  height: 64px;
  background-color: var(--accent-color);
  text-align: center;
  line-height: 64px;
  border-radius: 50px;
}
.learning__stat-label {
  font-size: 1.45rem;
  text-transform: uppercase;
}`, "",{"version":3,"sources":["webpack://./src/styles/blocks/learning/learning.scss","webpack://./src/styles/mixins.scss"],"names":[],"mappings":"AAEA;EACE,kBAAA;EACA,yDAAA;EACA,sBAAA;EACA,4BAAA;AADF;AAGE;EACE,kBAAA;EACA,MAAA;EACA,OAAA;EACA,QAAA;EACA,SAAA;EACA,iBAAA;EACA,WAAA;AADJ;AAIE;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,mBAAA;AAFJ;ACRE;EDKA;IAQI,mBAAA;IACA,8BAAA;IACA,mBAAA;IACA,cAAA;IACA,iBAAA;EADJ;AACF;AAIE;EACE,aAAA;EACA,sBAAA;EACA,YAAA;EACA,gBAAA;AAFJ;AAKE;EACE,eAAA;EACA,kBAAA;EACA,gBAAA;AAHJ;AClCE;EDkCA;IAMI,eAAA;EAFJ;AACF;ACjCE;ED4BA;IAUI,iBAAA;EADJ;AACF;AAIE;EACE,kBAAA;EACA,kBAAA;AAFJ;AC1CE;ED0CA;IAKI,iBAAA;EADJ;AACF;AAIE;EACE,aAAA;EACA,sBAAA;EACA,YAAA;EACA,gBAAA;AAFJ;ACrDE;EDmDA;IAOI,gBAAA;EADJ;AACF;AAIE;EACE,kBAAA;EACA,kBAAA;AAFJ;AAKE;EACE,aAAA;EACA,uBAAA;EACA,YAAA;AAHJ;ACnEE;EDmEA;IAMI,SAAA;EAFJ;AACF;AAKE;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EACA,WAAA;AAHJ;AAKI;EACE,WAAA;EACA,YAAA;EACA,qCAAA;EACA,kBAAA;EACA,iBAAA;EACA,mBAAA;AAHN;AAMI;EACE,kBAAA;EACA,yBAAA;AAJN","sourcesContent":["@import '../../mixins.scss';\r\n\r\n.learning {\r\n  position: relative;\r\n  background-image: url(../../../assets/images/learning-background.png);\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n\r\n  &__image {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    object-fit: cover;\r\n    z-index: -1;\r\n  }\r\n\r\n  &__content {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding: 100px 21px;\r\n\r\n    @include onDesktop {\r\n      flex-direction: row;\r\n      justify-content: space-between;\r\n      padding: 89px 106px;\r\n      margin: 0 auto;\r\n      max-width: 1200px;\r\n    }\r\n  }\r\n\r\n  &__knowledge {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1.45rem;\r\n    max-width: 460px;\r\n  }\r\n\r\n  &__title {\r\n    font-size: 2rem;\r\n    text-align: center;\r\n    margin-top: 24px;\r\n\r\n    @include onTablet {\r\n      font-size: 4rem;\r\n    }\r\n\r\n    @include onDesktop {\r\n      text-align: start;\r\n    }\r\n  }\r\n\r\n  &__program-link {\r\n    font-size: 1.15rem;\r\n    text-align: center;\r\n\r\n    @include onDesktop {\r\n      text-align: start;\r\n    }\r\n  }\r\n\r\n  &__statistics {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1.45rem;\r\n    max-width: 460px;\r\n\r\n    @include onDesktop {\r\n      max-width: 390px;\r\n    }\r\n  }\r\n\r\n  &__description {\r\n    font-size: 1.15rem;\r\n    text-align: center;\r\n  }\r\n\r\n  &__program {\r\n    display: flex;\r\n    justify-content: center;\r\n    gap: 1.45rem;\r\n\r\n    @include onDesktop {\r\n      gap: 2rem;\r\n    }\r\n  }\r\n\r\n  &__stat {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: .7rem;\r\n\r\n    &-number {\r\n      width: 64px;\r\n      height: 64px;\r\n      background-color: var(--accent-color);\r\n      text-align: center;\r\n      line-height: 64px;\r\n      border-radius: 50px;\r\n    }\r\n\r\n    &-label {\r\n      font-size: 1.45rem;\r\n      text-transform: uppercase;\r\n    }\r\n  }\r\n\r\n}","@mixin onMobile {\r\n  @media (min-width: 375px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin onTablet {\r\n  @media (min-width: 640px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin onDesktop {\r\n  @media (min-width: 1200px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin onLaptop {\r\n  @media (min-width: 1400px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n%flex-center {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/main/main.scss":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/main/main.scss ***!
  \***********************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.main__ai-info {
  margin: 40px 0 100px 0;
}
@media (min-width: 640px) {
  .main__ai-info {
    margin: 40px 0 120px 0;
  }
}
.main__benefits {
  margin: 0 0 100px 0;
}
.main__course {
  margin: 0 0 100px 0;
}
.main__training {
  margin: 0 0 100px 0;
}
@media (min-width: 640px) {
  .main__training {
    margin: 0 0 90px 0;
  }
}
@media (min-width: 1200px) {
  .main__training {
    margin: 0 0 120px 0;
  }
}
.main__course-details {
  padding: 100px 0;
}
.main__studying {
  margin: 100px 0;
}
@media (min-width: 640px) {
  .main__studying {
    margin: 120px 0;
  }
}
.main__ai-applications {
  margin: 100px 0;
}
@media (min-width: 640px) {
  .main__ai-applications {
    margin: 120px 0;
  }
}
.main__programs-participants {
  margin: 100px 0;
}
@media (min-width: 640px) {
  .main__programs-participants {
    margin: 120px 0;
  }
}
.main__course-form {
  margin: 60px 0;
}
@media (min-width: 640px) {
  .main__course-form {
    margin: 120px 0;
  }
}
.main__feedbacks {
  margin: 100px 0;
}
@media (min-width: 640px) {
  .main__feedbacks {
    margin: 120px 0;
  }
}
.main__faq {
  margin: 100px 0 0 0;
}
@media (min-width: 640px) {
  .main__faq {
    margin: 120px 0 0 0;
  }
}

.highlight {
  color: var(--accent-color);
}`, "",{"version":3,"sources":["webpack://./src/styles/blocks/main/main.scss","webpack://./src/styles/mixins.scss"],"names":[],"mappings":"AAGE;EACE,sBAAA;AAFJ;ACKE;EDJA;IAII,sBAAA;EADJ;AACF;AAGE;EACE,mBAAA;AADJ;AAGE;EACE,mBAAA;AADJ;AAGE;EACE,mBAAA;AADJ;ACTE;EDSA;IAII,kBAAA;EAAJ;AACF;ACRE;EDGA;IAOI,mBAAA;EAEJ;AACF;AACE;EACE,gBAAA;AACJ;AAEE;EACE,eAAA;AAAJ;ACzBE;EDwBA;IAII,eAAA;EACJ;AACF;AAEE;EACE,eAAA;AAAJ;ACjCE;EDgCA;IAII,eAAA;EACJ;AACF;AAEE;EACE,eAAA;AAAJ;ACzCE;EDwCA;IAII,eAAA;EACJ;AACF;AAEE;EACE,cAAA;AAAJ;ACjDE;EDgDA;IAII,eAAA;EACJ;AACF;AAEE;EACE,eAAA;AAAJ;ACzDE;EDwDA;IAII,eAAA;EACJ;AACF;AAEE;EACE,mBAAA;AAAJ;ACjEE;EDgEA;IAII,mBAAA;EACJ;AACF;;AAGA;EACE,0BAAA;AAAF","sourcesContent":["@import '../../mixins.scss';\r\n\r\n.main {\r\n  &__ai-info {\r\n    margin: 40px 0 100px 0;\r\n\r\n    @include onTablet {\r\n      margin: 40px 0 120px 0;\r\n    }\r\n  }\r\n  &__benefits {\r\n    margin: 0 0 100px 0;\r\n  }\r\n  &__course {\r\n    margin: 0 0 100px 0;\r\n  }\r\n  &__training {\r\n    margin: 0 0 100px 0;\r\n\r\n    @include onTablet {\r\n      margin: 0 0 90px 0;\r\n    }\r\n    @include onDesktop {\r\n      margin: 0 0 120px 0;\r\n    }\r\n  }\r\n  \r\n  &__course-details {\r\n    padding: 100px 0;\r\n  }\r\n\r\n  &__studying {\r\n    margin: 100px 0;\r\n\r\n    @include onTablet {\r\n      margin: 120px 0;\r\n    }\r\n  }\r\n\r\n  &__ai-applications {\r\n    margin: 100px 0;\r\n\r\n    @include onTablet {\r\n      margin: 120px 0;\r\n    }\r\n  }\r\n\r\n  &__programs-participants {\r\n    margin: 100px 0;\r\n\r\n    @include onTablet {\r\n      margin: 120px 0;\r\n    }\r\n  }\r\n\r\n  &__course-form {\r\n    margin: 60px 0;\r\n\r\n    @include onTablet {\r\n      margin: 120px 0;\r\n    }\r\n  }\r\n\r\n  &__feedbacks {\r\n    margin: 100px 0;\r\n\r\n    @include onTablet {\r\n      margin: 120px 0;\r\n    }\r\n  }\r\n\r\n  &__faq {\r\n    margin: 100px 0 0 0;\r\n\r\n    @include onTablet {\r\n      margin: 120px 0 0 0;\r\n    }\r\n  }\r\n}\r\n\r\n.highlight {\r\n  color: var(--accent-color);\r\n}","@mixin onMobile {\r\n  @media (min-width: 375px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin onTablet {\r\n  @media (min-width: 640px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin onDesktop {\r\n  @media (min-width: 1200px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin onLaptop {\r\n  @media (min-width: 1400px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n%flex-center {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/modules/module-details.scss":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/modules/module-details.scss ***!
  \************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.module-details {
  width: 100%;
  display: none;
  flex-direction: column;
  gap: 1.45rem;
  padding: 20px 20px 34px 20px;
  color: var(--black-color);
  border: 1px solid var(--secondary-color);
}
@media (min-width: 1200px) {
  .module-details {
    display: flex;
  }
}
.module-details--mobile {
  display: flex;
}
@media (min-width: 1200px) {
  .module-details--mobile {
    display: none;
  }
}
.module-details__title {
  display: none;
}
@media (min-width: 640px) {
  .module-details__title {
    display: inline;
  }
}
.module-details__points {
  display: flex;
  flex-flow: row wrap;
  gap: 0.5rem;
}
@media (min-width: 640px) {
  .module-details__points {
    gap: 1.45rem;
  }
}
.module-details__point {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.module-details__point-bullet {
  width: 8px;
  height: 8px;
  background-color: var(--accent-color);
}
.module-details__point-title {
  margin: 0;
}
.module-details__results {
  padding: 20px;
  background-color: var(--secondary-color);
}
.module-details__results-title {
  font-weight: 700;
}
.module-details__results-description {
  margin: 20px 0 0 0;
}
.module-details__button {
  padding: 12px 44px;
  width: 100%;
  background-color: var(--accent-color);
  color: var(--primary-color);
  border-radius: 10px;
  outline: 0;
  border: none;
  cursor: pointer;
  transition: opacity 0.3s ease;
}
.module-details__button:hover {
  opacity: 0.7;
}
.module-details__button:active {
  opacity: 0.5;
}
@media (min-width: 640px) {
  .module-details__button {
    width: max-content;
  }
}`, "",{"version":3,"sources":["webpack://./src/styles/blocks/modules/module-details.scss","webpack://./src/styles/mixins.scss"],"names":[],"mappings":"AAEA;EACE,WAAA;EACA,aAAA;EACA,sBAAA;EACA,YAAA;EACA,4BAAA;EACA,yBAAA;EACA,wCAAA;AADF;ACKE;EDXF;IAUI,aAAA;EAAF;AACF;AAEE;EACE,aAAA;AAAJ;ACHE;EDEA;IAII,aAAA;EACJ;AACF;AAEE;EACE,aAAA;AAAJ;ACjBE;EDgBA;IAII,eAAA;EACJ;AACF;AAEE;EACE,aAAA;EACA,mBAAA;EACA,WAAA;AAAJ;AC3BE;EDwBA;IAMI,YAAA;EACJ;AACF;AAEE;EACE,aAAA;EACA,mBAAA;EACA,SAAA;AAAJ;AAEI;EACE,UAAA;EACA,WAAA;EACA,qCAAA;AAAN;AAGI;EACE,SAAA;AADN;AAKE;EACE,aAAA;EACA,wCAAA;AAHJ;AAII;EACE,gBAAA;AAFN;AAKI;EACE,kBAAA;AAHN;AAOE;EACE,kBAAA;EACA,WAAA;EACA,qCAAA;EACA,2BAAA;EACA,mBAAA;EACA,UAAA;EACA,YAAA;EACA,eAAA;EACA,6BAAA;AALJ;AAOI;EACE,YAAA;AALN;AAOI;EACE,YAAA;AALN;ACxEE;ED8DA;IAmBI,kBAAA;EALJ;AACF","sourcesContent":["@import '../../mixins.scss';\r\n\r\n.module-details {\r\n  width: 100%;\r\n  display: none;\r\n  flex-direction: column;\r\n  gap: 1.45rem;\r\n  padding: 20px 20px 34px 20px;\r\n  color: var(--black-color);\r\n  border: 1px solid var(--secondary-color);\r\n\r\n  @include onDesktop {\r\n    display: flex;\r\n  }\r\n\r\n  &--mobile {\r\n    display: flex;\r\n\r\n    @include onDesktop {\r\n      display: none;\r\n    }\r\n  }\r\n\r\n  &__title {\r\n    display: none;\r\n\r\n    @include onTablet {\r\n      display: inline;\r\n    }\r\n  }\r\n\r\n  &__points {\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n    gap: .5rem;\r\n\r\n    @include onTablet {\r\n      gap: 1.45rem;\r\n    }\r\n  }\r\n\r\n  &__point {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 1rem;\r\n\r\n    &-bullet {\r\n      width: 8px;\r\n      height: 8px;\r\n      background-color: var(--accent-color);\r\n    }\r\n  \r\n    &-title {\r\n      margin: 0;\r\n    }\r\n  }\r\n\r\n  &__results {\r\n    padding: 20px;\r\n    background-color: var(--secondary-color);\r\n    &-title {\r\n      font-weight: 700;\r\n    }\r\n\r\n    &-description {\r\n      margin: 20px 0 0 0;\r\n    }\r\n  }\r\n\r\n  &__button {\r\n    padding: 12px 44px;\r\n    width: 100%;\r\n    background-color: var(--accent-color);\r\n    color: var(--primary-color);\r\n    border-radius: 10px;\r\n    outline: 0;\r\n    border: none;\r\n    cursor: pointer;\r\n    transition: opacity .3s ease;\r\n\r\n    &:hover {\r\n      opacity: .7;\r\n    }\r\n    &:active {\r\n      opacity: .5;\r\n    }\r\n\r\n    @include onTablet {\r\n      width: max-content;\r\n    }\r\n  }\r\n}","@mixin onMobile {\r\n  @media (min-width: 375px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin onTablet {\r\n  @media (min-width: 640px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin onDesktop {\r\n  @media (min-width: 1200px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin onLaptop {\r\n  @media (min-width: 1400px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n%flex-center {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/modules/module.scss":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/modules/module.scss ***!
  \****************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.module__point {
  display: flex;
  align-items: center;
  justify-content: center;
}

.module__container {
  display: flex;
  align-items: center;
  padding: 32px 16px;
  gap: 1.1rem;
  cursor: pointer;
}
.module__container--active {
  background-color: var(--active-color);
  font-weight: 700;
}
.module__container--active > .module__title {
  font-weight: 700;
}
.module__point {
  background-color: var(--accent-color);
  font-size: 1rem;
  min-width: 24px;
  height: 24px;
  border-radius: 50px;
  margin: 0;
}
.module__title {
  font-size: 1.1rem;
  font-weight: 400;
  color: var(--black-color);
}
@media (min-width: 640px) {
  .module__title {
    font-size: 1.3rem;
  }
}`, "",{"version":3,"sources":["webpack://./src/styles/mixins.scss","webpack://./src/styles/blocks/modules/module.scss"],"names":[],"mappings":"AAwBA;EACE,aAAA;EACA,mBAAA;EACA,uBAAA;ACvBF;;AADE;EACE,aAAA;EACA,mBAAA;EACA,kBAAA;EACA,WAAA;EACA,eAAA;AAIJ;AAFI;EACE,qCAAA;EACA,gBAAA;AAIN;AAFM;EACE,gBAAA;AAIR;AAAE;EAEE,qCAAA;EACA,eAAA;EACA,eAAA;EACA,YAAA;EACA,mBAAA;EACA,SAAA;AACJ;AACE;EACE,iBAAA;EACA,gBAAA;EACA,yBAAA;AACJ;ADzBE;ECqBA;IAMI,iBAAA;EAEJ;AACF","sourcesContent":["@mixin onMobile {\r\n  @media (min-width: 375px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin onTablet {\r\n  @media (min-width: 640px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin onDesktop {\r\n  @media (min-width: 1200px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin onLaptop {\r\n  @media (min-width: 1400px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n%flex-center {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}","@import '../../mixins.scss';\r\n\r\n.module {\r\n  &__container {\r\n    display: flex;\r\n    align-items: center;\r\n    padding: 32px 16px;\r\n    gap: 1.1rem;\r\n    cursor: pointer;\r\n\r\n    &--active {\r\n      background-color: var(--active-color);\r\n      font-weight: 700;\r\n  \r\n      & > .module__title {\r\n        font-weight: 700;\r\n      }\r\n    }\r\n  }\r\n  &__point {\r\n    @extend %flex-center;\r\n    background-color: var(--accent-color);\r\n    font-size: 1rem;\r\n    min-width: 24px;\r\n    height: 24px;\r\n    border-radius: 50px;\r\n    margin: 0;\r\n  }\r\n  &__title {\r\n    font-size: 1.1rem;\r\n    font-weight: 400;\r\n    color: var(--black-color);\r\n\r\n    @include onTablet {\r\n      font-size: 1.3rem;\r\n    }\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/modules/modules.scss":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/modules/modules.scss ***!
  \*****************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.modules {
  background-color: var(--primary-color);
  padding: 100px 0;
}
.modules__container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
@media (min-width: 1200px) {
  .modules__container {
    flex-direction: row;
  }
}
.modules__courses {
  border: 1px solid var(--secondary-color);
  width: 100%;
}`, "",{"version":3,"sources":["webpack://./src/styles/blocks/modules/modules.scss","webpack://./src/styles/mixins.scss"],"names":[],"mappings":"AAEA;EACE,sCAAA;EACA,gBAAA;AADF;AAIE;EACE,aAAA;EACA,sBAAA;EACA,WAAA;AAFJ;ACKE;EDNA;IAKI,mBAAA;EAAJ;AACF;AAGE;EACE,wCAAA;EACA,WAAA;AADJ","sourcesContent":["@import '../../mixins.scss';\r\n\r\n.modules {\r\n  background-color: var(--primary-color);\r\n  padding: 100px 0;\r\n\r\n\r\n  &__container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1.5rem;\r\n    @include onDesktop {\r\n      flex-direction: row;\r\n    }\r\n  }\r\n\r\n  &__courses {\r\n    border: 1px solid var(--secondary-color);\r\n    width: 100%;\r\n  }\r\n}","@mixin onMobile {\r\n  @media (min-width: 375px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin onTablet {\r\n  @media (min-width: 640px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin onDesktop {\r\n  @media (min-width: 1200px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin onLaptop {\r\n  @media (min-width: 1400px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n%flex-center {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/programs-participants/programs-participants.scss":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/programs-participants/programs-participants.scss ***!
  \*********************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.programs-participants {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.2rem;
}
.programs-participants > h2, .programs-participants > p {
  text-align: center;
  margin: 0;
}
.programs-participants__title {
  font-size: 2rem;
}
@media (min-width: 640px) {
  .programs-participants__title {
    font-size: 4rem;
  }
}
.programs-participants__description {
  font-size: 1.1rem;
}
@media (min-width: 640px) {
  .programs-participants__description {
    font-size: 1.45rem;
  }
}
.programs-participants__list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.45rem;
  max-width: 314px;
}
@media (min-width: 640px) {
  .programs-participants__list {
    max-width: 604px;
  }
}
@media (min-width: 1200px) {
  .programs-participants__list {
    max-width: 100%;
  }
}
.programs-participants__particiant {
  max-width: 145px;
  max-height: 74px;
}`, "",{"version":3,"sources":["webpack://./src/styles/blocks/programs-participants/programs-participants.scss","webpack://./src/styles/mixins.scss"],"names":[],"mappings":"AAEA;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,WAAA;AADF;AAGE;EACE,kBAAA;EACA,SAAA;AADJ;AAIE;EACE,eAAA;AAFJ;ACNE;EDOA;IAII,eAAA;EADJ;AACF;AAIE;EACE,iBAAA;AAFJ;ACdE;EDeA;IAII,kBAAA;EADJ;AACF;AAIE;EACE,aAAA;EACA,uBAAA;EACA,eAAA;EACA,YAAA;EACA,gBAAA;AAFJ;AC1BE;EDuBA;IAQI,gBAAA;EADJ;AACF;ACzBE;EDiBA;IAYI,eAAA;EAAJ;AACF;AAGE;EACE,gBAAA;EACA,gBAAA;AADJ","sourcesContent":["@import '../../mixins.scss';\r\n\r\n.programs-participants {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  gap: 2.2rem;\r\n\r\n  & > h2, & > p {\r\n    text-align: center;\r\n    margin: 0;\r\n  }\r\n\r\n  &__title {\r\n    font-size: 2rem;\r\n\r\n    @include onTablet {\r\n      font-size: 4rem;\r\n    }\r\n  }\r\n\r\n  &__description {\r\n    font-size: 1.1rem;\r\n\r\n    @include onTablet {\r\n      font-size: 1.45rem;\r\n    }\r\n  }\r\n\r\n  &__list {\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-wrap: wrap;\r\n    gap: 1.45rem;\r\n    max-width: 314px;\r\n\r\n    @include onTablet {\r\n      max-width: 604px;\r\n    }\r\n\r\n    @include onDesktop {\r\n      max-width: 100%;\r\n    }\r\n  }\r\n\r\n  &__particiant {\r\n    max-width: 145px;\r\n    max-height: 74px;\r\n  }\r\n}","@mixin onMobile {\r\n  @media (min-width: 375px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin onTablet {\r\n  @media (min-width: 640px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin onDesktop {\r\n  @media (min-width: 1200px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin onLaptop {\r\n  @media (min-width: 1400px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n%flex-center {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/result-summary/percent-card.scss":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/result-summary/percent-card.scss ***!
  \*****************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.percent-card {
  display: flex;
  align-items: center;
  gap: 1.4rem;
}
.percent-card__percent {
  font-size: 1.45rem;
  padding: 13px 5px;
  height: min-content;
  border-radius: 10px;
  background-color: var(--accent-color);
}
.percent-card__percent--teorogy {
  color: var(--black-color);
  background-color: var(--pink-color);
}
.percent-card__percent--feedback {
  color: var(--black-color);
  background-color: var(--primary-color);
}
.percent-card__title {
  font-size: 1.1rem;
}`, "",{"version":3,"sources":["webpack://./src/styles/blocks/result-summary/percent-card.scss"],"names":[],"mappings":"AAAA;EACE,aAAA;EACA,mBAAA;EACA,WAAA;AACF;AACE;EACE,kBAAA;EACA,iBAAA;EACA,mBAAA;EACA,mBAAA;EAEA,qCAAA;AAAJ;AACI;EACE,yBAAA;EACA,mCAAA;AACN;AACI;EACE,yBAAA;EACA,sCAAA;AACN;AAGE;EACE,iBAAA;AADJ","sourcesContent":[".percent-card {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 1.4rem;\r\n\r\n  &__percent {\r\n    font-size: 1.45rem;\r\n    padding: 13px 5px;\r\n    height: min-content;\r\n    border-radius: 10px;\r\n\r\n    background-color: var(--accent-color);\r\n    &--teorogy {\r\n      color: var(--black-color);\r\n      background-color: var(--pink-color);\r\n    }\r\n    &--feedback {\r\n      color: var(--black-color);\r\n      background-color: var(--primary-color);\r\n    }\r\n  }\r\n\r\n  &__title {\r\n    font-size: 1.1rem;\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/result-summary/result-summary.scss":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/result-summary/result-summary.scss ***!
  \*******************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.result-summary {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.65rem;
}
.result-summary > h2, .result-summary p {
  margin: 0;
}
@media (min-width: 640px) {
  .result-summary {
    gap: 2.8rem;
  }
}
.result-summary__title {
  font-size: 2rem;
  text-align: center;
}
@media (min-width: 640px) {
  .result-summary__title {
    font-size: 4rem;
  }
}
@media (min-width: 1200px) {
  .result-summary__title {
    font-size: 3.5rem;
  }
}
.result-summary__description {
  font-size: 1.1rem;
  text-align: center;
}
@media (min-width: 640px) {
  .result-summary__description {
    max-width: 480px;
    font-size: 1.45rem;
  }
}
.result-summary__container {
  background-color: var(--dark-color);
  padding: 30px 20px;
  width: 100%;
}
.result-summary__list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
}
@media (min-width: 1200px) {
  .result-summary__list {
    flex-direction: row;
    justify-content: center;
    gap: 3rem;
  }
}
.result-summary__statistic {
  display: flex;
  min-height: 24px;
}
.result-summary__practise-percent {
  position: relative;
  flex-basis: 49.99%;
  background-color: var(--accent-color);
}
.result-summary__practise-percent::after {
  position: absolute;
  left: 100%;
  bottom: 50%;
  content: "";
  width: 44px;
  border: 2px solid var(--accent-color);
  transform: translateX(-50%) rotate(-90deg);
}
.result-summary__teorogy-percent {
  position: relative;
  flex-basis: 33.33%;
  background-color: var(--pink-color);
}
.result-summary__teorogy-percent::after {
  position: absolute;
  left: 100%;
  bottom: 50%;
  content: "";
  width: 44px;
  border: 2px solid var(--pink-color);
  transform: translateX(-50%) rotate(-90deg);
}
.result-summary__feedback-percent {
  flex-basis: 16.66%;
  background-color: var(--primary-color);
}`, "",{"version":3,"sources":["webpack://./src/styles/blocks/result-summary/result-summary.scss","webpack://./src/styles/mixins.scss"],"names":[],"mappings":"AAEA;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,YAAA;AADF;AAGE;EACE,SAAA;AADJ;ACDE;EDLF;IAWI,WAAA;EADF;AACF;AAGE;EACE,eAAA;EACA,kBAAA;AADJ;ACVE;EDSA;IAKI,eAAA;EAAJ;AACF;ACTE;EDGA;IASI,iBAAA;EACJ;AACF;AAEE;EACE,iBAAA;EACA,kBAAA;AAAJ;ACxBE;EDsBA;IAKI,gBAAA;IACA,kBAAA;EACJ;AACF;AAEE;EACE,mCAAA;EACA,kBAAA;EACA,WAAA;AAAJ;AAGE;EACE,aAAA;EACA,sBAAA;EACA,SAAA;EACA,WAAA;AADJ;ACnCE;EDgCA;IAOI,mBAAA;IACA,uBAAA;IACA,SAAA;EAAJ;AACF;AAGE;EACE,aAAA;EACA,gBAAA;AADJ;AAIE;EACE,kBAAA;EACA,kBAAA;EACA,qCAAA;AAFJ;AAII;EACE,kBAAA;EACA,UAAA;EACA,WAAA;EACA,WAAA;EACA,WAAA;EACA,qCAAA;EACA,0CAAA;AAFN;AAME;EACE,kBAAA;EACA,kBAAA;EACA,mCAAA;AAJJ;AAMI;EACE,kBAAA;EACA,UAAA;EACA,WAAA;EACA,WAAA;EACA,WAAA;EACA,mCAAA;EACA,0CAAA;AAJN;AAQE;EACE,kBAAA;EACA,sCAAA;AANJ","sourcesContent":["@import '../../mixins.scss';\r\n\r\n.result-summary {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 1.65rem;\r\n\r\n  & > h2, p {\r\n    margin: 0;\r\n  }\r\n\r\n  @include onTablet {\r\n    gap: 2.8rem;\r\n  }\r\n\r\n  &__title {\r\n    font-size: 2rem;\r\n    text-align: center;\r\n\r\n    @include onTablet {\r\n      font-size: 4rem;\r\n    }\r\n\r\n    @include onDesktop {\r\n      font-size: 3.5rem;\r\n    }\r\n  }\r\n\r\n  &__description {\r\n    font-size: 1.1rem;\r\n    text-align: center;\r\n\r\n    @include onTablet {\r\n      max-width: 480px;\r\n      font-size: 1.45rem;\r\n    }\r\n  }\r\n\r\n  &__container {\r\n    background-color: var(--dark-color);\r\n    padding: 30px 20px;\r\n    width: 100%;\r\n  }\r\n\r\n  &__list {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n    width: 100%;\r\n\r\n    @include onDesktop {\r\n      flex-direction: row;\r\n      justify-content: center;\r\n      gap: 3rem;\r\n    }\r\n  }\r\n\r\n  &__statistic {\r\n    display: flex;\r\n    min-height: 24px;\r\n  }\r\n\r\n  &__practise-percent {\r\n    position: relative;\r\n    flex-basis: 49.99%;\r\n    background-color: var(--accent-color);\r\n\r\n    &::after {\r\n      position: absolute;\r\n      left: 100%;\r\n      bottom: 50%;\r\n      content: '';\r\n      width: 44px;\r\n      border: 2px solid var(--accent-color);\r\n      transform: translateX(-50%) rotate(-90deg);\r\n    }\r\n  }\r\n\r\n  &__teorogy-percent {\r\n    position: relative;\r\n    flex-basis: 33.33%;\r\n    background-color: var(--pink-color);\r\n\r\n    &::after {\r\n      position: absolute;\r\n      left: 100%;\r\n      bottom: 50%;\r\n      content: '';\r\n      width: 44px;\r\n      border: 2px solid var(--pink-color);\r\n      transform: translateX(-50%) rotate(-90deg);\r\n    }\r\n  }\r\n\r\n  &__feedback-percent {\r\n    flex-basis: 16.66%;\r\n    background-color: var(--primary-color);\r\n  }\r\n}","@mixin onMobile {\r\n  @media (min-width: 375px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin onTablet {\r\n  @media (min-width: 640px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin onDesktop {\r\n  @media (min-width: 1200px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin onLaptop {\r\n  @media (min-width: 1400px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n%flex-center {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/specialization/information.scss":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/specialization/information.scss ***!
  \****************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.information {
  display: flex;
  align-items: center;
  gap: 0.4rem;
}
.information--hidden {
  display: none;
}
@media (min-width: 640px) {
  .information--hidden {
    display: flex;
  }
}
.information__title {
  font-size: 0.9rem;
  width: max-content;
}
@media (min-width: 640px) {
  .information__title {
    font-size: 1rem;
  }
}`, "",{"version":3,"sources":["webpack://./src/styles/blocks/specialization/information.scss","webpack://./src/styles/mixins.scss"],"names":[],"mappings":"AAEA;EACE,aAAA;EACA,mBAAA;EACA,WAAA;AADF;AAGE;EACE,aAAA;AADJ;ACAE;EDAA;IAII,aAAA;EAAJ;AACF;AAGE;EACE,iBAAA;EACA,kBAAA;AADJ;ACTE;EDQA;IAKI,eAAA;EAAJ;AACF","sourcesContent":["@import '../../mixins.scss';\r\n\r\n.information {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: .4rem;\r\n\r\n  &--hidden {\r\n    display: none;\r\n\r\n    @include onTablet {\r\n      display: flex;\r\n    }\r\n  }\r\n\r\n  &__title {\r\n    font-size: .9rem;\r\n    width: max-content;\r\n\r\n    @include onTablet {\r\n      font-size: 1rem;\r\n    }\r\n  }\r\n}","@mixin onMobile {\r\n  @media (min-width: 375px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin onTablet {\r\n  @media (min-width: 640px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin onDesktop {\r\n  @media (min-width: 1200px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin onLaptop {\r\n  @media (min-width: 1400px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n%flex-center {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/specialization/specialization.scss":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/specialization/specialization.scss ***!
  \*******************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.specialization {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding: 40px 0 100px 0;
}
@media (min-width: 640px) {
  .specialization {
    padding: 40px 0 120px 0;
  }
}
@media (min-width: 1200px) {
  .specialization {
    flex-direction: row;
    gap: 2.5rem;
  }
}
.specialization__information {
  display: flex;
  gap: 1rem;
  margin-bottom: 20px;
}
@media (min-width: 375px) {
  .specialization__information {
    gap: 1.8rem;
    margin-bottom: 46px;
  }
}
@media (min-width: 640px) {
  .specialization__information {
    justify-content: flex-start;
    margin-bottom: 50px;
  }
}
@media (min-width: 1200px) {
  .specialization__information {
    margin-bottom: 70px;
  }
}
.specialization__specialization {
  position: relative;
}
.specialization__content {
  display: flex;
  flex-direction: column;
  flex-basis: 50%;
}
.specialization__container {
  display: flex;
  flex-basis: 50%;
}
.specialization__image {
  width: 100%;
  height: max-content;
}
.specialization__title {
  margin: 0;
}
@media (min-width: 640px) {
  .specialization__title {
    font-size: 1.3rem;
  }
}
.specialization__title--center {
  margin: 0 auto;
}
.specialization__description {
  display: flex;
  gap: 1.5rem;
  max-width: 320px;
}
@media (min-width: 640px) {
  .specialization__description {
    max-width: 440px;
  }
}
.specialization__caption {
  font-size: 96px;
  color: var(--accent-color);
  line-height: 70px;
}
@media (min-width: 640px) {
  .specialization__caption {
    font-size: 170px;
    line-height: 120px;
  }
}
.specialization__technician {
  margin: 10px 0 0 0;
  font-size: 44px;
  font-weight: 700;
  text-transform: uppercase;
}
@media (min-width: 640px) {
  .specialization__technician {
    margin: 20px 0 0 0;
  }
}
.specialization__rating {
  display: flex;
  gap: 2rem;
  margin: 20px 0 40px;
}
.specialization__stars {
  display: flex;
  max-height: 24px;
}
.specialization__star {
  max-width: 24px;
  max-height: 24px;
}
.specialization__trend {
  font-size: 1.3rem;
}
@media (min-width: 640px) {
  .specialization__trend {
    font-size: 1.7rem;
  }
}
.specialization__seats {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: 40px 0 0 0;
}
@media (min-width: 640px) {
  .specialization__seats {
    align-items: flex-start;
    max-width: max-content;
  }
}
.specialization__button {
  padding: 14px 44px;
  outline: 0;
  border: none;
  background-color: var(--accent-color);
  color: var(--primary-color);
  border-radius: 10px;
  font-weight: 700;
  cursor: pointer;
  transition: opacity 0.3s ease;
}
@media (min-width: 640px) {
  .specialization__button {
    font-size: 1.3rem;
  }
}
.specialization__button:active {
  opacity: 0.5;
}`, "",{"version":3,"sources":["webpack://./src/styles/blocks/specialization/specialization.scss","webpack://./src/styles/mixins.scss"],"names":[],"mappings":"AAEA;EACE,kBAAA;EACA,aAAA;EACA,sBAAA;EACA,SAAA;EACA,uBAAA;AADF;ACCE;EDLF;IAQI,uBAAA;EAAF;AACF;ACEE;EDXF;IAYI,mBAAA;IACA,WAAA;EACF;AACF;AACE;EACE,aAAA;EACA,SAAA;EACA,mBAAA;AACJ;ACrBE;EDiBA;IAMI,WAAA;IACA,mBAAA;EAEJ;AACF;ACrBE;EDWA;IAWI,2BAAA;IACA,mBAAA;EAGJ;AACF;ACrBE;EDKA;IAeI,mBAAA;EAKJ;AACF;AAFE;EACE,kBAAA;AAIJ;AADE;EACE,aAAA;EACA,sBAAA;EACA,eAAA;AAGJ;AAAE;EACE,aAAA;EACA,eAAA;AAEJ;AACE;EACE,WAAA;EACA,mBAAA;AACJ;AAEE;EACE,SAAA;AAAJ;ACnDE;EDkDA;IAGI,iBAAA;EAEJ;AACF;AAAI;EACE,cAAA;AAEN;AAEE;EACE,aAAA;EACA,WAAA;EACA,gBAAA;AAAJ;AChEE;ED6DA;IAMI,gBAAA;EACJ;AACF;AACE;EACE,eAAA;EACA,0BAAA;EACA,iBAAA;AACJ;AC1EE;EDsEA;IAMI,gBAAA;IACA,kBAAA;EAEJ;AACF;AAAE;EACE,kBAAA;EACA,eAAA;EACA,gBAAA;EACA,yBAAA;AAEJ;ACtFE;EDgFA;IAOI,kBAAA;EAGJ;AACF;AADE;EACE,aAAA;EACA,SAAA;EACA,mBAAA;AAGJ;AADE;EACE,aAAA;EACA,gBAAA;AAGJ;AADE;EACE,eAAA;EACA,gBAAA;AAGJ;AADE;EACE,iBAAA;AAGJ;AC3GE;EDuGA;IAII,iBAAA;EAIJ;AACF;AAFE;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EACA,SAAA;EACA,kBAAA;AAIJ;ACxHE;ED8GA;IASI,uBAAA;IACA,sBAAA;EAKJ;AACF;AAHE;EACE,kBAAA;EACA,UAAA;EACA,YAAA;EACA,qCAAA;EACA,2BAAA;EACA,mBAAA;EACA,gBAAA;EACA,eAAA;EACA,6BAAA;AAKJ;ACzIE;ED2HA;IAYI,iBAAA;EAMJ;AACF;AAJI;EACE,YAAA;AAMN","sourcesContent":["@import '../../mixins.scss';\r\n\r\n.specialization {\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 4rem;\r\n  padding: 40px 0 100px 0;\r\n\r\n  @include onTablet {\r\n    padding: 40px 0 120px 0;\r\n  }\r\n\r\n  @include onDesktop {\r\n    flex-direction: row;\r\n    gap: 2.5rem;\r\n  }\r\n\r\n  &__information {\r\n    display: flex;\r\n    gap: 1rem;\r\n    margin-bottom: 20px;\r\n\r\n    @include onMobile {\r\n      gap: 1.8rem;\r\n      margin-bottom: 46px;\r\n    }\r\n\r\n    @include onTablet {\r\n      justify-content: flex-start;\r\n      margin-bottom: 50px;\r\n    }\r\n    @include onDesktop {\r\n      margin-bottom: 70px;\r\n    }\r\n  }\r\n\r\n  &__specialization  {\r\n    position: relative;\r\n  }\r\n\r\n  &__content {\r\n    display: flex;\r\n    flex-direction: column;\r\n    flex-basis: 50%;\r\n  }\r\n\r\n  &__container {\r\n    display: flex;\r\n    flex-basis: 50%;\r\n  }\r\n\r\n  &__image {\r\n    width: 100%;\r\n    height: max-content;\r\n  }\r\n\r\n  &__title {\r\n    margin: 0;\r\n    @include onTablet {\r\n      font-size: 1.3rem;\r\n    }\r\n\r\n    &--center {\r\n      margin: 0 auto;\r\n    }\r\n  }\r\n\r\n  &__description {\r\n    display: flex;\r\n    gap: 1.5rem;\r\n    max-width: 320px;\r\n\r\n    @include onTablet {\r\n      max-width: 440px;\r\n    }\r\n  }\r\n  &__caption {\r\n    font-size: 96px;\r\n    color: var(--accent-color);\r\n    line-height: 70px;\r\n    \r\n    @include onTablet {\r\n      font-size: 170px;\r\n      line-height: 120px;\r\n    }\r\n  }\r\n  &__technician {\r\n    margin: 10px 0 0 0;\r\n    font-size: 44px;\r\n    font-weight: 700;\r\n    text-transform: uppercase;\r\n\r\n    @include onTablet {\r\n      margin: 20px 0 0 0;\r\n    }\r\n  }\r\n  &__rating {\r\n    display: flex;\r\n    gap: 2rem;\r\n    margin: 20px 0 40px;\r\n  }\r\n  &__stars {\r\n    display: flex;\r\n    max-height: 24px;\r\n  }\r\n  &__star {\r\n    max-width: 24px;\r\n    max-height: 24px;\r\n  }\r\n  &__trend {\r\n    font-size: 1.3rem;\r\n\r\n    @include onTablet {\r\n      font-size: 1.7rem;\r\n    }\r\n  }\r\n  &__seats {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 1rem;\r\n    margin: 40px 0 0 0;\r\n\r\n    @include onTablet {\r\n      align-items: flex-start;\r\n      max-width: max-content;\r\n    }\r\n  }\r\n  &__button {\r\n    padding: 14px 44px;\r\n    outline: 0;\r\n    border: none;\r\n    background-color: var(--accent-color);\r\n    color: var(--primary-color);\r\n    border-radius: 10px;\r\n    font-weight: 700;\r\n    cursor: pointer;\r\n    transition: opacity .3s ease;\r\n\r\n    @include onTablet {\r\n      font-size: 1.3rem;\r\n    }\r\n\r\n    &:active {\r\n      opacity: .5;\r\n    }\r\n  }\r\n}","@mixin onMobile {\r\n  @media (min-width: 375px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin onTablet {\r\n  @media (min-width: 640px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin onDesktop {\r\n  @media (min-width: 1200px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin onLaptop {\r\n  @media (min-width: 1400px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n%flex-center {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/studying/studying-card.scss":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/studying/studying-card.scss ***!
  \************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.studying-card {
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
}
.studying-card h4, .studying-card p {
  margin: 0;
}
@media (min-width: 640px) {
  .studying-card {
    align-items: center;
  }
}
@media (min-width: 1200px) {
  .studying-card {
    flex-direction: column;
  }
  .studying-card h4, .studying-card p {
    text-align: center;
  }
}
.studying-card__icon {
  position: relative;
  width: 44px;
  height: 44px;
  z-index: 2;
}
.studying-card__icon::after {
  content: "";
  position: absolute;
  bottom: 0;
  right: 0;
  width: 10px;
  height: 10px;
  background-color: var(--dark-color);
  color: var(--primary-color);
  font-size: 1rem;
  border-radius: 50px;
  z-index: 3;
}
@media (min-width: 640px) {
  .studying-card__icon {
    width: 130px;
    height: 120px;
  }
}
.studying-card__content {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  max-width: 375px;
}
@media (min-width: 1200px) {
  .studying-card__content {
    align-items: center;
  }
}
.studying-card__title {
  font-size: 1.1rem;
}
.studying-card__description {
  font-size: 0.9rem;
}`, "",{"version":3,"sources":["webpack://./src/styles/blocks/studying/studying-card.scss","webpack://./src/styles/mixins.scss"],"names":[],"mappings":"AAEA;EACE,aAAA;EACA,2BAAA;EACA,SAAA;AADF;AAGE;EACE,SAAA;AADJ;ACAE;EDLF;IAUI,mBAAA;EADF;AACF;ACCE;EDXF;IAcI,sBAAA;EAAF;EAEE;IACE,kBAAA;EAAJ;AACF;AAGE;EACE,kBAAA;EACA,WAAA;EACA,YAAA;EACA,UAAA;AADJ;AAEI;EACE,WAAA;EACA,kBAAA;EACA,SAAA;EACA,QAAA;EACA,WAAA;EACA,YAAA;EACA,mCAAA;EACA,2BAAA;EACA,eAAA;EACA,mBAAA;EACA,UAAA;AAAN;AChCE;EDgBA;IAoBI,YAAA;IACA,aAAA;EAAJ;AACF;AAGE;EACE,aAAA;EACA,sBAAA;EACA,WAAA;EACA,gBAAA;AADJ;ACtCE;EDmCA;IAOI,mBAAA;EAAJ;AACF;AAGE;EACE,iBAAA;AADJ;AAIE;EACE,iBAAA;AAFJ","sourcesContent":["@import '../../mixins.scss';\r\n\r\n.studying-card {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  gap: 1rem;\r\n\r\n  & h4, p {\r\n    margin: 0;\r\n  } \r\n\r\n  @include onTablet {\r\n    align-items: center;\r\n  }\r\n\r\n  @include onDesktop {\r\n    flex-direction: column;\r\n\r\n    & h4, p {\r\n      text-align: center;\r\n    }\r\n  }\r\n\r\n  &__icon {\r\n    position: relative;\r\n    width: 44px;\r\n    height: 44px;\r\n    z-index: 2;\r\n    &::after {\r\n      content: '';\r\n      position: absolute;\r\n      bottom: 0;\r\n      right: 0;\r\n      width: 10px;\r\n      height: 10px;\r\n      background-color: var(--dark-color);\r\n      color: var(--primary-color);\r\n      font-size: 1rem;\r\n      border-radius: 50px;\r\n      z-index: 3;\r\n    }\r\n\r\n    @include onTablet {\r\n      width: 130px;\r\n      height: 120px;\r\n    }\r\n  }\r\n\r\n  &__content {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: .8rem;\r\n    max-width: 375px;\r\n\r\n    @include onDesktop {\r\n      align-items: center;\r\n    }\r\n  }\r\n\r\n  &__title {\r\n    font-size: 1.1rem;\r\n  }\r\n\r\n  &__description {\r\n    font-size: .9rem;\r\n  }\r\n}","@mixin onMobile {\r\n  @media (min-width: 375px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin onTablet {\r\n  @media (min-width: 640px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin onDesktop {\r\n  @media (min-width: 1200px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin onLaptop {\r\n  @media (min-width: 1400px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n%flex-center {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/studying/studying.scss":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/studying/studying.scss ***!
  \*******************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.studying {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.8rem;
  background-color: var(--dark-color);
  border-radius: 10px;
  padding: 60px 18px;
}
@media (min-width: 640px) {
  .studying {
    padding: 80px 40px;
  }
}
@media (min-width: 1200px) {
  .studying {
    padding: 80px 104px;
  }
}
.studying__title {
  font-size: 2rem;
  text-align: center;
  max-width: 340px;
  margin: 0;
}
@media (min-width: 640px) {
  .studying__title {
    font-size: 3.45rem;
    max-width: 340px;
  }
}
@media (min-width: 1200px) {
  .studying__title {
    max-width: 100%;
  }
}
.studying__list {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2.8rem;
}
.studying__list::before {
  content: "";
  position: absolute;
  left: 22px;
  top: 5%;
  border: 1px solid var(--accent-color);
  height: 80%;
  transform: translate(-50%);
  z-index: 1;
}
@media (min-width: 640px) {
  .studying__list::before {
    display: none;
  }
}
@media (min-width: 1200px) {
  .studying__list::before {
    display: block;
    width: 80%;
    height: 0%;
    left: 100px;
    top: 60px;
    transform: translate(0%);
  }
}
@media (min-width: 1200px) {
  .studying__list {
    flex-direction: row;
  }
}`, "",{"version":3,"sources":["webpack://./src/styles/blocks/studying/studying.scss","webpack://./src/styles/mixins.scss"],"names":[],"mappings":"AAEA;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,WAAA;EACA,mCAAA;EACA,mBAAA;EACA,kBAAA;AADF;ACDE;EDLF;IAUI,kBAAA;EAAF;AACF;ACAE;EDXF;IAaI,mBAAA;EAEF;AACF;AAAE;EACE,eAAA;EACA,kBAAA;EACA,gBAAA;EACA,SAAA;AAEJ;ACjBE;EDWA;IAOI,kBAAA;IACA,gBAAA;EAGJ;AACF;ACjBE;EDKA;IAYI,eAAA;EAIJ;AACF;AADE;EACE,kBAAA;EACA,aAAA;EACA,sBAAA;EACA,WAAA;AAGJ;AADI;EACE,WAAA;EACA,kBAAA;EACA,UAAA;EACA,OAAA;EACA,qCAAA;EACA,WAAA;EACA,0BAAA;EACA,UAAA;AAGN;AC5CE;EDiCE;IAWI,aAAA;EAIN;AACF;AC3CE;ED2BE;IAcI,cAAA;IACA,UAAA;IACA,UAAA;IACA,WAAA;IACA,SAAA;IACA,wBAAA;EAMN;AACF;ACrDE;EDqBA;IA8BI,mBAAA;EAMJ;AACF","sourcesContent":["@import '../../mixins.scss';\r\n\r\n.studying {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 2.8rem;\r\n  background-color: var(--dark-color);\r\n  border-radius: 10px;\r\n  padding: 60px 18px;\r\n\r\n  @include onTablet {\r\n    padding: 80px 40px;\r\n  }\r\n  @include onDesktop {\r\n    padding: 80px 104px;\r\n  }\r\n\r\n  &__title {\r\n    font-size: 2rem;\r\n    text-align: center;\r\n    max-width: 340px;\r\n    margin: 0;\r\n\r\n    @include onTablet {\r\n      font-size: 3.45rem;\r\n      max-width: 340px;\r\n    }\r\n\r\n    @include onDesktop {\r\n      max-width: 100%;\r\n    }\r\n  }\r\n\r\n  &__list {\r\n    position: relative;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 2.8rem;\r\n\r\n    &::before {\r\n      content: '';\r\n      position: absolute;\r\n      left: 22px;\r\n      top: 5%;\r\n      border: 1px solid var(--accent-color);\r\n      height: 80%;\r\n      transform: translate(-50%);\r\n      z-index: 1;\r\n\r\n      @include onTablet {\r\n        display: none;\r\n      }\r\n      @include onDesktop {\r\n        display: block;\r\n        width: 80%;\r\n        height: 0%;\r\n        left: 100px;\r\n        top: 60px;\r\n        transform: translate(0%);\r\n      }\r\n    }\r\n\r\n    @include onDesktop {\r\n      flex-direction: row;\r\n    }\r\n  }\r\n}","@mixin onMobile {\r\n  @media (min-width: 375px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin onTablet {\r\n  @media (min-width: 640px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin onDesktop {\r\n  @media (min-width: 1200px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin onLaptop {\r\n  @media (min-width: 1400px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n%flex-center {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/training/slider.scss":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/training/slider.scss ***!
  \*****************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.slider {
  overflow: hidden;
}
.slider__image {
  width: 100%;
  max-height: max-content;
}

.swiper {
  width: 100%;
}
.swiper-container-first {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.swiper-wrapper-first {
  display: flex;
  max-width: 1200px;
}
@media (min-width: 1200px) {
  .swiper-wrapper-first {
    justify-content: center;
  }
}
.swiper-slide-first {
  overflow: hidden;
  max-width: 240px;
  max-height: 294px;
  border-radius: 20px;
}
@media (min-width: 640px) {
  .swiper-slide-first {
    max-width: 400px;
    max-height: 484px;
  }
}
@media (min-width: 1200px) {
  .swiper-slide-first {
    max-width: 330px;
  }
}`, "",{"version":3,"sources":["webpack://./src/styles/blocks/training/slider.scss","webpack://./src/styles/mixins.scss"],"names":[],"mappings":"AAGA;EACE,gBAAA;AAFF;AAGE;EACE,WAAA;EACA,uBAAA;AADJ;;AAKA;EACE,WAAA;AAFF;AAIE;EACE,kBAAA;EACA,WAAA;EACA,YAAA;EACA,gBAAA;AAFJ;AAKE;EACE,aAAA;EACA,iBAAA;AAHJ;ACPE;EDQA;IAKI,uBAAA;EAFJ;AACF;AAKE;EACE,gBAAA;EACA,gBAAA;EACA,iBAAA;EACA,mBAAA;AAHJ;ACxBE;EDuBA;IAOI,gBAAA;IACA,iBAAA;EAFJ;AACF;ACxBE;EDiBA;IAYI,gBAAA;EADJ;AACF","sourcesContent":["@import '../../mixins.scss';\r\n\r\n\r\n.slider {\r\n  overflow: hidden;\r\n  &__image {\r\n    width: 100%;\r\n    max-height: max-content;\r\n  }\r\n}\r\n\r\n.swiper {\r\n  width: 100%;\r\n\r\n  &-container-first {\r\n    position: relative;\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: hidden;\r\n  }\r\n\r\n  &-wrapper-first {\r\n    display: flex;\r\n    max-width: 1200px;\r\n\r\n    @include onDesktop {\r\n      justify-content: center;\r\n    }\r\n  }\r\n\r\n  &-slide-first {\r\n    overflow: hidden;\r\n    max-width: 240px;\r\n    max-height: 294px;\r\n    border-radius: 20px;\r\n\r\n    @include onTablet {\r\n      max-width: 400px;\r\n      max-height: 484px;\r\n    }\r\n\r\n    @include onDesktop {\r\n      max-width: 330px;\r\n    }\r\n  }\r\n}","@mixin onMobile {\r\n  @media (min-width: 375px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin onTablet {\r\n  @media (min-width: 640px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin onDesktop {\r\n  @media (min-width: 1200px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin onLaptop {\r\n  @media (min-width: 1400px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n%flex-center {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/training/teacher-card.scss":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/training/teacher-card.scss ***!
  \***********************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.teacher-card__image {
  width: 100%;
}
.teacher-card__info {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  padding: 20px 17px;
}
@media (min-width: 640px) {
  .teacher-card__info {
    padding: 20px 28px;
  }
}
.teacher-card__name {
  font-size: 1.15rem;
}
@media (min-width: 640px) {
  .teacher-card__name {
    font-size: 1.45rem;
  }
}
.teacher-card p {
  margin: 0;
}
.teacher-card__title {
  font-size: 0.8rem;
  color: var(--accent-color);
  text-align: center;
}
@media (min-width: 640px) {
  .teacher-card__title {
    font-size: 1rem;
  }
}
.teacher-card__description {
  font-size: 0.8rem;
  text-align: center;
}
@media (min-width: 640px) {
  .teacher-card__description {
    font-size: 1rem;
  }
}`, "",{"version":3,"sources":["webpack://./src/styles/blocks/training/teacher-card.scss","webpack://./src/styles/mixins.scss"],"names":[],"mappings":"AAGE;EACE,WAAA;AAFJ;AAKE;EACE,kBAAA;EACA,SAAA;EACA,OAAA;EACA,QAAA;EACA,aAAA;EACA,sBAAA;EACA,8BAAA;EACA,mBAAA;EACA,WAAA;EACA,kBAAA;AAHJ;ACPE;EDAA;IAaI,kBAAA;EAFJ;AACF;AAKE;EACE,kBAAA;AAHJ;ACfE;EDiBA;IAII,kBAAA;EAFJ;AACF;AAKE;EACE,SAAA;AAHJ;AAME;EACE,iBAAA;EACA,0BAAA;EACA,kBAAA;AAJJ;AC5BE;ED6BA;IAMI,eAAA;EAHJ;AACF;AAME;EACE,iBAAA;EACA,kBAAA;AAJJ;ACrCE;EDuCA;IAKI,eAAA;EAHJ;AACF","sourcesContent":["@import '../../mixins.scss';\r\n\r\n.teacher-card {\r\n  &__image {\r\n    width: 100%;\r\n  }\r\n\r\n  &__info {\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    gap: .5rem;\r\n    padding: 20px 17px;\r\n\r\n    @include onTablet {\r\n      padding: 20px 28px;\r\n    }\r\n  }\r\n\r\n  &__name {\r\n    font-size: 1.15rem;\r\n\r\n    @include onTablet {\r\n      font-size: 1.45rem;\r\n    }\r\n  }\r\n\r\n  & p {\r\n    margin: 0;\r\n  }\r\n\r\n  &__title {\r\n    font-size: .8rem;\r\n    color: var(--accent-color);\r\n    text-align: center;\r\n\r\n    @include onTablet {\r\n      font-size: 1rem;\r\n    }\r\n  }\r\n\r\n  &__description {\r\n    font-size: .8rem;\r\n    text-align: center;\r\n\r\n    @include onTablet {\r\n      font-size: 1rem;\r\n    }\r\n  }\r\n}","@mixin onMobile {\r\n  @media (min-width: 375px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin onTablet {\r\n  @media (min-width: 640px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin onDesktop {\r\n  @media (min-width: 1200px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin onLaptop {\r\n  @media (min-width: 1400px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n%flex-center {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/training/training.scss":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/training/training.scss ***!
  \*******************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.training__title {
  font-size: 2rem;
  text-align: center;
}
@media (min-width: 640px) {
  .training__title {
    font-size: 4rem;
  }
}
.training__description {
  max-width: 540px;
  font-size: 1.15rem;
  margin: 24px auto;
  text-align: center;
}
@media (min-width: 640px) {
  .training__description {
    font-size: 1.4rem;
    margin: 40px auto;
  }
}`, "",{"version":3,"sources":["webpack://./src/styles/blocks/training/training.scss","webpack://./src/styles/mixins.scss"],"names":[],"mappings":"AAGE;EACE,eAAA;EACA,kBAAA;AAFJ;ACIE;EDJA;IAKI,eAAA;EADJ;AACF;AAIE;EACE,gBAAA;EACA,kBAAA;EACA,iBAAA;EACA,kBAAA;AAFJ;ACPE;EDKA;IAOI,iBAAA;IACA,iBAAA;EADJ;AACF","sourcesContent":["@import '../../mixins.scss';\r\n\r\n.training {\r\n  &__title {\r\n    font-size: 2rem;\r\n    text-align: center;\r\n\r\n    @include onTablet {\r\n      font-size: 4rem;\r\n    }\r\n  }\r\n\r\n  &__description {\r\n    max-width: 540px;\r\n    font-size: 1.15rem;\r\n    margin: 24px auto;\r\n    text-align: center;\r\n\r\n    @include onTablet {\r\n      font-size: 1.4rem;\r\n      margin: 40px auto;\r\n    }\r\n  }\r\n}","@mixin onMobile {\r\n  @media (min-width: 375px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin onTablet {\r\n  @media (min-width: 640px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin onDesktop {\r\n  @media (min-width: 1200px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin onLaptop {\r\n  @media (min-width: 1400px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n%flex-center {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/mixins.scss":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/mixins.scss ***!
  \*************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/normalize.scss":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/normalize.scss ***!
  \****************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  font-size: 14px;
  font-weight: 400;
  font-family: Mulish, Arial, sans-serif;
}

body {
  margin: 0;
  padding: 0;
  background-color: #121212;
  color: #FFFFFF;
}

button {
  font-family: Mulish, Arial, sans-serif;
  font-size: 14px;
  font-weight: 400;
}

h1, h2, h3, h4, h5, h6 {
  margin: 0;
}`, "",{"version":3,"sources":["webpack://./src/styles/normalize.scss"],"names":[],"mappings":"AAAA;EACE,sBAAA;AACF;;AAEA;EACE,uBAAA;EACA,eAAA;EACA,gBAAA;EACA,sCAAA;AACF;;AAEA;EACE,SAAA;EACA,UAAA;EACA,yBAAA;EACA,cAAA;AACF;;AAEA;EACE,sCAAA;EACA,eAAA;EACA,gBAAA;AACF;;AAEA;EACE,SAAA;AACF","sourcesContent":["* {\r\n  box-sizing: border-box;\r\n}\r\n\r\nhtml {\r\n  scroll-behavior: smooth;\r\n  font-size: 14px;\r\n  font-weight: 400;\r\n  font-family: Mulish, Arial, sans-serif;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  padding: 0;\r\n  background-color: #121212;\r\n  color: #FFFFFF;\r\n}\r\n\r\nbutton {\r\n  font-family: Mulish, Arial, sans-serif;\r\n  font-size: 14px;\r\n  font-weight: 400;\r\n}\r\n\r\nh1, h2, h3, h4, h5, h6 {\r\n  margin: 0;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/variables.scss":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/variables.scss ***!
  \****************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --burger-icon-size: 34px;
  --header-size: 66px;
  --bg-color: #121212;
  --primary-color: #FFFFFF;
  --black-color: #000000;
  --dark-color: #2A2A2A;
  --secondary-color: #D7D7D7;
  --accent-color: #8B57C2;
  --pink-color: #EF85EC;
  --active-color: #E7DAF5;
  --elements-color: #4B4B4B;
  --border-color: #969696;
  --input-color: #F5F5F5;
  --pagination-color: #AFAFAF;
  --rights-color: #D7D7D7;
  --faq-color: #353535;
  --faq-bg-color: #212121;
  --card-color: #18171DB2;
}
@media (min-width: 640px) {
  :root {
    --header-size: 83px;
  }
}
@media (min-width: 1200px) {
  :root {
    --header-size: 85px;
  }
}`, "",{"version":3,"sources":["webpack://./src/styles/variables.scss","webpack://./src/styles/mixins.scss"],"names":[],"mappings":"AAEA;EACE,wBAAA;EACA,mBAAA;EAUA,mBAAA;EACA,wBAAA;EACA,sBAAA;EACA,qBAAA;EACA,0BAAA;EACA,uBAAA;EACA,qBAAA;EACA,uBAAA;EACA,yBAAA;EACA,uBAAA;EACA,sBAAA;EACA,2BAAA;EACA,uBAAA;EACA,oBAAA;EACA,uBAAA;EACA,uBAAA;AAVF;ACZE;EDLF;IAKI,mBAAA;EAgBF;AACF;ACXE;EDXF;IASI,mBAAA;EAiBF;AACF","sourcesContent":["@import './mixins.scss';\r\n\r\n:root {\r\n  --burger-icon-size: 34px;\r\n  --header-size: 66px;\r\n\r\n  @include onTablet {\r\n    --header-size: 83px;\r\n  }\r\n\r\n  @include onDesktop {\r\n    --header-size: 85px;\r\n  }\r\n\r\n  --bg-color: #121212;\r\n  --primary-color: #FFFFFF;\r\n  --black-color: #000000;\r\n  --dark-color: #2A2A2A;\r\n  --secondary-color: #D7D7D7;\r\n  --accent-color: #8B57C2;\r\n  --pink-color: #EF85EC;\r\n  --active-color: #E7DAF5;\r\n  --elements-color: #4B4B4B;\r\n  --border-color: #969696;\r\n  --input-color: #F5F5F5;\r\n  --pagination-color: #AFAFAF;\r\n  --rights-color: #D7D7D7;\r\n  --faq-color: #353535;\r\n  --faq-bg-color: #212121;\r\n  --card-color: #18171DB2;\r\n}","@mixin onMobile {\r\n  @media (min-width: 375px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin onTablet {\r\n  @media (min-width: 640px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin onDesktop {\r\n  @media (min-width: 1200px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin onLaptop {\r\n  @media (min-width: 1400px) {\r\n    @content;\r\n  }\r\n}\r\n\r\n%flex-center {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/blocks/ai-applications/ai-applications.scss":
/*!****************************************************************!*\
  !*** ./src/styles/blocks/ai-applications/ai-applications.scss ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ai_applications_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./ai-applications.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/ai-applications/ai-applications.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ai_applications_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ai_applications_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ai_applications_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ai_applications_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/blocks/ai-applications/profession-card.scss":
/*!****************************************************************!*\
  !*** ./src/styles/blocks/ai-applications/profession-card.scss ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_profession_card_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./profession-card.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/ai-applications/profession-card.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_profession_card_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_profession_card_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_profession_card_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_profession_card_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/blocks/ai-info/ai-info.scss":
/*!************************************************!*\
  !*** ./src/styles/blocks/ai-info/ai-info.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ai_info_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./ai-info.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/ai-info/ai-info.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ai_info_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ai_info_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ai_info_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ai_info_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/blocks/ai-usage/ai-usage.scss":
/*!**************************************************!*\
  !*** ./src/styles/blocks/ai-usage/ai-usage.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ai_usage_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./ai-usage.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/ai-usage/ai-usage.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ai_usage_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ai_usage_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ai_usage_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ai_usage_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/blocks/ai-usage/usage-card.scss":
/*!****************************************************!*\
  !*** ./src/styles/blocks/ai-usage/usage-card.scss ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_usage_card_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./usage-card.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/ai-usage/usage-card.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_usage_card_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_usage_card_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_usage_card_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_usage_card_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/blocks/benefits/benefits-option.scss":
/*!*********************************************************!*\
  !*** ./src/styles/blocks/benefits/benefits-option.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_benefits_option_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./benefits-option.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/benefits/benefits-option.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_benefits_option_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_benefits_option_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_benefits_option_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_benefits_option_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/blocks/benefits/benefits.scss":
/*!**************************************************!*\
  !*** ./src/styles/blocks/benefits/benefits.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_benefits_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./benefits.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/benefits/benefits.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_benefits_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_benefits_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_benefits_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_benefits_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/blocks/container/container.scss":
/*!****************************************************!*\
  !*** ./src/styles/blocks/container/container.scss ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_container_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./container.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/container/container.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_container_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_container_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_container_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_container_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/blocks/course-details/course-card.scss":
/*!***********************************************************!*\
  !*** ./src/styles/blocks/course-details/course-card.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_course_card_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./course-card.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/course-details/course-card.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_course_card_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_course_card_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_course_card_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_course_card_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/blocks/course-details/course-details.scss":
/*!**************************************************************!*\
  !*** ./src/styles/blocks/course-details/course-details.scss ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_course_details_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./course-details.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/course-details/course-details.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_course_details_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_course_details_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_course_details_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_course_details_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/blocks/course-form/course-form.scss":
/*!********************************************************!*\
  !*** ./src/styles/blocks/course-form/course-form.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_course_form_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./course-form.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/course-form/course-form.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_course_form_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_course_form_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_course_form_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_course_form_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/blocks/course-form/form.scss":
/*!*************************************************!*\
  !*** ./src/styles/blocks/course-form/form.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_form_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./form.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/course-form/form.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_form_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_form_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_form_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_form_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/blocks/course/course.scss":
/*!**********************************************!*\
  !*** ./src/styles/blocks/course/course.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_course_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./course.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/course/course.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_course_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_course_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_course_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_course_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/blocks/employment/employment-card.scss":
/*!***********************************************************!*\
  !*** ./src/styles/blocks/employment/employment-card.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_employment_card_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./employment-card.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/employment/employment-card.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_employment_card_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_employment_card_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_employment_card_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_employment_card_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/blocks/employment/employment.scss":
/*!******************************************************!*\
  !*** ./src/styles/blocks/employment/employment.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_employment_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./employment.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/employment/employment.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_employment_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_employment_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_employment_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_employment_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/blocks/faq/faq.scss":
/*!****************************************!*\
  !*** ./src/styles/blocks/faq/faq.scss ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_faq_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./faq.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/faq/faq.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_faq_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_faq_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_faq_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_faq_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/blocks/feedbacks/feedbacks.scss":
/*!****************************************************!*\
  !*** ./src/styles/blocks/feedbacks/feedbacks.scss ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_feedbacks_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./feedbacks.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/feedbacks/feedbacks.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_feedbacks_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_feedbacks_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_feedbacks_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_feedbacks_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/blocks/footer/footer.scss":
/*!**********************************************!*\
  !*** ./src/styles/blocks/footer/footer.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_footer_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./footer.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/footer/footer.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_footer_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_footer_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_footer_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_footer_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/blocks/header/burger.scss":
/*!**********************************************!*\
  !*** ./src/styles/blocks/header/burger.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_burger_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./burger.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/header/burger.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_burger_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_burger_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_burger_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_burger_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/blocks/header/header.scss":
/*!**********************************************!*\
  !*** ./src/styles/blocks/header/header.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_header_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./header.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/header/header.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_header_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_header_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_header_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_header_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/blocks/header/menu.scss":
/*!********************************************!*\
  !*** ./src/styles/blocks/header/menu.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_menu_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./menu.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/header/menu.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_menu_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_menu_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_menu_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_menu_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/blocks/installment/installment.scss":
/*!********************************************************!*\
  !*** ./src/styles/blocks/installment/installment.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_installment_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./installment.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/installment/installment.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_installment_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_installment_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_installment_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_installment_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/blocks/learning/learning.scss":
/*!**************************************************!*\
  !*** ./src/styles/blocks/learning/learning.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_learning_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./learning.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/learning/learning.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_learning_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_learning_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_learning_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_learning_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/blocks/main/main.scss":
/*!******************************************!*\
  !*** ./src/styles/blocks/main/main.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/main/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/blocks/modules/module-details.scss":
/*!*******************************************************!*\
  !*** ./src/styles/blocks/modules/module-details.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_module_details_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./module-details.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/modules/module-details.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_module_details_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_module_details_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_module_details_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_module_details_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/blocks/modules/module.scss":
/*!***********************************************!*\
  !*** ./src/styles/blocks/modules/module.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./module.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/modules/module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/blocks/modules/modules.scss":
/*!************************************************!*\
  !*** ./src/styles/blocks/modules/modules.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_modules_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./modules.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/modules/modules.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_modules_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_modules_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_modules_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_modules_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/blocks/programs-participants/programs-participants.scss":
/*!****************************************************************************!*\
  !*** ./src/styles/blocks/programs-participants/programs-participants.scss ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_programs_participants_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./programs-participants.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/programs-participants/programs-participants.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_programs_participants_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_programs_participants_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_programs_participants_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_programs_participants_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/blocks/result-summary/percent-card.scss":
/*!************************************************************!*\
  !*** ./src/styles/blocks/result-summary/percent-card.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_percent_card_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./percent-card.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/result-summary/percent-card.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_percent_card_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_percent_card_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_percent_card_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_percent_card_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/blocks/result-summary/result-summary.scss":
/*!**************************************************************!*\
  !*** ./src/styles/blocks/result-summary/result-summary.scss ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_result_summary_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./result-summary.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/result-summary/result-summary.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_result_summary_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_result_summary_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_result_summary_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_result_summary_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/blocks/specialization/information.scss":
/*!***********************************************************!*\
  !*** ./src/styles/blocks/specialization/information.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_information_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./information.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/specialization/information.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_information_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_information_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_information_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_information_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/blocks/specialization/specialization.scss":
/*!**************************************************************!*\
  !*** ./src/styles/blocks/specialization/specialization.scss ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_specialization_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./specialization.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/specialization/specialization.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_specialization_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_specialization_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_specialization_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_specialization_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/blocks/studying/studying-card.scss":
/*!*******************************************************!*\
  !*** ./src/styles/blocks/studying/studying-card.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_studying_card_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./studying-card.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/studying/studying-card.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_studying_card_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_studying_card_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_studying_card_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_studying_card_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/blocks/studying/studying.scss":
/*!**************************************************!*\
  !*** ./src/styles/blocks/studying/studying.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_studying_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./studying.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/studying/studying.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_studying_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_studying_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_studying_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_studying_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/blocks/training/slider.scss":
/*!************************************************!*\
  !*** ./src/styles/blocks/training/slider.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_slider_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./slider.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/training/slider.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_slider_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_slider_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_slider_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_slider_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/blocks/training/teacher-card.scss":
/*!******************************************************!*\
  !*** ./src/styles/blocks/training/teacher-card.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_teacher_card_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./teacher-card.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/training/teacher-card.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_teacher_card_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_teacher_card_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_teacher_card_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_teacher_card_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/blocks/training/training.scss":
/*!**************************************************!*\
  !*** ./src/styles/blocks/training/training.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_training_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./training.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/blocks/training/training.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_training_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_training_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_training_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_training_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/mixins.scss":
/*!********************************!*\
  !*** ./src/styles/mixins.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_mixins_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./mixins.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/mixins.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_mixins_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_mixins_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_mixins_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_mixins_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/normalize.scss":
/*!***********************************!*\
  !*** ./src/styles/normalize.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_normalize_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./normalize.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/normalize.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_normalize_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_normalize_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_normalize_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_normalize_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/variables.scss":
/*!***********************************!*\
  !*** ./src/styles/variables.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_variables_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./variables.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/variables.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_variables_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_variables_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_variables_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_variables_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/images/arrow-left.png":
/*!******************************************!*\
  !*** ./src/assets/images/arrow-left.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d354479d0a1707c05ad3.png";

/***/ }),

/***/ "./src/assets/images/course-background.png":
/*!*************************************************!*\
  !*** ./src/assets/images/course-background.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "06c0e924fdf8ddda7b5f.png";

/***/ }),

/***/ "./src/assets/images/installment-image.png":
/*!*************************************************!*\
  !*** ./src/assets/images/installment-image.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "069f39637cd44825636d.png";

/***/ }),

/***/ "./src/assets/images/learning-background.png":
/*!***************************************************!*\
  !*** ./src/assets/images/learning-background.png ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "eb5ab0d6c32eae146bf5.png";

/***/ }),

/***/ "./src/assets/images/union.svg":
/*!*************************************!*\
  !*** ./src/assets/images/union.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "65baa14229fdac915889.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_mixins_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/mixins.scss */ "./src/styles/mixins.scss");
/* harmony import */ var _styles_variables_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/variables.scss */ "./src/styles/variables.scss");
/* harmony import */ var _styles_normalize_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/normalize.scss */ "./src/styles/normalize.scss");
/* harmony import */ var _styles_blocks_header_header_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/blocks/header/header.scss */ "./src/styles/blocks/header/header.scss");
/* harmony import */ var _styles_blocks_header_menu_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/blocks/header/menu.scss */ "./src/styles/blocks/header/menu.scss");
/* harmony import */ var _styles_blocks_header_burger_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/blocks/header/burger.scss */ "./src/styles/blocks/header/burger.scss");
/* harmony import */ var _styles_blocks_specialization_specialization_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/blocks/specialization/specialization.scss */ "./src/styles/blocks/specialization/specialization.scss");
/* harmony import */ var _styles_blocks_ai_info_ai_info_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/blocks/ai-info/ai-info.scss */ "./src/styles/blocks/ai-info/ai-info.scss");
/* harmony import */ var _styles_blocks_benefits_benefits_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/blocks/benefits/benefits.scss */ "./src/styles/blocks/benefits/benefits.scss");
/* harmony import */ var _styles_blocks_benefits_benefits_option_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles/blocks/benefits/benefits-option.scss */ "./src/styles/blocks/benefits/benefits-option.scss");
/* harmony import */ var _styles_blocks_ai_usage_ai_usage_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles/blocks/ai-usage/ai-usage.scss */ "./src/styles/blocks/ai-usage/ai-usage.scss");
/* harmony import */ var _styles_blocks_ai_usage_usage_card_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./styles/blocks/ai-usage/usage-card.scss */ "./src/styles/blocks/ai-usage/usage-card.scss");
/* harmony import */ var _styles_blocks_course_course_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./styles/blocks/course/course.scss */ "./src/styles/blocks/course/course.scss");
/* harmony import */ var _styles_blocks_training_training_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./styles/blocks/training/training.scss */ "./src/styles/blocks/training/training.scss");
/* harmony import */ var _styles_blocks_training_slider_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./styles/blocks/training/slider.scss */ "./src/styles/blocks/training/slider.scss");
/* harmony import */ var _styles_blocks_training_teacher_card_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./styles/blocks/training/teacher-card.scss */ "./src/styles/blocks/training/teacher-card.scss");
/* harmony import */ var _styles_blocks_learning_learning_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./styles/blocks/learning/learning.scss */ "./src/styles/blocks/learning/learning.scss");
/* harmony import */ var _styles_blocks_modules_modules_scss__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./styles/blocks/modules/modules.scss */ "./src/styles/blocks/modules/modules.scss");
/* harmony import */ var _styles_blocks_modules_module_scss__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./styles/blocks/modules/module.scss */ "./src/styles/blocks/modules/module.scss");
/* harmony import */ var _styles_blocks_modules_module_details_scss__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./styles/blocks/modules/module-details.scss */ "./src/styles/blocks/modules/module-details.scss");
/* harmony import */ var _styles_blocks_course_details_course_details_scss__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./styles/blocks/course-details/course-details.scss */ "./src/styles/blocks/course-details/course-details.scss");
/* harmony import */ var _styles_blocks_course_details_course_card_scss__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./styles/blocks/course-details/course-card.scss */ "./src/styles/blocks/course-details/course-card.scss");
/* harmony import */ var _styles_blocks_result_summary_result_summary_scss__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./styles/blocks/result-summary/result-summary.scss */ "./src/styles/blocks/result-summary/result-summary.scss");
/* harmony import */ var _styles_blocks_result_summary_percent_card_scss__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./styles/blocks/result-summary/percent-card.scss */ "./src/styles/blocks/result-summary/percent-card.scss");
/* harmony import */ var _styles_blocks_studying_studying_scss__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./styles/blocks/studying/studying.scss */ "./src/styles/blocks/studying/studying.scss");
/* harmony import */ var _styles_blocks_studying_studying_card_scss__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./styles/blocks/studying/studying-card.scss */ "./src/styles/blocks/studying/studying-card.scss");
/* harmony import */ var _styles_blocks_ai_applications_ai_applications_scss__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./styles/blocks/ai-applications/ai-applications.scss */ "./src/styles/blocks/ai-applications/ai-applications.scss");
/* harmony import */ var _styles_blocks_ai_applications_profession_card_scss__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./styles/blocks/ai-applications/profession-card.scss */ "./src/styles/blocks/ai-applications/profession-card.scss");
/* harmony import */ var _styles_blocks_employment_employment_scss__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./styles/blocks/employment/employment.scss */ "./src/styles/blocks/employment/employment.scss");
/* harmony import */ var _styles_blocks_employment_employment_card_scss__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./styles/blocks/employment/employment-card.scss */ "./src/styles/blocks/employment/employment-card.scss");
/* harmony import */ var _styles_blocks_programs_participants_programs_participants_scss__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./styles/blocks/programs-participants/programs-participants.scss */ "./src/styles/blocks/programs-participants/programs-participants.scss");
/* harmony import */ var _styles_blocks_installment_installment_scss__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./styles/blocks/installment/installment.scss */ "./src/styles/blocks/installment/installment.scss");
/* harmony import */ var _styles_blocks_course_form_course_form_scss__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./styles/blocks/course-form/course-form.scss */ "./src/styles/blocks/course-form/course-form.scss");
/* harmony import */ var _styles_blocks_course_form_form_scss__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./styles/blocks/course-form/form.scss */ "./src/styles/blocks/course-form/form.scss");
/* harmony import */ var _styles_blocks_feedbacks_feedbacks_scss__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./styles/blocks/feedbacks/feedbacks.scss */ "./src/styles/blocks/feedbacks/feedbacks.scss");
/* harmony import */ var _styles_blocks_faq_faq_scss__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./styles/blocks/faq/faq.scss */ "./src/styles/blocks/faq/faq.scss");
/* harmony import */ var _styles_blocks_footer_footer_scss__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./styles/blocks/footer/footer.scss */ "./src/styles/blocks/footer/footer.scss");
/* harmony import */ var _styles_blocks_container_container_scss__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./styles/blocks/container/container.scss */ "./src/styles/blocks/container/container.scss");
/* harmony import */ var _styles_blocks_main_main_scss__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./styles/blocks/main/main.scss */ "./src/styles/blocks/main/main.scss");
/* harmony import */ var _styles_blocks_specialization_information_scss__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./styles/blocks/specialization/information.scss */ "./src/styles/blocks/specialization/information.scss");
/* harmony import */ var _scripts_module_detail_toggle_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./scripts/module-detail-toggle.js */ "./src/scripts/module-detail-toggle.js");
/* harmony import */ var _scripts_module_detail_toggle_js__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(_scripts_module_detail_toggle_js__WEBPACK_IMPORTED_MODULE_40__);
/* harmony import */ var _scripts_burger_menu_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./scripts/burger-menu.js */ "./src/scripts/burger-menu.js");
/* harmony import */ var _scripts_burger_menu_js__WEBPACK_IMPORTED_MODULE_41___default = /*#__PURE__*/__webpack_require__.n(_scripts_burger_menu_js__WEBPACK_IMPORTED_MODULE_41__);










































})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map