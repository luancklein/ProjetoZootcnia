<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<c:import url="/includes/header.jsp"/>
<main class = "container">
<form method="POST" action="<c:url value="/modificarPerfil"/>">
		<c:if test="${not empty userSession.user}">
				<div class="form-group col-md-6 col-xs-12">
							<label for="example-text-input" class="col-form-label">Nome:</label>
							<input required name = "nome" class="form-control" type="text" value="<c:url value="${userSession.user.nome}"/>">
						</div>

						<div class="form-group col-md-6 col-xs-12">
							<label for="example-text-input" class="col-form-label">Login:</label>
							<input required name = "login" class="form-control" type="text" value="<c:url value="${userSession.user.login}"/>" id="log">
						</div>

						<div class="form-group col-md-6 col-xs-12">
							<label for="example-text-input" class="col-form-label">Cargo:</label>
							<input required name = "cargo"class="form-control" type="text" value="<c:url value="${userSession.user.cargo}"/>" id="cargo">
						</div>

						<div class="form-group col-md-6 col-xs-12">
							<label for="example-text-input" class="col-form-label">Email:</label>
							<input required name = "email" class="form-control" type="email" value="<c:url value="${userSession.user.email}"/>" id="email">
						</div>
				
				<button type="submit" class="btn salvar col-md-4 col-xs-12 col-md-offset-4"> Editar </button>
				
		</c:if>
	</form>
</main>
<c:import url="/includes/footer.jsp"/>