$(function(){
  $('#btnSalvarTreinoTeste').click(treinoTesteSalvar)
});

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
  $("#iptSerie"+num).prop("disabled",true);
  $("#iptRepeticao"+num).prop("disabled",true);
  $("#edit"+num).show();
  $("#save"+num).hide();
}

function editarTreino(num) {
  $("#iptSerie"+num).prop("disabled",false);
  $("#iptRepeticao"+num).prop("disabled",false);
  $("#edit"+num).hide();
  $("#save"+num).show();
  
}

function treinoTesteSalvar() {
 if($("#iptSerie1").prop("disabled")==false ||
 $("#iptSerie2").prop("disabled")==false ||
 $("#iptSerie3").prop("disabled")==false ||
 $("#iptSerie4").prop("disabled")==false ||
 $("#iptSerie5").prop("disabled")==false ||
 $("#iptSerie6").prop("disabled")==false){
    alert("Favor salvar todos os campos.")
  }else{
    alert("Treino alterado com sucesso!");
    window.location.href = "treino_teste.html";
  }
}
