




//start game by clicking the button
var startButton = document.querySelector("#start-button")
startButton.addEventListener("click", ourFunction())

//guess word by filling in blanks that match the number of letters in word




//game timer
function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and append image
        sendMessage();
      }
    }, 1000);
  }



