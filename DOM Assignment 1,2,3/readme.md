# Assignment 1 solutions

## Task 1

![](./DOM%20Assignment%201,2,3/Output%20images/assignment%201.png)

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

![](./DOM%20Assignment%201,2,3/Output%20images/Assignment%202.png)

```javascript
let searchArea = document.querySelector('.search-field input');

searchArea.placeholder = 'Search My Projects';

```

## Task 3

![](./DOM%20Assignment%201,2,3/Output%20images/Assignment%203.png)

```javascript
let spanValue = document.querySelectorAll('.hero-left-section p span');

spanValue[1].innerText = 'an Employee';
spanValue[2].innerText = 'iNeuron Intelligence Pvt Ltd';
```

## Task 4

![](./DOM%20Assignment%201,2,3/Output%20images/Assignment%204.png)

```javascript
let img = document.querySelector('.hero-right-section img');

img.src = './photo.jpg';
```

## Task 5

![](./DOM%20Assignment%201,2,3/Output%20images/Assignment%205.png)

```javascript
let btn = document.querySelector('.hero-right-section-btns');

let newBtn = document.createElement('button');
newBtn.innerText = 'Support Me';

btn.appendChild(newBtn);
```

# Assignment 2 solutions

## Task 1

![](./DOM%20Assignment%201,2,3/Output%20images/Assignment%206.png)

```javascript
let heading = document.querySelectorAll('.accordian h3');

for(let i = 0 ; i < heading.length ; i++) {
  heading[i].style.backgroundColor = "lightblue"; 
}
```

## Task 2

![](./DOM%20Assignment%201,2,3/Output%20images/Assignment%207.png)

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

![](./DOM%20Assignment%201,2,3/Output%20images/Assignment%208.png)

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