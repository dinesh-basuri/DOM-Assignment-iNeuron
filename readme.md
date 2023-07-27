# Assignment 1 solutions

[click here to view](./DOM%20Assignment%201,2,3/)

## Task 1

![](./DOM%20Assignment%201,2,3/DOM%20Assignment%201,2,3/Output%20images/assignment%201.png)

```javascript
let liElement1 = document.createElement('li');
let liElement2 = document.createElement('li');

let ulElement = document.querySelector('header nav ul');

liElement1.innerHTML = '<a>projects</a>';
liElement2.innerHTML = '<a>Hire me</a>';

ulElement.appendChild(liElement1);
ulElement.appendChild(liElement2); 
```

## Task 2

![](./DOM%20Assignment%201,2,3/DOM%20Assignment%201,2,3/Output%20images/Assignment%202.png)

```javascript
let searchArea = document.querySelector('.search-field input');

searchArea.placeholder = 'Search My Projects';

```

## Task 3

![](./DOM%20Assignment%201,2,3/DOM%20Assignment%201,2,3/Output%20images/Assignment%203.png)

```javascript
let spanValue = document.querySelectorAll('.hero-left-section p span');

spanValue[1].innerText = 'an Employee';
spanValue[2].innerText = 'iNeuron Intelligence Pvt Ltd';
```

## Task 4

![](./DOM%20Assignment%201,2,3/DOM%20Assignment%201,2,3/Output%20images/Assignment%204.png)

```javascript
let img = document.querySelector('.hero-right-section img');

img.src = './photo.jpg';
```

## Task 5

![](./DOM%20Assignment%201,2,3/DOM%20Assignment%201,2,3/Output%20images/Assignment%205.png)

```javascript
let btn = document.querySelector('.hero-right-section-btns');

let newBtn = document.createElement('button');
newBtn.innerText = 'Support Me';

btn.appendChild(newBtn);
```

# Assignment 2 solutions

## Task 1

![](./DOM%20Assignment%201,2,3/DOM%20Assignment%201,2,3/Output%20images/Assignment%206.png)

```javascript
let heading = document.querySelectorAll('.accordian h3');

for(let i = 0 ; i < heading.length ; i++) {
  heading[i].style.backgroundColor = "lightblue"; 
}
```

## Task 2

![](./DOM%20Assignment%201,2,3/DOM%20Assignment%201,2,3/Output%20images/Assignment%206.png)

```javascript
let wrapper = document.querySelector('.accordian-wrapper');

let newDiv = document.createElement('div');
newDiv.classList.add('accordian');
wrapper.appendChild(newDiv);

let newHeading = document.createElement('h3');
newHeading.innerText = 'skills';
newDiv.appendChild(newHeading);

let newPara = document.createElement('p');
newPara.innerText = 'I posses a very good command over the full stack Development technologies like MERN which can be seen in my work over the Github';
newDiv.appendChild(newPara);
```

# Assignment 3 solution

![](./DOM%20Assignment%201,2,3/DOM%20Assignment%201,2,3/Output%20images/Assignment%208.png)

```javascript
// Right Section
let RightInputEl = document.querySelectorAll('.mainRight input');
let RightTextEl = document.querySelector('.mainRight textarea');

RightInputEl[0].value = 'fsja 2.0';
RightInputEl[1].value = 'fsja 2.1';
RightTextEl.value = 'Hello World';

// Left Section
let leftInputEl = document.querySelectorAll('.mainLeft input');
let leftTextEl = document.querySelector('.mainLeft textarea');

leftInputEl[0].value = RightInputEl[0].value;
leftInputEl[1].value = RightInputEl[1].value;
leftTextEl.value = RightTextEl.value;
```

# Assignment 4 solution

[click here to view](./DOM%20Assignment%204/)

![](./DOM%20Assignment%204/final%20output.png)

```javascript
let element = document.querySelectorAll('.barbarien .one-third');

for(let i = 0 ; i < element.length ; i++) {
  element[i].style.backgroundColor = "orange";
  element[i].style.color = "white";
}

let element1 = document.querySelectorAll('.archer1 .one-third');

for(let i = 0 ; i < element1.length ; i++) {
  element1[i].style.backgroundColor = "violet";
  element1[i].style.color = "white";
}

let element2 = document.querySelectorAll('.giant1 .one-third');

for(let i = 0 ; i < element1.length ; i++) {
  element2[i].style.backgroundColor = "#F4BE2C";
  element2[i].style.color = "white";
}

let element3 = document.querySelectorAll('.goblin1 .one-third');

for(let i = 0 ; i < element1.length ; i++) {
  element3[i].style.backgroundColor = "green";
  element3[i].style.color = "white";
}

let element4 = document.querySelectorAll('.wizard1 .one-third');

for(let i = 0 ; i < element1.length ; i++) {
  element4[i].style.backgroundColor = "blue";
  element4[i].style.color = "white";
}
```

# Assignment 5 solution

[click here to view](./DOM%20Assignment%205/)

![](./DOM%20Assignment%201,2,3/DOM%20Assignment%201,2,3/Output%20images/Assignment%209.png)

```javascript
// task 1
let wrapper = document.querySelector('.nav-links');

let newDiv = wrapper.nextElementSibling;

let el = document.createElement('a');
el.classList.add('btn');
el.href = "index.html";
el.innerText = 'pro subscription';

newDiv.appendChild(el);

// task 2
let wrapper2 = document.querySelector('.tags-container div');

let el2 = document.createElement('a');
el2.href = "#";
el2.innerText = 'chinese (7)';

wrapper2.appendChild(el2);
```

# Assignment 6 solutions

[click here to view](./DOM%20Assignment%206/)

# task 1

![](./DOM%20Assignment%201,2,3/DOM%20Assignment%201,2,3/Output%20images/Assignment%2010.png)

```javascript
// task 1
let wrapper = document.querySelector('header img');
wrapper.src = './assets/ineuron-logo.png';
```

# task 2

![](./DOM%20Assignment%201,2,3/DOM%20Assignment%201,2,3/Output%20images/Assignment%2011.png)

```javascript
// task 2
let wrapper1 = document.querySelector('.app_price span');
wrapper1.textContent = '$10';
```

# Assignment 7 solution

[click here to view](./DOM%20Assignment%207/)

![](./DOM%20Assignment%201,2,3/DOM%20Assignment%201,2,3/Output%20images/Assignment%2012.png)

```javascript
let wrapper = document.querySelectorAll('.main__languages a');

for(let i = 0 ; i <= wrapper.length ; i++) {
  if(wrapper[i].textContent.includes('2.0')) {
    wrapper[i].textContent = '';
  }
}
```

# Assignment 8 solutions

[click here to view](./DOM%20Assignment%208/)

## task 1

![](./DOM%20Assignment%201,2,3/DOM%20Assignment%201,2,3/Output%20images/Assignment%2013.png)

```javascript
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
```

## task 2

![](./DOM%20Assignment%201,2,3/DOM%20Assignment%201,2,3/Output%20images/Assignment%2014.png)

```javascript
let body = document.querySelector('body');
body.style.background = 'none';
```

## task 3

![](./DOM%20Assignment%201,2,3/DOM%20Assignment%201,2,3/Output%20images/Assignment%2015.png)

```javascript
let btn = document.querySelector('.navbar-toggler');
let menuItems = document.querySelector('.navbar-collapse');

btn.addEventListener('click',function() {
  menuItems.classList.toggle('collapse');
})
```
# Assignment 9 solutions

[click here to view](./DOM%20Assignment%209/)

## task 1

![](./DOM%20Assignment%201,2,3/DOM%20Assignment%201,2,3/Output%20images/Assignment%2016.png)

```javascript
let wrapper = document.querySelector('.caption h1');
wrapper.style.color = 'red';
```

## task 2

![](./DOM%20Assignment%201,2,3/DOM%20Assignment%201,2,3/Output%20images/Assignment%2017.png)

```javascript
let btn = document.querySelector('.add-to-cart');

btn.addEventListener('mouseover',function() {
  btn.style.backgroundColor = "red";
})
```