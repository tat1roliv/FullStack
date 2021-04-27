/*
let loadPosts = async () => {

}
*/

async function loadPosts(){

    document.getElementById("posts").innerHTML =  'Loading...'

    let req = await fetch("https://jsonplaceholder.typicode.com/posts") //faz a requisicao
    let json = await req.json();
    
    montarBlog(json);

}   
    
function montarBlog(lista){
    let html = '';

    for (let i in lista){

        html += '<h3>' + lista[i].title + '</h3>' ;
        html += lista[i].body + '</br>';
        html += '<hr/>'

    }
    document.getElementById("posts").innerHTML = html;
}