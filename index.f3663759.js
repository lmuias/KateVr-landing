var e=document.querySelector(".header__menu"),t=document.querySelector(".menu"),o=document.querySelector(".body");e.addEventListener("click",function(){t.classList.toggle("menu-open"),e.classList.toggle("menu-icon-open"),o.classList.toggle("page-body")}),Array.from(document.querySelectorAll(".menu__link--hide")).forEach(function(o){o.addEventListener("click",function(){document.body.classList.remove("page-body"),t.classList.remove("menu-open"),e.classList.toggle("menu-icon-open")})});var c=document.querySelector(".menu__link--language"),n=document.querySelector(".language__icon-close"),s=document.querySelector(".language");c.addEventListener("click",function(){s.classList.add("menu-open")}),n.addEventListener("click",function(){s.classList.remove("menu-open")});var r=document.querySelector(".menu__link--help"),l=document.querySelector(".help"),a=document.querySelector(".help__icon-close");r.addEventListener("click",function(){l.classList.add("menu-open")}),a.addEventListener("click",function(){l.classList.remove("menu-open")});var i=document.querySelector(".header__link--prev"),d=document.querySelector(".header__link--next"),u=document.querySelector(".header__image--one"),m=document.querySelector(".header__image--two"),L=document.querySelector(".header__list--buttons"),y=function(e,t){e?(u.classList.add("swiper-slide"),m.classList.add("swiper-slide"),d.classList.add("white-color"),i.classList.add("gray-color"),L.classList.add("after-transform")):(u.classList.remove("swiper-slide"),m.classList.remove("swiper-slide"),d.classList.remove("white-color"),i.classList.remove("gray-color"),L.classList.remove("after-transform"))};d.addEventListener("click",function(){y(!0,!1)}),i.addEventListener("click",function(){y(!1,!0)});var v=document.querySelector(".swiper__wrapper"),f=document.querySelectorAll(".swiper__pagination-bullet"),_=document.querySelector(".about__link--prev"),p=document.querySelector(".about__link--next");document.querySelector(".about__list--buttons");var g=document.querySelector(".about__number--current"),b=0,h=v.children.length,q=0;function S(){v.style.transform="translateX(".concat(q,"%)")}function k(){f.forEach(function(e,t){e.classList.toggle("pagination__bullet--active",t===b)})}function E(){0===b?(_.classList.add("gray-color"),p.classList.add("white-color")):_.classList.remove("gray-color"),b===h-1?p.classList.remove("white-color"):p.classList.add("white-color")}function w(){g.textContent=b+1}g.textContent=b+1,f.forEach(function(e,t){e.addEventListener("click",function(){b=t,q=-100*t,S(),k(),E(),w()})}),_.addEventListener("click",function(){b>0&&(b-=1,q=-100*b,S(),k(),E(),w())}),p.addEventListener("click",function(){b<h-1&&(b+=1,q=-100*b,S(),k(),E(),w())}),k(),E(),w();var A=document.querySelectorAll(".tech__button"),x=document.querySelectorAll(".tech__item");A.forEach(function(e,t){e.addEventListener("click",function(){x[t].classList.contains("display-flex")?(x[t].classList.remove("display-flex"),e.classList.remove("gray-button")):(A.forEach(function(e){return e.classList.remove("gray-button")}),x.forEach(function(e){return e.classList.remove("display-flex")}),x[t].classList.add("display-flex"),e.classList.add("gray-button"))})});var C=document.querySelector(".video"),T=document.querySelector(".video__icon-close"),B=document.querySelector(".header__video-button"),M=document.querySelector(".about__video-button");B.addEventListener("click",function(){C.classList.add("display-block"),T.classList.add("display-block"),o.classList.add("page-body")}),M.addEventListener("click",function(){C.classList.add("display-block"),T.classList.add("display-block"),o.classList.add("page-body")}),T.addEventListener("click",function(){C.currentTime=0,document.getElementsByTagName("iframe")[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*"),T.classList.remove("display-block"),o.classList.remove("page-body"),C.classList.remove("display-block")});var N=document.querySelectorAll(".questions__label");document.querySelectorAll(".questions__input").forEach(function(e,t){var o=N[t];e.addEventListener("focusin",function(){o.classList.add("input-before"),e.dataset.placeholder=e.getAttribute("placeholder"),e.setAttribute("placeholder","")}),e.addEventListener("focusout",function(){o.classList.remove("input-before"),e.setAttribute("placeholder",e.dataset.placeholder)})});
//# sourceMappingURL=index.f3663759.js.map