var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square")
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");

colorDisplay.textContent = pickedColor;

for (var i=0; i<squares.length; i++){
	//dodjela boja squares
	squares[i].style.backgroundColor = colors[i];
	//dodat listener na squares
	squares[i].addEventListener("click", function(){
	//dohvatit boju squarea i usporediti ju s odabranom
	var clickedColor = this.style.backgroundColor;
	//console.log(clickedColor, pickedColor);
	if (clickedColor === pickedColor){
		messageDisplay.textContent = "Correct";
		changeColors(clickedColor);
		h1.style.backgroundColor = pickedColor;
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

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//naparviti array
	var arr = [];
	//dodati random colors u array
	for (i=0; i<num; i++){
		//get color i pushati ih u array
		arr.push(randomColor());
	}
	//return array
	return arr;
}

function randomColor(){
	//odabrati crvenu od 0-255
	var r = Math.floor(Math.random() * 256);
	//odabrati zelenu od 0-255
	var g = Math.floor(Math.random() * 256);
	//odabrati plavu od 0-255
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}
