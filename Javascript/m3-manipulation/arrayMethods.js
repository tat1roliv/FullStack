///////////////////////////////////////////////////////////////////////////////1
//to string
let lista = [ 'ovo', 'farinha', 'acucar', 'leite' ];
let res = lista.toString();
console.log(res);

//join -> array to string + parametro definido 
let frutas = [ 'maca', 'banana', 'morango', 'caja' ];
let resFrutas = frutas.join(' -*-*- ');//separador definido no parentese
console.log(resFrutas);

//indexOf
let carros = [ 'uno', 'gol', 'up', 'palio' ];
let resCarros = carros.indexOf("up")
console.log(resCarros);//true = [i]; false = -1;
/*
para fazer uma busca (if > -1)
*/ 

//pop -> remove o ultimo item do array
//shift -> remove o ultimo item do array
let estojo = [ 'lapis', 'borracha', 'caneta', 'apontador' ];
estojo.pop();
estojo.shift();
let resEstojo = estojo;
console.log(resEstojo);

//push -> add no array
let pf = [ 'feijao', 'arroz', 'carne', 'salada' ];
pf.push('batata-frita');
let resPf = pf;
console.log(resPf);

//alterando diretamente o elemento do array
let tea = [ 'camom', 'boldo', 'erva-doce'];
tea[0] = 'camomila';
tea[3] = 'cha preto';//eh possivel alterar, mas é melhor usar o push
let resTea = tea;
console.log(resTea);

///////////////////////////////////////////////////////////////////////////////2
//splice -> remove um item do array
//splice(posicao do item (a partir do item), quantidade de itens a remover - a partir daquele item marcado)
let componentes = [ 'hd','placa video', 'processador', 'placa de rede' , 'gabinete'];
componentes.splice(3,1);
let resComp = componentes;
console.log(resComp);

//concat -> concatenar array
let listaFeijao = [ 'feijao', 'verduras', 'calabresa','bacon' ];
let listaArroz = [ 'arroz', 'alho','cenoura'];
let resConcat = lista.concat(listaArroz);
console.log(resConcat);

//sort -> ordenamento (alfabetico)
//reverse -> ordenamento reverso(alfabetico)
let listaOrdemAlfa = [ 'Dnome','Anome', 'Bnome', 'Fnome', 'Enome', 'Cnome'];
listaOrdemAlfa.sort();
listaOrdemAlfa.reverse();//sen usar o sort antes -> vai inverter como estiver
let resAlfa = listaOrdemAlfa;
console.log(resAlfa);

///////////////////////////////////////////////////////////////////////////////3
//funcoes no array

//map ->  aplicar funcao em cada item do array
let numeros = [ 45, 4, 9, 16, 25 ];
let numerosEdit = [];

numerosEdit = numeros.map(function(item){  
    return item * 2;
});
/*
for (let i in numeros){
    numerosEdit.push(lista[i] * 2);
}
*/
let resNum = numerosEdit;
console.log(resNum);

//filter 
// rodar uma função que retorna true (inclui no retorno) ou false (nao inclui no retorno)
let numbers = [ 1, 2, 3, 4, 5 ];
let numbersEdit = [];

numbersEdit = numbers.filter(function(elemento){
    if (elemento > 3){
        return true;
    } else{
        return false;
    }

});

let resN = numbersEdit;
console.log(resN);

//every -> verifica e retorna true or false (apenas), tudo ou nada
//some -> pelo menos 1, tb retorna true ou false (apenas)
let numerales = [ 11 , 22 , 33 , 44, 99 ];
let numeralesEdit = [];

numeralesEdit = numerales.every(function(dado){//numerales.some
    if(dado > 20){ // ternario -> return (dado > 20)? true : false;
        return true;
    }else{
        return false;
    }
});
let resNumerales = numbersEdit;
console.log(resNumerales);

///////////////////////////////////////////////////////////////////////////////4

//find -> procura se existe no array
//findIndex -> posicao daquele item no array
let namesss = [ 'paulo', 'maria', 'jose', 'ana' ];
let nameEdit = [];

nameEdit = namesss.find(function(artikel){//findIndex
    if (artikel == 'ana'){
        return true;
    } else{
        return false;
    }
});

let resName = nameEdit;
console.log(resName);


//

let turma = [
    {id:1, nome: 'boni', sobrenome: 'lacerda'},
    {id:2, nome: 'maria', sobrenome: 'pereira'},
    {id:3, nome: 'pedro', sobrenome: 'silva'}
];

let pessoaProcurada = turma.find(function(calopsita){
    return ( calopsita.sobrenome == 'silva' ) ? true : false;
})

let resTurma = pessoaProcurada;
console.log(resTurma);




