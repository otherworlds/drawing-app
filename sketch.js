let currentColor = '#000000';
let currentBgColor = '#ffffff';
let brushSize = 4;

function setup() {
    createCanvas(windowWidth, windowHeight - 100); // Adjust canvas size for mobile
    background(currentBgColor);
    
    let colorPicker = select('#colorPicker');
    colorPicker.input(updateColor);
    
    let bgColorPicker = select('#bgColorPicker');
    bgColorPicker.input(updateBgColor);
    
    let brushSizeSlider = select('#brushSize');
    brushSizeSlider.input(updateBrushSize);
    
    let clearButton = select('#clearBtn');
    clearButton.mousePressed(clearCanvas);

    let saveButton = select('#saveBtn');
    saveButton.mousePressed(saveDrawing);
}

function draw() {
    if (mouseIsPressed || touches.length > 0) {
        stroke(currentColor);
        strokeWeight(brushSize);
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
}

function updateColor() {
    currentColor = this.value();
}

function updateBgColor() {
    currentBgColor = this.value();
    background(currentBgColor);
}

function updateBrushSize() {
    brushSize = this.value();
}

function clearCanvas() {
    background(currentBgColor);
}

function saveDrawing() {
    saveCanvas('myDrawing', 'png');
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight - 100);
    background(currentBgColor);
}
