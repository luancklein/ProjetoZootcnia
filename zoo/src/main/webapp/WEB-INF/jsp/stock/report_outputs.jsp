<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<c:import url="/includes/header.jsp" />
<main class="container">

<div class="form-group col-md-3 col-xs-12">

	<div class="form-group col-md-12 col-xs-12">
		<label for="sel1">Selecione o insumo:</label> <select
			class="form-control" id="name" name="name">
			<option>Todos</option>

			<c:forEach items="${list}" var="input">
				<option>${input.nameInput}</option>
			</c:forEach>
		</select>
	</div>

	<div class="form-group col-md-12 col-xs-12">
		<label for="sel1">Selecione o tipo de ra��o:</label> <select
			class="form-control" id="animal_type_ration" name="type_animal"
			onchange="getNameRations();">
			<option>Selecione o tipo de ra��o</option>
			<option>Bovina</option>
			<option>Equina</option>
			<option>Ovina</option>
			<option>Su�na</option>
		</select>
	</div>
	
	<div class="form-group col-md-12 col-xs-12">
		<label for="sel1">Nome da ra��o:</label> <select class="form-control"
			id="name_ration" name="name_ration" disable>
			<option>Selecione a ra��o</option>
		</select>
	</div>

	<div class="form-group col-md-12 col-xs-12">
		<label for="sel1">Digite um ano:</label> <input type="text"
			class="form-control" maxlength="4" id="dateBuy" name="dateBuy">
	</div>

	<input type="button" value="Pesquisar" id="salvar"
		class="btn btn-success salvar col-md-12 col-xs-12 col-md-offset-12">
</div>



<div class="form-group col-md-9 col-xs-12" id="reportOutputs"></div>
<div id="columnchart_material" style="width: 100%; height: 500px;  display: table;"></div>


</main>
<c:import url="/includes/footer.jsp" />
<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
<script src="<c:url value="/js/report_outputs.js" />"></script>