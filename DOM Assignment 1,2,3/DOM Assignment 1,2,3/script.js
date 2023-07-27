// Assingment 1
let liElement1 = document.createElement('li');
let liElement2 = document.createElement('li');

let ulElement = document.querySelector('header nav ul');

liElement1.innerHTML = '<a>projects</a>';
liElement2.innerHTML = '<a>Hire me</a>';

ulElement.appendChild(liElement1);
ulElement.appendChild(liElement2); 

// Assignment 2
let searchArea = document.querySelector('.search-field input');

searchArea.placeholder = 'Search My Projects';

// Assignment 3
let spanValue = document.querySelectorAll('.hero-left-section p span');

spanValue[1].innerText = 'an Employee';
spanValue[2].innerText = 'iNeuron Intelligence Pvt Ltd';

// Assignment 4
let img = document.querySelector('.hero-right-section img');

img.src = './photo.jpg';

// Assignment 5
let btn = document.querySelector('.hero-right-section-btns');

let newBtn = document.createElement('button');
newBtn.innerText = 'Support Me';

btn.appendChild(newBtn);