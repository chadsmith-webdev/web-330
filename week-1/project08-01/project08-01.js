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

/*---------------Interface Code -----------------*/

/* Interface Objects */
let minBox = document.getElementById('minutesBox');
let secBox = document.getElementById('secondsBox');
let runPauseTimer = document.getElementById('runPauseButton');
