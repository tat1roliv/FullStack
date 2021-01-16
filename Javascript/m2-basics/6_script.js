function amarelo(){
    limpar();
    document.getElementById("titulo").classList.add('amarelo');
}

function vermelho(){
    limpar();
    document.getElementById("titulo").classList.add('vermelho');
}

function verde(){
    limpar();
    document.getElementById("titulo").classList.add('verde');
}
function limpar(){
    document.getElementById('titulo').classList.remove('amarelo');
    document.getElementById('titulo').classList.remove('vermelho');
    document.getElementById('titulo').classList.remove('verde');
}