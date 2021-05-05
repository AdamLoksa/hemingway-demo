const getPageContent = function() {
   const galleryContent = `
      <div class="gallery container">
            <div class="gallery__item"><img src="./img/hembar-1f-1.jpg" alt=""></div>
            <div class="gallery__item"><img src="./img/hembar-drinks-2020-01.jpg" alt=""></div>
            <div class="gallery__item"><img src="./img/hembar-1f-2.jpg" alt=""></div>

            <div class="gallery__item"><img src="./img/hembar-drinks-2020-09.jpg" alt=""></div>
            <div class="gallery__item"><img src="./img/hembar-1f-6.jpg" alt=""></div>
            <div class="gallery__item"><img src="./img/hembar-drinks-2020-11.jpg" alt=""></div>

            <div class="gallery__item"><img src="./img/hembar-2f-1.jpg" alt=""></div>
            <div class="gallery__item"><img src="./img/hembar-drinks-2020-13.jpg" alt=""></div>
            <div class="gallery__item"><img src="./img/hembar-2f-3.jpg" alt=""></div>
      </div>
   `;

   return galleryContent;
}

const renderGallery = function() {
      const pageContent = document.getElementById('page-content');
      pageContent.insertAdjacentHTML('afterbegin', getPageContent());
}

export { renderGallery }