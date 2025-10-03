const display = document.querySelector('#display');

function insertToDisplay(data) {
  if (display.value === "Error") {
    clean();
  }

  const operadores = "+-*/";

  if(operadores.includes(data) && operadores.includes(display.value.slice(-1))) {
    back();
  }

  display.value += data;
}

function clean() {
  display.value = '';
}

function back() {
  display.value = display.value.slice(0 , -1)
}

function result() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error'
  }
}