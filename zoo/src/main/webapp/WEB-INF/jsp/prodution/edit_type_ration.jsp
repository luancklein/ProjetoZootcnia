<%@ page contentType="text/html; charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<c:import url="/includes/header.jsp" />
<main class="container">

<form method="POST" action="<c:url value="/editTypeRation" />" id="changeInsumos">
	<div class="col-md-8 col-xs-10 col-md-offset-2 col-xs-offset-1"
		id="conteudo">
		<div id="caixa">

				<div id="nome" class="col-md-12">Editar fórmula</div>
				<div class="form-group col-md-12 col-xs-12">
					<label for="sel1">Selecione o tipo de ração:</label> <select
						class="form-control" id="animal_type_ration"
						name="animal_type_ration" onchange="getNameRations();" required>
						<option>Selecione o tipo de ração</option>
						<option>Bovina</option>
						<option>Equina</option>
						<option>Ovina</option>
						<option>Suína</option>
					</select>
				</div>

				<div class="form-group col-md-12 col-xs-12">
					<label for="sel1">Nome da ração:</label> <select
						class="form-control" id="name_ration" name="name_ration"  onchange="putInsumosForEdition();" disable>
						<option>Selecione a ração</option>
					</select>
				</div>

				<br>
				<h5>
					<b>Insumos</b>
				</h5>

				<div class="form-group col-md-6 col-xs-12">
				<label for="text"> Insumo 1</label> <select class="form-control"
					id="insumo1" name="insumo1">
					<option>Selecione o insumo</option>
					<c:forEach items="${list}" var="input">
						<option>${input.nameInput}</option>
					</c:forEach>
				</select>
			</div>

			<div class="form-group col-md-6 col-xs-12">
				<label for="text"> Insumo 2</label><select class="form-control"
					id="insumo2" name="insumo2">
					<option>Selecione o insumo</option>
					<c:forEach items="${list}" var="input">
						<option>${input.nameInput}</option>
					</c:forEach>
				</select>
			</div>

			<div class="form-group col-md-6 col-xs-12">
				<label for="text"> Insumo 3</label> <select class="form-control"
					id="insumo3" name="insumo3">
					<option>Selecione o insumo</option>
					<c:forEach items="${list}" var="input">
						<option>${input.nameInput}</option>
					</c:forEach>
				</select>
			</div>

			<div class="form-group col-md-6 col-xs-12">
				<label for="text"> Insumo 4</label> <select class="form-control"
					id="insumo4" name="insumo4">
					<option>Selecione o insumo</option>
					<c:forEach items="${list}" var="input">
						<option>${input.nameInput}</option>
					</c:forEach>
				</select>
			</div>

			<div class="form-group col-md-6 col-xs-12">
				<label for="text"> Insumo 5</label> <select class="form-control"
					id="insumo5" name="insumo5">
					<option>Selecione o insumo</option>
					<c:forEach items="${list}" var="input">
						<option>${input.nameInput}</option>
					</c:forEach>
				</select>
			</div>

			<div class="form-group col-md-6 col-xs-12">
				<label for="text"> Insumo 6</label> 
				<select class="form-control"
					id="insumo6" name="insumo6">
					<option>Selecione o insumo</option>
					<c:forEach items="${list}" var="input">
						<option>${input.nameInput}</option>
					</c:forEach>
				</select>
			</div>

			<div class="form-group col-md-6 col-xs-12">
				<label for="text"> Insumo 7</label> 
				<select class="form-control"
					id="insumo7" name="insumo7">
					<option>Selecione o insumo</option>
					<c:forEach items="${list}" var="input">
						<option>${input.nameInput}</option>
					</c:forEach>
				</select>
			</div>

			<div class="form-group col-md-6 col-xs-12">
				<label for="text"> Insumo 8</label> 
				<select class="form-control"
					id="insumo8" name="insumo8">
					<option>Selecione o insumo</option>
					<c:forEach items="${list}" var="input">
						<option>${input.nameInput}</option>
					</c:forEach>
				</select>
			</div>

			<div class="form-group col-md-6 col-xs-12">
				<label for="text"> Insumo 9</label> 
				<select class="form-control"
					id="insumo9" name="insumo9">
					<option>Selecione o insumo</option>
					<c:forEach items="${list}" var="input">
						<option>${input.nameInput}</option>
					</c:forEach>
				</select>
			</div>

			<div class="form-group col-md-6 col-xs-12">
				<label for="text"> Insumo 10</label> 
				<select class="form-control"
					id="insumo10" name="insumo10">
					<option>Selecione o insumo</option>
					<c:forEach items="${list}" var="input">
						<option>${input.nameInput}</option>
					</c:forEach>
				</select>
			</div>

			<div class="form-group col-md-6 col-xs-12">
				<label for="text"> Insumo 11</label> 
				<select class="form-control"
					id="insumo11" name="insumo11">
					<option>Selecione o insumo</option>
					<c:forEach items="${list}" var="input">
						<option>${input.nameInput}</option>
					</c:forEach>
				</select>
			</div>

			<div class="form-group col-md-6 col-xs-12">
				<label for="text"> Insumo 12</label> 
				<select class="form-control"
					id="insumo12" name="insumo12">
					<option>Selecione o insumo</option>
					<c:forEach items="${list}" var="input">
						<option value="${input.nameInput}">${input.nameInput}</option>
					</c:forEach>
				</select>
			</div>
		</div>

				<button type="button" onclick="noEmptyDataEditReceita();"
					class="btn btn-success salvar col-md-12 col-xs-12 col-md-offset-12">Editar Receita</button>
		</div>
	</div>
	<input type="text" id="name_user" name="name_user" novalidate>
</form>


<br>
</main>
<c:import url="/includes/footer.jsp" />
<script src="<c:url value="/js/generateAutoLink.js" />"></script>
<script src="<c:url value="/js/edit_type_ration.js" />"></script>

<script>
	window.onload = function(e) {
		listInsumos();
	};
</script>