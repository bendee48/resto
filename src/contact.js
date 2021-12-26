const loadContactPage = (()=> {
  const run = () => {
    const pageContent = document.querySelector('#content');
    const contactContent = document.createElement('div');
    const content = `
      <h1>Contact Page</h1>
    `;
  
    contactContent.innerHTML = content;
    pageContent.appendChild(contactContent);
  }

  return { run }
})();

export default loadContactPage;