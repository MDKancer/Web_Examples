var zahl1 = document.getElementById('zahl1');
var symbol = document.getElementById('symbol');
var zahl2 = document.getElementById('zahl2');
var btn = document.getElementById('rechnen');
var ergebnis = document.getElementById("ergebnis");


btn.addEventListener("click", function (event) {
  var i = parseInt(zahl1.value,10);
  var j = parseInt(zahl2.value,10);
  var x;

  if(symbol.value == "+" ){  x = i+j;}
  else if (symbol.value == "-" ) {x = i-j; }
  else if (symbol.value == "*" ) {x = i*j; }
  else if (symbol.value == "/" ) {x = i/j; }

  ergebnis.innerHTML = i +""+symbol.value+""+j + "="+x;
});
