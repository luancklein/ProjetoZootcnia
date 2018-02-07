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

//Função usada na JSP  edit_type_ration, para colocar como valor dos inputs, o insumo encontrado na receita!
function putInsumosForEdition()
{
	var nameRation = $("#name_ration").val();//Pega o nome da ração
	for (i in insumos)//Percorre a lista com os insumos
		{
			if (insumos[i]["name"] == nameRation)//Verificar se o nome da receita é o mesmo que o que foi selecionado pelo usuário
				{
					k = 1;
					for (t in insumos[i]) //Percore a receita especifica
						{
							name = "insumo" + k;//Usada para percorrer todos os 12 insumos;
							if (insumos[i][name] != "None") //Verifica se o insumo existe, se caso ele não existe o valor de é None
								{
									$('select[name="name"]').val(insumos[i][name]);
									//$("#" + name).val(insumos[i][name]);//Coloca o valor do insumo no value do input que se refere ao numero do insumo 
								}
							k += 1;
						}
					break; //Se ele chegar aqui, significa que ele já encontrou a receita, e não precisa mais continuar o loop;
				}
		}
}

//Função usada na JSP edit_type_ration para não deixar fazer o submit com espaços em branco nos inputs dos insumos!
function noEmptyDataEditReceita(){
	var r = confirm("Tem certeza disso? As produções cadastradas com esses insumos também serão modificadas!");
	if (r == true)
		{
	var name = "insumo";
	for (var i = 1; i < 13; i++)//Percorendo os 12 insumos
		{
			var k =  name + i;//Usada para pegar o id (insumo + n);
			if ($("#" + k).val() == "")//Verificando se o valor do input é igual a vazio (ou igual a "")
				{ //Se caso o input do insumoX estiver vazio, o valor será alterado para " ";
					$("#" + k).val(" ");//Aterando o valor do campo para " ";
				}
		}
	$("#changeInsumos").submit(); //Fazendo o submit via JS;

		}
}


