noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

console.log('ml5 version loaded', ml5.version)
function setup() {
    video = createCapture(VIDEO);
    video.size(550, 550);
    
    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
  }
  function modelLoaded() {
      console.log('Model Loaded!');
  }
  function save_image() {
      save('image.png');
  }
  function draw() {
    background(220);
    fill("#4287f5");
    stroke("#4287f5");
    square(noseX, noseY, difference);
}
  function gotPoses(results) {
      if (results.length > 0){
          console.log(results);
          noseX = results[0].pose.nose.x;
          noseY = results[0].pose.nose.y;
          console.log("noseX = ", noseX);
          console.log("noseY = ", noseY);

          leftWristX = results[0].pose.leftWrist.x;
          rightWristX = results[0].pose.rightWrist.x;
          difference = floor(leftWristX - rightWristX);
      }
  }