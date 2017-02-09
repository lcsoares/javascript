$('#enviar').on('click',function(e){
    e.preventDefault();
    var requisicaotempo=$.ajax({
        url: "http://api.openweathermap.org/data/2.5/weather?q="+$("#cidade").val()+"&APPID=06364573f45c170fb7ab1d9b8f7abaf8&units=metric&units=metric",
        method: "GET"
    });

    requisicaotempo.done(function(dados){
        console.log(dados);
        $("#name").html('Nome:'+dados.name);
        $("#Nuvens").html('Nuvens:'+dados.weather[0].description);
        $("#temp").html('temperatura:'+dados.main.temp+'°');
        $("#tempmax").html('temperatura Max:'+dados.main.temp_max+'°');
        $("#tempmin").html('temperatura Min:'+dados.main.temp_min+'°');

    });

    requisicaotempo.fail(function(){
        console.log('nao funciona');
    });

});
