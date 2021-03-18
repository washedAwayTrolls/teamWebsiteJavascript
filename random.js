
var div = document.getElementById("div1");
var checkTextBoxButton = document.getElementById("checkTextBox");
var text1 = document.getElementById("text1");
var generateNum = document.getElementById("generateNumButton");

var awfulLuckAudio = new Audio("awfulluck.wav");




var submitValue = document.getElementById("genNumSubmit");
var min = document.getElementById("min");
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
        var rangeNum2 = document.getElementById("numRange2");
        var yourRandomNumber = document.getElementById("yourRandomNumber");
        var randomNum = 0;

        //var randomNumpart1 = Math.floor(Math.random() * 10 + 1);
        console.log(randomNum);
        console.log("Min: " + rangeNum1.value);
        console.log("Max: " + rangeNum2.value);
       // randomNum = getRandomNumber(rangeNum1, rangeNum2);

       randomNum = Math.floor((Math.random() * rangeNum2.value) + rangeNum1.value);
       console.log(randomNum)
       while (randomNum > rangeNum2.value) {
           
        randomNum = Math.floor((Math.random() * rangeNum2.value) + rangeNum1.value);
        console.log(randomNum);
    }

        //randomNum = Math.floor(Math.random() * ((rangeNum2.value - rangeNum1.value) + 2) + rangeNum1.value);

        yourRandomNumber.innerHTML = "Your random number is: " + randomNum;

       // if (randomNum > 30)

       
        
        console.log(randomNum);
        console.log(rangeNum1.value + " " + rangeNum2.value);
    }

    function getRandomNumber(min, max) {
        
        let randNumber = Math.floor((Math.random() * max) + min);
        while (randNumber > max) {
            randNumber = Math.floor((Math.random() * max) + min);
        }
        return randNumber;
    }

    /*window.onload = function {
        
    }*/

    
