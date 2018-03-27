<%@ page contentType="text/html; charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<c:import url="/includes/header.jsp" />
<main class="container">

<form method="POST" action="javascript:sendData()" id="registerNewType">
	<div class="col-md-8 col-xs-10 col-md-offset-2 col-xs-offset-1"
		id="conteudo">
		<div id="caixa">
			<div id="nome" class="col-md-12">Adicionar nova fórmula</div>

			<div class="form-group col-md-6 col-xs-12">
				<label for="sel1">Destinado:</label> <select class="form-control"
					id="for_animal" name="for_animal" onchange="getNameRations();"
					required>
					<option>Bovina</option>
					<option>Equina</option>
					<option>Ovina</option>
					<option>Suína</option>
				</select>
			</div>

			<div class="form-group col-md-6 col-xs-12">
				<label for="text">Nome da ração:</label> <input type="text"
					class="form-control" name="def_name_ration" id="def_name_ration"
					onchage="putInsumosForRation();" required>
			</div>

			<!-- POR PADRÃO, INCIALMENTE DEFINIREMOS COMO POSSÍVEL ADICIONAR 12 TIPOS DE INSUMOS DIFERENTES -->
			<br>
			<h5>
				<b>Insumos</b>
			</h5>

			<div class="form-group col-md-6 col-xs-12">
				<label for="text"> Insumo 1</label> <select class="form-control"
					id="insumo1" name="insumo1" required>
					<option value="">Selecione o insumo</option>
					<c:forEach items="${list}" var="input">
						<option>${input.nameInput}</option>
					</c:forEach>
				</select>
			</div>

			<div class="form-group col-md-6 col-xs-12">
				<label for="text"> Insumo 2</label><select class="form-control"
					id="insumo2" name="insumo2" required>
					<option value="">Selecione o insumo</option>
					<c:forEach items="${list}" var="input">
						<option>${input.nameInput}</option>
					</c:forEach>
				</select>
			</div>

			<div class="form-group col-md-6 col-xs-12">
				<label for="text"> Insumo 3</label> <select class="form-control"
					id="insumo3" name="insumo3" required>
					<option value="">Selecione o insumo</option>
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
						<option>${input.nameInput}</option>
					</c:forEach>
				</select>
			</div>
		</div>



		<div id="errorOfRegister"></div>
		<button type="submit" id="registerNewType"
			
			class="btn btn-success salvar col-md-12 col-xs-12 col-md-offset-12">Adicionar
			nova fórmula</button>

	</div>


</form>
<div id="snackbar">Cadastro realizado com sucesso!</div>
<br>
</main>
<c:import url="/includes/footer.jsp" />
<script src="<c:url value="/js/generateAutoLink.js" />"></script>
<script src="<c:url value="/js/add_type_ration.js" />"></script>

<script>
	window.onload = function(e) {
		listInsumos();
	};
</script>