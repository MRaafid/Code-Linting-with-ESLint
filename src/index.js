const contentDiv = document.querySelector('.content');
const greetMeBtn = document.querySelector('#greetMe');
const planetsList = document.querySelector('#planets');
const showPlanets = document.querySelector('#showPlanets');

greetMeBtn.addEventListener('click', () => {
  contentDiv.innerHTML = `<h3>Hello there!. The date today is ${new Date().toLocaleString()}</h3>`;
});

const planets = [
  'Mercury',
  'Venus',
  'Earth',
  'Mars',
  'Jupiter',
  'Saturn',
  'Uranus',
  'Neptune',
];

planets.forEach(planet => {
  planetsList.innerHTML += `<li>${planet}</li>`;
});

const obj = { name: 'Robin', age: 23 };
const switchVal = val => !val;
