var colors = [
	"rgb(255,0,0)",
	"rgb(255,255,0)",
	"rgb(234,25,211)",
	"rgb(32,235,231)",
	"rgb(200,100,10)",
	"rgb(43,65,189)"
	]

var squares = document.querySelectorAll(".square")
var pickedcolor = colors[3];
var colorDisplay = document.getElementById("colorDisplay");

colorDisplay.textContent = pickedcolor;

for (var i=0; i<squares.length;i++){
	squares[i].style.backgroundColor = colors[i];
}

