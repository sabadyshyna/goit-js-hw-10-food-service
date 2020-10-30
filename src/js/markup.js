import menu from '../menu.json';
import cardsTemplate from '../templates/card.hbs';

const galleryMenu = document.querySelector('ul.js-menu');

const markup = cardsTemplate(menu);
galleryMenu.insertAdjacentHTML('beforeend', markup);
