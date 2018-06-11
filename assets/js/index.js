$(function () {
  $('#btnSalvarTreinoTeste').click(treinoTesteSalvar);
  $('#entrar').click(logar);

  $('#user').keypress(function (e) {
    if (e.which == 13) {
      $('#password').focus();
    }
  });
  $('#password').keypress(function (e) {
    if (e.which == 13) {
      logar();
    }
  });
  //Recuperar Senha
  $('#recSenha').click(enviarSenha);
  dataMaxima();
});

function logar() {
  if (!$('#user').val() || !$('#password').val()) {
    alert("Favor preencher os campos login e senha");
  } else {
    if ($('#user').val() == 'adm' && $('#password').val() == 'adm') {
      window.location.href = "home.html";
    } else {
      alert("Login ou senha incorreto!");
    }
  }
}

function exit() {
  if (confirm("Deseja sair?")) {
    window.location.href = "index.html";
  }
}

function buscarItemTabela() {
  // Declare variables
  var input, filter, table, tr, td, i;
  input = document.getElementById("buscaItemTabela");
  filter = input.value.toUpperCase();
  table = document.getElementById("tblItens");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
function voltar() {
  window.history.back();
}
function enviarSenha() {
  if (!$('#user').val()) {
    alert("Favor preencher os campos login ");
  } else
    alert("Senha enviada para o email informado");
    $('#user').val("");
    $('#user').focus();
}
function excluirCliente() {
  if (confirm("Deseja excluir o cliente 'Bruno Paulino Zinek'?")) {
    alert("Cliente excluido com sucesso!");
  }
}
function excluirExercicio() {
  if (confirm("Deseja excluir o exercício 'Supino Reto' ?")) {
    alert("Exercício excluido com sucesso!");
  }
}
function excluirTreino() {
  if (confirm("Deseja excluir o treino 'Adaptação'?")) {
    alert("Treino excluido com sucesso!");
  }
}
function adicionarTreino() {
  $("#novoExerc").show();
  $("#iptSerie").prop("disabled", true);
  $("#iptRepeticao").prop("disabled", true);
  $("#cmbExercicio").prop("disabled", true);
  $("#cmbDiaSemana").prop("disabled", true);
  $("#cmbGrupMusc").prop("disabled", true);
  $("#btnAdd").hide();
}
function excluirAula() {
  if (confirm("Deseja excluir a aula 'Spinning'?")) {
    alert("Aula excluida com sucesso!");
  }
}
function excluirPlano() {
  if (confirm("Deseja excluir o plano 'Musculação Easy'?")) {
    alert("Plano excluido com sucesso!");
  }
}
function salvarTreino(num) {
  $("#iptSerie" + num).prop("disabled", true);
  $("#iptRepeticao" + num).prop("disabled", true);
  $("#edit" + num).show();
  $("#save" + num).hide();
}

function editarTreino(num) {
  $("#iptSerie" + num).prop("disabled", false);
  $("#iptRepeticao" + num).prop("disabled", false);
  $("#edit" + num).hide();
  $("#save" + num).show();

}

function treinoTesteSalvar() {
  if ($("#iptSerie1").prop("disabled") == false ||
    $("#iptSerie2").prop("disabled") == false ||
    $("#iptSerie3").prop("disabled") == false ||
    $("#iptSerie4").prop("disabled") == false ||
    $("#iptSerie5").prop("disabled") == false ||
    $("#iptSerie6").prop("disabled") == false) {
    alert("Favor salvar todos os campos.")
  } else {
    alert("Treino alterado com sucesso!");
    window.location.href = "treino_teste.html";
  }
}
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