let number1 = parseInt(prompt("Digite um número!"));
let number2 = parseInt(prompt("Digite outro número"));


let sum = number1 + number2;
let subtraction = number1 - number2;
let multiplication = number1 * number2;
let division = number1 / number2;
let rest = number1 % number2;


alert(`O resultado da soma é: ${sum}`)
alert(`O resultado da subtração é: ${subtraction}`)
alert(`O resultado da multiplicação é: ${multiplication}`)
alert(`O resultado da divisão é: ${division}`)
alert(`O resto da divisão é: ${rest}`)

if ((sum / 2)  == 0) {
  alert(`A soma entre os números é par: ${sum }`)
}
else {
  alert(`A soma entre os números é impar: ${sum}`)
}

if (number1 == number2) {
  alert(" Os números são iguais!")
}
else {
  alert(" Os números são diferentes!")
}

