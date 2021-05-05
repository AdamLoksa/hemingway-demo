import { getDrinkList } from './menu-list'

const createList = function(type) {
   let ul = `<ul class="menu__list">`

   let listItems = getDrinkList(type).forEach(item => {
      let listItem = `           
         <li class="menu__item">
            <p class="text">${item.name}</p>
            <p class="price">${item.price},-</p>
         </li>
      `;
      ul += listItem;
   });

   ul += `</ul>`;
   return ul;
}


const getPageContent = function() {
   const menu = `
      <div class="container menu">
         <h1 class="title">Our menu</h1>
         <p class="text">Hemingway Bar boasts a diverse offer of Absinthe, including limited editions distilled for us by Martin Žufánek. We also offer variety of rums from Cuba, Jamaica, Guatemala, Nicaragua and much more. Finally, we carry a choice of the finest sparkling wines from the Champagne region that includes large and famous brands as well as wines from home producers.</p>

         <div class="menu__container">
            <div class="menu__bar">
               <h2 class="subtitle">Rum</h2> 
               ${createList('rum')}

               <h2 class="subtitle">Whiskey</h2>
               ${createList('whiskey')}
               
               <a class="btn__menu" href="./assets/hemingway-barlist.pdf" rel="noopener noreferrer" target="_blank" class="btn__icon">
                  <img class="btn__menu-img" src="./img/bar-list.png" alt="Hemingway's bar list">
                  <h3 class="btn__menu-text">Bar list</h3>
               </a>
            </div>


            <div class="menu__coctails">
               <h2 class="subtitle">Absinth cocktails</h2>
               ${createList('absinth')}
                  
               <h2 class="subtitle">Gin drinks</h2>
               ${createList('gin')}

               <a class="btn__menu" href="./assets/hemingway-cocktails.pdf" rel="noopener noreferrer" target="_blank" class="btn__icon">
                  <img class="btn__menu-img" src="./img/bar-list.png" alt="Hemingway's bar list">
                  <h3 class="btn__menu-text">Coctail list</h3>
               </a>
            </div>
         </div>
      </div>
   `;

   return menu;
}

const renderBarMenu = function() {
   const pageContent = document.getElementById('page-content');
   pageContent.insertAdjacentHTML('afterbegin', getPageContent());
}

export { renderBarMenu };