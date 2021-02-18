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

//exibe tempo
function startNow(){
    let timer = setInterval(showTime, 1000);//mls
}

//para tempo
function stopNow(){
    clearInterval(timer);
}

//cronometro