import cardTemplate from '../templates/menu-card.hbs';
import menuCards from '../menu.json'

const menu = document.querySelector('.js-menu');

menu.insertAdjacentHTML('beforeend', cardTemplate(menuCards));