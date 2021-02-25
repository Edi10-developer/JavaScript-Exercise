/*******************
   L E V E L  2
*******************/
function calculator() {
  let first_number = parseInt(prompt("Introduzca un numero: "));
  let operator = prompt("Elije un operador: ");
  let second_number = parseInt(prompt("Introduzca otro numero: "));
  let result = 0;

  switch (operator) {
    case "+":
      result = first_number + second_number;
      break;
    case "-":
      result = first_number - second_number;
      break;
    case "*":
      result = first_number * second_number;
      break;
    case "/":
      result = first_number * second_number;
      break;
    case "%":
      result = first_number * second_number;
      break;
    default:
      alert("Los datos itroducidos son incorrectos.");
  }
  alert("El resultado de " + first_number + ' ' + operator + ' ' + second_number + ' es ' + result);
}

calculator();
