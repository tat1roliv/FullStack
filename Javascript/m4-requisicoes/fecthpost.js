async function insertPost(){
    document.getElementById("posts").innerHTML = 'Loading...';

    let req = await fetch("https://jsonplaceholder.typicode.com/posts", { 
        method: 'POST',
        body: JSON.stringify({ 
            title: 'testing title', 
            body: 'corpo de teste',
            userId: 4,
        }), 
        headers: {
            'Content-Type': 'application/json',
        }
    });
    let json = await req.json;

    console.log(json);


}