function setup()
{
    canvas=createCanvas(600,500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video, modelloaded);
    poseNet.on('pose', gotPoses);
}
song="";
leftwristx=0;
leftwristy=0;
rightwristx=0;
rightwristy=0;

function preload()
{
    song=loadSound("k.mp3");
}
function draw()
{
    image(video,0,0,600,500);
}
function playSound()
{
    song.play();    
    song.setVolume(2);
    song.rate(1);
}
function modelloaded()
{
    console.log("posenet is initialized");
}
function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);

        leftwristx=results[0].pose.leftWrist.x;
        leftwristy=results[0].pose.leftWrist.y;
        rightwristx=results[0].pose.rightWrist.x;
        rightwristy=results[0].pose.rightWrist.y;

        console.log("leftwrist x="+leftwristx+", leftwrist y="+leftwristy);
        console.log("rightwrist x="+rightwristx+", rightwrist y="+rightwristy);
    }
}