difference = 0;
rightwristX = 0;
leftwristX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(400,400);
    video.position(10,50);

    canvas = createCanvas(800,400);
    canvas.position(430,130);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotposes);
}
function draw(){
    background("#5196e3");
}
function modelLoaded(){
    console.log("PoseNet Is Initialized And Loaded");
}
function gotposes(results,error){
    if(error){
        console.error(error);
    }
    if(results.length > 0){
        console.log(results);
        leftwristX = results[0].pose.leftwrist.x;
        rightwristX = results[0].pose.rightwrist.x;
        
        difference = floor(leftwristX - rightwrist);

        console.log("rightWrist_x = "+results[0].pose.rightWrist.x + " rightWrist_y = "+results[0].pose.rightWrist.y);
        console.log("leftWrist_x = "+results[0].pose.leftWrist.x + " leftWrist_y = "+results[0].pose.leftWrist.y);
    }

       
    }


function draw() {
    background('6C91C2');
    textSize(difference);
    fill('#FFE787');
    text('Farhan',50,400);

}
