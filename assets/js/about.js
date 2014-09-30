document.addEventListener('touchmove',function(e){
  e.preventDefault();
  console.log("sss");
});

var canvas = document.getElementsByTagName('canvas')[0];
var ctx = canvas.getContext('2d');
var pr = window.devicePixelRatio || 1;
var width = window.innerWidth;
var height = window.innerHeight;
var f = 90;
var q = Math; var m = Math;
var r = 0;
var u = m.PI*2;
var v = m.cos;
var z = m.random;
ctx.scale(pr,pr);
canvas.width = pr * width * 0.9;
canvas.height = pr * height * 0.9;
ctx.globalAlpha = 0.4;

function i(){
	ctx.clearRect(0,0,width,height);
	q = [{x:0, y:h*0.7+f},{x:0,y: h*0.7-f}];
}

while(q[1].x<w+f){
	d(q[0],q[1]);
}

function d(i,j){
	ctx.beginPath();
	ctx.moveTo(i.x,i.y);
	x.lineTo(j.x,j.y);
	var k = j.x + (z()*2-0.25)*f;
	var n = y(j.y);
	x.lineTo(k,n);
	x.closePath();
}

