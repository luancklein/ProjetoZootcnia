<%@ page contentType="text/html; charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<c:import url="/includes/header.jsp" />
<main class="container">

<div class="container-fluid">

	<form method="POST" action="javascript:sendData()" id="addNewInputForm">
		<div class="col-md-8 col-xs-10 col-md-offset-2 col-xs-offset-1"
			id="conteudo">
			<div id="caixa">
				<div id="nome" class="col-md-12">Adicionar novo insumo</div>


				<div class="form-group col-md-12 col-xs-12">
					<label for="text">Nome do Insumo:</label> <input type="text"
						class="form-control" id="name" name="name" required>
				</div>

					<input type="submit" value="Adicionar"
						class="btn btn-success salvar col-md-12 col-xs-12 col-md-offset-12">
			

			</div>
		</div>
	</form>
<div id="snackbar">Cadastro realizado com sucesso!</div>
</div>

</main>
<c:import url="/includes/footer.jsp" />
<script src="<c:url value="/js/add_new_input.js" />"></script>