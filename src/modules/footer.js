const getPageContent = function () {
   let footer = `
      <ul class="footer__list">       
         <li class="footer__item">
            <a href="https://www.instagram.com/hemingwaybarprague/" rel="noopener noreferrer" target="_blank" class="footer__link">
               <img src="./img/ig-icon.png" alt="Link to Hemingway's Instagram" class="footer__icon">
            </a>
         </li>

         <li class="footer__item">
            <a href="https://www.facebook.com/hemingwaybarprague/" rel="noopener noreferrer" target="_blank" class="footer__link">
               <img src="./img/fb-icon.png" alt="Link to Hemingway's Facebook" class="footer__icon">
            </a>
         </li>

         <li class="footer__item">
            <a href="https://www.youtube.com/user/hemingwaybar" rel="noopener noreferrer" target="_blank" class="footer__link">
               <img src="./img/yt-icon.png" alt="Link to Hemingway's YouTube" class="footer__icon">
            </a>
         </li>

         <li class="footer__item">
            <a href="https://www.tripadvisor.cz/Attraction_Review-g274707-d7656988-Reviews-Hemingway_Bar-Prague_Bohemia.html" rel="noopener noreferrer" target="_blank" class="footer__link">
               <img src="./img/ta-icon.png" alt="Link to Hemingway's Trip Advisor" class="footer__icon">
            </a>
         </li>
      </ul>
   `;

   return footer;
}

const renderFooter = function() {
   const footer = document.querySelector('.footer');
   footer.insertAdjacentHTML('afterbegin', getPageContent());
}

export { renderFooter };