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

//substituindo textos na string
//replace( (content buscado na String), (new content) )


let nome5 = 'jose da silva';

let resultado5 = nome5.replace('da silva', 'pereira');

console.log(nome5);
console.log(resultado5);

//toUpperCase;
//toLowerCase;
resultado5 = console.log(resultado5.toUpperCase());
resultado2 = console.log(resultado2.toLowerCase());


//trim


let nome6 = '     boni bn bi      ';

/*
let contagemBranco = nome6.length();
console.log(contagemBranco);
*/

let resultado6 = nome6.trim();
//let resultado6 = nome6.trim().length;
console.log(resultado6);


//qual o caracter esta na posicao x
//charAt

let resultado7 = nome5.charAt(0);
console.log(resultado7);

/////**********//////
//split

let calopsita = '1,2,3,4,5,6,7,8,9';

let thatsIt = calopsita.split(' , ');

console.log(thatsIt);

let bolo = 'farinha; acucar, leite, manteiga';

let listaBolo = bolo.split(' ; ');

console.log(listaBolo);