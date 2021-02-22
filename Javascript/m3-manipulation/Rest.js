//rest

function addNumber(...num){ //independente de quantos dados forem enviados, serao armazenados em array
    console.log(num);
}

addNumber( 5, 9 , 3 , 2 , 1 , 7 );

///////////////////////////////////////////////////spread + rest


function adicionar(nomes, ...novosNomes){
    let novaLista = [
        ...nomes,
        ...novosNomes,        
    ];
    return novaLista;
}
let nomes = ['ana', 'jose'];
let outros = adicionar(nomes, 'maria', 'boni');
console.log(outros);