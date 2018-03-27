<%@ page contentType="text/html; charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<c:import url="/includes/header.jsp" />
<main class="container">

<div class="form-group col-md-3 col-xs-12">
<div class="alert alert-success" role="alert">FILTROS PARA CONSULTA</div>
	<label for="sel1">Selecione o tipo de ração:</label> 
	<select
		class="form-control" id="animal_type_ration" name="animal_type_ration" onchange="getNameRations();">
		<option>Selecione o tipo de ração</option>
		<option>Bovina</option>
		<option>Equina</option>
		<option>Ovina</option>
		<option>Suína</option>
	</select>
	
	<label for="sel1">Nome da ração:</label> 
	<select class="form-control"
		id="name_ration" name="name_ration" disable>
		<option>Selecione a ração</option>
	</select> 
				<label for="sel1">Insumo:</label> <select
					class="form-control" id="insumo" name="insumo">
					<option value="">Todos</option>

					<c:forEach items="${list}" var="input">
						<option>${input.nameInput}</option>
					</c:forEach>
				</select>
	
	<label for="sel1">Data Início:</label> 
	<input type="date"
		id="dataInicio" class="form-control" > 
		
	<label for="sel1">Data fim:</label> 
	<input type="date"
		id="dataFim" class="form-control"> 
	
	
	<label for="sel1">Custo mínimo:</label> 
	<input type="number" class="form-control" id="cost_min"
		name="cost_min" min=0 value=0> 
	
	<label for="sel1">Custo máximo:</label> 
	<input type="number" class="form-control" id="cost_max"
		name="cost_max" min=0 value=0> 
		

	
	<label for="sel1">Quantidade final minima da produção:</label> 
	<input type="number" class="form-control" id="qtd_final_min" name="qtd_final_min" min=0
		value=0> 
		
	<label for="sel1">Quantidade final maxima produção:</label> 
	<input type="number" class="form-control" id="qtd_final_max"
		name="qtd_final_max" min=0 value=0> 
	<br>
	<button id="bt_get_inform"
		class="btn btn-success col-md-12 col-xs-12"
		onclick="informations();">Pesquisar</button>
		
		<input type="button" value="Imprimir" id="imprimir"
		class="btn btn-primary salvar col-md-12 col-xs-12 col-md-offset-12">

	 
	
		
</div>
<div id="fullReport">
<div id="caix" class="col-md-9 col-xs-12"></div>
<div id="infoInsumos"class="col-md-8 col-xs-12"><h3>Neste espaço irão aparecer a previsão de cada insumo!</h3>
<h4>Basta clicar no botão "Pesquisar"!</h4></div> </main>
</div>

<c:import url="/includes/footer.jsp" />
<script src="<c:url value="/js/generateAutoLink.js" />"></script>
<script src="<c:url value="/js/informations_prod.js" />"></script>
<script>
	window.onload = function(e) {
		getProdutions();
		listInsumos();
	};
</script>