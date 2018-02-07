<%@ page contentType="text/html; charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<c:import url="/includes/header.jsp" />
<main class="container">

<div class="container-fluid">

	<div id="caixa" class="col-xs-10 col-sm-10 col-md-4 col-md-offset-4 col-sm-offset-1 col-xs-offset-1">
					<div id="nome" class="col-md-12 col-xs-12">Página de Controle</div>
					<a type="button" class="btn btn4 col-md-12 col-xs-12" href="<c:url value="/buy_input"/>">Adicionar uma nova compra de insumo</a><br>
					<a type="button" class="btn btn1 col-md-12 col-xs-12" href="<c:url value="/add_input_in_stock"/>">Adicionar uma nova chegada de insumo</a><br>
					<a type="button" class="btn btn2 col-md-12 col-xs-12" href="<c:url value="/add_new_input"/>">Adicionar um novo insumo</a><br>
					<a type="button" class="btn btn3 col-md-12 col-xs-12" href="<c:url value="/show_inputs"/>">Estoque atual</a><br>
	</div>

</div>

</main>
<c:import url="/includes/footer.jsp" />


