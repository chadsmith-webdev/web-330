'use strict';

/*    JavaScript 7th Edition
      Chapter 9
      Project 09-01

      Project to read field values from session storage
      Author: Chad Smith
      Date: 2026-11-08

      Filename: project09-02b.js
*/

/* Page Objects */

let riderName = document.getElementById('riderName');
riderName.textContent = sessionStorage.getItem('riderName');
let ageGroup = document.getElementById('ageGroup');
ageGroup.textContent = sessionStorage.getItem('ageGroup');
let bikeOption = document.getElementById('bikeOption');
bikeOption.textContent = sessionStorage.getItem('bikeOption');
let routeOption = document.getElementById('routeOption');
routeOption.textContent = sessionStorage.getItem('routeOption');
let accOption = document.getElementById('accOption');
accOption.textContent = sessionStorage.getItem('accOption');
let region = document.getElementById('region');
region.textContent = sessionStorage.getItem('region');
let miles = document.getElementById('miles');
miles.textContent = sessionStorage.getItem('miles');
let comments = document.getElementById('comments');
comments.textContent = sessionStorage.getItem('comments');
