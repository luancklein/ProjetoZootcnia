<%@ page contentType="text/html; charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<c:import url="/includes/header.jsp" />
<main class="container">

<div class="col-xs-12 col-md-6 col-md-offset-3" id="jumb">

	<p id="titulo">Bem vindo ao sistema da zootecnia!</p>
	<p id="sub">Escolha o módulo que deseja acessar:</p>
	<div class="panel panel-success">
		<div class="panel-heading">Setor dos bovinos</div>
		<div class="panel-body">
			<button type="button" class="btn btn-link">
				<a href="<c:url value = "/Vaquinhas"/>">Acessar módulo</a>
			</button>
		</div>
	</div>
	<div class="panel panel-success">
		<div class="panel-heading">Setor dos suínos</div>
		<div class="panel-body">
			<button type="button" class="btn btn-link">
				<a href="">Acessar módulo</a>
			</button>
		</div>
	</div>
	<div class="panel panel-success">
		<div class="panel-heading">Setor de controle e produção de ração</div>

		<div class="panel-body">
			<button type="button"
					class="btn btn-link"><a href="<c:url value = "/Racao"/>">Acessar módulo</a></button>
		</div>

	</div>

</div>

</main>
<c:import url="/includes/footer.jsp" />