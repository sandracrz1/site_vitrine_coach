"use strict";

// Open Menu 
var element;
var a;

//click menu
a = document.getElementsByClassName("nav_header")[0].addEventListener("click", toggleMenuItem);

// toggle menu_content
function toggleMenuItem() {

  element = document.getElementsByClassName("menu-deroulant")[0];


  if (element.classList.contains("open")) {
    element.classList.remove("open");
  } else {
    element.classList.add("open");
  }
};
