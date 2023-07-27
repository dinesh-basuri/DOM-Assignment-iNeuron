// task 1
let wrapper = document.querySelector('aside');
wrapper.style.overflow = 'scroll';
let hrLine = document.createElement('hr');
wrapper.appendChild(hrLine);
wrapper.classList.add('hr-line')

let newHead = document.createElement('h2');
newHead.innerText = 'Is VC Funding Drying Up?';
newHead.classList.add('new-head');

let newPara = document.createElement('p');
newPara.innerText = 'Private funding by VC firms is down 50% YOY. We take a look at what that means.';
newPara.classList.add('new-p');

wrapper.appendChild(newHead);
wrapper.appendChild(newPara);

// task 2
let body = document.querySelector('body');
body.style.background = 'none';

// task 3
let btn = document.querySelector('.navbar-toggler');
let menuItems = document.querySelector('.navbar-collapse');

btn.addEventListener('click',function() {
  menuItems.classList.toggle('collapse');
})