const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars=[];

for(let i=0;i<120;i++){
stars.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*2
});
}

function animate(){
ctx.clearRect(0,0,canvas.width,canvas.height);

stars.forEach(s=>{
ctx.fillStyle="white";
ctx.beginPath();
ctx.arc(s.x,s.y,s.r,0,Math.PI*2);
ctx.fill();
s.y+=0.3;
if(s.y>canvas.height) s.y=0;
});

requestAnimationFrame(animate);
}

animate();
