'use strict';
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-01

      Project to create a timer object
      Author: Chad Smith
      Date: 2026-10-25

      Filename: project08-01.js
*/

/*--------------- Object Code --------------------*/
// Constructor function for timer
function timer(min, sec) {
  this.minutes = min;
  this.seconds = sec;
  this.timeID = null;
}

// Method to pause timer
timer.prototype.runPause = function (timer, minBox, secBox) {
  if (timer.timeID) {
    window.clearInterval(timer.timeID);
    timer.timeID = null;
  } else {
    timer.timeID = window.setInterval(countdown, 1000);
  }

  // Function to update timer
  function countdown() {
    if (timer.seconds > 0) {
      timer.seconds--;
    } else if (timer.minutes > 0) {
      timer.minutes--;
      timer.seconds = 59;
    } else {
      window.clearInterval(timer.timeID);
      timer.timeID = null;
    }

    minBox.value = timer.minutes;
    secBox.value = timer.seconds;
  }
};

/*---------------Interface Code -----------------*/

/* Interface Objects */
let minBox = document.getElementById('minutesBox');
let secBox = document.getElementById('secondsBox');
let runPauseTimer = document.getElementById('runPauseButton');
