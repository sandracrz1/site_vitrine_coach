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
/*
// onScroll items appear
document.addEventListener("scroll", showFunction);

function showFunction() {
  var a = window.scrollY;
  var items = document.getElementsByClassName("items");
  var element = document.getElementsByClassName('list-items')[0];
  var menu = document.getElementsByClassName("menu-deroulant")[0];

  if (menu.classList.contains("open")) {
    menu.classList.remove("open");
  } 
    if (
      a >= element.offsetTop - element.offsetHeight && 
      a <= element.offsetTop
    ){
      for (var i=0;i<items.length;i++){
       items[i].style.opacity= 1;
       items[i].style.transition = " all 0.4s ease-in-out";
       items[i].style.left = 0;
       items[i].style.transitionDelay = (i * 0.3) + "s";
       /*items[1].style.transition = " all 2s ease-in-out";
       items[1].style.left = 0;
       items[1].style.transitionDelay = "0.3s";
       items[2].style.transition = " all 2s ease-in-out";
       items[2].style.left = 0;
       items[2].style.transitionDelay = "0.6s";
       items[3].style.transition = " all 2s ease-in-out";
       items[3].style.left = 0;
       items[3].style.transitionDelay = "0.9s";
       items[4].style.transition = " all 2s ease-in-out";
       items[4].style.left = 0;
       items[4].style.transitionDelay = "1.2s";
     }}
    else if( 
      a < element.offsetTop - element.offsetHeight || 
      a > element.offsetTop 
    ){
      for (var i=0;i<items.length;i++){
      items[i].style.transition = " all 0.2s ease-in-out";
      items[i].style.left= "-210px";
      items[i].style.transitionDelay = (i * 0.3) + "s";
      items[i].style.opacity= 0;
    }};
  };
  */