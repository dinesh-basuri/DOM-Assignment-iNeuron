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

