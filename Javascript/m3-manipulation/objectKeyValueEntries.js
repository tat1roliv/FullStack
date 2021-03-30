/*
js -> arrays & objects == object
*/

let lista = ['ovo', 'pao', 'leite', 'cafe'];

console.log(Object.keys(lista)); //retorna pos array
console.log(Object.values(lista)); //retorna conteudo da pos
console.log(Object.entries(lista)); //retorna pos e conteudo

let pessoa = {
    nome: 'juliana',
    sobrenome: 'boni',
    idade: 90,
}

console.log(Object.keys(pessoa)); //retorna chaves do objeto
console.log(Object.values(pessoa)); //retorna conteudo do objeto
console.log(Object.entries(pessoa)); //retorna array criado com pos e conteudo


