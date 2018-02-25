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

		var names = [];
		var namesQtds = {};
		var namesPrices = {};
		var namesQtdProd = {};
		
function generateReport(){
			var nameInput = $( "select#name option:checked" ).val();
			var date = $("#dateBuy").val();
			 nameProdution = $( "select#name_ration option:checked" ).val();
			 nameAnimal = $( "select#animal_type_ration option:checked" ).val();
			
			if (nameInput == "Todos"){nameInput = "0";}
			
			if (nameAnimal == "Selecione o tipo de ração"){nameAnimal = "0";}
			if (nameProdution == "Selecione a ração"){nameProdution = "0";}
			
			
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
						
						names = [];
						namesQtds = {};
						namesPrices = {};
						namesQtdProd = {};
						
						var qtdTotal = 0;
						var n = 0;
						var priceTotal = 0.0;
					
						
						var maiorQtd = 0;
						var idMaiorQtd = 0;
						var menorQtd = 100000;
						var idMenorQtd = 0;
						var media = 0;
						
						var maCus = 0;
						var meCus = 100000;
						var idMeCus = 0;
						var idMaCus = 0;
		
						 
						var options = '<div class="panel panel-success"><div class="panel-heading">Relatório das saídas de insumos' 
							+ '</div><div class="panel-body"><table class="table table-hover"><thead><tr><th><b>Insumo</b></th><th><b>Animal</b></th><th><b>Ração</b></th><th><b>Quantidade</b></th><th><b>Custo</b></th><th><b>Data</b></th></tr></thead><tbody>'; 
						 
						for (i in response.data) {
							
							if(names.indexOf(response.data[i].nameInput) != -1)
								{
									namesQtds[response.data[i].nameInput] += response.data[i].qtd;
									namesPrices[response.data[i].nameInput] += response.data[i].price;
									namesQtdProd[response.data[i].nameInput] += 1;
								}
							else{
								names.push(response.data[i].nameInput);
								namesQtds[response.data[i].nameInput] = 0;
								namesPrices[response.data[i].nameInput] = 0;
								namesQtdProd[response.data[i].nameInput] = 0;
							}
							
							options += "<tr> <td> " + response.data[i].nameInput +"</td><td>";
							options += response.data[i].animal + "</td><td>";
							options += response.data[i].nameProdution + "</td><td>";
							options += response.data[i].qtd.toFixed(2) + " Kg </td><td>";
							options += "R$" + response.data[i].price.toFixed(2) + "</td><td>";
							options += response.data[i].date + "</td><td></tr>";
							qtdTotal += response.data[i].qtd;
							n += 1;
							priceTotal += response.data[i].price;
							
							
							
							if (response.data[i].qtd > maiorQtd)
								{
									maiorQtd = response.data[i].qtd;
									idMaiorQtd = i;
								}
							
							if (response.data[i].qtd < menorQtd)
							{
								menorQtd = response.data[i].qtd;
								idMenorQtd = i;
							}
							
							if (response.data[i].price >= maCus)
								{
									maCus = response.data[i].price;
									idMaCus = i;
								}
							if (response.data[i].price <= meCus)
							{
								meCus = response.data[i].price;
								idMeCus = i;
							}
							
							
						}

						
						if (nameInput == "0")
							{
								nameInput = "Todos";
							}
						
						options += "</tbody></table></div></div>";
						options += '<div class="panel panel-info"><div class="panel-heading">Informações sobre o insumo: ' + nameInput + '</div><div class="panel-body"><table class="table table-hover">';
						options += "<tr><td>  <b><i>INFORMAÇÕES SOBRE O CUSTO </b></i></td><td></td><td></td></tr>";
						options += "<tr><td><b>Custo total:</b> R$" + priceTotal.toFixed(2) + "</td><td></td><td></td></tr>";
						options += "<tr><td><b>Custo médio por produção:</b> R$" + (priceTotal / n).toFixed(2) + "</td><td></td><td></td></tr>";
						options += "<tr><td><b>Maior custo foi: </b></td> <td>R$" + maCus.toFixed(2) + " - <b> Data: </b>" + response.data[idMaCus].date + " - <b>Animal:</b> " + response.data[idMaCus].animal + " - <b>Ração </b>" + response.data[idMaCus].nameProdution +"</td></tr>";
						options += "<tr><td><b>Menor custo foi: </b></td> <td>R$" + meCus.toFixed(2) + " - <b> Data: </b>" + response.data[idMeCus].date + " - <b>Animal:</b> " + response.data[idMeCus].animal + " - <b>Ração </b>" + response.data[idMeCus].nameProdution +"</td></tr>";
						
						options += "<tr><td></td><td></td><td></td></tr>";
						options += "<tr><td><b><i>INFORMAÇÕES SOBRE A QUANTIDADE </b></i></td><td></td><td></td></tr>";
						options += "<tr><td><b>Quantidade total gasta: </b>" + qtdTotal.toFixed(2) + " Kg </td><td></td><td></td></tr>";
						options += "<tr><td><b>Gasto médio por produção: </b>" + (qtdTotal / n).toFixed(2) + " Kg </td><td></td><td></td></tr>";
						options += "<tr><td><b>Maior uso foi: </b></td> <td>" + maCus.toFixed(2) + "Kg - <b> Data: </b>" + response.data[idMaiorQtd].date + " - <b>Animal:</b> " + response.data[idMaiorQtd].animal + " - <b>Ração </b>" + response.data[idMaiorQtd].nameProdution +"</td></tr>";
						options += "<tr><td><b>Menor uso foi: </b></td> <td>" + meCus.toFixed(2) + "Kg - <b> Data: </b>" + response.data[idMenorQtd].date + " - <b>Animal:</b> " + response.data[idMenorQtd].animal + " - <b>Ração </b>" + response.data[idMenorQtd].nameProdution +"</td></tr></tbody></table></div></div>";
						
						
						if (response.data.length == 0){$("#reportOutputs").html("Nenhuma compra encontrada!");}
						else{$("#reportOutputs").html(options);drawChart();}
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


google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawChart);


function drawChart() {
	list = [ ['Insumos', 'Quantidade total (Kg)', 'Valor total (R$)']]
	for (i in names)
		{
			list.push([names[i], namesQtds[names[i]], namesPrices[names[i]]])
		}
	
	
	
  var data = google.visualization.arrayToDataTable(list);

  var options = {
    chart: {
      title: 'Uso dos insumos',
      subtitle: 'Quantidades e valores gastas e quantidade de produções',
    }
  };

  var chart = new google.charts.Bar(document.getElementById('columnchart_material'));

  chart.draw(data, google.charts.Bar.convertOptions(options));
}