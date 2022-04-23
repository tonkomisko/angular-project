const canvas = document.getElementById('top-canvas');
const ctx  = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight/2;

let gradient = ctx.createLinearGradient(0, 0, canvas.height, canvas.width)
gradient.addColorStop(0, 'red');
gradient.addColorStop(0.2, 'yellow');
gradient.addColorStop(0.4, 'green');
gradient.addColorStop(0.6, 'cyan');
gradient.addColorStop(0.8, 'blue');
gradient.addColorStop(1, 'magenta');


// create 2 classes to handle different aspects
// Symbol will create and draw individual objects

class Symbol {
    constructor(x,y,fontSize,canvasHeight) {
        this.charcaters = 
        'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ♔♕♖♗♘♙♚♛♜♝♞♟☀☁❆❅❄♪♫';
        this.x = x;
        this.y = y;
        this.fontSize = fontSize;
        this.text = '';
        this.canvasHeight = canvasHeight;
    }
    draw(context){
        this.text = this.charcaters.charAt(Math.floor(Math.random()*this.charcaters.length));
        context.fillText(this.text, this.x * this.fontSize, this.y*this.fontSize);
        if(this.y * this.fontSize > this.canvasHeight && Math.random()>0.98){
            this.y = 0;
        } else {
            this.y += 1;
        }

    }
}

// main wrapper for entire rain create update draw and
// manage entire effect, all symbols at once

class Effect {
    
    constructor(canvasWidth, canvasHeight){
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.fontSize = 20;
        this.columns = this.canvasWidth/this.fontSize;
        this.symbols = []
        this.#initialize();

    }
    #initialize(){
        for(let i = 0; i< this.columns; i++){
            this.symbols[i] = new Symbol(i, 0, this.fontSize, this.canvasHeight);
        }

    }

    resize(width, height){
        this.canvasHeight = height;
        this.canvasWidth = width;
        this.columns = this.canvasWidth/this.fontSize;
        this.symbols = [];
        this.#initialize();

    }
}

const effect = new Effect( canvas.width, canvas.height);

let lastTime = 0;
const fps = 30;
const nextFrame = 1000/fps;
let timer = 0;


// animation loop will run 60tps updating and drawing our effect over and over to create animation 
function animate(timeStamp){
    const deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;
    if (timer > nextFrame){
        ctx.fillStyle = 'rgba(0,0,0, 0.05)';
        ctx.textAlign = 'center';     
        ctx.fillRect(0,0, canvas.width, canvas.height);
        ctx.fillStyle =  gradient; //'#0aff0a';
        ctx.font = effect.fontSize + 'px monospace';
        effect.symbols.forEach(symbol => symbol.draw(ctx));
        timer = 0;
    } else {
        timer += deltaTime;
    }
    
    requestAnimationFrame(animate);
};

animate(0);

window.addEventListener('resize', ()=> {
    canvas.width = window.innerWidth;
    canvas.height - window.innerHeight/2;
    effect.resize(canvas.width, canvas.height)
    gradient = ctx.createLinearGradient(0, 0, canvas.height, canvas.width)
    gradient.addColorStop(0, 'red');
    gradient.addColorStop(0.2, 'yellow');
    gradient.addColorStop(0.4, 'green');
    gradient.addColorStop(0.6, 'cyan');
    gradient.addColorStop(0.8, 'blue');
    gradient.addColorStop(1, 'magenta');
})