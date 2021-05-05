import { renderNavBar } from './nav';
import { renderFooter } from './footer';
import { renderHomePage } from './homepage';
import { renderBarMenu } from './menu';
import { renderGallery } from './gallery';
import { renderContactPage } from './contact';

// website init
const init = function() {
   // insert navbar on page
   renderNavBar();

   // insert homepage content
   renderHomePage();

   // insert footer on page
   renderFooter();
}

// Load page content
function loadPage(value) {
   const pageContent = document.getElementById('page-content');
   clearPageContent(pageContent);

   switch (value) {
      case 'home':
         renderHomePage();
         break;
      case 'menu':
         renderBarMenu();
         break;
      case 'gallery':
         renderGallery();
         break;
      case 'contact':
         renderContactPage();
         break;
   }
}

// Clear page content
function clearPageContent(element) {
   while(element.firstChild) {
      element.removeChild(element.firstChild);
  }
}

export { init, loadPage };