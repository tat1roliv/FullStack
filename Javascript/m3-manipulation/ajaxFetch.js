/*permite fazer requisições ajax*/
//requisição
const url = 'https://alunos.b7web.com.br/api/ping';
const parametros = {
    method: 'POST',
    body: JSON.stringify({
        nome: "boni",
        idade: 99
    })
};

fetch(url, parametros).then((respostaServidor)=>{
    respostaServidor.json().then((json)=>{
        console.log(json);
    });
});