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

const add_btn = document.querySelector('.add_btn');

add_btn.addEventListener('click', () => {
  let input = document.querySelector('#li_input');

  let ulBox = document.querySelector('.ul_box');

  let inputvalue = input.value.trim();

  // let li_box = creteElemen;

  while (ulBox.firstChild) {
    ulBox.removeChild(ulBox.firstChild);
  }

  if (inputvalue.length >= 8 && inputvalue.length <= 16) {
    //! create elemnts [<

    let liBox = document.createElement('li');

    let liTxtContetn = document.createElement('p');
    //! create elemnts >]

    //! append Elements [<
    ulBox.appendChild(liBox);

    liBox.appendChild(liTxtContetn);
    liTxtContetn.textContent = `strong password: ${inputvalue}`;

    liBox.classList.add('li_box');
    //! append Elements >]
  } else if (inputvalue.length < 8) {
    //! create elemnts [<
    let liBox2 = document.createElement('li');

    let pErorless8 = document.createElement('p');
    //! create elemnts >]

    //! append Elements [<
    ulBox.appendChild(liBox2);

    liBox2.appendChild(pErorless8);
    pErorless8.textContent = 'this is not strong pasword! try again ';

    liBox2.classList.add('li_box');

    liBox2.classList.add('red_p');
    //! append Elements >]
  } else if (inputvalue.length > 16) {
    //! create elemnts [<
    let liBox3 = document.createElement('li');

    let perormore16 = document.createElement('p');
    //! create elemnts >]

    //! append Elements [<
    ulBox.appendChild(liBox3);

    liBox3.appendChild(perormore16);
    perormore16.textContent = 'The password must be a max of 16 symbol';

    liBox3.classList.add('li_box');

    liBox3.classList.add('red_p');
    //! append Elements >]
  }

  input.value = '';
});

//! html section_2 functional >]

//todo

//! html section_3 functional [<

let Arrayinpu = document.getElementById('arrayelements');

let submit_btn = document.getElementById('submit_btn');

let Array1 = [];

submit_btn.addEventListener('click', () => {
  function arraypushinput() {
    let input2 = Number(Arrayinpu.value);

    input2 = Arrayinpu.value;

    Array1.push(input2);

    input2 = Arrayinpu.value = '';
  }

  arraypushinput();

  // function addElementsInHtml(Array1, index) {
  //   //! create elemnts [<

  //   let span = document.createElement('span');

  //   //! create elemnts >]

  //   let ArrayNumbers = document.querySelector('.array_numbers');

  //   ArrayNumbers.appendChild(span);
  //   if (index === Array1.length - 1) {
  //     span.textContent = index;
  //   }
  // }
  Array1.forEach((element, index) => {
    //! create elemnts [<

    let span = document.createElement('span');

    let div = document.createElement('div');

    //! create elemnts >]

    let ArrayNumbers = document.querySelector('.array_numbers');

    ArrayNumbers.appendChild(div);

    div.appendChild(span);
    if (index === Array1.length - 1) {
      span.textContent = element;
    }
  });
});

Array1.sort;

//! html section_3 functional >]
