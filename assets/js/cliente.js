$(function () {
    buscaEndereco();
});


function buscaEndereco() {
    //Quando o campo cep perde o foco.
    $("#cep").blur(function () {
        //Nova variável "cep" somente com dígitos.
        var cep = $(this).val().replace(/\D/g, '');
        //Verifica se campo cep possui valor informado.
        if (cep != "") {
            //Expressão regular para validar o CEP.
            var validacep = /^[0-9]{8}$/;
            //Valida o formato do CEP.
            if (validacep.test(cep)) {
                $('.box-spinner').toggle();
                //Consulta o webservice viacep.com.br/
                $.getJSON("https://viacep.com.br/ws/" + cep + "/json/?callback=?", function (dados) {

                    if (!("erro" in dados)) {
                        //Atualiza os campos com os valores da consulta.
                        $("#rua").val(dados.logradouro+" - "+dados.bairro+" - "+dados.localidade+" - "+dados.uf);
                    } //end if.
                    else {
                        //CEP pesquisado não foi encontrado.
                        $("#cep").val("");
                        $("#cep").focus();
                        alert("CEP não encontrado.");
                    }
                }).always(function () {
                    $('.box-spinner').toggle();
                });
            } //end if.
            else {
                //cep é inválido.
                alert("Formato de CEP inválido.");
                $("#cep").val("");
                $("#cep").focus();

            }

        } //end if.
    });
}