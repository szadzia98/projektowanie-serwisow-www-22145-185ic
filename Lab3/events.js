//Zdarzenie 1
let Event1 = document.getElementById("Event1");
Event1.addEventListener('click',EventListenerFirst);
function EventListenerFirst(){
alert("Kliknięte");
}
//Zdarzenie 2
let Event2 = document.getElementById("Event2");
Event2.addEventListener('change',EventListenerSecond);
function EventListenerSecond(){
    document.getElementById("Ev2").innerHTML = Event2.value;
}
//Zdarzenie 3
let Event3 = document.getElementById("Event3");
Event3.addEventListener('mouseenter',EventListenerThird);
function EventListenerThird(){
    Event3.innerHTML = "Zmieniłem się!!!"
}
//Zdarzenie 4
let Event4 = document.getElementById("Event4");
Event4.addEventListener('mousemove',EventListenerFourth)
function EventListenerFourth(){
    document.getElementById("Ev4").innerHTML = Math.random();
}
function removeEvent4() {
    Event4.removeEventListener('mousemove',EventListenerFourth);
}
//Zdarzenie 5
window.addEventListener('keypress',EventKey);
function EventKey(){
    alert("Naciśnięto przycisk");
}
function removeEvent5(){
    window.removeEventListener('keypress',EventKey);
}
//Zdarzenie 6
document.addEventListener('wheel',WheelEv);
function WheelEv(){
    document.getElementById("Event6").innerHTML = "Przewijanie strony";
    document.removeEventListener('wheel',WheelEv);
}
//Zdarzenie 7
document.getElementById("Event7").addEventListener('dblclick',DobleClick);
function DobleClick(){
    document.getElementById("Event7").innerHTML = "No i patrz co zrobiłeś";
}
//Zdarzenie 8
let Event8 = document.getElementById("Event8");
Event8.addEventListener("copy",addEvent8);
function addEvent8(){
    Event8.innerHTML = "Widzisz, dobrze że mnie skopiowałeś."
}
//Zdarzenie 9
let Event9 = document.getElementById("Event9");
Event9.addEventListener('paste',addEvent9);
function addEvent9(){
    Event9.innerHTML = " woooow naprawdę mnie tu wkleiłeś";
}
//Zdarzenie 10
let Event10 = document.getElementById("Event10");
Event10.addEventListener('select',addEvent10)
function addEvent10(){
    alert("Zaznaczyłeś tekst!!!")
}