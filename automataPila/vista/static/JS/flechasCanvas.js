var campo = document.getElementById("flechaCurva1");
var ctx = campo.getContext("2d");
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.beginPath();
ctx.arc(100, 75, 50, 0.5*Math.PI, 2.25 * Math.PI);
ctx.font="2mm"
ctx.stroke();
var campo = document.getElementById("flechaCurva2");
var ctx = campo.getContext("2d");
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.beginPath();
ctx.arc(100, 75, 50, 0.5*Math.PI, 2.25 * Math.PI);
ctx.font="2mm"
ctx.stroke();