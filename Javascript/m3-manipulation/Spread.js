//////////////////////////////////////////////////////array 
let numeros = [1,2,3,4,5];

//complementando a variavel integrando o valor do array numeros, inclusive posicionado cada valor do array numa celula
let outrosNumeros = [...numeros, 6, 7, 8, 9 ];

console.log(outrosNumeros);

/*
let outros = numeros;
outros.push();
*/
///////////////////////////////////////////////object

let info = {
    nome: 'boni',
    sobrenome:'silva',
    idade:99
};

let novaInfo = { 
    ...info,
    cidade: "Montevideo",
    pais: "uruguay"
};

console.log(novaInfo);

////////////////////////////////////////////////////////////functions

function addInfo(info){
    let newInfo = {
        ...info,
        status:0,
        token:'askldkasn',
        data_cadastro: '....'
    }
    return newInfo;
}

console.log( addInfo({nome:'boni', sobrenome:'silva'}));
