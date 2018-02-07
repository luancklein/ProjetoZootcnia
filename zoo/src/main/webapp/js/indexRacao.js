//Essa requisição AJAX é utilizada para buscar TODAS as produções cadastradas no banco
var productions = "";
function getProdutions(type) {
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
				//com o objetivo de usa-la depois, evitando fazer inumeras requisiçoes a cada vez que o usuario desejar
				//visualizar algum tipo de ração!
						buildMenuLeftProdutions(type)//Função que irá gerar o menu lateral!
					}
		},
		failure : function(response) {
			atualy = false;
			error();
			console.error(response);
		}
	});
}



//Função usada para contruir o menu lateral nas JSP's 'add_prodution' e 'remove_prodution'
function buildMenuLeftProdutions(type) {
	var suinos = [];
	var bovinos = [];
	var ovinos = [];
	
	//O primeiro passo é separar cada produção de acordo com seu respectivo tipo de animal;
	//Para isso, usamos 3 listas distintas 'suinos', 'bovinos', 'ovinos'
	for (i in productions) {
		switch (productions[i].type_animal) {
		case "Suína":
			if (suinos.indexOf(productions[i].name_ration) == -1) {
				suinos.push(productions[i].name_ration);
			}
			break;

		case "Ovina":
			if (ovinos.indexOf(productions[i].name_ration) == -1) {
				ovinos.push(productions[i].name_ration);
			}
			break;

		case "Bovina":
			if (bovinos.indexOf(productions[i].name_ration) == -1) {
				bovinos.push(productions[i].name_ration);
			}
			break;
		}
	}
	
	
    // O segundo passo é apenas contruir o HTML de acordo com as produções
	//Para isso, usamos uma variavel local que irá conter o HTML em forma de string
	var colocarDentro = '<div class="alert alert-success" role="alert">RAÇÕES SUÍNAS</div><div class="list-group" id="list_suino">';
	
	//A cada tipo de produção que apresentar pelo menos uma produção cadastrada, cria-se um botão com o nome da ração
	//Quando esse botão for clicado, será chamada a função 'typeProductionSelected', passando como parametros
	//O nome da ração, e a definição do que será feito, se está no módulo de visualização ou de exclusão
	
	//O processo será repetido para os 3 tipos de animais
	for (i in suinos) {
		colocarDentro += '<button class="list-group-item" onclick="typeProductionSelected('
				+ "'"
				+ suinos[i] 
				+ "',"
				+ "'"
				+ type //Processo necessário para as variveis serem passadas como strings, e não haver conflito na estrutura do HTML
				+ "'"
				+ ' )">'
				+ suinos[i] + '</button>';

	}
	colocarDentro += '</div> <div class="alert alert-success" role="alert">RAÇÕES OVINAS</div> <div class="list-group" id="list_ovino">';
	for (i in ovinos) {
		colocarDentro += '<button class="list-group-item" onclick="typeProductionSelected('
				+ "'"
				+ ovinos[i]
				+ "', "
				+ "'"
				+ type
				+ "'"
				+ ' )">'
				+ ovinos[i] + '</button>';
	}
	colocarDentro += '</div><div class="alert alert-success" role="alert">RAÇÕES BOVINAS</div><div class="list-group" id="list_bovino">';
	for (i in bovinos) {
		colocarDentro += '<button class="list-group-item" onclick="typeProductionSelected('
				+ "'"
				+ bovinos[i]
				+ "', "
				+ "'"
				+ type
				+ "'"
				+ ' )">'
				+ bovinos[i] + '</button>';
	}
	colocarDentro += "</div>";
	$("#menuRations").html(colocarDentro);//Após isso, irá aparecer o menu lateral das produções de ração 
}



//Função Intermediaria, que é chamada após o usuario clicar em algum botão do menu lateral
//A função irá listar todos as produções encontradas com aquele nome
function typeProductionSelected(nameRation, type) {
	var colocarDentro = '<div class="panel panel-success"><div class="panel-heading">Produções Encontradas - '
			+ nameRation
			+ '</div><div class="panel-body"><table class="table table-hover"><thead><tr><th><b>Nome da Produção</b></th><th><b>Quantidade Produzida</b></th><th><b>Data da Produção</b></th><th><b>Responsável</b></th></tr></thead><tbody>';
//Ele percorre a variavel global 'productions', e quando encontrar alguma produção com aquele nome, ele adicina uma linha na tabela
	for (i in productions) {
		if (productions[i].name_ration == nameRation) {
			colocarDentro += '<tr class="prodFound" onclick="productionSpecific('
					+ productions[i].id + ',' + "'" + type + "'" + ');">' //Informa o tipo do animal
					+ "<td>" + productions[i].name_ration + "</td>" + "<td>" //O nome da ração
					+ productions[i].qtd_final + "</td>" + "<td>" // A quantidade final produzida
					+ productions[i].date + "</td>" + "<td>" // A data em que foi produzida
					+ productions[i].user + "</td></tr>"; // E quam foi o usuário a cadastrar aquela produção
		}
	}
	colocarDentro += "</tbody></table></div></div>";
	$("#caix").html(colocarDentro);
}

// Função voltada para encontrar os insumos de uma produção, e inserir os dados dentro do HTML
// Id é o Id da produção e type representa o que será feito(se é apenas visualização ou edição/remoção)
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
								
								// Type = Normal: Significa que o usuário está no modulo de visualização 
									
									colocarDentro += "<td>" + cert[aux]
									+ "kg</td></tr>";
							}
							cont += 1;
						}
						
						colocarDentro += '<input type="number" class="oculto" id="id" name="id" value='
								+ cert.id + " novalidate>";
						//Definimos um input com o Id da produção e o 'escondemos' dentro do HTML para buscarmos essa informação depois
						
						colocarDentro += "<tr><td>TOTAL</td>";
						colocarDentro += "<td>" + cert.qtd_final + "kg</td></tr>";
						colocarDentro += '</form> </tbody></table>';
						if (type != "normal") {
							colocarDentro += '<input type="button" onclick="sendForm();" class="btn btn-danger col-md-12 col-xs-12 col-md-offset-2" id="buttonForm2"  value="Remover produção">';
							// Já esse botão chama um função JavaScript, que atráves de uma requisão AJAX, irá excluir a produção do banco
							// O Id utilizado está implicito no HTML. Quando a função é chamada, ela busca o ID dentro do HTML
						
						}
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