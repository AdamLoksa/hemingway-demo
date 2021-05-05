import { loadPage } from './page-load';

const getPageContent = function() {
   let navList = `
      <ul class="nav__list">
         <li data-navigation="home" class="nav__logo">
            <picture>
               <source media="(min-width: 800px)"
                       srcset="./img/logo.png">
               <source srcset="./img/logo-h.png">
               <img class="picture__img" src="./img/logo.png" alt="Link to homepage">
            </picture>
         </li>

         <li>
            <ul class="nav__items">
               <li class="nav__item">
                  <a data-navigation="menu" href="#" alt="Link to menu page" class="nav__link">Drinks</a>
               </li>

               <li class="nav__item">
                  <a data-navigation="gallery" href="#" alt="Link to gallery page"class="nav__link">Gallery</a>
               </li>

               <li class="nav__item">
                  <a data-navigation="contact" href="#" alt="Link to contact page" class="nav__link">Contact</a>
               </li>
            </ul>
         </li>
      </ul>
   `;

   return navList;
}

const addListeners = function() {
      const navItems = document.querySelectorAll('[data-navigation]');
      navItems.forEach(item => item.addEventListener('click', function() {
         const dataValue = this.getAttribute('data-navigation');
         loadPage(dataValue);
      }));
}

const renderNavBar = function() {
   const navigation = document.querySelector('.nav');
   navigation.insertAdjacentHTML('afterbegin', getPageContent());
   addListeners();
}

export { renderNavBar };