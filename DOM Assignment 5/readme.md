# Assignment 5 solution

![](./05_DOM%20Project/Output%20images/Assignment%209.png)

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