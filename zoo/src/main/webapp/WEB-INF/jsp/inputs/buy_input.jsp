<%@ page contentType="text/html; charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<c:import url="/includes/header.jsp" />
<main class="container">


<form method="POST" action="javascript:sendData()" id="addNewBuyForm">
	<div class="col-md-8 col-xs-10 col-md-offset-2 col-xs-offset-1"
		id="conteudo">
		<div id="caixa">
			<div id="nome" class="col-md-12">Adicionar nova compra insumo</div>


			<div class="form-group col-md-6 col-xs-12">
				<label for="sel1">Selecione o insumo:</label> <select
					class="form-control" id="name" name="name" required>
					<option value="">Selecione o insumo</option>

					<c:forEach items="${list}" var="input">
						<option>${input.nameInput}</option>
					</c:forEach>
				</select>
			</div>

			<div class="form-group col-md-6 col-xs-12">
				<label for="text">Data:</label> <input type="date"
					class="form-control" id="dateBuy" name="dateBuy" required>
			</div>

			<div class="form-group col-md-6 col-xs-12">
				<label for="text">Quantidade comprada (em Kg):</label> <input
					type="number" class="form-control" id="qtdBuy" name="qtdBuy"
					step="0.01"  min="0" required>
			</div>

			<div class="form-group col-md-6 col-xs-12">
				<label for="text">Preço pago (R$):</label> <input type="number"
					class="form-control" id="priceBuy" name="priceBuy" step="0.01" min="0"
					required>
			</div>

			<input type="submit" value="Salvar"
				class="btn btn-success salvar col-md-12 col-xs-12 col-md-offset-12">
		</div>
	</div>
</form>
<div id="snackbar">Cadastro realizado com sucesso!</div>

</main>
<c:import url="/includes/footer.jsp" />
<script src="<c:url value="/js/buy_inputs.js" />"></script>