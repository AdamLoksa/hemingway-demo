const getPageContent = function() {
   const contactPageContent = `
      <div class="contact container">
         <div class="contact__info contact__item">
            <h1 class="title">Opening hours</h1>
            <ul class="contact__hours">
               <li class="text contact__times">Monday <span>16:00 - 23:00</span></li>
               <li class="text contact__times">Tuesday <span>16:00 - 23:00</span></li>
               <li class="text contact__times">Wednesday <span>16:00 - 02:00</span></li>
               <li class="text contact__times">Thursday <span>16:00 - 23:00</span></li>
               <li class="text contact__times">Friday <span>16:00 - 02:00</span></li>
               <li class="text contact__times">Saturday <span>16:00 - 02:00</span></li>
               <li class="text contact__times">Sunday <span>16:00 - 23:00</span></li>
            </ul>

            <h1 class="title">Reservations</h1>
            <ul>
               <li class="text">+420 111 222 333</li>
               <li class="text">reservations@hemingway.com</li>
            </ul>

            <h1 class="title">Address</h1>
            <p class="text">Karolíny Světlé 26, Praha 1<p>
         </div>

         <div class="contact__item">
            <iframe class="contact__map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.121700061508!2d14.412092516075402!3d50.08400827942644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b94ef8691187b%3A0x1d153fcc2515e407!2sHemingway%20Bar!5e0!3m2!1scs!2scz!4v1619800256652!5m2!1scs!2scz" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
         </div>
         </div>
      </div>
   `
   
   return contactPageContent;
}

const renderContactPage = function() {
   const pageContent = document.getElementById('page-content');
   pageContent.insertAdjacentHTML('afterbegin', getPageContent());
}

export { renderContactPage };