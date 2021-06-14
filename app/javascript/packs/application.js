// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
//----------------------------------------------
// You can also use it via CSS, which I find convenient and familiar to the glyph icon support of old. First, add bootstrap-icons:

// yarn add bootstrap-icons
// Then, simply import it in your application.js file:

import 'bootstrap-icons/font/bootstrap-icons.css'
// ----------------------------------------------------
// Note(lewagon): ABOVE IS RAILS DEFAULT CONFIGURATION
// WRITE YOUR OWN JS STARTING FROM HERE 👇
// ----------------------------------------------------

// External imports
import "bootstrap";

// Internal imports, e.g:
// import { initSelect2 } from '../components/init_select2';

document.addEventListener('turbolinks:load', () => {
  // Call your functions here, e.g:
  // initSelect2();
});


// auf dieser Seite Javascript Functionen einfügen

// die untenstehenden Funktionen werden gebraucht um greeting von he auf wo zu ändern und ein Versuch, die Hintergundfarbe on click zu wechseln.


// document.getElementById("he").addEventListener("click", function() {
//   var he = document.getElementById("he");
//   var left = document.getElementById("left");

//   if (he.innerHTML === "HE") {
//     he.innerHTML = "WO";
//   } else {
//     he.innerHTML = "HE"
//   };

//   // why the fuck doesn´t this one work !? 
//   if (left.style.backgroundColor === "#f4faff") {
//     left.style.backgroundColor = "#08090a";
//   } else {
//     left.backgroundColor = "#f4faff";
//   };

//   // left.style.backgroundColor = "#08090a";

    
// });
var state = "initial"
var left = document.getElementById("left");
var right = document.getElementById("right");
var projects = document.getElementById("projects");
var bavarianSection = document.getElementById("bavarian-section");
var l = document.getElementById("l");
var lo = document.getElementById("lo");
var llo = document.getElementById("llo");

var bavarian = document.getElementById("bavarian-section")
var projects = document.getElementById("projects")
var he = document.getElementById("he");
var video = document.getElementById("video");

// for the  light bulb effect...
document.getElementById("bi").addEventListener("click", function() {
  
  
  if (state == "initial") {
    left.style.backgroundColor = "#08090a";
    left.style.color = "#f4faff"
    right.style.color = "#f4faff";
    bavarianSection.style.color = "#08090a";

    he.innerHTML = "HI"
    l.innerHTML = "R"
    lo.innerHTML = "E"

    state = "secondary"

  } else if (state == "secondary") {
    he.innerHTML = "M"
    l.innerHTML = "E"
    lo.innerHTML = "!"
  
    state = "tertiary"  

  } else {
    left.style.backgroundColor = "#f4faff"
    left.style.color = "#08090a"
    right.style.color = "#f4faff"
    bavarianSection.style.color = "#f4faff"

    he.innerHTML = "HE"
    l.innerHTML = "L"
    lo.innerHTML = "LO"

    state = "initial"
  }
  
  
});



// for scrolling effects "hello" and bavarian video size
window.onscroll = function() {
  if (window.scrollY > 40 ) {
    
    he.classList.add("textAlignRight")
    left.style.backgroundColor = "#08090a"
    left.style.color = "#f4faff"
    right.style.backgroundColor = "#f4faff"
    right.style.color = "#08090a"
    lo.classList.add("textAlignLeft")
    l.style.color = "#f4faff"

    
    
    // he.innerHTML = "HIRE"

  } else {
    he.classList.remove("textAlignRight")
    left.style.backgroundColor = "#f4faff"
    left.style.color = "#08090a"
    right.style.backgroundColor = "#08090a"
    right.style.color = "#f4faff"
    lo.classList.remove("textAlignLeft")
    l.classList.add("textShadowBlack")

    // he.innerHTML = "HE"
  }




  if (window.scrollY > 550 && window.scrollY < 800 ) {
    video.style.height = "120%"
    video.style.width = "96%"
  } else {
    video.style.height = "100%"
    video.style.width = "80%"
  }
};



