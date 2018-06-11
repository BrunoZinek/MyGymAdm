$(function () {
    $('#cmbGrupMusc').selectize({
        create: true,
        sortField: 'text'
    });
    $('#lglExec').click(function (e) {
        e.preventDefault();
        $('#ExecGif').click();
    });
    $(document).on("change", "#ExecGif", function (e) {
        $("#lglExec").text(this.files[0].name);
    });
});


