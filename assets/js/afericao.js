$(function () {
    dataMaxima();
    $('#btnSalvar').click(cadastrarAfericao)
});


function dataMaxima() {
    var dia = new Date().getDate();
    var mes = new Date().getMonth() + 1;
    var ano = new Date().getFullYear();

    if (dia < 10) {
        dia = '0' + dia;
    }
    if (mes < 10) {
        mes = '0' + mes;
    }
    var dataAtual = ano + '-' + mes + '-' + dia;

    $('#dataAfericao').attr('max', dataAtual);
    $('#dataAfericao').attr('value', dataAtual);
}

function cadastrarAfericao() {
    if (
        $('#iptPeso').val() == "" ||
        $('#iptAltura').val() == "" ||
        $('#iptImc').val() == "" ||
        $('#iptGordura').val() == "" ||
        $('#iptBiceps').val() == "" ||
        $('#iptQuadril').val() == "" ||
        $('#iptAntebraco').val() == "" ||
        $('#iptPanturrilha').val() == "" ||
        $('#iptPeito').val() == "" ||
        $('#iptCoxa').val() == "" ||
        $('#iptAbdomen').val() == "" ||
        $('#iptPescoco').val() == ""
    ) {
        alert("Favor preencher todos os campos");
    }else{
        alert("Aferição cadsatrada com sucesso!");
        window.location.href = "perfil.html"
    }

}