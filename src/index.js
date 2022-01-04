import pageLoadModule from "./page-load";
import loadContactPage from "./contact.js";
import loadMenuPage from "./menu.js";

pageLoadModule.run();

const content = document.querySelector('#content');
const contact = document.querySelector('.contact');
const home = document.querySelector('.home');
const menu = document.querySelector('.menu');
contact.addEventListener('click', showContactPage);
home.addEventListener('click', showHomePage);
menu.addEventListener('click', showMenuPage);

function clearContent() {
  content.innerHTML = null;
  content.className = '';
}

function showHomePage() {
  clearContent();
  pageLoadModule.run();
}

function showContactPage() {
  clearContent();
  loadContactPage.run();
}

function showMenuPage() {
  clearContent();
  loadMenuPage.run();
}
