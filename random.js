var myButton = document.getElementById('buttonTest');
var changingPicture = document.getElementById("changingPicture");
var div = document.getElementById("div1");
var checkTextBoxButton = document.getElementById("checkTextBox");
var text1 = document.getElementById("text1");
var generateNum = document.getElementById("generateNumButton");
var rangeNum1 = document.getElementById("rangeNum1");
var rangeNum2 = document.getElementById("rangeNum2");
    function buttonPressed() {
        myButton.innerHTML = "You changed it!";
        if (changingPicture.src == "chao.png") {
            changingPicture.src = "ant.gif";
        } else if (changingPicture.src == "ant.gif") {
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

    generateNum.onclick = function() {
        generateNum.innerHTML = Math.random() * (rangeNum2 - rangeNum1) + rangeNum1;
    };

    /*window.onload = function {
        
    }*/

    
