const pageLoadModule = (()=> {
  const run = () => {
    const content = document.querySelector('#content');
    const main = document.createElement('main');
    const text = document.createElement('p');
    text.innerText = "Banging Food for Banging People...no wait"
    content.appendChild(main);
    main.appendChild(text);
  }
  
  return { run }
})();

export default pageLoadModule;