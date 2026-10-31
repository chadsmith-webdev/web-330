/*
  Pragmatic JavaScript
  Chapter 1
  Programming Assignment

  Author: Chad Smith
  Date: 2026-10-31
  Filename: script.js
*/

'use strict';

function createCharacter(name, gender, characterClass) {
  // TODO: Implement this function
  return {
    getName: function () {
      return name;
    },

    getGender: function () {
      return gender;
    },

    getClass: function () {
      return characterClass;
    },
  };
}

document.getElementById('generateHero').addEventListener('click', function (e) {
  e.preventDefault();

  // TODO: Get form values
  let name = document.getElementById('heroName').value;
  let gender = document.getElementById('heroGender').value;
  let characterClass = document.getElementById('heroClass').value;
  // TODO: Create character
  const hero = createCharacter(name, gender, characterClass);
  // TODO: Display character information
  document.getElementById('characterOutput').textContent =
    `Name: ${hero.getName()}, Gender: ${hero.getGender()}, Class: ${hero.getClass()}`;
});
