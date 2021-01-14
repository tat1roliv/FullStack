//functions
//func1
function alterar(){
    document.getElementById("titulo").innerHTML = "function to change <h1>";
    document.getElementById("campo").value = "function to change <input>";
}
alterar();

/*
function(variavel) 
    
alterar(titulo){
        document.getElementById("titulo").innerHTML = titulo;
        document.getElementById("campo").value = titulo;
    }
alterar("Esse é o titulo")
*/

function somar(x,y){
    let total = x + y;
    document.getElementById("campo").value = total;
}