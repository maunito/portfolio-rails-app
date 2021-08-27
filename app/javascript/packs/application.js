// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

//test
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


var looking = document.getElementById("looking");
var for_ = document.getElementById("for");
var a = document.getElementById("a");
var webDeveloper = document.getElementById("webDeveloper");
var questionmark = document.getElementById("questionmark");

var state = "initial"
var left = document.getElementById("left");
var right = document.getElementById("right");
var contact = document.getElementById("contact");
var projects = document.getElementById("projects");
var bavarianSection = document.getElementById("bavarian-section");
var rightText = document.getElementById("rightText");

var bavarian = document.getElementById("bavarian-section")
var projects = document.getElementById("projects")
var leftText = document.getElementById("leftText");
var video = document.getElementById("video");

var transformingHeader = document.getElementById("transforming-header");

// for the  light bulb effect...
document.getElementById("bi").addEventListener("click", function() {
  
  
  if (state == "initial") {
    left.style.backgroundColor = "#08090a";
    left.style.color = "#f4faff"
    right.style.backgroundColor = "#08090a";
    right.style.color = "#f4faff";
    

    state = "secondary"

  } else if (state == "secondary") {
    left.style.backgroundColor = "#f4faff";
    left.style.color = "#08090a"
    right.style.backgroundColor = "#08090a";
    right.style.color = "#f4faff";
  
    state = "initial"  

  }

  //upper } must be removed if else if is used
  // } else {
  //   left.style.backgroundColor = "#08090a";
  //   left.style.color = "#f4faff"
  //   right.style.backgroundColor = "#08090a";
  //   right.style.color = "#f4faff";

  //   state = "initial"
  // }
  
  
});



// for scrolling effects "h!" and bavarian video size
window.onscroll = function() {
  if (window.scrollY < 40 || window.scrollY > 550 ){

    looking.classList.remove("colorWhite")
    for_.classList.remove("colorWhite")
    a.classList.remove("colorWhite")
    webDeveloper.classList.remove("colorWhite")
    questionmark.classList.remove("colorWhite")

    looking.classList.add("colorBlack")
    for_.classList.add("colorBlack")
    a.classList.add("colorBlack")
    webDeveloper.classList.add("colorBlack")
    questionmark.classList.add("colorBlack")


    projects.style.color = "#08090a"
    projects.style.backgroundColor = "#08090a"

    leftText.innerHTML = "H"
    rightText.innerHTML = "!"

    contact.classList.add("displayNone")

  } else if (window.scrollY > 39 && window.scrollY <= 240 ) {

    looking.classList.remove("colorBlack")
    for_.classList.remove("colorBlack")
    a.classList.remove("colorBlack")
    webDeveloper.classList.remove("colorBlack")
    questionmark.classList.remove("colorBlack")

    looking.classList.add("colorWhite")
    for_.classList.add("colorWhite")
    a.classList.add("colorWhite")
    webDeveloper.classList.add("colorWhite")
    questionmark.classList.add("colorWhite")


    projects.style.color = "#08090a"
    projects.style.backgroundColor = "#08090a"

    leftText.innerHTML =""
    rightText.innerHTML = ""

    contact.classList.add("displayNone");

    leftText.style.top= "50%";
    rightText.style.top= "60%";

  } else {

    if (window.scrollY > 240) {
      leftText.innerHTML = "H!RE";
      rightText.innerHTML ="ME !";
      looking.classList.add("colorBlack");
      for_.classList.add("colorBlack");
      a.classList.add("colorBlack");
      webDeveloper.classList.add("colorBlack");
      questionmark.classList.add("colorBlack");
      contact.classList.remove("displayNone");
      leftText.style.top= "85%";
      rightText.style.top= "85%";
    }


    if (window.scrollY > 360 ) {
      projects.style.color = "#08090a"
      projects.style.backgroundColor = "#f4faff"
    }

  }
    

// bavarian video increase size and finport logo transformation
  if (window.scrollY > 550 && window.scrollY < 950 ) {
    video.style.height = "120%"
    video.style.width = "96%"
  } else {
    video.style.height = "100%";
    video.style.width = "80%";
  };

  if (window.scrollY <= 950) {
    transformingHeader.classList.remove("transformed-header");
    transformingHeader.classList.add("untransformed-header");
  } else {
    transformingHeader.classList.remove("untransformed-header");
    transformingHeader.classList.add("transformed-header");
  }
};





