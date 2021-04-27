async function enviar(){
    let arquivo = document.getElementById('arquivo').files;//files[0] for multiple
    console.log(arquivo);

    let body = new FormData();
    body.append('title xyz');
    body.append('arquivo', arquivo);

    let req = await fetch('url xxxx', {
        method: 'POST',
        body: body,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });

    

}