canvas = document.getElementById("Mycanvas")
ctx= canvas.getContext("2d")
ctx.strokeStyle = "grey";
ctx.beginPath();
ctx.lineWidth = 2;
ctx.rect(150, 140, 430, 200);
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.LineWidth = 5
ctx.arc(250 , 210 , 40 , 0 , 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.LineWidth = 5
ctx.arc(300 , 250 , 40 , 0 , 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.LineWidth = 5
ctx.arc(350 , 210 , 40 , 0 , 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.LineWidth = 5
ctx.arc(400 , 250 , 40 , 0 , 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.LineWidth = 5
ctx.arc(450 , 210 , 40 , 0 , 2 * Math.PI);
ctx.stroke();
