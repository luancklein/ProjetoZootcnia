/*
 Requisição Ajax usada na JSP 'add_prodution'
 Essa requisição busca os tipos de ração disponiveis no banco de determinada tipo de animal
 */
var rationCurrent = "";
		function getNameRations() {
			var nameAnimal = $( "select#animal_type_ration option:checked" ).val();
			$.ajax({
				method : "GET",
				url : "/zoo/getNameRationsToReport",
				data : {
					animal : nameAnimal
				},
				success : function(response) {
					console.log(response);
					if (response.cod == "404") {
						alert(response.message);
					} else {
						rationCurrent = response.data; 
						//Adiciona-se o objeto encontrado a variavel global 'rationCurrent',
						// para ser utilizada posterioremente, aproveitando a requisição e evitando outra
						var options = "<option>Selecione a ração</option>";
						for (i in rationCurrent) {
							/*
							 Após a busca retornar um objeto com todos os tipos de ração e seus respectivos insumos, 
							 adiciona-se ao 'select' os options com os nomes das rações encontradas! 
							 */
							options += "<option>" + rationCurrent[i].name
									+ "</option>";
						}
						$("#name_ration").html(options);
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
			var nameInput = $( "select#name option:checked" ).val();
			var date = $("#dateBuy").val();
			 nameProdution = $( "select#name_ration option:checked" ).val();
			 nameAnimal = $( "select#animal_type_ration option:checked" ).val();
			
			if (nameInput == "Todos"){nameInput = "0";}
			
			if (nameAnimal == "Selecione o tipo de ração"){nameAnimal = "0";}
			if (nameProdution == "Selecione a ração"){nameProdution = "0";}
			
			console.log("SAPORRA: " + nameAnimal);
			if (date.length < 4){date = "NaN";}
			if(nameInput == "Todos"){nameInput = "0"; }
			$.ajax({
				method : "GET",
				url : "/zoo/outputInputsReport",
				data : {
					name : nameInput,
					year : date,
					prodution : nameProdution, 
					animal : nameAnimal
				},
				success : function(response) {
					console.log(response);
					if (response.cod == "404") {
						alert(response.message);
					} else {
						var qtdTotal = 0;
						var n = 0;
						
						var options = '<div class="panel panel-success"><div class="panel-heading">Relatório das saídas de insumos' 
							+ '</div><div class="panel-body"><table class="table table-hover"><thead><tr><th><b>Insumo</b></th><th><b>Animal</b></th><th><b>Ração</b></th><th><b>Quantidade</b></th><th><b>Data</b></th></tr></thead><tbody>'; 
						 
						for (i in response.data) {
							options += "<tr> <td> " + response.data[i].nameInput +"</td><td>";
							options += response.data[i].animal + "</td><td>";
							options += response.data[i].nameProdution + "</td><td>";
							options += response.data[i].qtd.toFixed(2) + " Kg </td><td>";
							options += response.data[i].date + "</td><td></tr>";
							qtdTotal += response.data[i].qtd;
							n += 1;
						}

						
						options += "</tbody></table></div></div>";
						
						options += '<div class="panel panel-info"><div class="panel-heading">Informações</div><div class="panel-body"><table class="table table-hover">';
						options += "<tr><td><b>Quantidade total gasta: </b>" + qtdTotal.toFixed(2) + " Kg </td></tr>";
						options += "<tr><td><b>Gasto médio por produção: </b>" + (qtdTotal / n).toFixed(2) + " Kg </td></tr></tbody></table></div></div>";
						if (response.data.length == 0){$("#reportOutputs").html("Nenhuma compra encontrada!");}
						else{$("#reportOutputs").html(options);}
					}
				},
				failure : function(response) {
					atualy = false;
					error();
					console.error(response);
				}
			});
		});