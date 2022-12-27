prediction_1="";
prediction_2="";

Webcam.set({
width:350,
height:300,
image_format : 'png',
png_quality:90
});

camera = document.getAnimations("camera");

Webcam.attach( '#camera' )


function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="capture_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/ydOLGJV1O/model.json',modelLoaded);

function modelLoaded()
{
    console.log('Model Loaded')
}

function check()
{
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function speak()
{
    var synth = window.speechSynthesis;
    speak_data_1 = "The first prediction is" + prediction_1;
    speak_data_2 = "And the second prediction is" + prediction_2;
    utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}

function gotResult(error, results)
{
    if (error) {
        console.error(error);
    }else{
console.log(results);
document.getElementById("results-emotion_name").innerHTML  = results[0].label;
document.getElementById("results-emotion_name2").innerHTML  = results[1].label;
prediction_1 = results[0].label;
prediction_2 = results[1].label;
speak();
if(results[0].label == "happy")
{
    document.getElementById(update_emoji).innerHTML = "&#128514";
}
if(results[0].label == "sad")
{
    document.getElementById(update_emoji).innerHTML = "&#128561";
}
if(results[0].label == "angry")
{
    document.getElementById(update_emoji).innerHTML = "&#128544";
}
if(results[0].label == "scared")
{
    document.getElementById(update_emoji).innerHTML = "&#129300";
}


if(results[1].label == "happy")
{
    document.getElementById(update_emoji).innerHTML = "&#128514";
}
if(results[1].label == "sad")
{
    document.getElementById(update_emoji).innerHTML = "&#128561";
}
if(results[1].label == "angry")
{
    document.getElementById(update_emoji).innerHTML = "&#128544";
}
if(results[1].label == "scared")
{
    document.getElementById(update_emoji).innerHTML = "&#129300";
}
    }
   
}
