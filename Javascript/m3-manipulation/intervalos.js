//////////////////////////////////////////////////////////////////////////////////////////
//setInterval -> roda a funcao de x em x tempo (nao para)
//relogio
function showTime(){
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();

    let txt = h+":" +m+":"+s;

    document.querySelector(".demo").innerHTML = txt;

}
//let timer = setInterval(showTime, 1000);//mls
let timer;

function startNow(){
    timer = setInterval(showTime, 1000);//mls
}

function stopNow(){
    clearInterval(timer);
}
///////////////////////////////////////////////////////////
//setTimeOut -> espera o tempo (parametro) e roda a funcao (uma unica vez)
let timer2;
function nowStart(){
    timer2 = setTimeout(function(){
        document.querySelector(".demo2").innerHTML = "rodando ok";
    }, 1000)
}
function nonStop(){
clearTimeout(timer2);
}



