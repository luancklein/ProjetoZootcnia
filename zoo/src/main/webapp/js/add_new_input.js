function showToast() {
    var x = document.getElementById("snackbar")
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    return true;
}

function sendData(){
	
	var input = $("#name").val();
	
	$.ajax({
		method : "GET",
		url : "/zoo/registerNewInputInToStock",
		data : {
			name : input
		},
		success : function(response) {
			console.log(response);
			if (response.cod == "404") {
				alert(response.message);
			} else {
				console.log();
				if (response.data == true)
					{
						
					$('#addNewInputForm').each (function(){
						  this.reset();
						});
					
						$("#snackbar").html("Cadastro realizado com sucesso!");
						$("#snackbar").css("background","#137007");
					}
				else{
					$("#snackbar").html("Atenção! O Insumo já foi cadastrado!");
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
