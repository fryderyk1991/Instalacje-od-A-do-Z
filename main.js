const menuBtn = document.querySelector('.burger-btn');
const menuBtnLines = document.querySelectorAll('.burger-btn > div')
const mobileNav = document.querySelector('.mobile-nav');
const mobileNavList = [...document.querySelectorAll('.mobile-nav-ul > li')];
const modalCookies = document.querySelector('.modal-cookies');
const btnCookies = document.getElementById('accept');

const showAndHideMobileNav = () => { 
   mobileNav.classList.toggle('open');
   mobileNavList.forEach((elem) => {
      elem.classList.toggle('open');
   });
   menuBtnLines.forEach((line) => line.classList.toggle('open'));
}

menuBtn.addEventListener('click', showAndHideMobileNav);

const cookiesModal = () => {
   if (document.cookie.includes("az-instalacje")) return;
   setTimeout(() => {
      modalCookies.classList.add('show');
         btnCookies.addEventListener('click', () => {
            modalCookies.classList.remove('show');
            if (btnCookies.id === "accept") {
               document.cookie = "agreeCookies= az-instalacje; max-age=" + 60 * 60 * 24 * 30;
               console.log('contains')
            }
         })
   }, 500);
};

window.addEventListener('load', cookiesModal);