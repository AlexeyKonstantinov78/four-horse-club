!function(){"use strict";const t=document.querySelector(".contributors__items"),e=document.querySelectorAll(".contributors__item"),r=document.querySelector(".contributors__arrows");let s=0;const o=(t,e,r)=>(s=s-r-e,s<-t&&(s=0),s),c=(t,e,r)=>{const s=o(t,e,r);setTimeout((()=>{i(s),c(t,e,r)}),4e3)},i=e=>{t.style.transform=`translateX(${e}px)`},l=document.querySelector(".stages__items"),a=document.querySelectorAll(".stages__item"),n=document.querySelector(".stages__arrows");let u=0,_=0;const d="left",m="right",g=t=>!!t.attributes.disabled,b=t=>{n.querySelectorAll(".stages__arrows-circle-item").forEach(((e,r)=>{r!==t?e.classList.remove("stages__arrows-circle-item_active"):e.classList.add("stages__arrows-circle-item_active")}))},y=t=>{const e=a[0].clientWidth,r=getComputedStyle(l).columnGap.slice(0,-2).trim();t===d&&(u+=e+ +r),t===m&&(u-=e+ +r)},w=()=>{const t=n.querySelector(".stages__arrows-left"),e=n.querySelector(".stages__arrows-right");_>0?t.removeAttribute("disabled"):t.setAttribute("disabled",!0),_<4?e.removeAttribute("disabled"):e.setAttribute("disabled",!0)},S=t=>{t===d&&(_-=1),t===m&&(_+=1),b(_),w()},h=()=>{l.style.transform=`translateX(${u}px)`},q=()=>{n.addEventListener("click",(t=>{t.preventDefault();const e=t.target;var r;e.closest(".stages__arrows-left")&&(r=e.closest(".stages__arrows-left"),g(r)||(y(d),h(),S(d))),e.closest(".stages__arrows-right")&&(t=>{g(t)||(y(m),h(),S(m))})(e.closest(".stages__arrows-right"))}))};(()=>{((t,e)=>{const s=r.querySelector(".contributors__contributor"),o=r.querySelector(".contributors__count-contributor");s.textContent=e,o.textContent=t})(6,Math.floor(t.clientWidth/e[0].clientWidth));const s=e[0].clientWidth,o=getComputedStyle(t).gap.slice(0,-2).trim();c(6*s+5*o,o,s)})(),window.screen.width<=768&&(b(_),q(),w())}();