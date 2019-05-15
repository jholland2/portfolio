function drop(){
 document.querySelector(".authinformation").style.textShadow = "0.5px 0.5px coral ";
}

function float(){
 document.querySelector(".authinformation").style.textShadow = "1.5px 1px coral";
}
function linkclickdown(){
 document.querySelector("#linked").style.textShadow = "0.5px 0.5px coral ";
}

function linkfloat(){
 document.querySelector("#linked").style.textShadow = "0.5px 0px coral";
}

function linkedin(){
    window.open("https://www.linkedin.com/in/jemma-k-holland")
}

function press(){
    document.querySelector(".arrow").style.filter = "drop-shadow(0.5px 1px 3px coral)";
}
function out(){
 document.querySelector(".arrow").style.filter = "drop-shadow(0.5px 1px 1px coral)";
}

function menpress(){
 document.querySelector(".menu").style.textShadow = "0.5px 0.5px coral";
}
function menout(){
 document.querySelector(".menu").style.textShadow = "1.5px 1px coral";
}

function authInf() {
document.querySelector(".infoZone").style.display ="flex";
window.location = 'index.html#inf';
}

function dropdown(){
window.location = 'dynamicContent.html#vid';
}
function dropdown2(){
window.location = 'musicVid.html#vid';
}
function dropdown3(){
window.location = 'mBust.html#vid';
}
function dropdown4(){
window.location = 'photoshopPage.html#slid';
}
function dropdown5(){
window.location = 'branding.html#slid';
}

function dropdown6(){
window.location = '420project.html#slid';
}

function dropdown7(){
window.location = 'illustrator.html#vid';
}

function dropdown8(){
window.location = 'SwissP.html#vid';
}

function gallery(){
    window.location.href = 'ProjectGallery.html';
}

function homebut(){
    window.location.href = 'index.html';
}

function view(){
    window.location = 'dynamicContent.html#look';
}

function goDown(){
    window.location = 'ProjectGallery.html#proj10';
}
function backUp(){
    window.location = 'ProjectGallery.html';
}
function backUp2(){
    window.location = 'dynamicContent.html';
}
function backUpmain(){
    window.location = 'index.html';
}

var projc = document.querySelector(".project");

function select1(){
 document.querySelector("#proj1").style.filter = "drop-shadow(3px 3px 3px coral)";
}
function deselect1(){
 document.querySelector("#proj1").style.filter = "drop-shadow(0px 0px 0px coral)";
}
function select2(){
 document.querySelector("#proj2").style.filter = "drop-shadow(3px 3px 3px coral)";
}
function deselect2(){
 document.querySelector("#proj2").style.filter = "drop-shadow(0px 0px 0px coral)";
}
function select3(){
 document.querySelector("#proj3").style.filter = "drop-shadow(3px 3px 3px coral)";
}
function deselect3(){
 document.querySelector("#proj3").style.filter = "drop-shadow(0px 0px 0px coral)";
}
function select4(){
 document.querySelector("#proj4").style.filter = "drop-shadow(3px 3px 3px coral)";
}
function deselect4(){
 document.querySelector("#proj4").style.filter = "drop-shadow(0px 0px 0px coral)";
}
function select5(){
 document.querySelector("#proj5").style.filter = "drop-shadow(3px 3px 3px coral)";
}
function deselect5(){
 document.querySelector("#proj5").style.filter = "drop-shadow(0px 0px 0px coral)";
}
function select7(){
 document.querySelector("#proj7").style.filter = "drop-shadow(3px 3px 3px coral)";
}
function deselect7(){
 document.querySelector("#proj7").style.filter = "drop-shadow(0px 0px 0px coral)";
}
function select8(){
 document.querySelector("#proj8").style.filter = "drop-shadow(3px 3px 3px coral)";
}
function deselect8(){
 document.querySelector("#proj8").style.filter = "drop-shadow(0px 0px 0px coral)";
}
function select9(){
 document.querySelector("#proj9").style.filter = "drop-shadow(3px 3px 3px coral)";
}
function deselect9(){
 document.querySelector("#proj9").style.filter = "drop-shadow(0px 0px 0px coral)";
}
function select10(){
 document.querySelector("#proj10").style.filter = "drop-shadow(3px 3px 3px coral)";
}
function deselect10(){
 document.querySelector("#proj10").style.filter = "drop-shadow(0px 0px 0px coral)";
}

var il = document.querySelector("#proj1");
var ps = document.querySelector("#proj2");
var wd = document.querySelector("#proj4");
var ae = document.querySelector("#proj3");
var mock = document.querySelector("#proj5");

function page1(){
    location.href = "branding.html";
}
function page2(){
    location.href = "dynamicContent.html";
}
function page3(){
    location.href = "420project.html";
}
function page4(){
    location.href = "SwissP.html";
}
function page5(){
    location.href = "musicVid.html";
}
function page7(){
    location.href = "mBust.html";
}
function page8(){
    location.href = "person.html";
}
function page9(){
    location.href = "photoshopPage.html";
}
function page10(){
    location.href = "illustrator.html";
}

//SLIDESHOW

var slideMen = 1;
showSlide(slideMen);

// Next/previous controls
function plusSlide(n) {
  showSlide(slideMen += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlide(slideMen = n);
}

function showSlide(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  if (n > slides.length) {slideMen = 1} 
  if (n < 1) {slideMen = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
 
  slides[slideMen-1].style.display = "block"; 
}