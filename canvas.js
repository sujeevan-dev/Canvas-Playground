//1 - Get object
//2 - Set parameters
//3 - Make shapes, lines , text, etc.

function makeCanvas () {
	//First canvas - Text

	//1 - Get object
	var canvas1 = document.getElementById('canvas1'); 
	var ctx1 = canvas1.getContext('2d');

	//2 - Set parameteres
	ctx1.font = '35px Arial';
	ctx1.fillStyle = 'DeepSkyBlue';
	ctx1.strokeStyle = 'DarkSlateGrey'; 

	//3 - Make shapes
	ctx1.fillText("I love Coding",80,150);
	ctx1.strokeText("I love Coding",80,150);

	//Second Canvas - Multiple Rectangles

	//Top Left Rectangle
	var canvas2 = document.getElementById("canvas2");
	var ctx2 = canvas2.getContext('2d');

	ctx2.fillStyle = "#ff0000";
	ctx2.strokeStyle = "#000000";
	ctx2.lineWidth = 10;

	ctx2.fillRect(45,5,135,135);
	ctx2.strokeRect(45,5,135,135);

	//Top Right Rectangle
	ctx2.fillStyle = "#666666";
	ctx2.fillRect(200,0,135,135);

	//Botton Left Rectangle
	ctx2.fillStyle = "#666666";
	ctx2.fillRect(45,150,135,135);

	//Bottom Right Rectangle
	ctx2.fillStyle = "#ff0000";
	ctx2.strokeStyle = "#000";
	ctx2.lineWidth = 10;

	ctx2.fillRect(200,150,135,135);
	ctx2.strokeRect(200,150,135,135);

	//Third Canvas - Lines
	var canvas3 = document.getElementById("canvas3");
	var ctx3 = canvas3.getContext('2d');

	ctx3.strokeStyle = "#666666";
	ctx3.fillStyle = "cyan";
	ctx3.lineWidth = 5;

	//Draw the line
	ctx3.beginPath();
	ctx3.moveTo(100,100);
	ctx3.lineTo(150,200);
	ctx3.lineTo(200,200);
	ctx3.lineTo(200,290);
	ctx3.lineTo(290,290);
	ctx3.lineTo(290,100);
	ctx3.lineTo(100,100);
	ctx3.stroke();
	ctx3.fill();
	ctx3.closePath();

	//Fourth Canvas - Circles
	var canvas4 = document.getElementById("canvas4");
	var ctx4 = canvas4.getContext('2d');

	//Circle 1
	ctx4.fillStyle = "green";

	ctx4.beginPath();
	ctx4.arc(200,220,75,0, Math.PI*2);
	ctx4.fill();
	ctx4.closePath();

	//Circle 2
	ctx4.fillStyle = "blue";

	ctx4.beginPath();
	ctx4.arc(200,100,45,0, Math.PI*2);
	ctx4.fill();
	ctx4.closePath();

	//Circle 3
	ctx4.fillStyle = "yellow";

	ctx4.beginPath();
	ctx4.arc(200,30,25,0, Math.PI*2);
	ctx4.fill();
	ctx4.closePath();

	//Fifth Canvas - Animation
	var canvas5 = document.getElementById('canvas5');
	var ctx5 = canvas5.getContext('2d');

	var posX = 0;
	var posY = 0;

	setInterval(function () {
		posX++;
		posY++;

		ctx5.fillStyle = "black";
		ctx5.fillRect(0,0,canvas5.width,canvas5.height);

		ctx5.fillStyle = "white";
		ctx5.beginPath();
		ctx5.arc(posX,120,55,0,Math.PI*2);
		ctx5.fill();

		ctx5.fillStyle = "orange";
		ctx5.beginPath();
		ctx5.arc(150,posY,78,0,Math.PI*2);
		ctx5.fill();

		ctx5.fillStyle = "pink";
		ctx5.beginPath();
		ctx5.arc(350,posY,38,0,Math.PI*2);
		ctx5.fill();
	}, 40);



	
}