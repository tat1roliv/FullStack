//promisse
/*
1 pending
2 resolve
3 reject
*/

function getTemp(){
    return new Promise(function(resolve, reject){//passando callback
        console.log("getting it - the temp thing...");

        setTimeout(function(){//error -> reject
            resolve('40 na sombra');
        }, 3000)

    });

}

//using promises

console.log("codigo antes")

let temp = getTemp();//FAZENDO A REQUISICAO

console.log("codigo durante")

temp.then(function(resultado){ //RETORNO
    console.log('temp = '+ resultado);
});
temp.catch(function(error){
    console.log('deu ruim');
});

console.log('codigo depois');