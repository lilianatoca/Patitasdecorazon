var data = [];

var dataStr = "8.Captura<br>\
<br>\
Coronel 6 años y 3 meses.<br>\
<br>\
<br>\
2.Donacion<br>\
<br>\
Box - 2 años y 6 meses<br>\
<br>\
<br>\
3.Perritos<br>\
<br>\
Doggy, Fercho y pirulo - 2 años y 3 meses.<br>\
<br>\
<br>\
4.Perrita<br>\
<br>\
Bandi - 2 años y 2 meses<br>\
<br>\
<br>\
5.Bonita<br>\
<br>\
Es una pequeña como un cachorro, tiene el pelo suave como la seda y sus ojos son brillantes como dos luceros -- Bella 1 año<br>\
<br>\
<br>\
6.Canino<br>\
<br>\
Asabache - 5 años y 1 mes<br>\
<br>\
<br>\
7.Chacorro<br>\
<br>\
Pocholo - 2 años y 10 meses.<br>\
"
var d = dataStr.split("<br><br><br>");
for(var i = 0; i<d.length; i++){
  var c = d[i].split("<br><br>");
  data.push({
    img: c[0]+ ".jpg",
    caption: c[0].split(".")[1],
    desc: c[1]
  });
}

