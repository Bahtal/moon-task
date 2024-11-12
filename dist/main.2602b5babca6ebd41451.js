/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/main.sass":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/main.sass ***!
  \**************************************************************************************************************************************************************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nUndefined mixin.\n\u001b[34m   ╷\u001b[0m\n\u001b[34m65 │\u001b[0m             \u001b[31m@include flex-container(space-between, center)\u001b[0m\r\n\u001b[34m   │\u001b[0m \u001b[31m            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\u001b[0m\n\u001b[34m   ╵\u001b[0m\n  src\\style\\style.sass 65:4  @use\n  src\\main.sass 2:1          root stylesheet");

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Imports
var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./style.css */ "./src/style.css"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./logo/header-logotype.svg */ "./src/logo/header-logotype.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./logo/logo-tablet.svg */ "./src/logo/logo-tablet.svg"), __webpack_require__.b);
// Module
var code = `<!DOCTYPE html>
<html lang="ru">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="description" content="ООО «МОНЕВАК» — поставка упаковочного оборудования, пленки, пакетов и прочих материалов.">
	<meta name="keywords" content="упаковка, оборудование, пленка, пакеты, сервис, запчасти, упаковочное оборудование, моневак">
	<meta name="author" content="ООО МОНЕВАК">
	<link rel="stylesheet" href="${___HTML_LOADER_IMPORT_0___}">
	${"<" + "script"} src="https://api-maps.yandex.ru/2.0/?load=package.full&lang=ru-RU" type="text/javascript" defer>${"<" + "/script"}>
	${"<" + "script"} src="https://unpkg.com/imask" defer>${"<" + "/script"}>
	<title>Моневак</title>
</head>
<svg style='display: none;'>
	<symbol id="logo-compare" viewBox="0 0 12 16">
		<path fill-rule="evenodd" clip-rule="evenodd" d="M6 0C6.55228 0 7 0.447715 7 1V15C7 15.5523 6.55228 16 6 16C5.44772 16 5 15.5523 5 15V1C5 0.447715 5.44772 0 6 0ZM1 7C1.55228 7 2 7.44772 2 8L2 15C2 15.5523 1.55229 16 1 16C0.447715 16 0 15.5523 0 15V8C0 7.44772 0.447715 7 1 7ZM12 6C12 5.44772 11.5523 5 11 5C10.4477 5 10 5.44772 10 6V15C10 15.5523 10.4477 16 11 16C11.5523 16 12 15.5523 12 15V6Z" fill="#C9C9CF"/>
	</symbol>
	<symbol id="logo-search" viewBox="0 0 18 19">
		<path fill-rule="evenodd" clip-rule="evenodd" d="M3 8.5C3 4.91015 5.91015 2 9.5 2C13.0899 2 16 4.91015 16 8.5C16 12.0899 13.0899 15 9.5 15C5.91015 15 3 12.0899 3 8.5ZM9.5 0C4.80558 0 1 3.80558 1 8.5C1 10.6524 1.79999 12.6179 3.11886 14.1154C3.03248 14.161 2.95137 14.2202 2.87868 14.2929L0.292893 16.8787C-0.0976311 17.2692 -0.0976311 17.9024 0.292893 18.2929C0.683417 18.6834 1.31658 18.6834 1.70711 18.2929L4.29289 15.7071C4.38897 15.611 4.46141 15.5003 4.51022 15.382C5.91149 16.3998 7.63565 17 9.5 17C14.1944 17 18 13.1944 18 8.5C18 3.80558 14.1944 0 9.5 0Z" fill="#C9C9CF"/>
	</symbol>
	<symbol id="header-menu" viewBox="0 0 32 12">
		<path fill-rule="evenodd" clip-rule="evenodd" d="M1 0C0.447715 0 0 0.447715 0 1C0 1.55228 0.447715 2 1 2H31C31.5523 2 32 1.55228 32 1C32 0.447715 31.5523 0 31 0H1ZM1 10C0.447715 10 0 10.4477 0 11C0 11.5523 0.447715 12 1 12H16C16.5523 12 17 11.5523 17 11C17 10.4477 16.5523 10 16 10H1Z" fill="#262633"/>
	</symbol>
</svg>

<!-- Sprite__end -->
<body>
	<header class="header">
		<div class="container">
			<div class="header__inner">
				<ul class="header__inner-left" type='none'>
							<li class="nav__item">
								<button class="header__menu-toggle" alt="Кнопка меню">
									<svg class="menu__toggle">
										<use xlink:href='#header-menu'></use>
									</svg>
								</button>
							</li>
							<li class="nav__item adaptive-mobile">
								<a href="#" class="nav__link">Упаковка</a>
							</li>
							<li class="nav__item adaptive-mobile">
								<a href="#" class="nav__link">Оборудование</a>
							</li>
							<li class="nav__item nav__item--width adaptive-tablet">
								<a href="#" class="nav__link">Сервис и запчасти</a>
							</li>
						</ul>
				<div class="header__logo">
					<a class='logo-desktop-mob' href="#" aria-label='На главную'>
						<img src="${___HTML_LOADER_IMPORT_1___}" alt="Logo">
					</a>
					<a class='logo-tablet' href="#" aria-label='На главную'>
						<img src="${___HTML_LOADER_IMPORT_2___}" alt="Logo">
					</a>
				</div>
				<ul class="header__inner-right" type='none'>
					<li class="header__icons">
							<svg class='header__icon-compare'>
								<use xlink:href='#logo-compare'></use>
							</svg>
							<svg class='header__icon-search'>
								<use xlink:href='#logo-search'></use>
							</svg>
					</li>
					<li class="header__contacts contact adaptive-mobile">
						<a href="tel:+7 (499) 136-17-18" class="contact__phone phone_style">+7 (499) 136-17-18</a>
						<a href="mailto:info@monevac.ru" class="contact__email email_style">info@monevac.ru</a>
					</li>
					<button class="btn btn-red adaptive-tablet" alt='Оставить заявку'>Оставить заявку</button>
				</ul>
			</div>
		</div>
	</header>
	
	<aside class="aside">
		<div class="aside__inner">
			<div class="aside__nav">
				<a href="#" class="aside__nav-link">Главная</a>
				<div class="aside__nav-dot"></div>
				<a href="#" class="aside__nav-link">Контакты</a>
			</div>

			<hr class='aside__line gorizontal__line'>
			<!-- <span class="aside__nav--title"></span> -->
			<span class="aside__nav-title">Контакты</span>
		</div>
	</aside>

	<main class="main">
		<div class="container">
			<div class="main__inner">
				<section class="main__info">
					<div class="main__contacts contact">
						<a href="tel:+7 (903) 467-98-51" class="contact__phone main__style--phone">8 (903) 467-98-51</a>
						<a href="mailto:info@monevac.ru" class="contact__email main__style--email">info@monevac.ru</a>
					</div>
					<span class='main__full-name'>
						Полное наименование:<br>
						Общество с ограниченной ответственностью «МОНЕВАК»<br>
						Сокращенное наименование: ООО «МОНЕВАК»
					</span>

					<div class="main__company-info">
						<div class="main__company-info-section">
							<ul class="company-info__list" type='none'>
									<li>ИНН: 3448050610</li>
									<li>КПП: 344801001</li>
									<li>ОКПО: 67354285</li>
									<li>ОКАТО: 18401000000</li>
									<li>ОГРН: 1103461002480</li>
									<li>Код по ОКВЭД: 51.70</li>
							</ul>
					</div>

					<div class="main__company-info-section">
							<ul class="company-info__list" type='none'>
									<li>Банк: Филиала «Ростовский» ОАО «Альфа-Банк» г Ростов на Дону</li>
									<li>БИК: 046015207</li>
									<li>к/с: 30101810500000000207</li>
									<li>р/с: 40702810926090000003</li>
							</ul>
					</div>

					<div class="main__company-info-section">
							<ul class="company-info__list" type='none'>
									<li>Юридический адрес: 400080, Волгоградская обл. г. Волгоград ул. Командира Рудь, 14А, офис 13</li>
									<li>Почтовый адрес: 400080, Волгоградская обл. г. Волгоград ул. Командира Рудь, 14А, офис 13</li>
							</ul>
					</div>
					</div>

				</section>
				<form action="#" class="main__form" id='section-form' novalidate>
					<h1 class='form-question'>Остались вопросы</h1>
					<div class="form-inner">
						<div class="form__username">
							<input id='section-username' class="form__title" type="text" placeholder='Ваше имя' required>
							<p class='section-form__label'>Является обязательным полем</p>
						</div>
						<div class="form__phone">
							<input id='section-phone' class="form__title" type="tel" name="phone" required>
							<p class='section-form__label'>Является обязательным полем</p>
						</div>
						<div class="form__message">
							<textarea id='section-message' class="form__title form__title--text" type="text" placeholder='Ваше сообщение' rows='5' cols='30' wrap='hard' required></textarea>
							<p class='section-form__label'>Является обязательным полем</p>
						</div>
					</div>
					<div class="main__policy">
						<input type="checkbox" id='main__policy-form' required>
						<label for="main__policy-form">
							<span class="checkmark">
								<svg width="20" height="20" viewBox="0 0 20 20" fill='none'>
									<path id="form-1" d="M4 0L16 0C18.2 0 20 1.79 20 4L20 16C20 18.2 18.2 20 16 20L4 20C1.79 20 0 18.2 0 16L0 4C0 1.79 1.79 0 4 0Z" fill-opacity="1.000000" fill-rule="evenodd"/>
									<path id="form-2" d="M14.72 7.69L8.96 13.69C8.76 13.88 8.49 14 8.21 14C7.94 13.99 7.7 13.89 7.51 13.69L5.27 11.35C4.89 10.95 4.9 10.33 5.3 9.94C5.71 9.55 6.33 9.57 6.72 9.97L8.23 11.55L13.27 6.3C13.66 5.9 14.28 5.89 14.69 6.27C15.09 6.66 15.1 7.28 14.72 7.69Z" fill-opacity="1.000000" fill-rule="evenodd"/>
								</svg>
						</span>
						<a class='policy-form__link' href="#"><span>Я подтверждаю свое согласие с политикой в отношении</span> обработки персональных данных</a></label>
					</div>
					<button class="btn btn-red" type='submit' alt='Задать вопрос'>Задать вопрос</button>
				</form>
			</div>
		</div>
	</main>

	<div id="map" style='width: 100%'></div>

	<section class="address">
		<div class="container">
			<div class="address__inner">
				<div class="address__card">
						<div class="address__info">
							<h3 class="address__title">МОСКВА</h3>
						<div class="address__info-phone">
							<a href="tel:+7 (499) 136-17-18" class="contact__phone address__title--phone">+7 (499) 136-17-18</a>
							<a href="tel:+7 (903) 467-98-51" class="contact__phone address__title--phone">+7 (903) 467-98-51</a>
						</div>
						<div class="address__geolocation">
							<address class='address__full'>
								115114, ул. Дербеневская, д. 1, стр. 1, подъезд 44, офис 6 (станция метро "Павелецкая")
							</address>
							<a href="#" class="address__geo-link">
								Проложить маршрут
							</a>
						</div>
						</div>
						<p class="address__time">
							Режим работы: c 10:00 до 18:00
						</p>
				</div>

				<div class="address__card">
					<div class="address__info">
						<h3 class="address__title">Волгоград</h3>
					<div class="address__info-phone">
						<a href="tel:+7 (8442) 65-08-88" class="contact__phone address__title--phone">+7 (8442) 65-08-88</a>
						<a href="tel:+7 (8442) 65-08-80" class="contact__phone address__title--phone">+7 (8442) 65-08-80</a>
					</div>
					<div class="address__geolocation">
						<address class='address__full'>
							400080, ул. Командира Рудь, 14А
						</address>
						<a href="#" class="address__geo-link">
							Проложить маршрут
						</a>
					</div>
					</div>
					<p class="address__time">
						Режим работы: c 10:00 до 17:00
					</p>
			</div>

			<div class="address__card">
				<div class="address__info">
					<h3 class="address__title">КРАСНОДАР</h3>
				<div class="address__info-phone">
					<a href="tel:+7 (861) 292-71-88" class="contact__phone address__title--phone">+7 (861) 292-71-88</a>
					<a href="tel:+7 (903) 467-98-51" class="contact__phone address__title--phone">+7 (903) 467-98-51</a>
				</div>
				<div class="address__geolocation">
					<address class='address__full'>
						350015, ул. Митрофана Седина, 176
					</address>
					<a href="#" class="address__geo-link">
						Проложить маршрут
					</a>
				</div>
				</div>
				<p class="address__time">
					Режим работы: c 10:00 до 17:00
				</p>
		</div>

		<div class="address__card">
			<div class="address__info">
				<h3 class="address__title">Саратов</h3>
			<div class="address__info-phone">
				<a href="tel:+7 (927) 626-00-50" class="contact__phone address__title--phone">+7 (927) 626-00-50</a>
				<a href="tel:+7 (903) 467-98-51" class="contact__phone address__title--phone">+7 (903) 467-98-51</a>
			</div>
			<div class="address__geolocation">
				<address class='address__full'>
					410080, пр-т Строителей, 1
				</address>
				<a href="#" class="address__geo-link">
					Проложить маршрут
				</a>
			</div>
			</div>
			<p class="address__time">
				Режим работы: c 10:00 до 18:00
			</p>
	</div>

	<div class="address__card">
		<div class="address__info">
			<h3 class="address__title">воронеж</h3>
		<div class="address__info-phone">
			<a href="tel:+7 (473) 229-63-78" class="contact__phone address__title--phone">+7 (473) 229-63-78</a>
			<a href="tel:+7 (903) 467-98-51" class="contact__phone address__title--phone">+7 (903) 467-98-51</a>
		</div>
		<div class="address__geolocation">
			<address class='address__full'>
				394030, ул. Комиссаржевской, 10
			</address>
			<a href="#" class="address__geo-link">
				Проложить маршрут
			</a>
		</div>
		</div>
		<p class="address__time">
			Режим работы: c 10:00 до 18:00
		</p>
</div>

<div class="address__card">
	<div class="address__info">
		<h3 class="address__title">ЕРЕВАН</h3>
	<div class="address__info-phone">
		<a href="tel:+374 91 21 90 69" class="contact__phone address__title--phone">+374 91 21 90 69</a>
		<a href="tel:+374 60 50 90 69" class="contact__phone address__title--phone">+374 60 50 90 69</a>
	</div>
	<div class="address__geolocation">
		<address class='address__full'>
			Район Аван 4, дом 2
		</address>
		<a href="#" class="address__geo-link">
			Проложить маршрут
		</a>
	</div>
	</div>
	<p class="address__time">
		Режим работы: c 10:00 до 18:00
	</p>
</div>

<div class="address__card address__card--grid">
	<div class="address__info">
		<h3 class="address__title">НОВОСИБИРСК</h3>
	<div class="address__info-phone address__info-phone--last">
		<a href="tel:+7 (383) 20-62-461" class="contact__phone address__title--phone">+7 (383) 20-62-461</a>
		<a href="tel:+7 (383) 20-62-711" class="contact__phone address__title--phone">+7 (383) 20-62-711</a>
		<a href="tel:+7 (903) 467-98-51 " class="contact__phone address__title--phone">+7 (903) 467-98-51 </a>
		<a href="tel:+7 (383) 20-62-209" class="contact__phone address__title--phone">Факс: +7 (383) 20-62-209</a>
		<a href="tel:+7 (383) 20-62-210" class="contact__phone address__title--phone">+7 (383) 20-62-210</a>
	</div>
	<address class='address__full'>
		630039, ул. Никитина 116, к.3
	</address>
	<a href="#" class="address__geo-link">
		Проложить маршрут
	</a>
	</div>
	<p class="address__time">
		Режим работы: c 10:00 до 18:00
	</p>
</div>


				
			</div>
		</div>
	</section>

	<footer class="footer">
    <div class="container">
      <div class="footer__inner">
        <div class="footer__left">
          <div class="footer__material">
            <a href="#" class="footer__material-link">Упаковочное оборудование</a>
            <a href="#" class="footer__material-link">Пленки</a>
            <a href="#" class="footer__material-link">Пакеты</a>
            <a href="#" class="footer__material-link">Прочие материалы</a>
          </div>
          <div class="footer__nav">
            <a href="#" class="footer__nav-link">О Компании</a>
            <a href="#" class="footer__nav-link">Партнеры</a>
            <a href="#" class="footer__nav-link">Доставка</a>
            <a href="#" class="footer__nav-link">Оплата</a>
            <a href="#" class="footer__nav-link">Обмен и возврат</a>
            <a href="#" class="footer__nav-link">Контакты</a>
            <a href="#" class="footer__nav-link">Распродажа</a>
            <a href="#" class="footer__nav-link">Сервис</a>
            <a href="#" class="footer__nav-link">Новости</a>
          </div>	
        </div>
				
        
        <div class="footer__right">
          <div class="contact footer__contacts">
            <div class="footer__numbers">
              <a href="tel:+7 (903) 467-98-51" class="contact__phone footer__style--phone">8 (903) 467-98-51</a>
              <a href="tel:+7 (903) 467-98-51" class="contact__phone footer__style--phone">8 (903) 467-98-51</a>
            </div>
              <button class="btn btn-transparent" alt='Позвонить'>Обратный звонок</button>
              <a href="mailto:info@monevac.ru" class="contact__email footer__style--email">info@monevac.ru</a>
          </div>
          <address class='address__full footer__address'>
            Москва ул. Дербеневская, д. 1, стр. 1, подъезд 44, офис 6 (станция метро "Павелецкая")
          </address>
        </div>
      </div>
    </div>

		<div class="footer__section">
			<hr class='footer__line'>
			<div class="container">
				<div class="footer__info">
					<p class="footer__company-name footer__company-name-left">© Моневак 2020 | Все права защищены</p>
					<p class="footer__company-name footer__company-name-right">Разработка и продвижение сайта - <a href="#" class="footer__made-by">TODO</a></p>
				</div>
			</div>
		</div>
</footer>
</body>
</html>`;
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/main.sass":
/*!***********************!*\
  !*** ./src/main.sass ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_main_sass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../node_modules/sass-loader/dist/cjs.js!./main.sass */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/main.sass");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_main_sass__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_main_sass__WEBPACK_IMPORTED_MODULE_6__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_main_sass__WEBPACK_IMPORTED_MODULE_6__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_main_sass__WEBPACK_IMPORTED_MODULE_6__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()((_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_main_sass__WEBPACK_IMPORTED_MODULE_6___default()), options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_main_sass__WEBPACK_IMPORTED_MODULE_6___default()) && (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_main_sass__WEBPACK_IMPORTED_MODULE_6___default().locals) ? (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_2_use_2_node_modules_sass_loader_dist_cjs_js_main_sass__WEBPACK_IMPORTED_MODULE_6___default().locals) : undefined);


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

/***/ "./src/icon-customImage.js":
/*!*********************************!*\
  !*** ./src/icon-customImage.js ***!
  \*********************************/
/***/ (() => {

ymaps.ready(function () {
	var myMap = new ymaps.Map('map', {
					center: [49.511145, 58.318783],
					zoom: 5,
					controls: []
			}, {
					suppressMapOpenBlock: true,
					searchControlProvider: 'yandex#search'
			});

			

			MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
					'<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
			),

			myPlacemark = new ymaps.Placemark([55.751137, 37.620780], {
			}, {
					iconLayout: 'default#image',
					iconImageHref: '../icon/map-icon.svg',
					iconImageSize: [36, 40],
					iconImageOffset: [-5, -38]
			}),

			myPlacemarkVoroneg = new ymaps.Placemark([51.672016, 39.203689], {
			}, {
					iconLayout: 'default#image',
					iconImageHref: '../icon/map-icon.svg',
					iconImageSize: [36, 40],

			});

			myPlacemarkVolgograd = new ymaps.Placemark([48.704940, 44.500097], {
			}, {
					iconLayout: 'default#image',
					iconImageHref: '../icon/map-icon.svg',
					iconImageSize: [36, 40],

			});

			myPlacemarkErevan = new ymaps.Placemark([40.177734, 44.512788], {
			}, {
					iconLayout: 'default#image',
					iconImageHref: '../icon/map-icon.svg',
					iconImageSize: [36, 40],

			});

			myPlacemarkKrasnodar = new ymaps.Placemark([45.035981, 38.975954], {
			}, {
					iconLayout: 'default#image',
					iconImageHref: '../icon/map-icon.svg',
					iconImageSize: [36, 40],

			});

			myPlacemarkSaratov = new ymaps.Placemark([51.539173, 46.030849], {
			}, {
					iconLayout: 'default#image',
					iconImageHref: '../icon/map-icon.svg',
					iconImageSize: [36, 40],

			});

			myPlacemarkNovosibirsk = new ymaps.Placemark([55.030737, 82.926493], {
			}, {
					iconLayout: 'default#image',
					iconImageHref: '../icon/map-icon.svg',
					iconImageSize: [36, 40]

			});

	myMap.geoObjects
			.add(myPlacemark)
			.add(myPlacemarkVoroneg)
			.add(myPlacemarkVolgograd)
			.add(myPlacemarkErevan)
			.add(myPlacemarkKrasnodar)
			.add(myPlacemarkSaratov)
			.add(myPlacemarkNovosibirsk)
});



/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "c2d3bae12599809c6167.css";

/***/ }),

/***/ "./src/logo/header-logotype.svg":
/*!**************************************!*\
  !*** ./src/logo/header-logotype.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "115c7e2587f566d554ba.svg";

/***/ }),

/***/ "./src/logo/logo-tablet.svg":
/*!**********************************!*\
  !*** ./src/logo/logo-tablet.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "3794237ebdd924694432.svg";

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
/******/ 			// no module.id needed
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
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
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
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _icon_customImage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icon-customImage.js */ "./src/icon-customImage.js");
/* harmony import */ var _icon_customImage_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_icon_customImage_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.html */ "./src/index.html");
/* harmony import */ var _main_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main.sass */ "./src/main.sass");




document.addEventListener("DOMContentLoaded", function() {
	const form = document.getElementById('section-form');
	const username = document.getElementById('section-username');
	const phone = document.getElementById('section-phone');
	const message = document.getElementById('section-message');
	const label = document.querySelectorAll('.section-form__label')
	const checkbox = document.getElementById("main__policy-form")

	form.addEventListener('submit', function(e) {
		e.preventDefault();
		let isValid = true;

		if (username.value.trim() === '') {
			username.classList.add('error');
			label[0].style.opacity = "1";
			isValid = false;
		} else {
			username.classList.remove('error');
			label[0].style.opacity = "0";
		}

		if (phone.value.includes('_')) {
			phone.classList.add('error');
			label[1].style.opacity = "1";
			isValid = false;
		} else {
			phone.classList.remove('error');
			label[1].style.opacity = "0";
		}

		if (message.value.trim() === '') {
			message.classList.add('error');
			label[2].style.opacity = "1";
			isValid = false;
		} else {
			message.classList.remove('error');
			label[2].style.opacity = "0";
		}

		if (!checkbox.checked) {
			alert("Пожалуйста, подтвердите свое согласие с условиями.");
			isValid = false;
	}

		if (isValid) {
			alert("Форма успешно отправлена");
		}
	});

	IMask(phone, {
		mask: '+{7}(000)000-00-00',
		lazy: false,
		placeholderChar: '_' 
	});
});



})();

/******/ })()
;
//# sourceMappingURL=main.2602b5babca6ebd41451.js.map