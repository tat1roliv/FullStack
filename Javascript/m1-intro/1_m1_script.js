//EXIBIR INFORMACOES AO USER/DEV

//DOCUMENT
//document.getElementById("id").innerHTML
document.getElementById("titulo").innerHTML = "hola";
//document.write("txt on DOM")
document.write("holaaaaaaa");

//WINDOW
//alert
window.alert("houulaa");

//CONSOLE
//console.log
console.log("mensagem no console")

//VARIAVEIS
//var
var nome = "Boni";
var idade = 90;
alert(idade);
alert(nome);

//math
var x = 10;
var y = 15;

var total = (x + y);

console.log(total);

//string x concatenação
var nome1 = "Abc"
var sobrenome1 = "Def"
console.log(nome1 + sobrenome1);

//condicionais
//exemplo 1
var hora1 = 18;
if (hora1 >=0 && hora1 <= 12) {
    console.log("Buenos dias");
}else if (hora1 >12 && hora1<18){
    console.log("Buenas tardes");    
}else
    console.log("Buenas noches");

//exemplo2
if (hora1 == 12 || hora1 == 18){
    console.log("Rush hour")
};

//ecma script
//variaveis 2
var name1 = "boni1"
console.log(window.nome1);
//acesso ao dado em qualquer área do sistema(geral)
let name2 = "boni2"
console.log(window.nome2);
//disponivel apenas naquela area especifica do codigo (na caixinha de codigo especifica)
const name3 = "boni3"
//var valor constante




