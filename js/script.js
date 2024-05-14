//! html section_1 functional [<

let counter = 10;

const zerotxt = document.querySelector('.counter');

let plus = document.querySelector('.plus');

let minus = document.querySelector('.minus');

let plus5 = document.querySelector('.plus5');

let minus5 = document.querySelector('.minus5');

plus.addEventListener('click', () => {
  counter++;
  zerotxt.textContent = counter;
});

minus.addEventListener('click', () => {
  counter--;
  zerotxt.textContent = counter;
});

plus5.addEventListener('click', () => {
  counter += 5;
  zerotxt.textContent = counter;
});

minus5.addEventListener('click', () => {
  counter -= 5;
  zerotxt.textContent = counter;
});

//! html section_1 functional >]

//todo

//! html section_2 functional [<

addEventListener('keydown', () => {
  let passwordInput1 = document.getElementById('input1');

  let passwordInput2 = document.getElementById('input2');

  let passwordInput3 = document.getElementById('input3');

  //   let password1 = passwordInput1.value;

  let password2 = passwordInput2.value;

  if (password2.length < 8) {
    passwordInput2.classList.toggle('redibputborder');
  }
});

//! html section_1 functional >]

//todo
