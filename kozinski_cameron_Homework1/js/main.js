/*
     Name:Cameron Kozinski
     Date:8-7-14
     Class & Section:  WIA-####
     Comments: "HTML5 Canvas Drawing"
 */


/*******************************************
HTML5 Shape Drawing Activity
    1.  Setup the canvas and 2d context
    2.  Draw out each shape in the sections below
     
********************************************/

/*******************************************
FILE SETUP

// Setup up 7 different Canvases in index.html one for each problem.
//Link Modernizr.js
// Link the main.js file
// Setup the call to that canvas and get it's 2d context
//Use Modernizr to verify that your browser supports canvas, include a fallback message


/*******************************************
PART 1

Draw a rectangle starting at point (0 ,0)
That has a width of 50 px and a heigh of 100px
Set the color of the rectangle to a shade of blue.
Set the stroke color to black and the dimension of the stroke are the same as the rectangle.

Reminder - set the style first then draw.
********************************************/

	window.onload = function() {
		if (Modernizr.canvas) {
			var Canvas1 = document.getElementById('Canvas1');
			var ctx = Canvas1.getContext("2d");

			ctx.fillStyle = "lightblue";
	        ctx.fillRect(0, 0, 50, 100);

			ctx.strokeStyle = "black";
	   		ctx.lineWidth = 1;
			ctx.strokeRect(0, 0, 50, 100);
		

//Draw Rectangle here


/*******************************************
PART 2

Draw a circle starting at point (50 ,50)
That has a radius of 20 px 
Set the color of the circle to a shade of red and set the alpha to .5
Set the stroke color to black and use a radius of 30px for this circle.

Reminder - set the style first then draw.
Use the arc method
********************************************/


//Draw Circle here
			var Canvas2 = document.getElementById('Canvas2');
				var ctx2 = Canvas2.getContext("2d");

				ctx2.strokeStyle = "black";
				ctx2.fillStyle = "red";
				ctx2.lineWidth = 1;

				ctx2.beginPath();
	       		ctx2.arc(50, 50, 30, .5, 2.5 * Math.PI);
	       		ctx2.fill();
				ctx2.stroke();

/*******************************************
PART 3 

Practice using Path drawing.
Create a 5-point star shaped pattern using the lineTo method.
Begin this shape at (100, 100)

Height and width and color are up to you.

********************************************/


//Draw Star here
			var Canvas3 = document.getElementById('Canvas3');
				var ctx3 = Canvas3.getContext("2d");
				ctx3.strokeStyle = "black";
				ctx3.fillStyle = "red";
				ctx3.beginPath();
				ctx3.lineWidth = 2;

				ctx3.moveTo(100, 100);
				ctx3.lineTo(150, 100);
				ctx3.lineTo(170, 50);
				ctx3.lineTo(190, 100);
				ctx3.lineTo(240, 100);
				ctx3.lineTo(200, 130);
				ctx3.lineTo(220, 190);
				ctx3.lineTo(170, 150);
				ctx3.lineTo(120, 190);
				ctx3.lineTo(140, 130);
				ctx3.closePath();
				ctx3.fill();
				ctx3.stroke();


/*******************************************
PART 4

Practice drawing with Bezier curves.
Try drawing the top to an umbrella.
This should have one large arc (a half circle) on the top and scalloped edges on the bottom.

Position, height, width and color are your choice.
Do not overlap any other object.

********************************************/

//Draw Umbrella top here

			var Canvas4 = document.getElementById('Canvas4');
				var ctx4 = Canvas4.getContext("2d");

				ctx4.beginPath();
				ctx4.strokeStyle = "red";
				
				ctx4.lineWidth = 2;

	       		ctx4.arc(280, 150, 10, 0, 1 * Math.PI, true);
	       		ctx4.arc(260, 150, 10, 0, 1 * Math.PI, true);
	       		ctx4.arc(240, 150, 10, 0, 1 * Math.PI, true);
	       		ctx4.arc(220, 150, 10, 0, 1 * Math.PI, true);
	       		ctx4.arc(200, 150, 10, 0, 1 * Math.PI, true);
	       		ctx4.arc(180, 150, 10, 0, 1 * Math.PI, true);
	       		ctx4.arc(160, 150, 10, 0, 1 * Math.PI, true);
	       		ctx4.arc(140, 150, 10, 0, 1 * Math.PI, true);
	       		ctx4.arc(120, 150, 10, 0, 1 * Math.PI, true);

	       		
				ctx4.stroke();

				ctx4.strokeStyle = "red";
				ctx4.fillStyle = "red";
				ctx4.lineWidth = 2;

				ctx4.beginPath();
				
	       		ctx4.arc(200, 150, 90, 0, 1 * Math.PI, true);
	       		
	       		ctx4.stroke();
	       		//
	       		

/*******************************************
PART 5

Practice using text.
Draw text into your canvas.  It can said whatever you would like in any color.

********************************************/

//Draw text here
			var Canvas5 = document.getElementById('Canvas5');
				var ctx5 = Canvas5.getContext("2d");

				var textStr = "Go Pack Go!";

				
				ctx5.font = "35pt Georgia";
				ctx5.fillStyle = "#1F3731";
				ctx5.strokeStyle = "#FFB60F";
				ctx5.fillText(textStr, 10, 90);
				ctx5.strokeText(textStr, 10, 90);


/*******************************************
PART 6

Pixel manipulation.
Draw the image logo.png into the canvas in the following 3 ways.
1. The image exactly as it is.
2. Shrink the image by 50%
3. Slice a section of the logo out and draw that onto the canvas.

Reminder to use the drawImage method for all 3 of the ways.

********************************************/

//Draw images here

			var Canvas6 = document.getElementById('Canvas6');
				var ctx6 = Canvas6.getContext("2d");

				var img1 = document.getElementById("img1");

				ctx6.drawImage(img1, 0, 100, 400, 200);
				ctx6.drawImage(img1, 200, 30, 200, 100);
				ctx6.drawImage(img1,2490,180,300,160,15,15,50,60);


/*******************************************
PART 7

Putting it all together. 

Using a combination of all the methods. 
Create a complex scene.
You must use at least 3 different methods.

********************************************/

// Draw scene here

			var Canvas7 = document.getElementById('Canvas7');
			var ctx7 = Canvas7.getContext("2d");

			var textStr = "The Beach at night";

			ctx7.fillStyle = "#23258C";
	        ctx7.fillRect(0, 0, 1212, 90);
			ctx7.strokeStyle = "#1D1F75";
	   		ctx7.lineWidth = 1;
			ctx7.strokeRect(0, 0, 1212, 90);//top

			ctx7.fillStyle = "#854606";
	        ctx7.fillRect(0, 250, 1212, 60);
			ctx7.strokeStyle = "#854606";
	   		ctx7.lineWidth = 1;
			ctx7.strokeRect(0, 250, 1212, 60);//sand

			
////////////////////////////////



			ctx7.font = "25pt Georgia";
			ctx7.fillStyle = "#3539AA";
			ctx7.strokeStyle = "#FFB60F";
			ctx7.fillText(textStr, 930, 30);
			ctx7.strokeText(textStr, 930, 30);

			ctx7.strokeStyle = "black";
				ctx7.fillStyle = "red";
				ctx7.beginPath();
				ctx7.lineWidth = 2;

				ctx7.moveTo(100, 100);
				ctx7.lineTo(150, 100);
				ctx7.lineTo(170, 50);
				ctx7.lineTo(190, 100);
				ctx7.lineTo(240, 100);
				ctx7.lineTo(200, 130);
				ctx7.lineTo(220, 190);
				ctx7.lineTo(170, 150);
				ctx7.lineTo(120, 190);
				ctx7.lineTo(140, 130);
				
				ctx7.closePath();
				ctx7.fill();
				ctx7.stroke();

			ctx7.strokeStyle = "black";
			ctx7.fillStyle = "#7A89AA";
			ctx7.lineWidth = 1;	

			ctx7.beginPath();
	       	ctx7.arc(150, 40, 30, .5, 2.5 * Math.PI);
	       	ctx7.fill();
			ctx7.stroke();

			ctx7.beginPath();
	       	ctx7.arc(150, 40, 5, .5, 2.5 * Math.PI);
	       	ctx7.fill();
			ctx7.stroke();

			ctx7.beginPath();
	       	ctx7.arc(160, 50, 2, .5, 2.5 * Math.PI);
	       	ctx7.fill();
			ctx7.stroke();

			ctx7.beginPath();
	       	ctx7.arc(160, 20, 2, .5, 2.5 * Math.PI);
	       	ctx7.fill();
			ctx7.stroke();

			ctx7.beginPath();
	       	ctx7.arc(140, 20, 2, .5, 2.5 * Math.PI);
	       	ctx7.fill();
			ctx7.stroke();

			ctx7.beginPath();
	       	ctx7.arc(140, 50, 2.5, .5, 2.5 * Math.PI);
	       	ctx7.fill();
			ctx7.stroke();

			ctx7.beginPath();
			ctx7.arc(130, 40, 3.5, .5, 2.5 * Math.PI);
	       	ctx7.fill();
			ctx7.stroke();
///////////////moon
			ctx7.drawImage(img1, 1020, 200, 200, 100);

			ctx7.beginPath();
				ctx7.strokeStyle = "red";
				
				ctx7.lineWidth = 2;

	       		ctx7.arc(450, 200, 10, 0, 1 * Math.PI, true);
	       		ctx7.arc(430, 200, 10, 0, 1 * Math.PI, true);
	       		ctx7.arc(410, 200, 10, 0, 1 * Math.PI, true);
	       		ctx7.arc(390, 200, 10, 0, 1 * Math.PI, true);
	       		ctx7.arc(370, 200, 10, 0, 1 * Math.PI, true);
	       		ctx7.arc(350, 200, 10, 0, 1 * Math.PI, true);
	   
				ctx7.stroke();

				ctx7.strokeStyle = "red";
				ctx7.fillStyle = "red";
				ctx7.lineWidth = 2;

				ctx7.beginPath();
				
	       		ctx7.arc(400, 200, 60, 0, 1 * Math.PI, true);
	       		
	       		ctx7.stroke();
	       		ctx7.fillStyle = "red";

	       		ctx7.strokeStyle = "black";
				ctx7.lineWidth = 2;

				ctx7.beginPath();
				ctx7.moveTo(400, 200);
				ctx7.lineTo(400, 275);

				ctx7.stroke();
		

		}else{
			//Pollyfill

		};//end Modernizr (if)
	}// end onload function




