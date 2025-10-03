
const display = document.querySelector('#display');

function insertToDisplay(data) {
  const operadores = "+-*/";

  if(operadores.includes(data) && operadores.includes(display.value.slice(-1))) {
    back();
  }

  display.value += data;
}

function clean() {
  document.querySelector('#display').value = '';
}

function back() {
  const display = document.querySelector('#display');
  display.value = display.value.slice(0 , -1)
}

function result() {
  const display = document.querySelector('#display');
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error'
  }
}