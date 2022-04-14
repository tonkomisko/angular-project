const canvas = document.getElementById('top-canvas');
const ctx  = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// console.log(ctx)

window.addEventListener('resize', function() {
    // canvas gets resized to match browser window on resize
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

})


const mouse = {
    x: undefined,
    y: undefined,
}

canvas.addEventListener('click', function(event){
   
    mouse.x = event.x;
    mouse.y = event.y;
   
    // drawCircle();
   
});

canvas.addEventListener('mousemove', function(event) {
    mouse.x = event.x;
    mouse.y = event.y;
    // drawCircle();


    
})

function drawCircle() {
    // canvas.height = window.innerHeight;
    // canvas.width = window.innerWidth;
    ctx.fillStyle = 'blue';
    // ctx.strokeStyle = 'blue'
    // ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.arc(mouse.x,mouse.y, 50, 0, Math.PI * 2);
    ctx.fill();
}


// drawCircle();
// canvas.width = window.innerWidth;

// ctx.stroke();

function animate() {
    //at the start clear old paint from canvas, to see the current frame
    // request animation frame - calls function we pass it once , this create a loop
    // ctx.clearRect(0,0,canvas.width, canvas.height);
    drawCircle();
    requestAnimationFrame(animate)

}

animate();