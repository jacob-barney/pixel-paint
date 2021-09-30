//define grid components
let grid = [];

let pixelX = 25;
let pixelY = 25;

//define palette components
let palette = [];

let swatch1X = 675;
let swatch1Y = 25;

let swatch2X = 675;
let swatch2Y = swatch1Y+41;

let swatch3X = 675;
let swatch3Y = swatch2Y+41;

let swatch4X = 675;
let swatch4Y = swatch3Y+41;

let swatch5X = 675;
let swatch5Y = swatch4Y+41;

let swatch6X = 675;
let swatch6Y = swatch5Y+41;

let swatch7X = 675;
let swatch7Y = swatch6Y+41;

let swatch8X = 675;
let swatch8Y = swatch7Y+41;

let swatch9X = 675;
let swatch9Y = swatch8Y+41;

let swatchR;
let swatchG;
let swatchB;   
//
let selectedColor = [255, 255, 255];

function setup () {
    createCanvas(1024, 768);
    noStroke();
    //define pixels and add them to grid array (not displayed yet)
    for (let i = 0; i < 672; i++) {
        
        let pixelSize = 25;
        let r = 255;
        let g = 255;
        let b = 255;
        let pixel = new Pixel (pixelX, pixelY, pixelSize, r, g, b);
        if (pixelX > 600) {
            pixelX = 25;
            pixelY += 26;
        } else {  
        pixelX += 26;
        }
        grid.push(pixel);
    }
    //define swatches and add them to palette array (not displayed yet)
    //palette 1 - red
    for (let j = 0; j < 8; j++) {
        
        let swatchSize = 40;
        let swatchPlusGap = swatchSize+1;
        let boundaryX = 923;
        let boundaryY = 65;
        let swatchXStart = 675;
        let swatchYStart = 25;
        
        swatchR = map(swatch1X, swatchXStart, boundaryX, 32, 255);
        swatchG = map(swatch1X, swatchXStart, boundaryX, 0, 32);
        swatchB = map(swatch1X, swatchXStart, boundaryX, 0, 64);

        let swatch = new Swatch (swatch1X, swatch1Y, swatchSize, swatchR, swatchG, swatchB);
        
        swatch1X += swatchPlusGap;
        palette.push(swatch);
    }
    //palette 2 - orange
    for (let j = 0; j < 8; j++) {
        
        let swatchSize = 40;
        let swatchPlusGap = swatchSize+1;
        let boundaryX = 923;
        let boundaryY = 106;
        let swatchXStart = 675;
        let swatchYStart = 25;
        
        swatchR = map(swatch2X, swatchXStart, boundaryX, 32, 255);
        swatchG = map(swatch2X, swatchXStart, boundaryX, 32, 130);
        swatchB = map(swatch2X, swatchXStart, boundaryX, 0, 0);
        
        let swatch = new Swatch (swatch2X, swatch2Y, swatchSize, swatchR, swatchG, swatchB);
        
        swatch2X += swatchPlusGap;
        palette.push(swatch);
    }
    //palette 3 - yellow
    for (let j = 0; j < 8; j++) {
        
        let swatchSize = 40;
        let swatchPlusGap = swatchSize+1;
        let boundaryX = 923;
        let boundaryY = 147;
        let swatchXStart = 675;
        let swatchYStart = 25;
        
        swatchR = map(swatch3X, swatchXStart, boundaryX, 0, 255);
        swatchG = map(swatch3X, swatchXStart, boundaryX, 32, 200);
        swatchB = map(swatch3X, swatchXStart, boundaryX, 0, 64);

        let swatch = new Swatch (swatch3X, swatch3Y, swatchSize, swatchR, swatchG, swatchB);
         
        swatch3X += swatchPlusGap;
        palette.push(swatch);
    }
    //palette 4 - green
    for (let j = 0; j < 8; j++) {
        
        let swatchSize = 40;
        let swatchPlusGap = swatchSize+1;
        let boundaryX = 923;
        let boundaryY = 188;
        let swatchXStart = 675;
        let swatchYStart = 25;
        
        swatchR = map(swatch4X, swatchXStart, boundaryX, 0, 32);
        swatchG = map(swatch4X, swatchXStart, boundaryX, 32, 255);
        swatchB = map(swatch4X, swatchXStart, boundaryX, 0, 130);
        
        let swatch = new Swatch (swatch4X, swatch4Y, swatchSize, swatchR, swatchG, swatchB);
       
        swatch4X += swatchPlusGap;
        palette.push(swatch);
    }
    //palette 5 - blue
    for (let j = 0; j < 8; j++) {
        
        let swatchSize = 40;
        let swatchPlusGap = swatchSize+1;
        let boundaryX = 923;
        let boundaryY = 229;
        let swatchXStart = 675;
        let swatchYStart = 25;
        
        swatchR = map(swatch5X, swatchXStart, boundaryX, 0, 50);
        swatchG = map(swatch5X, swatchXStart, boundaryX, 32, 64);
        swatchB = map(swatch5X, swatchXStart, boundaryX, 32, 255);
        
        let swatch = new Swatch (swatch5X, swatch5Y, swatchSize, swatchR, swatchG, swatchB);
       
        swatch5X += swatchPlusGap;
        palette.push(swatch);
    }
    //palette 6 - violet
    for (let j = 0; j < 8; j++) {
        
        let swatchSize = 40;
        let swatchPlusGap = swatchSize+1;
        let boundaryX = 923;
        let boundaryY = 270;
        let swatchXStart = 675;
        let swatchYStart = 25;
        
        swatchR = map(swatch6X, swatchXStart, boundaryX, 0, 130);
        swatchG = map(swatch6X, swatchXStart, boundaryX, 32, 64);
        swatchB = map(swatch6X, swatchXStart, boundaryX, 0, 255);
        
        let swatch = new Swatch (swatch6X, swatch6Y, swatchSize, swatchR, swatchG, swatchB);
      
        swatch6X += swatchPlusGap;
        palette.push(swatch);
    }
    //palette 7 - pink
    for (let j = 0; j < 8; j++) {
        
        let swatchSize = 40;
        let swatchPlusGap = swatchSize+1;
        let boundaryX = 923;
        let boundaryY = 352;
        let swatchXStart = 675;
        let swatchYStart = 25;
        
        swatchR = map(swatch7X, swatchXStart, boundaryX, 0, 255);
        swatchG = map(swatch7X, swatchXStart, boundaryX, 32, 64);
        swatchB = map(swatch7X, swatchXStart, boundaryX, 32, 165);
        
        let swatch = new Swatch (swatch7X, swatch7Y, swatchSize, swatchR, swatchG, swatchB);
        
        swatch7X += swatchPlusGap;
        palette.push(swatch);
    }
     //palette 8 - greyscale
     for (let j = 0; j < 8; j++) {
        
        let swatchSize = 40;
        let swatchPlusGap = swatchSize+1;
        let boundaryX = 923;
        let boundaryY = 393;
        let swatchXStart = 675;
        let swatchYStart = 25;
        
        swatchR = map(swatch8X, swatchXStart, boundaryX, 0, 255);
        swatchG = map(swatch8X, swatchXStart, boundaryX, 0, 255);
        swatchB = map(swatch8X, swatchXStart, boundaryX, 0, 255);

        let swatch = new Swatch (swatch8X, swatch8Y, swatchSize, swatchR, swatchG, swatchB);
      
       
        swatch8X += swatchPlusGap;
        palette.push(swatch);
    }
    //palette 9 - light tones
    for (let j = 0; j < 8; j++) {
        
        let swatchSize = 40;
        let swatchPlusGap = swatchSize+1;
        let boundaryX = 923;
        let boundaryY = 393;
        let swatchXStart = 675;
        let swatchYStart = 25;
        
        swatchR = map(swatch9X, swatchXStart, boundaryX, 0, 250);
        swatchG = map(swatch9X, swatchXStart, boundaryX, 0, 180);
        swatchB = map(swatch9X, swatchXStart, boundaryX, 0, 150);

        let swatch = new Swatch (swatch9X, swatch9Y, swatchSize, swatchR, swatchG, swatchB);
      
        swatch9X += swatchPlusGap;
        palette.push(swatch);
    }
    
}

function mousePressed () {
    for (let i = 0; i < grid.length; i++) { 
        grid[i].clicked(mouseX, mouseY);
    }

    for (let j = 0; j < grid.length; j++) { 
        palette[j].clicked(mouseX, mouseY);
    }
}


function draw() {
    background(0);
    //call instances
    noStroke();
    for (let i = 0; i < grid.length; i++) {
        grid[i].create();
    }
    stroke(200);
    strokeWeight(2);
    for (let j = 0; j < palette.length; j++) {
        palette[j].create();
    }

    
    fill(selectedColor[0], selectedColor[1], selectedColor[2]);
    ellipse(840, 575, 200, 200);
  
    textSize(32);
    fill(255, 255, 255);
    text('PixelPaint', 870, 755);
   
}

class Pixel {
    //define constructor
    constructor (x, y, size, r, g, b) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.r = r;
        this.g = g;
        this.b = b;
    }

    create () {
        fill(this.r, this.g, this.b);
        rect(this.x, this.y, this.size, this.size);
    }

    clicked (px, py) {
        let d = dist(px, py, this.x+this.size/2, this.y+this.size/2);
        if (d < this.size/2 + 1) {
            this.r = selectedColor[0];   
            this.g = selectedColor[1];
            this.b = selectedColor[2];
            
        }
    }

}

class Swatch {
    //define constructor
    constructor (x, y, size, r, g, b) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.r = r;
        this.g = g;
        this.b = b;
    }

    create () {
        fill(this.r, this.g, this.b);
        rect(this.x, this.y, this.size, this.size);
    }

    clicked (px, py) {
        let d = dist(px, py, this.x+this.size/2 + 1, this.y+this.size/2 + 1);
        if (d < this.size/2 + 1) {
         selectedColor[0] = this.r;
         selectedColor[1] = this.g;
         selectedColor[2] = this.b;
            
        }
    }
}
//all parameters for functions within classes
//must be prefaced with this.!!! 