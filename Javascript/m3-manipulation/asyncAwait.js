/*permite fazer requisições ajax*/
//requisição

function requisita(){
    const url = 'https://alunos.b7web.com.br/api/ping';
    const parametros = {
        method: 'POST',
        body: JSON.stringify({
            nome: "boni",
            idade: 99
        })
    };
    //nesse modelo a requisicao nao espera, é continua
    fetch(url, parametros).then((respostaServidor)=>{
        respostaServidor.json().then((json)=>{
            console.log(json);
        });
    });

};

async function requisitarAssincrona(){
    const url = 'https://alunos.b7web.com.br/api/ping';
    const parametros = {
        method: 'POST',
        body: JSON.stringify({
            nome: "2boni",
            idade: 299
        })
    };
    const respostaServidor = await fetch(url, parametros);
    const json = await respostaServidor.json();

    console.log(json);
}





//requisitar();
requisitarAssincrona();//espera a resposta

