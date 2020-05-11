var bigPic = document.getElementById("bigPicture");
var fitButton = document.getElementById("btn1");
var fitButton2 = document.getElementById("btn2");
var fitButton3 = document.getElementById("btn3");
var fitButton4 = document.getElementById("btn4");


var swapImage = function() {
	console.log(bigPic.alt);
	if(bigPic.alt == "blank"){
		bigPic.src = "outfit1.jpeg";
		bigPic.alt = "first";
	}
	
	else{
		bigPic.src = "blank.jpeg";
		bigPic.alt = "blank";
		
	}}

var swapImage2 = function() {
	console.log(bigPic.alt);
	if(bigPic.alt == "blank"){
		bigPic.src = "outfit2.jpeg";
		bigPic.alt = "second";
	}
	
	else{
		bigPic.src = "blank.jpeg";
		bigPic.alt = "blank";
		
	}}

var swapImage3 = function() {
	console.log(bigPic.alt);
	if(bigPic.alt == "blank"){
		bigPic.src = "outfit3.jpeg";
		bigPic.alt = "third";
	}
	
	else{
		bigPic.src = "blank.jpeg";
		bigPic.alt = "blank";
		
	}}

var swapImage4 = function() {
	console.log(bigPic.alt);
	if(bigPic.alt == "blank"){
		bigPic.src = "outfit4.jpeg";
		bigPic.alt = "fourth";
	}
	
	else{
		bigPic.src = "blank.jpeg";
		bigPic.alt = "blank";
		
	}}



fitButton.addEventListener("click", swapImage)
fitButton2.addEventListener("click", swapImage2)
fitButton3.addEventListener("click", swapImage3)
fitButton4.addEventListener("click", swapImage4)