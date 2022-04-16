///based on this great tutorial 
// https://www.youtube.com/watch?v=Yvz_axxWG4Y&ab_channel=Frankslaboratory


const canvas = document.getElementById('top-canvas');
const ctx  = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const particlesArray = []; 
let hue = 0;

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
    for(let i = 0; i <10; i++){
        particlesArray.push(new Particle());
    }
   
   
});

canvas.addEventListener('mousemove', function(event) {
    mouse.x = event.x;
    mouse.y = event.y;
    for(let i = 0; i <10; i++){
        particlesArray.push(new Particle());
    }
    handleParticles();
    
    
})

// function drawCircle() {
//     // canvas.height = window.innerHeight;
//     // canvas.width = window.innerWidth;
//     ctx.fillStyle = 'blue';
//     // ctx.strokeStyle = 'blue'
//     // ctx.lineWidth = 5;
//     ctx.beginPath();
//     ctx.arc(mouse.x,mouse.y, 50, 0, Math.PI * 2);
//     ctx.fill();
// }


// drawCircle();
// canvas.width = window.innerWidth;

// ctx.stroke();

class Particle {
    constructor(){
        this.x = mouse.x;
        this.y = mouse.y;
        //initial load will not have the mouse x y coordinates.
        // this.x = Math.random() * canvas.width;
        // this.y = Math.random() * canvas.height;
        this.size = Math.random() * 15 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.color = 'hsl(' + hue + ', 100%, 50%)'

    }

    update(){

        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 0.2) this.size -= 0.1;

    }

    draw() {
        ctx.fillStyle = this.color; // 0 red 120 green 240 blue, saturation 
        ctx.beginPath();
        ctx.arc(this.x,this.y, this.size, 0, Math.PI * 2);
        ctx.fill();

    }

}


/// needed only if we need initial particle creation

// function init() {
//     for (let i = 0; i < 100; i++){
//         particlesArray.push(new Particle());
//     }
// }

// init();
// console.log(particlesArray);

function handleParticles(){
    for (let i = 0; i < particlesArray.length; i ++){
        particlesArray[i].update();
        particlesArray[i].draw();
        for (let j = i; j<particlesArray.length; j++){
            const dx = particlesArray[i].x - particlesArray[j].x;
            const dy = particlesArray[i].y - particlesArray[j].y;
            const distance = Math.sqrt(dx* dx + dy * dy);
            // console.log(distance)
            if (distance < 100){
                ctx.beginPath();
                ctx.strokeStyle = particlesArray[i].color;
                ctx.lineWidth = 0.2;
                ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
                ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
                ctx.stroke();

            }
         }
        
        
        if(particlesArray[i].size <= 0.3){
            particlesArray.splice(i, 1);
            i--; 
            // console.log( particlesArray.length)// adjust index by minus one, otherwise next element will be skipped 
        }
        
    }
}

// handleParticles();

// canvas.addEventListener('click', function(event){
   
//     mouse.x = event.x;
//     mouse.y = event.y;
//     init();
//     handleParticles();
//     ctx.clearRect(0,0,canvas.width, canvas.height);
//     requestAnimationFrame(animate)
    
   
    // drawCircle();
   
// });

function animate() {
    //at the start clear old paint from canvas, to see the current frame
    // request animation frame - calls function we pass it once , this create a loop
    ctx.clearRect(0,0,canvas.width, canvas.height); //clear old paint from canvas for every animation frame
    // ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    // ctx.fillRect(0,0, canvas.width, canvas.height);
    handleParticles();
    hue+=2;
    // drawCircle();
    requestAnimationFrame(animate)
    

}

animate();
// drawCircle();