<%@ page contentType="text/html; charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<c:import url="/includes/header.jsp" />
<main class="container">

<div class="container-fluid">

	<form method="POST"
		action="javascript:sendData()" id="ShipmentForm">
		<div class="col-md-8 col-xs-10 col-md-offset-2 col-xs-offset-1"
			id="conteudo">
			<div id="caixa">
				<div id="nome" class="col-md-12">Adicionar Nova Chegada de
					Insumo</div>

				<div class="form-group col-md-6 col-xs-12">

					<label for="sel1">Selecione o insumo:</label> <select
						class="form-control" id="name_input" name="name_input" required>
						<option value="">Selecione o insumo</option>
						<c:forEach items="${list}" var="input">
								<option>${input.nameInput}</option>
						</c:forEach>
					</select>

				</div>
				<div class="form-group col-md-6 col-xs-12">
					<label for="text">Quantidade:</label> <input type="number"
						class="form-control" id="qtd" name="qtd"  min="0" required>
				</div>

				<div class="form-group col-md-6 col-xs-12">
					<label for="text">Data da chegada:</label> <input type="date"
						class="form-control" id="date" name="date" required>
				</div>
			</div>

			<input type="submit" id="likeSubmit" class="btn btn-success salvar col-md-12 col-xs-12 col-md-offset-12" value="Adicionar">
		</div>
	</form>
	<div id="snackbar">Cadastro realizado com sucesso!</div>
	
	

</div>

</main>
<c:import url="/includes/footer.jsp" />
<script src="<c:url value="/js/add_input_in_stock.js" />"></script>