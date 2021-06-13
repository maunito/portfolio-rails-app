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


document.getElementById("bi").addEventListener("click", function() {
  var left = document.getElementById("left");
  var right = document.getElementById("right");
  var projects = document.getElementById("projects");
  var bavarianSection = document.getElementById("bavarian-section");
  
  if (state == "initial") {
    left.style.backgroundColor = "#08090a";
    left.style.color = "#f4faff"
    right.style.color = "#f4faff";
    projects.style.backgroundColor = "#08090a";
    bavarianSection.style.color = "#08090a";

    document.getElementById("he").innerHTML = "HI"
    document.getElementById("l").innerHTML = "R"
    document.getElementById("lo").innerHTML = "E"

    state = "secondary"

  } else if (state == "secondary") {
    document.getElementById("he").innerHTML = "M"
    document.getElementById("l").innerHTML = "E"
    document.getElementById("lo").innerHTML = "!"
  
    state = "tertiary"  

  } else {
    left.style.backgroundColor = "#f4faff"
    left.style.color = "#08090a"
    right.style.color = "#f4faff"
    projects.style.backgroundColor = "#f4faff"
    bavarianSection.style.color = "#f4faff"

    document.getElementById("he").innerHTML = "HE"
    document.getElementById("l").innerHTML = "L"
    document.getElementById("lo").innerHTML = "LO"

    state = "initial"
  }
  
  
    

    
});


