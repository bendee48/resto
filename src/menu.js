const loadMenuPage = (()=> {
  const starterItems = [
    { name: 'Calamari', desc: "Squid rings in a lemon and rhubarb batter", price: "$3.99", url: 'calamari.jpg'},
    { name: 'Skittles', desc: "Taste the rainbow", price: "$1.99", url: 'skittles.jpg'},
    { name: 'Banana', desc: "Our best banana", price: "$23.99", url: 'banana.jpg'},
  ];

  const mainItems = [
    { name: 'Hamster', desc: "Skittle stuffed Hamster", price: "99c", url: 'hamster.jpg'},
    { name: 'Lime Roasted Pork', desc: "Roasted pork with a lime jus", price: "$19.99", url: 'pork.jpg'},
    { name: 'Dunno', desc: "We're not sure what this is. Smells alright though", price: "$239.79", url: 'dunno.jpg'},
    { name: 'Vegetable Bake', desc: "Bursting with delicious veggies and sunshine", price: "$6.99", url: 'veg_cake.jpg'},
  ];

  const dessertItems = [
    { name: 'Chocolate Shoelaces', desc: "Shoelaces. Probably chocolate.", price: "$1.99", url: 'shoelaces.png'},
    { name: 'Broken Glass Cake', desc: "We found these outside. Fairly certain it's not real glass", price: "$4.99", url: 'glass.jpg'},
  ]

  function run() {
    const pageContent = document.querySelector('#content');
    const menuContent = document.createElement('div');
    const starterHeader = document.createElement('h1');
    starterHeader.classList.add('header');
    starterHeader.innerHTML = "Starters";
    menuContent.appendChild(starterHeader);

    starterItems.forEach(item => {
      const content = `
          <div class="pic-box-inner">
            <div class="pic-box-front">
              <img src="images/${item.url}">
            </div>
            <div class="pic-box-back">
              <p>${item.name}</p>
              <p>${item.desc}</p>
              <p>${item.price}</p>
            </div>
          </div>
      `
      const picBox = document.createElement('div')
      picBox.classList.add('pic-box');
      picBox.innerHTML = content;
      menuContent.appendChild(picBox);
    });

    const mainHeader = document.createElement('h2');
    mainHeader.classList.add('header');
    mainHeader.innerHTML = "Mains";
    menuContent.appendChild(mainHeader);

    mainItems.forEach(item => {
      const content = `
          <div class="pic-box-inner">
            <div class="pic-box-front">
              <img src="images/${item.url}">
            </div>
            <div class="pic-box-back">
              <p>${item.name}</p>
              <p>${item.desc}</p>
              <p>${item.price}</p>
            </div>
          </div>
      `
      const picBox = document.createElement('div')
      picBox.classList.add('pic-box');
      picBox.innerHTML = content;
      menuContent.appendChild(picBox);
    });

    const dessertHeader = document.createElement('h3');
    dessertHeader.classList.add('header');
    dessertHeader.innerHTML = "Desserts";
    menuContent.appendChild(dessertHeader);

    dessertItems.forEach(item => {
      const content = `
          <div class="pic-box-inner">
            <div class="pic-box-front">
              <img src="images/${item.url}">
            </div>
            <div class="pic-box-back">
              <p>${item.name}</p>
              <p>${item.desc}</p>
              <p>${item.price}</p>
            </div>
          </div>
      `
      const picBox = document.createElement('div')
      picBox.classList.add('pic-box');
      picBox.innerHTML = content;
      menuContent.appendChild(picBox);
    });


    menuContent.classList.add('menu-content');
    pageContent.appendChild(menuContent);
  }

  return { run }
})();

export default loadMenuPage;