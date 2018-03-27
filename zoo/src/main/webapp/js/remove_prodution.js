//Função especifica voltada para a exclusão de produção
function sendForm() {
	id2 = $("#id").val();
	$.ajax({
		method : "GET",
		url :  generateLink("disableProduction"),
		data : {
			id : id2
		},
		success : function(response) {
			if (response.cod == "404") {
				alert(response.message);
			} else {
				
				showToast();
				setTimeout(function() {
					  //your code to be executed after 1 second
					window.location.replace("/zoo/remove_prodution"); //Redireciona para a pagina inicial
					}, 1000);
				
			}
		},
		failure : function(response) {
			atualy = false;
			error();
			console.error(response);
		}
	});
}

function showToast() {
    var x = document.getElementById("snackbar")
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 2000);
    return true;
}
