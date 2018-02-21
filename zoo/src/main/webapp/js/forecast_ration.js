

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
				getForecast();
			}
		},
		failure : function(response) {
			atualy = false;
			error();
			console.error(response);
		}
	});
}

var forecast = []; //Variavel global usada para guardar as receitas!
function getForecast()
{//Através de uma requisição AJAX, essa função irá buscar no banco TODOS os dados da tabela receita;
	$.ajax({
		method : "GET",
		url : "/zoo/getInputForecast",
		success : function(response) {
			console.log(response);
			if (response.cod == "404") {
				alert(response.message);
			} else {
				forecast = response.data; //Adicionamos o valor de retorno a variavel global insumo;
				generateReport();
			}
		},
		failure : function(response) {
			atualy = false;
			error();
			console.error(response);
		}
	});
}

function generateReport(){ 

var options = "<h1>PREVISÃO</h1><br>"
	var options = '<div class="panel panel-success"><div class="panel-heading">Previsibilidade dos insumos' 
		+ '</div><div class="panel-body"><table class="table table-hover"><thead><tr><th><b>Insumo</b></th><th><b>Qtd na fábrica (IFC)</b><th>Qtd para empenhar</th><th>Preço kg</th></th><th><b>Média diária</b></th><th><b>Média por produção</b></th><th><b>Suficiente/Dias</b></th><th><b>Suficiente/Produções</b></th><th><b>Status</b></th></tr></thead><tbody>'; 
	 

var mediaDiaria = {};
var mediaProd = {};
var durableDay = {};
var durableProd = {};
var stateInput = {};

var today = new Date();
var dT = parseInt(today.getDate(), 10);
var mT = parseInt(today.getMonth()+1 , 10); //January is 0!
var yT = parseInt(today.getFullYear(), 10);
for (i in forecast)
	{
		dY = forecast[i].firstDate;
		dY = dY.split("/");
		if (dY.length == 1)
			{
				dY = dY[0].split("-");
			}
		yY = parseInt(dY[0], 10);
		mY = parseInt(dY[1], 10);
		dY = parseInt(dY[2], 10);
		
		 year = yT - yY;
		 month = mT - mY;
		day = dT - dY;
		days = year * 365 + month * 30 + day;
		mediaD = forecast[i].totalOutput / days;
		var mediaP = forecast[i].totalOutput / forecast[i].qtdProdutions;
		
		mediaDiaria[forecast[i].nameInput]  = mediaD;
		mediaProd[forecast[i].nameInput]  = mediaP;		
		
		
		var durableToDays = stockNow[i].qtdInIFC / mediaD;
		var durableToProd =  stockNow[i].qtdInIFC / mediaP;
		
		durableToDays = parseInt(durableToDays);
		durableToProd = parseFloat(durableToProd.toFixed(2));
		
		
		durableDay[forecast[i].nameInput] = durableToDays;
		durableProd[forecast[i].nameInput] = durableToProd;
		
		if (durableToProd < 1)
			{
				classe = "class='bad_durable'";
				stateInput[forecast[i].nameInput] = "Em falta";
				var state = "Em falta";
			}
		else if (durableToProd >= 1 && durableToProd < 1.5)
			{
			 classe = "class='atention_durable'";
			 stateInput[forecast[i].nameInput] = "Necessita de atenção";
			 var state = "Necessita de atenção";
			}
		else{
			classe = "class='good_durable'";
			stateInput[forecast[i].nameInput] = "Suficiente";
			var state = "Suficiente";
		}
		options += "<tr><td>" + forecast[i].nameInput + "</td><td>";
		options += stockNow[i].qtdInIFC.toFixed(2) + " Kg</td><td>";
		options += stockNow[i].qtdExternalStorage.toFixed(2) + "Kg </td><td>";
		options += "R$" +stockNow[i].pricePerKg.toFixed(2) + "</td><td>";
	
		options += mediaD.toFixed(2) + " Kg</td><td>";
		options += mediaP.toFixed(2) + " Kg</td><td>";
		options += durableToDays.toFixed(2) + "</td><td>";
		options += durableToProd.toFixed(2) + "</td><td " + classe +" >"
		options += state + "</td></tr>";
	}
	
options += "</tbody></table></div></div>";
	
	$("#forecastRation").html(options);
}



$( "#calcular" ).click(function() {
	generateReport();
	
});


window.onload = function(e) {
	
	getStockNow();
};
