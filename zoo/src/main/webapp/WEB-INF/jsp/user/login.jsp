<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<c:import url="/includes/header.jsp"/>
	<main class="container vcenter">
	<c:if test="${not empty errorMsg}">
			<div class="alert alert-danger" role="alert">${errorMsg}</div>
	</c:if>
		<div class="row">
			<div class="col-xs-12 col-md-4 col-md-offset-4" >
				<div class="panel panel-default">
					<div class="panel-heading">
						<h3 class="panel-title" style="text-align: center;">Portal de acesso</h3>
					</div>
					<div class="panel-body">
						<form method="POST" action ="<c:url value = "/login"/>">
							<fieldset>
						    	<div class="form-group">
						        	<input class="form-control" placeholder="Login" required name="username" type="text" autofocus>
						        </div>
						      	<div class="form-group">
						        	<input class="form-control" placeholder="Senha" required  name="password" type="password">
						        </div>
						        <button type="submit" class="btn btn-success btn-block" id="entrar">Entrar</button>
							</fieldset>
						</form>
					</div>
				</div>
</div>
</div>
</main>
<c:import url="/includes/footer.jsp"/>