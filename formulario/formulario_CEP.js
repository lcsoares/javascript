
// blur verifica se esta com foco
$("#cep").blur(function () {
    //faz a requisição
    var requsicaoCep = $.ajax({
        url:"http://api.postmon.com.br/v1/cep/"+$(this).val(),
        method:"GET"
    })  ;
    //retorna a  requisição e escreve nos input
    requsicaoCep.done(function (dados) {
        console.log(dados);
        // ponto attr muda qualquer atributo do objeto
        $('#endereco').attr('disabled','true').val(dados.logradouro);
        $('#bairro').val(dados.bairro);
        $('#cidade').val(dados.cidade);
        $('#estado').val(dados.estado);

    });
    requsicaoCep.fail(function () {
        console.log(erro.message);
    });
});

$("form").validate({
    rules : {
        nome:{
            required:true,
            minlength:3
        },
        email:{
            required:true,
            email:true
        },
        senha:{
            required:true,
        },
        csenha:{
            required:true,
            equalTo:"#senha"
        },
        cpf:{
            required:true,
            min:010000000000
        },
        data:{
            required:true,
            date:true
        },
        telefone:{
            required:true,
            min:1000000000
        },
        cep:{
            required:true,
            min:10000000

        },
        endereco:{
            required:false
        },
        numero:{
            required:false,
            number:true
        },
        bairro:{
            required:false
        },
        cidade:{
            required:false
        },
        estado:{
            required:false
        }
    },
    messages:{
        nome:{
            required:"Por favor, informe seu nome",
            minlength:"O nome deve ter pelo menos 3 caracteres"
        },
        email:{
            required:"É necessário informar um email",
            email: "Formato inválido"
        },
        senha:{
            required:"É necessário informar umm senha"
        },
        csenha:{
            required:"É necessário informar a confirmação da senha",
            equalTo:"Senhas diferentes"
        },
        cpf:{
            required:"É necessário informar uo CPF",
            min:"CPF inválido"
        },
        data:{
            required:"É necessário informar a data",
            date:"Data inválida"
        },
        telefone:{
            required:"É necessário informar um telefone",
            min:"Número inválido"
        },
        cep:{
          required:"É necessário informar o CEP",
            min:"CEP inválido"
        }
    },
});


//www.linhadecodigo.com.br/artigo/3706/jquery-validate-validacao-de-formularios-html.aspx#ixzz4Y8cyIEYg

//localStorage guarda coisas no navegador