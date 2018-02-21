function generateReport()
{
	var nameInput = $( "select#name option:checked" ).val();
	var data = $("#dateBuy").val();
	if (data.length < 4){data = "NaN";}
	if(nameInput == "Todos"){nameInput = "0"; }
	$.ajax({
		method : "GET",
		url : "/zoo/buyInputReport",
		data : {
			name : nameInput,
			year : data
		},
		success : function(response) {
			console.log(response);
			if (response.cod == "404") {
				alert(response.message);
			} else {
				var options = '<div class="panel panel-success"><div class="panel-heading">Relatório das licitações' 
					+ '</div><div class="panel-body"><table class="table table-hover"><thead><tr><th><b>Insumo</b></th><th><b>Data da compra</b></th><th><b>Quantidade</b></th><th><b>Preço total</b></th><th><b>Preço por Kg</b></th></tr></thead><tbody>'; 

				for (i in response.data) {
					options += "<tr> <td> " + response.data[i].name +"</td><td>";
					options += response.data[i].dateBuy + "</td><td>";
					options += response.data[i].qtdBuy.toFixed(2) + "</td><td>";
					options += "R$"+response.data[i].priceTotal.toFixed(2) + "</td><td>";
					options += "R$"+response.data[i].pricePerKg.toFixed(2) + "</td><td></tr>";
				}
				
				options += "</tbody></table></div></div>";
				if (response.data.length == 0){$("#reportBuy").html("Nenhuma compra encontrada!");}
				else{$("#reportBuy").html(options);}
			}
		},
		failure : function(response) {
			atualy = false;
			error();
			console.error(response);
		}
	});	

}


$( "#salvar" ).click(function() {
	generateReport();
	
});

window.onload = function(e) {
	generateReport();
};



	