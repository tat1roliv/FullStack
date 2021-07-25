$(function(){

    $.ajax({
        /*url:'https://alunos.b7web.com.br/cinema/',*/
        url: 'https://api.b7web.com.br/cinema/',
        type: 'GET',
        dataType: 'json',
        beforeSend: function(){
            $('.filmsContent').html('<div class="col-md-12">Loading...</div>');
        },
        success: function(json){
            var html = '';
            
            for(var i in json){
                html += '<div class="col-md-4"><div class="film"><img src="'+json[i].avatar+'" />'+ json[i].titulo+'</div></div>';
            }
            $('.filmsContent').html(html);
        }
    });
});