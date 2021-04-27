function exibir(){

    let imagem = document.getElementById("imagem").files[0];

    let img = document.createElement('img');
    img.src = URL.createObjectURL(imagem);
    img.width = 200;


    document.getElementById("area").appendChild(img);

}

/*metodo filereader*/

function mostrar(){
    
    let reader = new FileReader();
    let imagem = document.getElementById('imagem').files[0];

    reader.onloadend = function(){
        let img = document.createElement('img');
        img.src = reader.result;
        img.width = 300;

        document.getElementById('area').appendChild(img);
    }

    reader.readAsDataURL(imagem);

}