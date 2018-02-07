<%@ page contentType="text/html; charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<c:import url="/includes/header.jsp" />
<main class="container"> 

<div>

	<div class="col-md-4 col-xs-4" id="menuRations"></div>
	<form method="POST" id="form1" name="form1" action="<c:url value="/editProduction" />">
		<div id="caix" class="col-md-8 col-xs-8"></div>
	</form>
</div>

<div id="snackbar">Cadastro realizado com sucesso!</div>
</main>


<c:import url="/includes/footer.jsp" />



<script>
	window.onload = function(e) {
		getProdutions("edit");
	};
</script>


<script src="<c:url value="/js/indexRacao.js" />"></script>
<script src="<c:url value="/js/remove_prodution.js" />"></script>