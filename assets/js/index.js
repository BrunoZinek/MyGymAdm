/*function exit() {
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
  alert("Senha enviada para o celular/email informado")
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
function adicionarTreino(){
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
  if (num == 1) {
    $("#iptSerie1").prop("disabled",true);
    $("#iptRepeticao1").prop("disabled",true);
    $("#edit1").show();
    $("#save1").hide();
  }
  if (num == 2) {
    $("#iptSerie2").prop("disabled",true);
    $("#iptRepeticao2").prop("disabled",true);
    $("#edit2").show();
    $("#save2").hide();
  }
  if (num == 3) {
    $("#iptSerie3").prop("disabled",true);
    $("#iptRepeticao3").prop("disabled",true);
    $("#edit3").show();
    $("#save3").hide();
  }
}
function editarTreino(num) {
  if (num == 1) {
    $("#iptSerie1").prop("disabled",false);
    $("#iptRepeticao1").prop("disabled",false);
    $("#edit1").hide();
    $("#save1").show();
  }
  if (num == 2) {
    $("#iptSerie2").prop("disabled",false);
    $("#iptRepeticao2").prop("disabled",false);
    $("#edit2").hide();
    $("#save2").show();
  }
  if (num == 3) {
    $("#iptSerie3").prop("disabled",false);
    $("#iptRepeticao3").prop("disabled",false);
    $("#edit3").hide();
    $("#save3").show();
  }
}

*/
// App

$(function () {
  $.ajaxSetup({ timeout: 10000 });
  // Logar
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
  $('#recSenha').click(recuperarSenha);
});

function logar() {
  if (!$('#user').val() || !$('#password').val()) {
      alert("Favor preencher os campos login e senha");
  } else {
      var login = $('#user').val();
      var senha = $('#password').val();
      var dados = {
          login: login,
          senha: senha
      }
      $('.box-spinner').toggle();
      $.post('http://localhost/mygym/logar.php', dados, function (data) {
          if (data.autenticado == 1) {
              window.localStorage.setItem('login', login);
              window.localStorage.setItem('senha', senha);
              window.location.href = "home.html";
          } else {
              alert("Login ou senha incorreto!");
          }
      }).fail(function () {
          alert("Sistema indisponivel. Tente novamente mais tarde!");
      }).always(function () {
          $('.box-spinner').toggle();
      })
  }
}

function recuperarSenha() {
  if (!$('#user').val()) {
      alert("Favor preencher os campos login e senha");
  } else {
      $.get('https://api.myjson.com/bins/1gdbwn', login, function (data) {
          if (data.autenticado == 1) {
              alert("Senha enviada para o email informado.");
          } else {
              alert("Login incorreto!");
          }
      }).fail(function () {
          alert("Sistema indisponivel. Tente novamente mais tarde!");
      }).always(function () {
          $('.box-spinner').toggle();
      })
  }
}
