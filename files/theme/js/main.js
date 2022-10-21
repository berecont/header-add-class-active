'use strict';


/**
 * active header & back top btn when window scroll down to 100px
 */

 const header = document.querySelector("header");
 const backTopBtn = document.querySelector(".back-to-top");
 
 window.addEventListener("scroll", function () {
   if (window.scrollY >= 100) {
     header.classList.add("active");
     backTopBtn.classList.add("active");
   } else {
     header.classList.remove("active");
     backTopBtn.classList.remove("active");
   }
   
 });
