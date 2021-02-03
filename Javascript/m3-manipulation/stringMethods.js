let nome = 'boni maria jose silva';

let resultado = '';

//quantos caracteres no nome
console.log(nome.length);

//busca na string
//conteudo da string "armazena como array"
nome.indexOf('silva');
/*
true -> retorna a posição;
false -> retorna -1;
*/

if(nome.indexOf('tati') > -1) {
    resultado = 'valor encontrado';
} else{
    resultado = 'valor não encontrado'
}

console.log(resultado);
