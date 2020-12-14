'use strict';

const darkMode = document.getElementById("checkbox"); 

darkMode.addEventListener("change", ()=> {
  // change the theme of the website 
  document.body.classList.toggle('dark'); 
});