var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square")
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i=0; i< squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}
});

hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares = 6;
	colors =generateRandomColors(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i=0; i< squares.length; i++){
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
	}
});


resetButton.addEventListener("click", function(){
	//generirati nove boje
	colors = generateRandomColors(numSquares);
	//odabrati novu boju iz arraya
	pickedColor = pickColor();
	//promjeniti colorDisplay da bude kao pickedColor
	colorDisplay.textContent = pickedColor;
	//promjeniti boje squares-a,
	for(var i=0; i<squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "#232323";
});

colorDisplay.textContent = pickedColor; // postavlja The blablabla-boja odma cim ucita

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
		resetButton.textContent = "Play Again?"
		changeColors(clickedColor);
		h1.style.backgroundColor = clickedColor;
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
	return colors[random];  // vraca random broj od colors, i taj ce postat picked
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
