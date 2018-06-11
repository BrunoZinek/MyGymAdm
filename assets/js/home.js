$(function () {
});



function excluirCliente(id) {
    if (confirm("Deseja excluir o cliente "+$("#nome"+id).text() +" ?")) {
      alert("Cliente excluido com sucesso!");
    }
  }