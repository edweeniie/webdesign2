var header = document.getElementById("docHeader");
var hColorChangeBtn = document.getElementById("headerColorControl");

var chamImage = document.getElementById("chameleon")
var chamButton = document.getElementById("chamImgChange")

var headerColorChange = function(){
	var redComp = Math.random() * 255;
	console.log(redComp);
	var greenComp = Math.random() * 255;
	var blueComp = Math.random() * 255;
	header.style.background = "rgb(" + redComp + "," + greenComp + ", " + blueComp + ")";
}
//rgb(255, 255, 255)
//rgb(|-a number for Red- |, |-   -|, |-   -|)


var swapChamImage = function(){
	if(chamImage.alt =="first image"){ //first image is showing
	   chamImage.src = "cham2.jpg";
	   chamImage.alt = "second image";
		chamButton.innerText = "Show the first one!";
	   }
	 else {//otherwise
	    chamImage.src = "cham.jpg";
	   chamImage.alt = "first image";
		chamButton.innerText = "Show the second one!";
	   }
	
}



//just when the js loads
headerColorChange()
//when the button is clicked
hColorChangeBtn.addEventListener("click", headerColorChange);
								 
								 
chamButton.addEventListener("click", swapChamImage)
								
