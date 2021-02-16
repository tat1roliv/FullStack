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



