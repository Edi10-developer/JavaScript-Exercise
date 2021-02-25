/*******************
   L E V E L  1
*******************/
/* 1.-
*********/
console.log('Hola mundo');

/* 2.-
*********/
alert('Edi Selimi');

/* 3.-
*********/
let fisrtName = 'Edi';
let lastName  = 'Selimi';

console.log(fisrtName + ' ' + lastName);

/* 4.-
*********/
let firstNumber  = 8;
let secondNumber = 13;
let addition     = firstNumber + secondNumber;

console.log('The result of the addition between ' + firstNumber + ' and ' + secondNumber + ' is ' + addition);

/* 5.-
*********/
let examGrade = 8; /* or: let examGrade = parseInt(prompt('Which was your grade at the exam?')); */

if(examGrade >= 5){
    alert('Congratulations! You passed the exam.');
}else if(examGrade < 5){
    alert('Try again! You did not pass the exam this time.');
}
else{
    alert('The data about your grade is not correct, please try again.');
}

/* 6.-
*********/
let primaryColor   = 'blanco';
let secondaryColor = 'verde';
let myString       = 'Tengo un coche de color ' + primaryColor + '.';

console.log('NO CHANGES - ' + myString);

    myString        = 'Tengo un coche de color ' + secondaryColor + '.';
console.log('CHANGED COLOR - ' + myString);

myString = myString.replace(/o/g, 'u');
console.log('CHANGED O TO U - ' + myString);

/* 7.-
*********/
let container = ['table', 'chair', 'laptop', 'book'];
let i;

for(i = 0; i <= container.length; i++){
    console.log(i +'. - ' + container[i]);
}

/* 8.-
*********/
function calculator(){
    let first_number  = parseInt(prompt('Introduzca un numero: '));
    let operator      = prompt('Elije un operador(escibe el numero que le corresponde):\r\n 1. +\r\n 2. -\r\n 3. X');
    let second_number = parseInt(prompt('Introduzca otro numero: '));
    let result = 0;

    switch(operator){
        case '1':
            result = first_number + second_number;
            break;
        case '2':
            result = first_number - second_number;
            break;
        case '1':
            result = first_number * second_number;
            break;
            default:
                alert('Los datos itroducidos son incorrectos.')
    }
    alert('El resultado de la operacion es: ' + result);
}

calculator();