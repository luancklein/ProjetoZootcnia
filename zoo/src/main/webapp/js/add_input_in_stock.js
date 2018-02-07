function showToast() {
    var x = document.getElementById("snackbar")
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    return true;
}
function sendData(){
	var input = $( "select#name_input option:checked" ).val();
	var dateNow = $("#date").val();
	var qtdNow = $("#qtd").val();
	
	$.ajax({
		method : "GET",
		url : "/zoo/registerNewAtualizationOnInputs",
		data : {
			name_input : input,
			qtd : qtdNow, 
			date : dateNow
		},
		success : function(response) {
			console.log(response);
			if (response.cod == "404") {
				alert(response.message);
			} else {
				
				if (response.data == true)
				{
					$('#ShipmentForm').each (function(){
						  this.reset();
						});
					$("#name").val("");
					$("#snackbar").html("Cadastro realizado com sucesso!");
					$("#snackbar").css("background","#137007");

				}
			else{
				$("#snackbar").html("Cadastro Inválido!<br>Não há essa quantidade disponível para vir!");
				$("#snackbar").css("background","#FF8C00");
			}
			
			showToast();
			}
		},
		failure : function(response) {
			atualy = false;
			error();
			console.error(response);
		}
	});
}
