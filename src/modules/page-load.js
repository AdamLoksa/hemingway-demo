const loadPage = (() => {
   const webpageContent = document.getElementById('page-content');

   webpageContent.innerHTML = `
   <section class="hero">
      <h1 class="title">Vítejte v Phill's Twenty7!</h1>
      <p class="text">Jsme místem pro Vaši rychlou ranní kávu, snídani, pracovní oběd nebo romantickou večeri.</p>
   </section>   
   `;
})();

export { loadPage };