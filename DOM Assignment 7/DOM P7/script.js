
let wrapper = document.querySelectorAll('.main__languages a');

for(let i = 0 ; i <= wrapper.length ; i++) {
  if(wrapper[i].textContent.includes('2.0')) {
    wrapper[i].textContent = '';
  }
}
