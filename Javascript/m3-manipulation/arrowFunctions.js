//arrow functions (flecha)
function somarOldSchool(x,y) {
    return x + y;
}
console.log( somarOldSchool(2,5));



let somar = function(x,y){
    return x + y;
}
console.log( somar(2,6));

//arrow
// const arrowFunction = (parameters) => { return (expression)};
const somarAF = (x,y) => { return x+y };
console.log( somarAF(2,7));

// const arrowFunction = (parameters) =>  expression;
const somarAF2 = (x,y) => x+y;
console.log( somarAF2(2,8));

const letrasNome = (nome) => { return nome.length };
console.log( letrasNome ("maria"));

const letrasNomeAF2 = nome => nome.length;
console.log( letrasNomeAF2('ana'));




