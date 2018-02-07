<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<c:import url="/includes/header.jsp"/>
<main class="container"> 
<c:if test="${not empty errorMsg}">
	<div class="alert alert-danger" role="alert">${errorMsg}</div>
</c:if>
<form method="POST" action="<c:url value="/registerUser" />" >
	<div class="container-fluid">
			<div class="row" id="conteudo">
				<div id="caixa" class="col-md-8 col-xs-10 col-md-offset-2 col-xs-offset-1">
					<div id="nome" class="col-md-12 col-xs-12">Cadastro de usuário</div>

						<div class="form-group col-md-6 col-xs-12">
							<label for="example-text-input" class="col-form-label">Nome:</label>
							<input required name = "nome" class="form-control" type="text" placeholder="Nome real do usuário" id="nome_usuario">
						</div>

						<div class="form-group col-md-6 col-xs-12">
							<label for="example-text-input" class="col-form-label">Login:</label>
							<input required name = "login" class="form-control" type="text" placeholder="Nome do usuário no sistema" id="log">
						</div>

						<div class="form-group col-md-6 col-xs-12">
							<label for="example-text-input" class="col-form-label">Cargo:</label>
							<input required name = "cargo"class="form-control" type="text" placeholder="Cargo de atuação" id="cargo">
						</div>

						<div class="form-group col-md-6 col-xs-12">
							<label for="example-text-input" class="col-form-label">Senha:</label>
							<input required  name = "senha" class="form-control" type="password" placeholder="" id="senha">
						</div>

						<div class="form-group col-md-6 col-xs-12">
							<label for="example-text-input" class="col-form-label">Email:</label>
							<input required name = "email" class="form-control" type="email" placeholder="" id="email">
						</div>

						<div class="form-group col-md-6 col-xs-12">
							<label for="example-text-input" class="col-form-label">Confirmar senha:</label>
							<input  required name = "conf" class="form-control" type="password" placeholder="" id="confirm_senha">
						</div>
							
						<button type="submit" class="btn salvar col-md-4 col-xs-12 col-md-offset-4">Cadastrar usuário</button>
				</div>
			</div>
</form>

</main>
<c:import url="/includes/footer.jsp"/>