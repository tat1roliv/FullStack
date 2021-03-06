////////////////////////////////////////////////////////////////////////////////////1
//new Date
let d = new Date(); 
console.log(d); //Wed Feb 17 2021 17:30:29 GMT-0300 (Horário Padrão de Brasília)

//toDateString
console.log( d.toDateString() );// Wed Feb 17 2021

//toUTCString
console.log( d.toUTCString() );//Wed, 17 Feb 2021 20:36:38 GMT

//atribuicao
let atribuirData = new Date(2020, 0, 1, 12, 30, 12); //01/01/2020 (ano, mes(jan=0), dia, hora, min, seg)
console.log(atribuirData);

//atribuicao toString
let newD = new Date('2020-01-01 15:42:17');//1 parametro = milisegundo (1970) -> timestamp (>1970 -> '-') 
console.log( newD.toString() );

////////////////////////////////////////////////////////////////////////////////////2
//getFullYear()
let d2 = new Date();
let res = d2.getFullYear();//2021
console.log(res);

//getMonth();
let d2A = new Date();
let resA = d2A.getMonth();//fev = 1
console.log(resA);

//getDate(); 
let d2C = new Date();
let resC = d2C.getDate();//return 0 a 6
console.log(resC);

//getDay(); 
let d2B = new Date();
let resB = d2B.getDay();//return 0 a 6
console.log(resB);

//getHours(); 
let d2D= new Date();
let resD= d2D.getHours();
console.log(resD);

//getMinutes(); 
let d2E = new Date();
let resE = d2E.getMinutes();
console.log(resE);

//getSeconds(); 
let d2F = new Date();
let resF = d2F.getSeconds();
console.log(resF);

//getMilliseconds(); 
let d2G = new Date();
let resG= d2G.getMilliseconds();
console.log(resG);

//getTime(); 
let d2H = new Date();
let resH = d2H.getTime(); //return timestamp
console.log(resH);

//date.now -> pega a data sem precisar definir uma variavel/objeto
let dNow = Date.now()
console.log(dNow); //return timestamp (p/ banco de dados)

////////////////////////////////////////////////////////////////////////////////////3
//manipulações

//setFullYear()
let x = new Date();
let ress = x.setFullYear(2031);
console.log(ress);

//setMonth()
let x2 = new Date();
let resss = x2.setMonth(11);
console.log(resss);

//aumentar a quantidade de (dias/horas/min/etc) -> prazo + || -
let modificarData = new Date();

modificarData.setDate( modificarData.getDate() + 5 );
let novoValor = modificarData;
console.log(novoValor);




