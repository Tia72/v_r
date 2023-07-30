function startClassification(){
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/sPEPRU_ox/model.jason', modelReady);
}

function modelReady(){
    classifier.classify(gotResult);
}

function gotResult(error, results){
    console.log('Got result');
    
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
        rn_r = Math.floor(Math.random() * 255) + 1;
        rn_b = Math.floor(Math.random() * 255) + 1;
        rn_g = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result").innerHTML = 'Voice decetected of : ' + results[0].lable;
        document.getElementById("accuracy").innerHTML = 'Accuracy : ' + results[0].confidence * 100.toFixed(2) + "%";
        document.getElementById("result").style.color = "rgb(" + rn_r + "," + rn_g + "," + rn_b + ")";
        document.getElementById("accuracy").style.color = "rgb(" + rn_r + "," + rn_g + "," + rn_b + ")";

        img = document.getElementById("images").value;

        if (results[0].lable == "cat") {
            img.src = "cat";
        }

        else if (results[0].lable == "dog") {
            img.src = "dog";
        }

        else (results[0].lable == "horse") {
            img.src = "horse";
        }
    }
}
