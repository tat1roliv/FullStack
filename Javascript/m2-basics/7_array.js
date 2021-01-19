//array
function testing (){
    console.log('testing');
}

let carros = [ 'uno', 'palio', 'gol', 'fuscao', testing() ];
// let carros new Array('uno', 'palio', 'gol', 'fuscao')

//acessando o array

//posicao 1 do array = 0
console.log( carros[0] );

//array dentro de array
let ingredientes = [ [ 'uva', 'maca', 'banana'], [ 'arroz', 'feijao'] ];

//selecionando diferentes itens
console.log(ingredientes [1] [0]);//arroz
console.log(ingredientes [1] [1]);//feijao
console.log(ingredientes [0] [0]);//uva
console.log(ingredientes [0] [1]);//maca
console.log(ingredientes [0] [2]);//banana
