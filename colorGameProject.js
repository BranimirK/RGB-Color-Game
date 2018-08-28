var colors = [
	"rgb(255, 0, 0)",
	"rgb(255, 255, 0)",
	"rgb(234, 25, 211)",
	"rgb(32, 235, 231)",
	"rgb(200, 100, 10)",
	"rgb(43, 65, 189)"
	]

var squares = document.querySelectorAll(".square")
var pickedColor = colors[3];
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");

colorDisplay.textContent = pickedColor;

for (var i=0; i<squares.length; i++){
	//dodjela boja squares
	squares[i].style.backgroundColor = colors[i];
	//dodat listener na squares
	squares[i].addEventListener("click", function(){
	//dohvatit boju squarea i usporediti ju s odabranom
	var clickedColor = this.style.backgroundColor;
	if (clickedColor === pickedColor){
		messageDisplay.textContent = "Correct";
		changeColors(clickedColor);
	}
	else{
		this.style.backgroundColor = "#232323";
		messageDisplay.textContent = "Try Again";
	}
	});
}

function changeColors(color){
	//promjeniti boje svi square da budu kao tocna
	for (var i= 0; i<squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}



