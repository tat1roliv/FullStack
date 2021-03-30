let telefone = '54321';

console.log( telefone.padEnd(9,"*")); //(parametro minimo, preenchimento para completar o minimo a direita)
console.log( telefone.padStart(2, "0")); //(parametro minimo, preenchimento para completar o minimo a esquerda)

let cartao = '1234123412341234';

let lastDigits = cartao.slice(-4); //captura apenas os ultimos 4 digitos 

let cartaoMascarado = lastDigits.padStart(16, "*");

console.log(cartaoMascarado);
