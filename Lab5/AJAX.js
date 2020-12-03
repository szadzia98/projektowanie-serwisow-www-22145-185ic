var data = {
    "myTab": [
      {
        "znaki": [
          { "znaki": "abcd", "liczba": "1234" },
          { "znaki": "efgh", "liczba": "2345" },
          { "znaki": "ijkl", "liczba": "3456" },
          { "znaki": "mnop", "liczba": "4567" },
          { "znaki": "qrst", "liczba": "5678" },
          { "znaki": "uvwx", "liczba": "6789" },
          { "znaki": "yz", "liczba": "7890" },
          {
            "osobno": [
              {
                "liczby": [
                  { "liczba": "12" },
                  { "liczba": "23" },
                  { "liczba": "34" },
                  { "liczba": "45" },
                  { "liczba": "56" },
                  { "liczba": "67" },
                  { "liczba": "78" }
                ],
                "znaki": [
                  { "znaki": "zy" },
                  { "znaki": "xwvu" },
                  { "znaki": "tsrq" },
                  { "znaki": "ponm" },
                  { "znaki": "lkji" },
                  { "znaki": "hgfe" },
                  { "znaki": "dcba" }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
  
//Funkcja zwrotna
function PierFuncZwr(){
  return data.myTab[0].znaki[0].liczba;
}
function DrugFuncZwr() {  
  return data.myTab[0].znaki[7].osobno[0].liczby[3].liczba;
}
GlowFunc(PierFuncZwr,DrugFuncZwr);
function GlowFunc(first,sec) {  
document.getElementById("Task1C").innerText = first() - sec();
}

function TrzeFuncZwr(){
  return data.myTab[0].znaki[2].znaki;
}
function CzwFuncZwr() {  
  return data.myTab[0].znaki[7].osobno[0].znaki[4].znaki;
}

FunGlow(TrzeFuncZwr,CzwFuncZwr);
function FunGlow(pierw, drug){
var zmi = `ciąg znaków połączonych ${pierw() }${drug()}`;
document.getElementById("Task2C").innerText = zmi;
}
//Obiekt Promise
//$.getJSON( "https://jsonplaceholder.typicode.com/users/10", function( data ) {
  //let name = data.name;
  //let id = data.id;
  //console.log( "User " + name + " has id=" + id); // User Clementina DuBuque has id=10
 //});
 
 function getFirstNumT2(){
     return new Promise((resolve,reject)=>{
       try{
        var url = "https://jsonplaceholder.typicode.com/users/3";
        resolve(fetch(url).then(url => url.json()).then(rawDane => rawDane.id))
       }
       catch(exeption){
         reject(exeption)
        }
         
       
     })
 }

 function getSecNumT2(){
  return new Promise((resolve,reject)=>{
    var url = "https://jsonplaceholder.typicode.com/users/10";
    resolve(fetch(url).then(url => url.json()).then(rawDane => rawDane.id))
    
 })
 }
 function OperationT2(){
   getFirstNumT2().then(dane => {
     getSecNumT2().then(dane2 => {
      document.getElementById("Task1P").innerText = dane + dane2;
     })
   }).catch(reason => console.log("Coś poszło nie tak")).finally(console.log("Zawsze się wykonam :)"));
 }
 OperationT2();

 function getFirstTxtT2(){
  return new Promise((resolve,reject)=>{
    try{
     var url = "https://jsonplaceholder.typicode.com/users/3";
     resolve(fetch(url).then(url => url.json()).then(rawDane => rawDane.name))
    }
    catch(exeption){
      reject(exeption)
     }
      
    
  })
}

function getSecTxtT2(){
return new Promise((resolve,reject)=>{
 var url = "https://jsonplaceholder.typicode.com/users/10";
 resolve(fetch(url).then(url => url.json()).then(rawDane => rawDane.name))
 
})
}
function OperationT2T(){
getFirstTxtT2().then(dane => {
  getSecTxtT2().then(dane2 => {
   document.getElementById("Task2P").innerText = `Odebrane imiona : ${dane} ${dane2}`;
  })
}).catch(reason => console.log("Coś poszło nie tak")).finally(console.log("Zawsze się wykonam :)"));
}
OperationT2T();
//async/await + fetch (lub axios)
async function getFirstNumT3(){
     var url = "https://jsonplaceholder.typicode.com/todos/23";
     var zmienna1 = await fetch(url).then(url => url.json()).then(rawDane => rawDane.id);
     var zmienna2 = await fetch(url).then(url => url.json()).then(rawDane => rawDane.userId);
     return zmienna1*zmienna2;
}

async function getFirstTxtT3(){
  var url = "https://jsonplaceholder.typicode.com/users/3";
  var zmienna1 = await fetch(url).then(url => url.json()).then(rawDane => rawDane.name);
  var zmienna2 = await fetch(url).then(url => url.json()).then(rawDane => rawDane.username);
  return `Pobrane dane ${zmienna1} i ${zmienna2}`;
}

getFirstNumT3().then(dana => document.getElementById("Task1A").innerText = dana);
getFirstTxtT3().then(dana => document.getElementById("Task2A").innerText = dana);
//Zapytania AJAX
var dana;
var xhr = new XMLHttpRequest();
xhr.open("GET","https://jsonplaceholder.typicode.com/todos/60");
xhr.onload = onRes;
xhr.onerror = ()=>alert("Błąd ładowania");
xhr.send();
function onRes(){
dana = xhr.response;
dana = JSON.parse(dana);
getnum(dana);
}
function getnum(dana){
  var first = dana.id;
  var sec = dana.userId;
  document.getElementById("Task1AJ").innerText = first / sec;
}

var xhrr = new XMLHttpRequest();
xhrr.open("GET","https://jsonplaceholder.typicode.com/users/10");
xhrr.onload = onRes2;
xhrr.onerror = ()=>alert("Błąd ładowania");
xhrr.send();
function onRes2(){
dana = xhrr.response;
dana = JSON.parse(dana);
gettxt(dana);
}
function gettxt(dana){
  var first = dana.name;
  var sec = dana.username;
  document.getElementById("Task2AJ").innerText = `Pobrane dane ${first} i ${sec}`;
}
//metoda fetch

function getFirstNumT5(){
  var url = "https://jsonplaceholder.typicode.com/todos/46";
  var zmienna1 = fetch(url).then(url => url.json()).then(rawDane => rawDane.id);
  var zmienna2 = fetch(url).then(url => url.json()).then(rawDane => rawDane.userId);
  var zm;
  zmienna1.then(data => zm = data);
  zmienna2.then(dana => zm * dana).then(pom => {
    document.getElementById("Task1F").innerText = pom;
  });
  
}
getFirstNumT5();

function getFirstTxtT5(){
  var url = "https://jsonplaceholder.typicode.com/users/6";
  var zmienna1 = fetch(url).then(url => url.json()).then(rawDane => rawDane.name);
  var zmienna2 = fetch(url).then(url => url.json()).then(rawDane => rawDane.username);
  var zm;
  zmienna1.then(data => zm = data);
  zmienna2.then(dana => `Pobrane dane ${zm} i ${dana}`).then(pom => {
    document.getElementById("Task2F").innerText = pom;
  });
  
}
getFirstTxtT5();
//biblioteka axios
var config = {url:"https://jsonplaceholder.typicode.com/todos/80", method:'get'};
var axi = axios(config).then(res => res["data"]);
function getT6Num(){
  axi.then(dane => 
    {
      dane = dane.id;
    axi.then(dane2 => {
      dane2 = dane2.userId;
     document.getElementById("Task1AX").innerText = dane / dane2;
    })
  });
}
getT6Num();

var config2 = {url:"https://jsonplaceholder.typicode.com/users/2", method:'get'};
var axi2 = axios(config2).then(res => res["data"]);
function getT6Txt(){
  axi2.then(dane => 
    {
      dane = dane.name;
    axi2.then(dane2 => {
      dane2 = dane2.username;
     document.getElementById("Task2AX").innerText = `Pobrane dane ${dane} i ${dane2}`;
    })
  });
}
getT6Txt();