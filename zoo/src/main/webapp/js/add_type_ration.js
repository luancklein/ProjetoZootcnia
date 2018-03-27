function verifyRegisterNewRation()
{
	var nome = $("#def_name_ration").val();
	var forAnimal = $("#for_animal").val();
	var i1 = $("#insumo1").val();
	var i2 = $("#insumo2").val();
	var i3 = $("#insumo3").val();
	
	
	if (i1.length < 2 || i2.length < 2 || i3.length < 2)
		{
			$("#errorOfRegister").html('<center><h4 style="color:red">Os insumos não foram inseridos!<h4><center>');
			$(".alert").alert();
			return;
		}
	if(nome.length < 2)
		{
		$("#errorOfRegister").html('<center><h4 style="color:red">Nome da receita não preenchido!<h4><center>');
		$(".alert").alert();
			
			return;
		}
	
	for (i in insumos)
		{
			if (insumos[i]["name"] == nome && insumos[i]["type_animal"] == forAnimal)
				{
				$("#errorOfRegister").html('<center><h4 style="color:red"> Essa receita já foi cadastrada!<h4><center>');
				$(".alert").alert();
					return;
				}
		}
	$("#registerNewType").submit();
}

var insumos = []; //Variavel global usada para guardar as receitas!
function listInsumos()
{//Através de uma requisição AJAX, essa função irá buscar no banco TODOS os dados da tabela receita;
	$.ajax({
		method : "GET",
		url :  generateLink("getAllInsumos"),
		success : function(response) {
			console.log(response);
			if (response.cod == "404") {
				alert(response.message);
			} else {
				insumos = response.data; //Adicionamos o valor de retorno a variavel global insumo;
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
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    return true;
}


function sendData(){
	
	var ration = $( "#def_name_ration" ).val();
	var animal = $("select#for_animal option:checked").val();

	
	$.ajax({
		method : "GET",
		url : ("registerNewTypeRation"),
		data: $("#registerNewType").serialize(), // serializes the form's elements.
		success : function(response) {
			console.log(response);
			if (response.cod == "404") {
				alert(response.message);
			} else {
				if (response.data == true)
				{
					$('#registerNewType').each (function(){
						  this.reset();
						});
					$("#name").val("");
					$("#snackbar").html("Cadastro realizado com sucesso!");
					$("#snackbar").css("background","#137007");

				}
			else{
				$("#snackbar").html("Atenção! <br> Já há uma ração com este nome cadastrada!");
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
