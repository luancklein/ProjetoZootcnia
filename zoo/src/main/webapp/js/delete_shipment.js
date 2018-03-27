function generateReport()
{
	var nameInput = $( "select#name option:checked" ).val();
	var data = $("#dateBuy").val();
	if (data.length < 4){data = "NaN";}
	if(nameInput == "Todos"){nameInput = "X"; }
	$.ajax({
		method : "GET",
		url :  generateLink("shipmentReport"),
		data : {
			name : nameInput,
			year : data
		},
		success : function(response) {
			console.log(response);
			if (response.cod == "404") {
				alert(response.message);
			} else {
				
				var options = '<div class="panel panel-success"><div class="panel-heading">Relatório das chegadas de insumos' 
					+ '</div><div class="panel-body"><table class="table table-hover"><thead><tr><th><b>Insumo</b></th><th><b>Data de chegada</b></th><th><b>Quantidade</b></th></tr></thead><tbody>'; 
				for (i in response.data) {
					options += "<tr> <td> " + response.data[i].name +"</td><td>";
					options += response.data[i].dateArrive + "</td><td>";
					options += response.data[i].qtd.toFixed(2) + " Kg</td>";
					options += "<td><button class='btn btn-danger col-md-12 col-xs-12' onclick='deleteShipment(" + response.data[i].id + ", " + response.data[i].qtd + ", "  + '"' + response.data[i].name +'"' + ");'>Excluir</button></td></tr>";	
				}
				options += "</tbody></table></div></div>";
				if (response.data.length == 0){$("#reportShipment").html("Nenhuma entrada encontrada!");}
				else{$("#reportShipment").html(options);}
			}
		},
		failure : function(response) {
			atualy = false;
			error();
			console.error(response);
		}
	});
}

function deleteShipment(idS, qtdS, nameS)
{
	
	if (confirm("Essa ação não podera ser desfeita! Deseja mesmo remover?"))
    {
	$.ajax({
		method : "GET",
		url :  generateLink("deleteShipment"),
		data : {
			id : idS,
			qtd : qtdS, 
			name : nameS
		},
		success : function(response) {
			console.log(response);
			if (response.cod == "404") {
				alert(response.message);
			} else {
				
				if (response.data == true)
				{
					generateReport();
					$('#ShipmentForm').each (function(){
						  this.reset();
						});
					
					$("#snackbar").html("Remoção realizada com sucesso!");
					$("#snackbar").css("background","#137007");
					
				}
			else{
				$("#snackbar").html("Erro!<br>Não foi possível remover a compra!");
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
    };
}

function showToast() {
    var x = document.getElementById("snackbar")
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    return true;
}


$( "#salvar" ).click(function() {
	generateReport();
	
});

window.onload = function(e) {
	generateReport();
};

	