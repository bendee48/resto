const loadContactPage = (()=> {
  const run = () => {
    const pageContent = document.querySelector('#content');
    const contactContent = document.createElement('div');
    contactContent.classList.add('contact-content');
    const content = `
      <h1>Contact Page</h1>
      <h2>Email</h2>
      <address>info@bangers.co.uk</address>
      <h3>Telephone</h3>
      <address>01724 647583920</address>
      <h4>Banger's Head Office</h4>
      <address>
        124 Banger's Street,
        Bangerton,
        New Bangershire,
        BNG 123
      </address>
    `;
    contactContent.innerHTML = content;
    pageContent.appendChild(contactContent);
  }

  return { run }
})();

export default loadContactPage;