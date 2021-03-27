
var div = document.getElementById("div1");
var checkTextBoxButton = document.getElementById("checkTextBox");
var text1 = document.getElementById("text1");


var awfulLuckAudio = new Audio("awfulluck.wav");
var amazingLuckAudio = new Audio("amazingluck.wav");





//rangeNum1 = parseInt(rangeNum1);
//rangeNum2 = parseInt(rangeNum2);

    function buttonPressed() {
        var myButton = document.getElementById('buttonTest');
var changingPicture = document.getElementById("changingPicture");

        myButton.innerHTML = "You changed it!";
        console.log(changingPicture.src);

        if (changingPicture.src == "file:///F:/GitHub/teamWebsiteJavascript/chao.png") {
            changingPicture.src = "ant.gif";
            console.log("Hi1");
        } else if (changingPicture.src === "file:///F:/GitHub/teamWebsiteJavascript/ant.gif") {
            console.log("Hi2");
            changingPicture.src = "chao.png";
        }
            
        
        
        
    }

    function giveDivBorder() {
    div.style.color = "blue";
    }

    checkTextBoxButton.onclick = function() {
        userText = text1.value;
        console.log(userText);
        checkTextBoxButton.innerHTML = "You just typed " + userText;
    };

   

    function generateRandomNumber() {
        var rangeNum1 = document.getElementById("numRange1");
        var rn1 = parseInt(rangeNum1.value);
        var rangeNum2 = document.getElementById("numRange2");
        var rn2 = parseInt(rangeNum2.value);
        var yourRandomNumber = document.getElementById("yourRandomNumber");
        var randomNum = 0;
        console.log("rn1: " + rn1);
        console.log("rn2: " + rn2);
        var median = ((rn1 + rn2) / 2);
        console.log("median: " + median);
        var median2 = rn1 + rn2;
        console.log("median2test: " + median2);
        

        
        
        console.log("Min: " + rangeNum1.value);
        console.log("Max: " + rangeNum2.value);
       // randomNum = getRandomNumber(rangeNum1, rangeNum2);

       randomNum = Math.floor((Math.random() * rangeNum2.value) + rangeNum1.value);
       
       while (randomNum > rangeNum2.value || randomNum == 0 || randomNum == 1 || randomNum < rangeNum1.value) {
           
        randomNum = Math.floor((Math.random() * rangeNum2.value) + rangeNum1.value);
        console.log("random Number: " + randomNum);

        console.log("Min: " + rangeNum1.value);
        console.log("Max: " + rangeNum2.value);
    }

        //randomNum = Math.floor(Math.random() * ((rangeNum2.value - rangeNum1.value) + 2) + rangeNum1.value);

        yourRandomNumber.innerHTML = "Your random number is: " + randomNum;

        

        if (randomNum < median) {
            console.log("Mean median: " + median);
            awfulLuckAudio.play();
        } else {
            amazingLuckAudio.play();
        }

       console.log("rangeNum2: " + rangeNum2.value + "rangeNum1: " + rangeNum1.value);

        
        console.log(randomNum);
        console.log(rangeNum1.value + " " + rangeNum2.value);
    }

    

    

    
