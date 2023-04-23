function start(){
    navigator.mediaDevices.getUserMedia({audio:true});

    classifier = ml5.classifier("https://storage.googleapis.com/tm-model/CTvvmOqvO/model.json", modelReady);

}
 
function modelReady(){
    console.log("ready")
    classifer.classify(gotResults());
}

function gotResults(error, results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        cat = 0;
        dog = 0;
        cow = 0;
        human = 0;
        r = Math.random()*255 + 1;
        g = Math.random()*255 + 1;
        b = Math.random()*255 + 1;

        if(results[0].label = "Cat"){
            cat += 1
            document.getElementById("a").innerHTML = "Cat detected " + cat + " times; Dog detected " + dog + "times; Cow detected " + cow + "times; Human detected " + human + "times"
            document.getElementById("b").innerHTML = "Audio Detected: Cat";
            document.getElementById("a").style.color = "rgb(" + r + ", " + g + ", " + b + ")"
        }
        else if(results[0].label = "Dog"){
            dog += 1
            document.getElementById("a").innerHTML = "Cat detected " + cat + " times; Dog detected " + dog + "times; Cow detected " + cow + "times; Human detected " + human + "times"
            document.getElementById("b").innerHTML = "Audio Detected: Dog";
            document.getElementById("a").style.color = "rgb(" + r + ", " + g + ", " + b + ")"
        }
        else if(results[0].label = "Cow"){
            cow += 1
            document.getElementById("a").innerHTML = "Cat detected " + cat + " times; Dog detected " + dog + "times; Cow detected " + cow + "times; Human detected " + human + "times"
            document.getElementById("b").innerHTML = "Audio Detected: Cow";
            document.getElementById("a").style.color = "rgb(" + r + ", " + g + ", " + b + ")"
        }    
        else{
            human += 1
            document.getElementById("a").innerHTML = "Cat detected " + cat + " times; Dog detected " + dog + "times; Cow detected " + cow + "times; Human detected " + human + "times"
            document.getElementById("b").innerHTML = "Audio Detected: Human";
            document.getElementById("a").style.color = "rgb(" + r + ", " + g + ", " + b + ")"
        }
    }
}