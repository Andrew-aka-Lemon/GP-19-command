const e=(e,o=0,t,n=3e3)=>{const c=document.querySelector(e);let l=null;const d=e=>{l||(l=e);const s=Math.min((e-l)/n,1);c.innerText=Math.floor(s*(t-o)+o),s<1&&window.requestAnimationFrame(d)};window.requestAnimationFrame(d)};document.addEventListener("DOMContentLoaded",(()=>{e("#count1",0,16,3e3),e("#count2",0,23,3e3),e("#count3",0,721,3e3),e("#count4",0,16,3e3),e("#count5",0,84,3e3)})),(()=>{const e={toggleMenuBtn:document.querySelector(".nav-icon"),closeMenuBtn:document.querySelector(".menu-close-btn"),menu:document.querySelector(".mob-menu"),body:document.querySelector("body"),HeaderModalBtn:document.querySelector(".hide-mob"),mobMenuLink:document.querySelectorAll(".mob-menu__link")};e.toggleMenuBtn.addEventListener("click",o);for(let t=0;t<e.mobMenuLink.length;t++)e.mobMenuLink[t].addEventListener("click",o);function o(){e.toggleMenuBtn.classList.toggle("open"),e.menu.classList.toggle("mob-menu--hide"),e.body.classList.toggle("prevent-scroll"),e.HeaderModalBtn.classList.toggle("hide")}const t={openModalBtn:document.querySelector(".modal-open"),productsMobOpenModalBtn:document.querySelectorAll(".modal-product-mob"),mobOpenModalBtn:document.querySelector(".modal-open-mob"),closeModalBtn:document.querySelector(".close-modal-button-buynow"),backdrop:document.querySelector(".backdrop-buynow"),body:document.querySelector("body")};for(let e=0;e<t.productsMobOpenModalBtn.length;e++)t.productsMobOpenModalBtn[e].addEventListener("click",n);function n(){t.backdrop.classList.toggle("hidden"),t.body.classList.toggle("no-scroll")}t.openModalBtn.addEventListener("click",n),t.mobOpenModalBtn.addEventListener("click",(function(){n(),o()})),t.closeModalBtn.addEventListener("click",n)})(),(()=>{const e={openModalBtn:document.querySelector(".button-about-open"),closeModalBtn:document.querySelector(".js-close-button"),modal:document.querySelector(".about-menu"),body:document.querySelector("body")};function o(){document.body.classList.toggle("modal-open"),e.modal.classList.toggle("its-hidden"),e.body.classList.toggle("prevent-scroll")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)})(),(()=>{const e={openModalBtn:document.querySelector(".contacts__button"),closeModalBtn:document.querySelector(".contacts-modal-close-loc__button"),backdrop:document.querySelector(".backdrop-contacts-loc"),body:document.querySelector("body")};function o(){e.backdrop.classList.toggle("is-hidden"),e.body.classList.toggle("no-scroll")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)})(),(()=>{const e={openModalBtn:document.querySelector(".contacts__button__script"),closeModalBtn:document.querySelector(".contacts-modal-close-fr__button"),backdrop:document.querySelector(".backdrop-contacts-fr"),body:document.querySelector("body")};function o(){e.backdrop.classList.toggle("is-hidden"),e.body.classList.toggle("no-scroll")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)})();let o=document.querySelector(".milk-bucket__button"),t=document.querySelector(".modal-eco-milk");const n=()=>{t.classList.toggle("is-hidden"),t.classList.toggle("not-hidden")};o.addEventListener("click",(e=>{e.stopPropagation(),n()})),document.addEventListener("click",(e=>{let c=e.target,l=c==t||t.contains(c),d=c==o,s=t.classList.contains("not-hidden");l||d||!s||n()}))();
//# sourceMappingURL=index.e413fd39.js.map
