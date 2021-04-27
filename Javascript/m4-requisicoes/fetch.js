function loadPosts(){

    document.getElementById("posts").innerHTML =  'Loading...'

    fetch("https://jsonplaceholder.typicode.com/posts") //faz a requisicao
        //get (default) - post - put - patch - delete
        .then(function(resultado){
            return resultado.json(); //return a promise (espera o resultado e transforma em json)
        })
        .then(function(json){
            montarBlog(json);
            //document.getElementById("posts").innerHTML = json.length + ' posts'//retorna o resultado (json /api)
        })
        //return a promise
        .catch(function(error){
            console.log("erro");
        })
}
/*erro de cors (pode acontecer se nao usar o protocolo http/server)*/

function montarBlog(lista){
    let html = '';

    for (let i in lista){

        html += '<h3>' + lista[i].title + '</h3>' ;
        html += lista[i].body + '</br>';
        html += '<hr/>'

    }
    document.getElementById("posts").innerHTML = html;
}