let nome = 'boni maria jose silva';

let resultado = '';

//quantos caracteres no nome
console.log(nome.length);

//busca na string
//var.indexOf('');
//conteudo da string "armazena como array"
nome.indexOf('silva');

/*
true -> retorna a posição;
false -> retorna -1;
*/

//varredura simples - string
if(nome.indexOf('tati') > -1) {
    resultado = 'valor encontrado';
} else{
    resultado = 'valor não encontrado'
}
console.log(resultado);

//var.slice();

let nome2 = 'aa bb cc dd ee ff';

//var.slice(param inicio, param fim);
let resultado2 = nome2.slice(0,5);
console.log(resultado2);

/*
let resultado2 = nome2.slice(-10);
vai exibir os 10 ultimos, do ultimo -10
*/ 

//var.substring

let nome3 = 'xx yy zz';

//var.substr(param inicio (so valores positivos), param fim (so valores negativos) );
let resultado3 = nome3.substring(0,5);
console.log(resultado3);


//var.substr

let nome4 = 'maria da silva';

//var.substr(param inicio (so valores positivos), qt caractres a puxar da string (so valores negativos) );
//var.substr(posicao inicial, quantidade de caracteres );
//tb funciona com valores negativos

let resultado4 = nome4.substr(0,4);
console.log(resultado4);

///////boa pratica
//substr
