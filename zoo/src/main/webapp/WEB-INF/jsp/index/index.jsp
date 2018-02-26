<%@ page contentType="text/html; charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<c:import url="/includes/header.jsp" />
<main class="container">
<div>
	<div class="col-md-4 col-xs-4" id="menuRations"></div>
	<div id="fullReport" class="col-md-8 col-xs-8">
		<div id="caix" class="col-md-12 col-xs-12">
			<h3>Suas produções aparecerão aqui neste espaço!</h3>
			<br>
			<h4>Selecione elas no menu ao lado!</h4>
		</div>
		<input type="button" value="Imprimir" id="imprimir"
		class="btn btn-primary salvar col-md-12 col-xs-12">
	</div>

</div>
</main>
<script>
	window.onload = function(e) {
		getProdutions("normal");
	};
</script>
<c:import url="/includes/footer.jsp" />
<script src="<c:url value="/js/indexRacao.js" />"></script>
