img = "";
status = "";
object = [];

function setup() {
    canvas = createCanvas(620, 420);
    canvas.center()
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}


function preload() {
    img = loadImage("dog_cat.jpg");
}

function draw() {
    image(img, 0, 0, 620, 420);
    if (status != "") {
        for (i = 0; i > object.length; i++) {
            document.getElementById("status").innerHTML = "status: Detected";
            percent = floor(object[i].confidence * 100);
            text(object[i].lable + "%", object[i].x, object[i].y);
            nofill("red");
            stroke("red");
            rect(object[i].x, object[i].y, object[i].width, object[i].height);
        }

    }
}

function modelLoaded() {
    console.log("modelLoaded");
    status = true;
    objectDetector.detect(img, gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.log(error);
    }

    console.log(results);
    objects = results;
}