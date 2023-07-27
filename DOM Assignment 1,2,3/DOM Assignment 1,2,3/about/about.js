
// Assignment 2
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

// Assignment 1

let heading = document.querySelectorAll('.accordian h3');

for(let i = 0 ; i < heading.length ; i++) {
  heading[i].style.backgroundColor = "lightblue"; 
}

let accordian = document.querySelectorAll(".accordian h3");
accordian.forEach((element) => {
  element.addEventListener("click", () => {
    let para = element.nextElementSibling;
    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
});