import { loadPage } from './page-load';

const getPageContent = function () {
   const homePageContent = `
      <div class="hero container">
         <div class="hero__item hero__content">
            <h1 class="title">
               Special drinks, unique experience.
            </h1>
   
            <p class="text">
               A place inspired by Ernest Hemingway, one of the most well-known bar lovers, who brought fame to many mixed drinks and innovated on old cocktail recipes.
            </p>

            <div class="btn__container">
               <a href="#" data-hp-button="menu" class="btn">See drinks</a>
               <a href="#" data-hp-button="contact" class="btn">Visit us</a>
            </div>
         </div>

         <div class="hero__item hero__video">
            <iframe class="hero__video-frame" src="https://www.youtube.com/embed/j5GmZlsGpng"  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
         </div>
      </div>
   `;

   return homePageContent;
}

const addListeners = function() {
   // Add event listeners to btns
   const btns = document.querySelectorAll('[data-hp-button]');

   btns.forEach(btn => btn.addEventListener('click', function() {
      const dataValue = this.getAttribute('data-hp-button');
      loadPage(dataValue);
   }));
}

const renderHomePage = function() {
   const pageContent = document.getElementById('page-content');
   pageContent.insertAdjacentHTML('afterbegin', getPageContent());
   addListeners();
}

export { renderHomePage };