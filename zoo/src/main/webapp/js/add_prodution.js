/*
 Requisição Ajax usada na JSP 'add_prodution'
 Essa requisição busca os tipos de ração disponiveis no banco de determinada tipo de animal
 */
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
						hideAll();
					}
				},
				failure : function(response) {
					atualy = false;
					error();
					console.error(response);
				}
			});
		}

		
var stockNow = []; //Variavel global usada para guardar as receitas!
	function getStockNow()
		{//Através de uma requisição AJAX, essa função irá buscar no banco TODOS os dados da tabela receita;
			$.ajax({
				method : "GET",
				url : "/zoo/getStockNow",
				success : function(response) {
					console.log(response);
					if (response.cod == "404") {
						alert(response.message);
					} else {
						stockNow = response.data; //Adicionamos o valor de retorno a variavel global insumo;
					}
				},
				failure : function(response) {
					atualy = false;
					error();
					console.error(response);
				}
			});
		}
		
		
/*
 * Função usada para encontrar e colocar os insumos de determinada ração especifica
 * em seus devidos lugares;
 * A variavel global 'rationCurrent' foi definida com o objeto das receitas (tudo o que está na tabela "Receitas"
 * e que apresenta o tipo do animal solicitado) 
 */
function putInsumosForRation() {

	name1 = $("#name_ration").val();
	animal1 = $("#animal_type_ration").val();
	insumosList = [];
	if (name1 == "Selecione a ração") {
		hideAll();
	}
	for (i in rationCurrent) {
		if (rationCurrent[i].name == name1) {
			var cont = 1;
			/*
			 * Como os 13 espaços disponiveis já estão pré-definidos, basta ocultarmos eles quando não são usados
			 * e mostra-los quando necessário, além de colocar o nome de cada insumo
			 */
			
			while (cont < 13) {
				var txt = "insumo" + cont;
				var name = "#" + txt + "type";
				if (rationCurrent[i][txt] != "None")
					//Se o insumo existir, no caso, não ser nulo, iremos colocar o nome e mostrar na dela ("desocultar")
				{
					insumosList.push(rationCurrent[i][txt]);
					$(name).html(rationCurrent[i][txt]);//Colocamos o nome do insumo
					$(name).css({
						"display" : "inline"
							//Definimos que o nome dele irá aparecer
					});
					$("#" + txt).css({
						"display" : "inline"
							//Definimos que o 'input' para a entrada do dados irá aparecer
					});
					document.getElementById(txt).value = " ";
				} else {
					//Já se o insumo for vazio, no caso "None", apenas será ocultado o nome, o 'input' do insumo
					$(name).css({
						"display" : "none"
					});
					$("#" + txt).css({
						"display" : "none"
					});
					$("#" + txt).prop('novalidate', true);//Necessário para o form aceitar tratar um 'input' com display none
					$("#" + txt).prop('required', false);//O 'input' como não iá aparecer, não pode exigir algum valor do usuário
					document.getElementById(txt).value = "0";
				}
				cont += 1;
			}
		}
	}
	$("#Insumosinformations").css({
		"display" : "inline"
	});
}


//Função especifica para apenas oculpar o #Insumosinformations
function hideAll() {
	$("#Insumosinformations").css({
		"display" : "none"
	});
}



function showToast() {
    var x = document.getElementById("snackbar")
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    return true;
}

//this is the id of the form
function sendData(){
	custoProd = 0.0;
	cont = 1;
	for (i in insumosList)
		{	
			
			var insumoX = "insumo" + cont;
			var qtdInp = $("#" + insumoX).val();
			for (t in stockNow)
				{
					if (insumosList[i] == stockNow[t].nameInput)
						{
							custoProd += stockNow[t].pricePerKg * qtdInp;
						}
				}
			cont += 1;
		}
	alert("Custo: " + custoProd);
	    $.ajax({
	           type: "POST",
	           url: "/zoo/registerNewProdution",
	           data: $("#addProdForm").serialize() + "&prod.price=" + custoProd, // serializes the form's elements.
	   		success : function(response) {
				console.log(response);
				if (response.cod == "404") {
					alert(response.message);
				} else {
					if (response.data == true)
					{
						$('#addProdForm').each (function(){
							  this.reset();
							});
						hideAll();
						
						$("#snackbar").html("Cadastro realizado com sucesso!");
						$("#snackbar").css("background","#137007");

					}
				else{
					$("#snackbar").html("Atenção! <br> Não há insumos suficientes para esta produção!");
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

getStockNow();