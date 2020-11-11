//Zadanie 1
function WypiszIloscLiter() {
    let Task1 = document.getElementById("inputT1").value;
    let ilosc = Task1.length;
    console.info("Liczba liter:" + ilosc);
}
//Zadanie 2

function Tablica(tab) {
    console.info(tab);
    var suma = 0;
     for (var i = 0; i<tab.length;i++ ){
         suma = suma + tab[i];
     }
     console.info(suma);
     //document.getElementById("suma").innerHTML = "Suma:" + suma;
     return("Suma:" + suma);
}
function Sprawdz(tab) {
document.getElementById("suma").innerHTML = Tablica(tab);
}
 //Zadanie 3
 function zmienWielkoscLiter() {
     var Task3 = [];
     let task3 = document.getElementById("inputT3").value;
     for(var i=0;i<task3.length;i++){
         if(i%2 == 0){
         Task3[i]=task3[i].toUpperCase();
         }
         else{
             Task3[i]=task3[i].toLowerCase();
         }
     }
     var text = Task3.join("");
     return (text);
 }
 function wielkoscLiter(){
     console.info(zmienWielkoscLiter());
     document.getElementById("inputT3").value = zmienWielkoscLiter();
 }
 //Zadanie 4
 function mnozenie(task4a,task4b){
     
     return((!isNaN(task4b)&&!isNaN(task4a))?task4a*task4b:false);

 }
 function check(){
    let task4a =document.getElementById("inputT4").value;
    let task4b =document.getElementById("inputTa4").value;
     document.getElementById("Task4").innerHTML = mnozenie(task4a,task4b);
 }
 //Zadanie 5
 function wypiszTekst(){
    let text5a = document.getElementById("input5a").value;
    let text5b = document.getElementById("input5b").value;
document.getElementById("Task5").innerHTML = wybierz(text5a,text5b);
 }
 function wybierz(text5a,text5b) {
    var miesiac = text5b.toLowerCase();
    var text;
    switch (miesiac){
    case "styczeń"||"luty"||"grudzień":
        text = text5a + " jezdzi na sankach";
    break;
    case "marzec"||"kwiecień"||"maj":
        text = text5a + " chodzi po kaluzach";
    break;
    case "czerwiec"||"lipiec"||"sierpień":
        text = text5a + " sie opala";
    break;
    case "wrzesień"||"październik"||"listopad":
        text = text5a + " zbiera liscie";
    break;
    default:
        text = text5a + " uczy się JS";
    }
return text;
 }
 //Zadanie 6
 function PodzielTekst() {
     let text = document.getElementById("input6").value;
     var tab = text.split(" ");
     document.getElementById("Task6").innerHTML = sortText(tab);

 }
 function sortText(tab) {
     tab.sort();
     var text = tab.join(" ");
     return(text);
 }
 //Zadanie 7
function PodzielTekstNaTablice() {
    let text = document.getElementById("input7").value;
    var tab = text.split(",");
    document.getElementById("Task7a").innerHTML = naDuze(tab);
    document.getElementById("Task7b").innerHTML = naMieszane(tab);
}
function naDuze(tab){

for(var i=0;i<tab.length;i++){
    var tekst = tab[i].toUpperCase();
    tab[i]=tekst;
}
return(tab);
}
function naMieszane(tab) {

    for(var i=0;i<tab.length;i++){
        var tekst = tab[i];
        var tekst2 = [];
        for(var j=0;j<tab[i].length;j++)
        if(j%2 == 0){
        tekst2[j] = tekst[j].toUpperCase();
        }
        else{
        tekst2[j] = tekst[j].toLowerCase();
        }
        tab[i] = tekst2.join("");
    }
    return(tab);
}

 //Zadanie 8
function CzyKobieta(){
    var imie = document.getElementById("input8").value;
    document.getElementById("Task8").innerHTML = sprawdz(imie);
}
function sprawdz(imie){ 
    if(imie[imie.length-1] == "a" || imie[imie.length-1] == "A")
    {
        return(true);
    }else{
        return(false);
    }
}
 //Zadanie 9
 var constUsers = [
    "Ania Nowak",
    "Piotr Kowalski",
    "Bartek Kosecki",
    "Natalia Nowak",
    "Weronika Piotrowska",
    "Agata Beatczak",
    "Tomasz Nowak",
    "Mateusz Kowalski",
    "Marcin Kotecki",
    "Betata Lecka",
    "Katarzyna Melecka"]
    var users = [];
    var ilosc = 0;
    for(var i=0; i<constUsers.length;i++){
        users= constUsers[i].split(" ");
        if(sprawdz(users[0]))
        {
            ilosc = ilosc + 1;
        }
    }
    document.getElementById("Task9").innerHTML = ilosc;