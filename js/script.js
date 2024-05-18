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
  } else if (inputvalue.length < 8 && inputvalue.length != 0) {
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
  } else if (inputvalue.length === 0) {
    //! create elemnts [<
    let liBox4 = document.createElement('li');

    let perormore3 = document.createElement('p');
    //! create elemnts >]

    //! append Elements [<
    ulBox.appendChild(liBox4);

    liBox4.appendChild(perormore3);
    perormore3.textContent = 'error: give me password';

    liBox4.classList.add('li_box');

    liBox4.classList.add('red_p');
    //! append Elements >]
  }

  input.value = '';
});

//! html section_2 functional >]

//todo

//! html section_3 functional [<

let Arrayinpu = document.getElementById('arrayelements');

let submit_btn = document.getElementById('submit_btn');

let form = document.querySelector('#form');

let Array1 = [];

form.addEventListener('submit', (e) => {
  e.preventDefault();
  function arraypushinput() {
    if (Arrayinpu.value.length > 0) {
      let input2 = Number(Arrayinpu.value);

      input2 = Arrayinpu.value;

      Array1.push(input2);

      input2 = Arrayinpu.value = '';
    }
  }

  arraypushinput();

  Array1.forEach((element, index) => {
    //! create elemnts [<

    if (index === Array1.length - 1) {
      let span = document.createElement('span');

      let div = document.createElement('div');

      //! create elemnts >]

      let ArrayNumbers = document.querySelector('.array_numbers');

      ArrayNumbers.appendChild(div);

      div.appendChild(span);
      span.textContent = element;

      console.log(Arrayinpu.value);
    }
  });

  Array1.sort((a, b) => a - b);

  console.log(Array1);

  let ArrayLastElemnt = Array1[Array1.length - 1];

  console.log(ArrayLastElemnt);

  let result = document.getElementById('bigNumber');

  result.textContent = ArrayLastElemnt;
});

//! html section_3 functional >]

//! html section_4 functional [<

let formBOx = document.getElementById('form_2');

formBOx.addEventListener('submit', (e) => {
  e.preventDefault();

  function getinicial() {
    let inout = document.getElementById('inot');

    let input3 = inout.value;

    console.log(input3);

    let inout2 = document.getElementById('inot2');

    let input4 = inout2.value;

    console.log(input4);

    inout.value = '';
    inout2.value = '';

    let nameInitial = document.querySelector('.Nm_inicial');
    console.log(nameInitial);
    nameInitial.textContent = `name inicial: ${input3[0].toUpperCase()}`;

    let lastnameintial = document.querySelector('.lstnm_inicial');
    console.log(lastnameintial);
    lastnameintial.textContent = `last name inicial: ${input4[0].toUpperCase()}`;
  }
  getinicial();
});

//! html section_4 functional >]
