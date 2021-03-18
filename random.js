var myButton = document.getElementById('buttonTest');
var changingPicture = document.getElementById("changingPicture");
var div = document.getElementById("div1");
var checkTextBoxButton = document.getElementById("checkTextBox");
var text1 = document.getElementById("text1");
var generateNum = document.getElementById("generateNumButton");

var rangeNum1 = document.getElementById("numRange1");
var rangeNum2 = document.getElementById("numRange2");
var randomNum;

var submitValue = document.getElementById("genNumSubmit");
var min = document.getElementById("min");
//rangeNum1 = parseInt(rangeNum1);
//rangeNum2 = parseInt(rangeNum2);

    function buttonPressed() {
        myButton.innerHTML = "You changed it!";
        
            changingPicture.src = "ant.gif";
        
        
        
    }

    function giveDivBorder() {
    div.style.color = "blue";
    }

    checkTextBoxButton.onclick = function() {
        userText = text1.value;
        console.log(userText);
        checkTextBoxButton.innerHTML = "You just typed " + userText;
    };

    /*generateNum.onclick = function() {
        randomNum = Math.random() * (rangeNum2.value - rangeNum1.value) + rangeNum1.value;
        generateNum.innerHTML = toString(randomNum);
       // rangeNum1 = parseInt(rangeNum1);
        //rangeNum2 = parseInt(rangeNum2);
        console.log(rangeNum2);
        
    }; */

    function generateRandomNumber() {
        
        console.log(rangeNum1.value + " " + rangeNum2.value);
    }

    /*window.onload = function {
        
    }*/

    
