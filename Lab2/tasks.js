
//Zadanie 1
function ColorOnGreen() {
    document.body.style.backgroundColor = 'green';
}
function ColorOnWhite() {
    document.body.style.backgroundColor = 'white';
}
//Zadanie 2
function ColorButton2() {
    let butt = document.getElementById("buttonTask2");
butt.style.background = 'blue';
}
//Zadanie 3
function ColorTextPink() {
    document.body.style.color = 'pink';
}
function ColorTextBlack() {
    document.body.style.color = 'black';
}
//Zadanie 4 
function ChangeSizeText4() {
    text = document.getElementById("Task4T");
 text.style.fontSize = "40px" ;
}
//Zadanie 5
var temp = 0;

function obrocStrone() { 
    if(temp == 0){
        document.body.style.animation = "rotate 10s forwards"; 
        temp = 1;
    }else{
        document.body.style.animation = "none"; 
        temp = 0;
    }

  
}
//zadanie 6
let x = 0;
function task6function() {
    "use strict";
    let y = document.getElementsByClassName("badge-light");
    x = x + 2;
    y[0].innerHTML = x;}

//Zadanie 7
function zmienWielkoscZaokragleniaKwadratu() {
    let suwak = document.getElementById("kwadratSuwak");
    let kwadrat = document.getElementById("kwadrat");
    kwadrat.style.borderRadius = suwak.value + "%";
}

//Zadanie 8
function TextNaSrodek() {
    document.body.style.textAlign = 'center';
}
//Zadanie 10
function changeBorder() {
    let borderStyle = document.getElementById("Task10");
    borderStyle.style.borderStyle = "solid";
}
//Zadanie 11
function changeFontStyle() {
    document.body.style.fontFamily = "Georigia, cursive";
}
//Zadanie 12
function pogrub() {
document.body.style.fontWeight = "bold";
}
//Zadanie 13
function Zmiana() {
    let changing = document.getElementById("Task13");
        changing.style.backgroundColor = "black";
        changing.style.color = "white";
}
//Zadanie 14
function SmallerDiv() {
    let zmniejszDiva = document.getElementById("Task14");
    zmniejszDiva.style.width = "300px";
}
//Zadanie 15
function zmienTloNaObraz() {
    let tlo = document.getElementById("Task15");
    tlo.style.backgroundImage = "url('img/img1.jpg')";
}
//Zadanie 16
function addShadow() {
    let myDivShadow = document.getElementById("Task16");
    myDivShadow.style.boxShadow = "20px 20px 10px 10px red";
}
//Zadanie 17
function getTime() 
{
    return (new Date()).toLocaleTimeString();
}
 function showClock(){
//wywołanie ma na celu eliminację opóźnienia sekundowego
document.getElementById('Task17C').innerHTML = getTime();
 
setInterval(function() {
 
    document.getElementById('Task17C').innerHTML = getTime();
     
}, 1000);}
//Zadanie 18
function zmienWielkoscCzcionkiSuwak() {
    let suwak = document.getElementById("myRange");
    let czcionkaP = document.getElementById("Task18p");
    let wielkosc, rozmiar;
    wielkosc = suwak.value;
    rozmiar = wielkosc + "px;";
    czcionkaP.style.fontSize = suwak.value + "px";
}
//Zadanie 19
function Ruszaj() {
  var elem = document.getElementById("Task19A");   
  var pos = 0;
  var id = setInterval(frame, 5);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + 'px'; 
      elem.style.left = pos + 'px'; 
    }
  }
}
//Zadanie 20
function Wstaw() {
   let tlo = document.getElementById("Task20P");
   tlo.style.width = '500px';
   tlo.style.height = '494px'
    tlo.style.backgroundImage = "url('img/img6.jpg')";

}
