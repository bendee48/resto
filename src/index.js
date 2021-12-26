import pageLoadModule from "./page-load";
import loadContactPage from "./contact.js";

pageLoadModule.run();

const contact = document.querySelector('.contact');
contact.addEventListener('click', showContactPage);

function showContactPage() {
  loadContactPage.run();
}
