//descontruindo arrays -> feita na ordem do array

let vetor = [
    'boni',
    'silva',
    99,
    '@boni'
];

let [ nome, sobrenome, idade, instagram ] = vetor;
console.log(nome, sobrenome, idade, instagram);

//pulando um item do array
/*
let [ nome, , , instagram];
console.log(nome,  instagram);
*/

//////////////////////////////////////////////////////////////////////////////2
//outra forma de desconstrucao (na propria criacao do array)
let [name1, lastName, age = 90] = [ 'ana', 'silva'];//atribuindo valor padrao
console.log(name1, lasName, age);

//////////////////////////////////////////////////////////////////////////////3
function info(){
    let a = [1,2,3];
    return a;
}
/*
let numeros = info();
let [a,b,c] = numeros;
console.log(a,b,c);
*/
let [a,b,c] = info();
console.log(a,b,c);