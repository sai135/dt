status1 = "";
function preload() {
}
function setup() {
    canvas = createCanvas(400, 360);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}
function draw() {
    image(video,0,0,480,360);
}
function start() {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    valueofinput = document.getElementById("input").value;
}
function modelLoaded() {
    console.log("Model Loaded!")
    status1 = true;
}