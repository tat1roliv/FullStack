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



