var data = [];

var dataStr = "8.Captura<br>\
<br>\
Japanese Cartoon<br>\
<br>\
<br>\
2.Donacion<br>\
<br>\
Japanese Cartoon<br>\
<br>\
<br>\
3.Perritos<br>\
<br>\
Japanese Cartoon<br>\
<br>\
<br>\
4.Perrita<br>\
<br>\
American Movie<br>\
<br>\
<br>\
5.Bonita<br>\
<br>\
American TV Series<br>\
<br>\
<br>\
6.Canino<br>\
<br>\
American Movie<br>\
<br>\
<br>\
7.Chacorro<br>\
<br>\
American Movie<br>\
8.Captura<br>\
<br>\
American Movie<br>\
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

