//Essa requisição AJAX é utilizada para buscar TODAS as produções cadastradas no banco
var productions = "";
function getProdutions() {
	$.ajax({
		method : "GET",
		url : "/zoo/getProdutions",
		success : function(response) {
			console.log(response);
			if (response.cod == "404") {
				alert(response.message);
			} else {
				productions = response.data;
				//Definimos na variavel global 'productions' o objeto retornado do banco 
			}
		},
		failure : function(response) {
			atualy = false;
			error();
			console.error(response);
		}
	});
}


//Função usada para a geração de relátórios
function informations()
{
	//Coleta de dados que vão ser pertinentes ao relatório
	//Todos os dados são informados e definidos pelo usuário
	var nameRation = $("#name_ration").val();
	var typeAnimal = $("#animal_type_ration").val();
	var qtd_max = $("#qtd_final_max").val();
	var qtd_min = $("#qtd_final_min").val();
	var insumo = $( "select#insumo option:checked" ).val();
	var anoI = $("#dataInicio").val().toString();
	var anoF = $("#dataFim").val().toString(); 
	var costMa = $("#cost_max").val();
	var costMi = $("#cost_min").val();
	
	//Verificar se há dados inseridos pelo usuário
	//Caso não houver, ele muda o valor para "None", para informar que o campo foi deixado em branco
	if (anoI.length < 1)
	{
		anoI = "None";
	}
	
	if (anoF.length < 1)
	{
		anoF = "None";
	}
	
	anoI = anoI.split("-"); //Ano Inicial; A ordem é: Ano, mês e data
	anoF = anoF.split("-"); //Ano Final; A ordem é: Ano, mês e data
	
	if (nameRation == "Selecione a ração")
	{
		nameRation = "None";
	}
	
	if (typeAnimal == "Selecione o tipo de ração")
	{
		typeAnimal = "None";
	}
	
	if (qtd_max == 0)
	{
		qtd_max = 10000000000;
	}

	//Ambas as variaveis são usadas para informar a ordem de verificação dos dados;
	var infos = ["data", nameRation, typeAnimal, "qtd", "price"];
	var acessBanco = ["date", "name_ration", "type_animal", "qtd_final", "price"];
	prodFind = []; // Todas as produções que forem encontradas, isto é, que tenham dados validos de acordo com as informações inseridas pelo usuário vem nessa variavel;
	
	for (i in productions)//Será percorido toda a lista de produções existentes
		{
			var tf = true; 
			// Para sabermos se uma produção é valida, atribuinos uma variavel a ela, que representa o status atual dela
			//Se em algum momento ela não cumprir o que é pré definido pelo usuário, o valor dessa variavel é trocado para false, 
			// e ela já deixara de ser uma produção valida para o relatório
			for (t in infos)
				{
					var r = acessBanco[t];	
					
					
					if (r == "price")
						{
							if (costMa != 0){
								
								if(productions[i][r] > costMa)
									{
										tf = false;
									}
							}
							
							if (costMi != 0){
							
								if(productions[i][r] < costMi)
									{
										tf = false;
									}
							}
						}
					
					else if(r == "qtd_final")
						{
							if(productions[i][r] < qtd_min || productions[i][r] > qtd_max ) 
								// Verificação do valor: Ele deve ser maior que o minimo e menor que o maximo; 
								// Caso contráio, a produção não é válida
								{
									tf = false;
								}
						}
					
					else if(r == "date")
						{
						//Verficação da data de produção;

							var anoProd = productions[i][r].split("-");
									if (anoI.length == 3)
										{//Verificação se a data da produção é "maior" que a data de inicio
											
											//Nessa parte, as comparações são feitas entre a data da produção (anoProd), e o ano inicial (anoI) 
											if (anoProd[0] < anoI[0]) //Verifica se o ano é menor 
												{tf = false;}
											else if(anoProd[0] == anoI[0] && anoProd[1] < anoI[1]) // Verifica se o mês é menor 
												{tf = false;}
											else if(anoProd[0] == anoI[0] && anoProd[1] == anoI[1] && anoProd[2] < anoI[2]) // verifica se o dia é menor
												{tf=false;} 
									//Se qualquer um dos critérios acimas citados for verdadeiro, a produção é falsa, por que não corresponde a uma produção valida;
											//Se a produção é falsa, o valor tf recebe false para informar isso!
										}
									
									if (anoF.length == 3)
										{//Verificação se a data da produção é "menor" que a data final
											//Nessa parte, as comparações são feitas entre a data da produção (anoProd), e o ano final (anoF)  
											if (anoProd[0] > anoF[0]) //Verifica se o ano da produção é maior que o ano do ano final 
												{tf = false;}
											else if(anoProd[0] == anoF[0] && anoProd[1] > anoF[1])//Verifica se o mês é maior
												{tf = false;}
											else if(anoProd[0] == anoF[0] && anoProd[1] == anoF[1] && anoProd[2] > anoF[2])//Verifica se o dia é maior
												{tf=false;}
											//Se qualquer um dos critérios acima for verdadeiro, a produção não é válida;
												//Se a produção é falsa, o valor tf recebe false para informar isso!
										}	
						}
					
					else{
						//Veirificação: Se ambos os dados das 2 listas forem iguais, significa que a aquele dado é valido, o que NÃO torna a produção falsa
					if(productions[i][r] != infos[t])
						{
							if(infos[t] != "None")//Se caso os dados forem diferentes, e o valor foi informado pelo usuário (diferente de None), a produção é falsa
							{
								tf = false;
							}
						}

						}	
				}
			
			if (tf == true) //Se caso a produção chegar nesse ponto e não tiver sua variável tf afetada (no caso, continue com o calor true)
				{
					prodFind.push(productions[i]); //Adicionando a produção nas produções encontradas
				}
		}

		if (insumo != "")//Se houver algum insumo informado pelo usuário;
			{
				var calcs = getProdutionForInsumos(prodFind, insumo); //Chamamos a função getProdutionForInsumos, que irá fazer os devidos procedimentos como explicado a na própria função;
				var somaTotal = calcs[0]; //Soma total gasta pelo insumo
				prodFind = calcs[1]; //Produções encontradas que contenham o insumo e atendem a todos os outros critérios;
			}
		else{

		}
		
		//colocarDentro é a variavel que terá todo o conteudo que será colocado na tela para o usuário;
		var colocarDentro = '<div class="panel panel-success"><div class="panel-heading">Produções Encontradas'
				+ '</div><div class="panel-body"><table class="table table-hover"><thead><tr><th><b>Nome da Ração</b></th><th><b>Quantidade Produzida</b></th><th><b>Custo</b></th><th><b>Data do Cadastro</b></th><th><b>Responsável</b></th></tr></thead><tbody>';
		var somaTotalQtdFinais = 0.0;
		var priceTotal = 0.0;
		for (i in prodFind) {//Percorre todas as produções entradas
				colocarDentro += '<tr class = "prodFound" onclick="productionSpecific('
						+ prodFind[i].id + ", 'normal'" + ');">' //Informa o tipo do animal
						+ "<td>" + prodFind[i].name_ration + "</td>" + "<td>" //O nome da ração
						+ prodFind[i].qtd_final.toFixed(2) + " Kg</td>" + "<td>" // A quantidade final produzida
						+ "R$" + prodFind[i].price.toFixed(2) + "</td>" + "<td>" // A quantidade final produzida
	
						+ prodFind[i].date + "</td>" + "<td>" // A data em que foi produzida
						+ prodFind[i].user + "</td></tr>"; // E quam foi o usuário a cadastrar aquela produção
				somaTotalQtdFinais += prodFind[i].qtd_final;
				priceTotal += prodFind[i].price;
				
		}
		
		//Se caso não houver nenhuma produção encontrada, será "emitdo" esse alerta avisando o usuário!
		if (prodFind.length == 0){
			colocarDentro = '<div class="alert alert-warning" role="alert" class="alert"><strong>Atenção!</strong> Nenhuma produção encontrada! </div>';
			$("#caix").html(colocarDentro);
			cD = '<div class="alert alert-warning" role="alert" class="alert"><strong>Atenção!</strong> Nenhum insumo encontrado!! </div>';
			$("#infoInsumos").html(cD);
			$(".alert").alert();
		}
		else{
			calcsWithInsumos(prodFind); //Coloca os dados do insumo; 
			colocarDentro += "<tr><td><b> Consumo total de insumos: </b>"+ somaTotalQtdFinais.toFixed(2) +"Kg</td><td></td><td></td><td></td></tr>";
			colocarDentro += "<tr><td><b> Gasto total: </b>R$"+ priceTotal.toFixed(2) +"</td><td></td><td></td><td></td></tr>"
			colocarDentro += "</tbody></table></div></div>";//Fecha a tabela;
			$("#caix").html(colocarDentro);//Insere os dados no HTML
		}
}

function calcsWithInsumos(produt)
{
	var insumo = $( "select#insumo option:checked" ).val();
	if (insumo.length <= 1)//Se caso não houver nenhum insumo para consulta, ele irá informar ao usuário;
		{
			colocarDentro = '<div class="alert alert-warning" role="alert" class="alert"><strong>Atenção!</strong> Nenhum insumo inserido para a pesquisa! </div>';
			$("#infoInsumos").html(colocarDentro);
			$(".alert").alert();
		}
	else
		{
		
			var insu = getProdutionForInsumos(produt, insumo);//Pega todas as produções que conterem o insumo;
			var colocarDentro = '<div class="panel panel-success"><div class="panel-heading">Informações Insumo ' + insumo
				+ '</div><div class="panel-body"><table class="table table-hover"><tbody>';
			//Variaveis que serão usadas para os calculos;
			var maior = 0;
			var idMaior = 0;
			var menor = 100000;
			var idMenor = 0;
			var media = 0;
			var somaTotal = insu[0];
			for (i in insu[1])
				{
					if(insu[1][i][insu[2][i]] >= maior)//Encontrando o maior gasto do insumo!
						{
							maior = insu[1][i][insu[2][i]];
							idMaior = insu[1][i]; 
						}
					if(insu[1][i][insu[2][i]] <= menor)//Encontrando o menor gasto do insumo;
					{
						menor = insu[1][i][insu[2][i]];
						idMenor = insu[1][i];
					}
					media += insu[1][i][insu[2][i]];
		
		}
	media = media / insu[1].length; //Calculando a média!
	//Inserindo os dados dentro de uma variavel que posteriormente irá para o HTML!
	colocarDentro += "<tr><td><b>Maior uso foi: </b></td> <td>" + maior.toFixed(2) + " Kg - <b> Data: </b>" + idMaior["date"] + " - <b>Ração:</b> " + idMaior["name_ration"] + "</td></tr>";
	colocarDentro += "<tr><td><b>Menor uso foi: </b></td> <td>" + menor.toFixed(2) + " Kg - <b> Data: </b>" + idMenor["date"] + " - <b>Ração:</b> " + idMenor["name_ration"] + "</td></tr>";
	colocarDentro += "<tr><td><b>Gasto total do insumo: </b></td> <td>" + somaTotal.toFixed(2) + " Kg</td></tr>";
	colocarDentro += "<tr><td><b>A Média de uso atual é: </b></td> <td>" + media.toFixed(2) + " Kg</td></tr> </tbody></table>";
	$("#infoInsumos").html(colocarDentro);//Colocando os dados no HTML;
	if(maior <= 0 && menor <= 0 || somaTotal <= 0)//Se caso as variaveis contiveram ainda os seus valores iniciais, (continuarem intactas), significa que nenhum insumo foi encontrado!
		{
			colocarDentro = '<div class="alert alert-warning" role="alert"><strong>Atenção!</strong> Nenhum insumo encontrado! </div>';
			$("#infoInsumos").html(colocarDentro);
			$(".alert").alert();//Informando que ao usuário que nunhum insumo foi encontrado!
		}
	}
}

//Função que irá encontrar, dentre as produções informadas, quais contem o insumo informado
function getProdutionForInsumos(productions, insumoX)
{
	var somaTotal = 0;
	var prod = [];
	var whereInsumo = [];
	for (i in productions)//Percore as produções
		{
			for (t in insumos)//Percore as receitas com os insumos
				{
					if(insumos[t]["name"] == productions[i]["name_ration"]) //Verifica se a receita pertence aquela produção, verificando se ambas tem o mesmo nome
						{
							var cont = 1;
							for (k in insumos[t])//Percore a receita encontrada
								{
									var test = "insumo" + cont;
									if (insumos[t][test] == insumoX && productions[i][test] != 0) //Verifica se o insumo é igual ao insumo informado como paramento e se na produção ele é maior que 0
										{
											somaTotal += productions[i][test]; //Adiciona o valor do gasto desse insumo na variave soma;
											prod.push(productions[i]); //Guarda a produção!
											whereInsumo.push(test);//Guarda em qual insumo é que ele é igual (insumo1, insumo2, ..., insumo12, insumo13);
											break;
										}
									cont += 1;
								}
							break;
						}
				}
		}
	return [somaTotal, prod, whereInsumo]; //Retorna os dados!
}

var insumos = []; //Variavel global usada para guardar as receitas!
function listInsumos()
{//Através de uma requisição AJAX, essa função irá buscar no banco TODOS os dados da tabela receita;
	$.ajax({
		method : "GET",
		url : "/zoo/getAllInsumos",
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


//Função voltada para encontrar os insumos de uma produção, e inserir os dados dentro do HTML
//Id é o Id da produção e type representa o que será feito(se é apenas visualização ou edição/remoção)
function productionSpecific(id, type) {
	var cert;
	var colocarDentro;
	for (i in productions) {
		if (productions[i].id == id) {
			cert = productions[i];
		}
	}
	colocarDentro = '<div class="panel panel-success"><div class="panel-heading">';
	colocarDentro += cert.name_ration;
	colocarDentro += '</div><div class="panel-body"><table class="table table-hover"><thead><tr><th>Insumos</th><th>Quantidade</th></tr></thead><tbody><tr>';
	var insumos;
	animal1 = $("#animal_type_ration").val();
	$.ajax({
				method : "GET",
				url : "/zoo/getInsumos",
				data : {
					name : cert.name_ration,
					animal : cert.type_animal
				},
				success : function(response) {
					console.log(response);
					if (response.cod == "404") {
						alert(response.message);
					} else {
						insumos = response.data;
						var cont = 1;
						var aux;
						while (cont < 13) {
							aux = "insumo" + cont;
							if (cert[aux] > 0) {
								colocarDentro += "<tr><td>" + insumos[aux]
										+ "</td>";
								// As produções são mostradas nas JSPs Index e na de Remove;
								// Os dados apresentados nelas são os mesmos, a diferença é a forma como serão apresentas
								// Na index, os dados são apenas colocar em uma tabela
								// Já na edit/remove, os dados são colocados dentro de um input, possibilitando a edição do usuário
								// Além disso, nessa JSP será disponibilizado 2 botões (editar e remover) 
								if (type == "normal") 
								// Type = Normal: Significa que o usuário está no modulo de visualização 
									{
									colocarDentro += "<td>" + cert[aux].toFixed(2)
											+ " Kg</td></tr>";
								} else 
								// Type = Qualquer outra coisa: Significa que o usuário está na parte de edição ou exclusão de produção 
								{
									colocarDentro += "<td><input type='number' id='"
											+ aux
											+ "' value="
											+ cert[aux]
											+ " name='"
											+ aux
											+ "' required></td></tr>";
								}
							} else {
								colocarDentro += '<input type="number" min=0 class="form-control oculto" id="'
										+ aux
										+ '" name="'
										+ aux
										+ '"  value=0 required novalidate>';
							}
							cont += 1;
						}
						colocarDentro += '<input type="number" class="oculto" id="id" name="id" value='
								+ cert.id + " novalidate>";
						//Definimos um input com o Id da produção e o 'escondemos' dentro do HTML para buscarmos essa informação depois
						
						colocarDentro += "<tr><td><b>Total:</></td>";
						colocarDentro += "<td>" + cert.qtd_final.toFixed(2) + " Kg</td></tr>";
						colocarDentro += "<tr><td><b>Responsável: </b></td><td>" + cert.user + "</td></tr>";
						colocarDentro += "<tr><td><b>Data: </b></td><td>" + cert.date + "</td></tr>";
						colocarDentro += "<tr><td><b>Custo: </b></td><td>R$" + cert.price.toFixed(2) + "</td></tr>";

						colocarDentro += "</div></div>";
						$("#caix").html(colocarDentro);

					}
				},
				failure : function(response) {
					atualy = false;
					error();
					console.error(response);
				}
			});
}



var rationCurrent = "";
function getNameRations() {
	animal1 = $("#animal_type_ration").val();
	$.ajax({
		method : "GET",
		url : "/zoo/getNameRations",
		data : {
			animal : animal1
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