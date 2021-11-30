function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6MXBZHqbtNO":
        Script1();
        break;
      case "5c7BZ6T0a3O":
        Script2();
        break;
      case "689fb3VUrNS":
        Script3();
        break;
      case "69jDPOyONl4":
        Script4();
        break;
      case "6anxFw2hjZb":
        Script5();
        break;
      case "6bilef0zV2N":
        Script6();
        break;
      case "5bUzQlpDzjM":
        Script7();
        break;
      case "6N6sVRhvmqh":
        Script8();
        break;
      case "5qrkJvoaZb9":
        Script9();
        break;
      case "6jASklQ8Ims":
        Script10();
        break;
      case "6CLlcYGlgzR":
        Script11();
        break;
      case "6AW70y3KvyQ":
        Script12();
        break;
      case "5oJO1LaaPnn":
        Script13();
        break;
      case "5q0L5o4gxp8":
        Script14();
        break;
      case "6jjDRXwRErK":
        Script15();
        break;
      case "6TXJQEukSNu":
        Script16();
        break;
      case "67k2C8Xy5XO":
        Script17();
        break;
      case "5en5pMv029Z":
        Script18();
        break;
      case "6d6NL274mnS":
        Script19();
        break;
      case "66QcGE8aCYE":
        Script20();
        break;
      case "67zE8H0lwSj":
        Script21();
        break;
      case "6LHycbm7LR5":
        Script22();
        break;
      case "6igJMxr2qeD":
        Script23();
        break;
      case "5xIcG9W0efJ":
        Script24();
        break;
      case "6hquHNqJVEX":
        Script25();
        break;
      case "6VKPyNFkXGG":
        Script26();
        break;
      case "5int23ruoX7":
        Script27();
        break;
      case "6CKH8pIrwOM":
        Script28();
        break;
      case "6kF3rPPDTki":
        Script29();
        break;
      case "6SZ2lroRel2":
        Script30();
        break;
      case "5hxi0kB7GyI":
        Script31();
        break;
      case "5ZeP4ssPs0x":
        Script32();
        break;
      case "5ulpkZDjwVZ":
        Script33();
        break;
      case "5jOi6lprhyH":
        Script34();
        break;
      case "6pNiNrEVYd0":
        Script35();
        break;
      case "6EaO1Qrrqju":
        Script36();
        break;
      case "6S7hmcDNeJ3":
        Script37();
        break;
      case "6782ED5GuqO":
        Script38();
        break;
      case "6KpEpscx1Op":
        Script39();
        break;
      case "6Os57GvxMLX":
        Script40();
        break;
      case "5loJMPOD5fE":
        Script41();
        break;
      case "6UFKbeX3oQX":
        Script42();
        break;
      case "6KaaJYtRYmY":
        Script43();
        break;
      case "5fWhHmNfFXe":
        Script44();
        break;
      case "6k6AcjoORbR":
        Script45();
        break;
      case "6otLbaFrkYC":
        Script46();
        break;
      case "5VbaZI8dD5C":
        Script47();
        break;
      case "5rElnXhxFgh":
        Script48();
        break;
      case "6jHnXLXiT4w":
        Script49();
        break;
      case "5dcAzQNJtX4":
        Script50();
        break;
      case "6Nv0luqE29P":
        Script51();
        break;
      case "6Rb7nKgvqtq":
        Script52();
        break;
      case "6RkeuLfZqTt":
        Script53();
        break;
      case "6FDIMULTlCF":
        Script54();
        break;
      case "6bgsK6ppBCx":
        Script55();
        break;
      case "5fInVAlnMTc":
        Script56();
        break;
      case "5krPpA8edET":
        Script57();
        break;
      case "64Y7wMaVg65":
        Script58();
        break;
      case "5qr1fB8nCiA":
        Script59();
        break;
      case "6Ay7d0IjkQa":
        Script60();
        break;
  }
}

function Script1()
{
  var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.src = '//code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
head.appendChild(script)
}

function Script2()
{
  var player = GetPlayer();
 
//PLACE YOUR WEB APP URL
WEB_APP_URL = "https://script.google.com/macros/s/AKfycbyruYhPGrPGWGyZfW23FHoHmOFTrvzMwuT6muVMcDbNxX-Snqx-SiUMMvryZTyRxvjP/exec";
 
// STORE ARTICULATE STORYLINE VARIABLES
// "Columnname_Google_Spreadsheet" : player.GetVar("Name_Storyline_Variable")
// ATTENTION: Use a comma if you use multiple Storyline variables
storyline =
{
 "date" : new Date().toJSON().slice(0,10), //STORE DATE
 "hoten" : player.GetVar("hoten"),
 "lop" : player.GetVar("lop"),
"diem" : player.GetVar("diem")

}
}

function Script3()
{
  //DELAY SO JQUERY LIBRARY IS LOADED
setTimeout(function (){
     
//Export to Google
$.ajax({
url: WEB_APP_URL,
type: "POST",
data : storyline,
success: function(data)
{
console.log(data);
}, 
error: function(err) {
console.log('Error:', err);
}
});
return false;
}, 1000);
}

function Script4()
{
  var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.src = '//code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
head.appendChild(script)
}

function Script5()
{
  var player = GetPlayer();
 
//PLACE YOUR WEB APP URL
WEB_APP_URL = "https://script.google.com/macros/s/AKfycbyruYhPGrPGWGyZfW23FHoHmOFTrvzMwuT6muVMcDbNxX-Snqx-SiUMMvryZTyRxvjP/exec";
 
// STORE ARTICULATE STORYLINE VARIABLES
// "Columnname_Google_Spreadsheet" : player.GetVar("Name_Storyline_Variable")
// ATTENTION: Use a comma if you use multiple Storyline variables
storyline =
{
 "date" : new Date().toJSON().slice(0,10), //STORE DATE
 "hoten" : player.GetVar("hoten"),
 "lop" : player.GetVar("lop"),
"diem" : player.GetVar("diem")

}
}

function Script6()
{
  //DELAY SO JQUERY LIBRARY IS LOADED
setTimeout(function (){
     
//Export to Google
$.ajax({
url: WEB_APP_URL,
type: "POST",
data : storyline,
success: function(data)
{
console.log(data);
}, 
error: function(err) {
console.log('Error:', err);
}
});
return false;
}, 1000);
}

function Script7()
{
  var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.src = '//code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
head.appendChild(script)
}

function Script8()
{
  var player = GetPlayer();
 
//PLACE YOUR WEB APP URL
WEB_APP_URL = "https://script.google.com/macros/s/AKfycbyruYhPGrPGWGyZfW23FHoHmOFTrvzMwuT6muVMcDbNxX-Snqx-SiUMMvryZTyRxvjP/exec";
 
// STORE ARTICULATE STORYLINE VARIABLES
// "Columnname_Google_Spreadsheet" : player.GetVar("Name_Storyline_Variable")
// ATTENTION: Use a comma if you use multiple Storyline variables
storyline =
{
 "date" : new Date().toJSON().slice(0,10), //STORE DATE
 "hoten" : player.GetVar("hoten"),
 "lop" : player.GetVar("lop"),
"diem" : player.GetVar("diem")

}
}

function Script9()
{
  //DELAY SO JQUERY LIBRARY IS LOADED
setTimeout(function (){
     
//Export to Google
$.ajax({
url: WEB_APP_URL,
type: "POST",
data : storyline,
success: function(data)
{
console.log(data);
}, 
error: function(err) {
console.log('Error:', err);
}
});
return false;
}, 1000);
}

function Script10()
{
  var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.src = '//code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
head.appendChild(script)
}

function Script11()
{
  var player = GetPlayer();
 
//PLACE YOUR WEB APP URL
WEB_APP_URL = "https://script.google.com/macros/s/AKfycbyruYhPGrPGWGyZfW23FHoHmOFTrvzMwuT6muVMcDbNxX-Snqx-SiUMMvryZTyRxvjP/exec";
 
// STORE ARTICULATE STORYLINE VARIABLES
// "Columnname_Google_Spreadsheet" : player.GetVar("Name_Storyline_Variable")
// ATTENTION: Use a comma if you use multiple Storyline variables
storyline =
{
 "date" : new Date().toJSON().slice(0,10), //STORE DATE
 "hoten" : player.GetVar("hoten"),
 "lop" : player.GetVar("lop"),
"diem" : player.GetVar("diem")

}
}

function Script12()
{
  //DELAY SO JQUERY LIBRARY IS LOADED
setTimeout(function (){
     
//Export to Google
$.ajax({
url: WEB_APP_URL,
type: "POST",
data : storyline,
success: function(data)
{
console.log(data);
}, 
error: function(err) {
console.log('Error:', err);
}
});
return false;
}, 1000);
}

function Script13()
{
  var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.src = '//code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
head.appendChild(script)
}

function Script14()
{
  var player = GetPlayer();
 
//PLACE YOUR WEB APP URL
WEB_APP_URL = "https://script.google.com/macros/s/AKfycbyruYhPGrPGWGyZfW23FHoHmOFTrvzMwuT6muVMcDbNxX-Snqx-SiUMMvryZTyRxvjP/exec";
 
// STORE ARTICULATE STORYLINE VARIABLES
// "Columnname_Google_Spreadsheet" : player.GetVar("Name_Storyline_Variable")
// ATTENTION: Use a comma if you use multiple Storyline variables
storyline =
{
 "date" : new Date().toJSON().slice(0,10), //STORE DATE
 "hoten" : player.GetVar("hoten"),
 "lop" : player.GetVar("lop"),
"diem" : player.GetVar("diem")

}
}

function Script15()
{
  //DELAY SO JQUERY LIBRARY IS LOADED
setTimeout(function (){
     
//Export to Google
$.ajax({
url: WEB_APP_URL,
type: "POST",
data : storyline,
success: function(data)
{
console.log(data);
}, 
error: function(err) {
console.log('Error:', err);
}
});
return false;
}, 1000);
}

function Script16()
{
  var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.src = '//code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
head.appendChild(script)
}

function Script17()
{
  var player = GetPlayer();
 
//PLACE YOUR WEB APP URL
WEB_APP_URL = "https://script.google.com/macros/s/AKfycbyruYhPGrPGWGyZfW23FHoHmOFTrvzMwuT6muVMcDbNxX-Snqx-SiUMMvryZTyRxvjP/exec";
 
// STORE ARTICULATE STORYLINE VARIABLES
// "Columnname_Google_Spreadsheet" : player.GetVar("Name_Storyline_Variable")
// ATTENTION: Use a comma if you use multiple Storyline variables
storyline =
{
 "date" : new Date().toJSON().slice(0,10), //STORE DATE
 "hoten" : player.GetVar("hoten"),
 "lop" : player.GetVar("lop"),
"diem" : player.GetVar("diem")

}
}

function Script18()
{
  //DELAY SO JQUERY LIBRARY IS LOADED
setTimeout(function (){
     
//Export to Google
$.ajax({
url: WEB_APP_URL,
type: "POST",
data : storyline,
success: function(data)
{
console.log(data);
}, 
error: function(err) {
console.log('Error:', err);
}
});
return false;
}, 1000);
}

function Script19()
{
  var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.src = '//code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
head.appendChild(script)
}

function Script20()
{
  var player = GetPlayer();
 
//PLACE YOUR WEB APP URL
WEB_APP_URL = "https://script.google.com/macros/s/AKfycbyruYhPGrPGWGyZfW23FHoHmOFTrvzMwuT6muVMcDbNxX-Snqx-SiUMMvryZTyRxvjP/exec";
 
// STORE ARTICULATE STORYLINE VARIABLES
// "Columnname_Google_Spreadsheet" : player.GetVar("Name_Storyline_Variable")
// ATTENTION: Use a comma if you use multiple Storyline variables
storyline =
{
 "date" : new Date().toJSON().slice(0,10), //STORE DATE
 "hoten" : player.GetVar("hoten"),
 "lop" : player.GetVar("lop"),
"diem" : player.GetVar("diem")

}
}

function Script21()
{
  //DELAY SO JQUERY LIBRARY IS LOADED
setTimeout(function (){
     
//Export to Google
$.ajax({
url: WEB_APP_URL,
type: "POST",
data : storyline,
success: function(data)
{
console.log(data);
}, 
error: function(err) {
console.log('Error:', err);
}
});
return false;
}, 1000);
}

function Script22()
{
  var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.src = '//code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
head.appendChild(script)
}

function Script23()
{
  var player = GetPlayer();
 
//PLACE YOUR WEB APP URL
WEB_APP_URL = "https://script.google.com/macros/s/AKfycbyruYhPGrPGWGyZfW23FHoHmOFTrvzMwuT6muVMcDbNxX-Snqx-SiUMMvryZTyRxvjP/exec";
 
// STORE ARTICULATE STORYLINE VARIABLES
// "Columnname_Google_Spreadsheet" : player.GetVar("Name_Storyline_Variable")
// ATTENTION: Use a comma if you use multiple Storyline variables
storyline =
{
 "date" : new Date().toJSON().slice(0,10), //STORE DATE
 "hoten" : player.GetVar("hoten"),
 "lop" : player.GetVar("lop"),
"diem" : player.GetVar("diem")

}
}

function Script24()
{
  //DELAY SO JQUERY LIBRARY IS LOADED
setTimeout(function (){
     
//Export to Google
$.ajax({
url: WEB_APP_URL,
type: "POST",
data : storyline,
success: function(data)
{
console.log(data);
}, 
error: function(err) {
console.log('Error:', err);
}
});
return false;
}, 1000);
}

function Script25()
{
  var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.src = '//code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
head.appendChild(script)
}

function Script26()
{
  var player = GetPlayer();
 
//PLACE YOUR WEB APP URL
WEB_APP_URL = "https://script.google.com/macros/s/AKfycbyruYhPGrPGWGyZfW23FHoHmOFTrvzMwuT6muVMcDbNxX-Snqx-SiUMMvryZTyRxvjP/exec";
 
// STORE ARTICULATE STORYLINE VARIABLES
// "Columnname_Google_Spreadsheet" : player.GetVar("Name_Storyline_Variable")
// ATTENTION: Use a comma if you use multiple Storyline variables
storyline =
{
 "date" : new Date().toJSON().slice(0,10), //STORE DATE
 "hoten" : player.GetVar("hoten"),
 "lop" : player.GetVar("lop"),
"diem" : player.GetVar("diem")

}
}

function Script27()
{
  //DELAY SO JQUERY LIBRARY IS LOADED
setTimeout(function (){
     
//Export to Google
$.ajax({
url: WEB_APP_URL,
type: "POST",
data : storyline,
success: function(data)
{
console.log(data);
}, 
error: function(err) {
console.log('Error:', err);
}
});
return false;
}, 1000);
}

function Script28()
{
  var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.src = '//code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
head.appendChild(script)
}

function Script29()
{
  var player = GetPlayer();
 
//PLACE YOUR WEB APP URL
WEB_APP_URL = "https://script.google.com/macros/s/AKfycbyruYhPGrPGWGyZfW23FHoHmOFTrvzMwuT6muVMcDbNxX-Snqx-SiUMMvryZTyRxvjP/exec";
 
// STORE ARTICULATE STORYLINE VARIABLES
// "Columnname_Google_Spreadsheet" : player.GetVar("Name_Storyline_Variable")
// ATTENTION: Use a comma if you use multiple Storyline variables
storyline =
{
 "date" : new Date().toJSON().slice(0,10), //STORE DATE
 "hoten" : player.GetVar("hoten"),
 "lop" : player.GetVar("lop"),
"diem" : player.GetVar("diem")

}
}

function Script30()
{
  //DELAY SO JQUERY LIBRARY IS LOADED
setTimeout(function (){
     
//Export to Google
$.ajax({
url: WEB_APP_URL,
type: "POST",
data : storyline,
success: function(data)
{
console.log(data);
}, 
error: function(err) {
console.log('Error:', err);
}
});
return false;
}, 1000);
}

function Script31()
{
  var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.src = '//code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
head.appendChild(script)
}

function Script32()
{
  var player = GetPlayer();
 
//PLACE YOUR WEB APP URL
WEB_APP_URL = "https://script.google.com/macros/s/AKfycbyruYhPGrPGWGyZfW23FHoHmOFTrvzMwuT6muVMcDbNxX-Snqx-SiUMMvryZTyRxvjP/exec";
 
// STORE ARTICULATE STORYLINE VARIABLES
// "Columnname_Google_Spreadsheet" : player.GetVar("Name_Storyline_Variable")
// ATTENTION: Use a comma if you use multiple Storyline variables
storyline =
{
 "date" : new Date().toJSON().slice(0,10), //STORE DATE
 "hoten" : player.GetVar("hoten"),
 "lop" : player.GetVar("lop"),
"diem" : player.GetVar("diem")

}
}

function Script33()
{
  //DELAY SO JQUERY LIBRARY IS LOADED
setTimeout(function (){
     
//Export to Google
$.ajax({
url: WEB_APP_URL,
type: "POST",
data : storyline,
success: function(data)
{
console.log(data);
}, 
error: function(err) {
console.log('Error:', err);
}
});
return false;
}, 1000);
}

function Script34()
{
  var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.src = '//code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
head.appendChild(script)
}

function Script35()
{
  var player = GetPlayer();
 
//PLACE YOUR WEB APP URL
WEB_APP_URL = "https://script.google.com/macros/s/AKfycbyruYhPGrPGWGyZfW23FHoHmOFTrvzMwuT6muVMcDbNxX-Snqx-SiUMMvryZTyRxvjP/exec";
 
// STORE ARTICULATE STORYLINE VARIABLES
// "Columnname_Google_Spreadsheet" : player.GetVar("Name_Storyline_Variable")
// ATTENTION: Use a comma if you use multiple Storyline variables
storyline =
{
 "date" : new Date().toJSON().slice(0,10), //STORE DATE
 "hoten" : player.GetVar("hoten"),
 "lop" : player.GetVar("lop"),
"diem" : player.GetVar("diem")

}
}

function Script36()
{
  //DELAY SO JQUERY LIBRARY IS LOADED
setTimeout(function (){
     
//Export to Google
$.ajax({
url: WEB_APP_URL,
type: "POST",
data : storyline,
success: function(data)
{
console.log(data);
}, 
error: function(err) {
console.log('Error:', err);
}
});
return false;
}, 1000);
}

function Script37()
{
  var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.src = '//code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
head.appendChild(script)
}

function Script38()
{
  var player = GetPlayer();
 
//PLACE YOUR WEB APP URL
WEB_APP_URL = "https://script.google.com/macros/s/AKfycbyruYhPGrPGWGyZfW23FHoHmOFTrvzMwuT6muVMcDbNxX-Snqx-SiUMMvryZTyRxvjP/exec";
 
// STORE ARTICULATE STORYLINE VARIABLES
// "Columnname_Google_Spreadsheet" : player.GetVar("Name_Storyline_Variable")
// ATTENTION: Use a comma if you use multiple Storyline variables
storyline =
{
 "date" : new Date().toJSON().slice(0,10), //STORE DATE
 "hoten" : player.GetVar("hoten"),
 "lop" : player.GetVar("lop"),
"diem" : player.GetVar("diem")

}
}

function Script39()
{
  //DELAY SO JQUERY LIBRARY IS LOADED
setTimeout(function (){
     
//Export to Google
$.ajax({
url: WEB_APP_URL,
type: "POST",
data : storyline,
success: function(data)
{
console.log(data);
}, 
error: function(err) {
console.log('Error:', err);
}
});
return false;
}, 1000);
}

function Script40()
{
  var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.src = '//code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
head.appendChild(script)
}

function Script41()
{
  var player = GetPlayer();
 
//PLACE YOUR WEB APP URL
WEB_APP_URL = "https://script.google.com/macros/s/AKfycbyruYhPGrPGWGyZfW23FHoHmOFTrvzMwuT6muVMcDbNxX-Snqx-SiUMMvryZTyRxvjP/exec";
 
// STORE ARTICULATE STORYLINE VARIABLES
// "Columnname_Google_Spreadsheet" : player.GetVar("Name_Storyline_Variable")
// ATTENTION: Use a comma if you use multiple Storyline variables
storyline =
{
 "date" : new Date().toJSON().slice(0,10), //STORE DATE
 "hoten" : player.GetVar("hoten"),
 "lop" : player.GetVar("lop"),
"diem" : player.GetVar("diem")

}
}

function Script42()
{
  //DELAY SO JQUERY LIBRARY IS LOADED
setTimeout(function (){
     
//Export to Google
$.ajax({
url: WEB_APP_URL,
type: "POST",
data : storyline,
success: function(data)
{
console.log(data);
}, 
error: function(err) {
console.log('Error:', err);
}
});
return false;
}, 1000);
}

function Script43()
{
  var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.src = '//code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
head.appendChild(script)
}

function Script44()
{
  var player = GetPlayer();
 
//PLACE YOUR WEB APP URL
WEB_APP_URL = "https://script.google.com/macros/s/AKfycbyruYhPGrPGWGyZfW23FHoHmOFTrvzMwuT6muVMcDbNxX-Snqx-SiUMMvryZTyRxvjP/exec";
 
// STORE ARTICULATE STORYLINE VARIABLES
// "Columnname_Google_Spreadsheet" : player.GetVar("Name_Storyline_Variable")
// ATTENTION: Use a comma if you use multiple Storyline variables
storyline =
{
 "date" : new Date().toJSON().slice(0,10), //STORE DATE
 "hoten" : player.GetVar("hoten"),
 "lop" : player.GetVar("lop"),
"diem" : player.GetVar("diem")

}
}

function Script45()
{
  //DELAY SO JQUERY LIBRARY IS LOADED
setTimeout(function (){
     
//Export to Google
$.ajax({
url: WEB_APP_URL,
type: "POST",
data : storyline,
success: function(data)
{
console.log(data);
}, 
error: function(err) {
console.log('Error:', err);
}
});
return false;
}, 1000);
}

function Script46()
{
  var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.src = '//code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
head.appendChild(script)
}

function Script47()
{
  var player = GetPlayer();
 
//PLACE YOUR WEB APP URL
WEB_APP_URL = "https://script.google.com/macros/s/AKfycbyruYhPGrPGWGyZfW23FHoHmOFTrvzMwuT6muVMcDbNxX-Snqx-SiUMMvryZTyRxvjP/exec";
 
// STORE ARTICULATE STORYLINE VARIABLES
// "Columnname_Google_Spreadsheet" : player.GetVar("Name_Storyline_Variable")
// ATTENTION: Use a comma if you use multiple Storyline variables
storyline =
{
 "date" : new Date().toJSON().slice(0,10), //STORE DATE
 "hoten" : player.GetVar("hoten"),
 "lop" : player.GetVar("lop"),
"diem" : player.GetVar("diem")

}
}

function Script48()
{
  //DELAY SO JQUERY LIBRARY IS LOADED
setTimeout(function (){
     
//Export to Google
$.ajax({
url: WEB_APP_URL,
type: "POST",
data : storyline,
success: function(data)
{
console.log(data);
}, 
error: function(err) {
console.log('Error:', err);
}
});
return false;
}, 1000);
}

function Script49()
{
  var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.src = '//code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
head.appendChild(script)
}

function Script50()
{
  var player = GetPlayer();
 
//PLACE YOUR WEB APP URL
WEB_APP_URL = "https://script.google.com/macros/s/AKfycbyruYhPGrPGWGyZfW23FHoHmOFTrvzMwuT6muVMcDbNxX-Snqx-SiUMMvryZTyRxvjP/exec";
 
// STORE ARTICULATE STORYLINE VARIABLES
// "Columnname_Google_Spreadsheet" : player.GetVar("Name_Storyline_Variable")
// ATTENTION: Use a comma if you use multiple Storyline variables
storyline =
{
 "date" : new Date().toJSON().slice(0,10), //STORE DATE
 "hoten" : player.GetVar("hoten"),
 "lop" : player.GetVar("lop"),
"diem" : player.GetVar("diem")

}
}

function Script51()
{
  //DELAY SO JQUERY LIBRARY IS LOADED
setTimeout(function (){
     
//Export to Google
$.ajax({
url: WEB_APP_URL,
type: "POST",
data : storyline,
success: function(data)
{
console.log(data);
}, 
error: function(err) {
console.log('Error:', err);
}
});
return false;
}, 1000);
}

function Script52()
{
  var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.src = '//code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
head.appendChild(script)
}

function Script53()
{
  var player = GetPlayer();
 
//PLACE YOUR WEB APP URL
WEB_APP_URL = "https://script.google.com/macros/s/AKfycbyruYhPGrPGWGyZfW23FHoHmOFTrvzMwuT6muVMcDbNxX-Snqx-SiUMMvryZTyRxvjP/exec";
 
// STORE ARTICULATE STORYLINE VARIABLES
// "Columnname_Google_Spreadsheet" : player.GetVar("Name_Storyline_Variable")
// ATTENTION: Use a comma if you use multiple Storyline variables
storyline =
{
 "date" : new Date().toJSON().slice(0,10), //STORE DATE
 "hoten" : player.GetVar("hoten"),
 "lop" : player.GetVar("lop"),
"diem" : player.GetVar("diem")

}
}

function Script54()
{
  //DELAY SO JQUERY LIBRARY IS LOADED
setTimeout(function (){
     
//Export to Google
$.ajax({
url: WEB_APP_URL,
type: "POST",
data : storyline,
success: function(data)
{
console.log(data);
}, 
error: function(err) {
console.log('Error:', err);
}
});
return false;
}, 1000);
}

function Script55()
{
  var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.src = '//code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
head.appendChild(script)
}

function Script56()
{
  var player = GetPlayer();
 
//PLACE YOUR WEB APP URL
WEB_APP_URL = "https://script.google.com/macros/s/AKfycbyruYhPGrPGWGyZfW23FHoHmOFTrvzMwuT6muVMcDbNxX-Snqx-SiUMMvryZTyRxvjP/exec";
 
// STORE ARTICULATE STORYLINE VARIABLES
// "Columnname_Google_Spreadsheet" : player.GetVar("Name_Storyline_Variable")
// ATTENTION: Use a comma if you use multiple Storyline variables
storyline =
{
 "date" : new Date().toJSON().slice(0,10), //STORE DATE
 "hoten" : player.GetVar("hoten"),
 "lop" : player.GetVar("lop"),
"diem" : player.GetVar("diem")

}
}

function Script57()
{
  //DELAY SO JQUERY LIBRARY IS LOADED
setTimeout(function (){
     
//Export to Google
$.ajax({
url: WEB_APP_URL,
type: "POST",
data : storyline,
success: function(data)
{
console.log(data);
}, 
error: function(err) {
console.log('Error:', err);
}
});
return false;
}, 1000);
}

function Script58()
{
  var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.src = '//code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
head.appendChild(script)
}

function Script59()
{
  var player = GetPlayer();
 
//PLACE YOUR WEB APP URL
WEB_APP_URL = "https://script.google.com/macros/s/AKfycbyruYhPGrPGWGyZfW23FHoHmOFTrvzMwuT6muVMcDbNxX-Snqx-SiUMMvryZTyRxvjP/exec";
 
// STORE ARTICULATE STORYLINE VARIABLES
// "Columnname_Google_Spreadsheet" : player.GetVar("Name_Storyline_Variable")
// ATTENTION: Use a comma if you use multiple Storyline variables
storyline =
{
 "date" : new Date().toJSON().slice(0,10), //STORE DATE
 "hoten" : player.GetVar("hoten"),
 "lop" : player.GetVar("lop"),
"diem" : player.GetVar("diem")

}
}

function Script60()
{
  //DELAY SO JQUERY LIBRARY IS LOADED
setTimeout(function (){
     
//Export to Google
$.ajax({
url: WEB_APP_URL,
type: "POST",
data : storyline,
success: function(data)
{
console.log(data);
}, 
error: function(err) {
console.log('Error:', err);
}
});
return false;
}, 1000);
}

