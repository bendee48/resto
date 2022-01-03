import pageLoadModule from "./page-load";
import loadContactPage from "./contact.js";

pageLoadModule.run();

const content = document.querySelector('#content');
const contact = document.querySelector('.contact');
const home = document.querySelector('.home');
contact.addEventListener('click', showContactPage);
home.addEventListener('click', showHomePage);

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
