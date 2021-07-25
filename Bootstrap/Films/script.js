$(function(){

    $.ajax({
        /*url:'https://alunos.b7web.com.br/cinema/',*/
        url: 'https://api.b7web.com.br/cinema/',
        type: 'GET',
        dataType: 'json',
        success: function(json){
            console.log(json);
        }
    });
});