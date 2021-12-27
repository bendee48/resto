const pageLoadModule = (()=> {
  const run = () => {
    const pageContent = document.querySelector('#content');
    const header = document.createElement('h1');
    const text = document.createElement('p');
    header.innerText = "Banger's";
    text.innerText = "Banging Food for Banging People...no wait";
    pageContent.appendChild(header);
    pageContent.appendChild(text);
  }
  
  return { run }
})();

export default pageLoadModule;