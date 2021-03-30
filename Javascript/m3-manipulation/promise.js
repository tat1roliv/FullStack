function fazer(){
    let promiseTest = new Promise((resolve, reject)=>{
        setTimeout(()=>{ //no caso real => ajax
            resolve('ok');
        },3000);
        
    });
    return promiseTest;
}

fazer().then((resposta)=>{
    console.log("resposta: "+resposta);
});