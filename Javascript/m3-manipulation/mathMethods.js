//mathpi
let nPi = Math.PI;
console.log(nPi); //return pi

//mathRound -> arredonda para cima ou para baixo (mais proximo)
let a = Math.round(3.98);
console.log(a); //return 4

//mathFloor -> arred baixo
let b = Math.floor(3.98);
console.log(b); //return 3

//mathCeil -> arred cima
let c = Math.ceil(3.98);
console.log(c); //return 4

//absoluto -> retorna o numero absoluto (positivo)
let d = Math.abs( -1.56 ); //return 1.56
console.log(d);

//toFixed
let cx = xx;
console.log(cx)

//max
let e = Math.max(7,100,600,20,3,99);
console.log(e);//return 600

//min
let f = Math.min(7,100,600,20,3,99);
console.log(f);//return 3

/*
//min max array
const numbers = [10, 20, 37, 61, 2, 89, 4];
const min = Math.min(...numbers);
const max = Math.max(...numbers);
     
console.log(min, max);
*/

//random
let g = Math.floor(Math.random() * 100);
console.log(g);//return aleatorio entre 0 e 1, entao * pelo valor limite desejado e arrendondar para menos

//seno cos tan