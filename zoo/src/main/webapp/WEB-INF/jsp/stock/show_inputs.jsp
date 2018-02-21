<%@ page contentType="text/html; charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<c:import url="/includes/header.jsp" />
<main class="container">

<div class="form-group col-md-12 col-xs-12">

	<div class="panel panel-success">
		<div class="panel-heading">Relatório estoque atual</div>
		<div class="panel-body">
			<table class="table table-hover">
				<thead>
					<tr>
						<th><b>Insumo<b></th>
						<th><b>Quantidade na fábrica de ração(IFC)</b></th>
						<th><b>Quantidade disponível para empenhar</b></th>
						<th><b>Preço pago por Kg</b></th>
						<th><b>Ultima alteração</b></th>
					</tr>
				</thead>
				<tbody>
					<c:forEach items="${stock}" var="stock">
						<tr>
							<td>${stock.nameInput}</td>
							<td>${stock.qtdInIFC} Kg</td>
							<td>${stock.qtdExternalStorage} Kg</td>
							<td>R$ ${stock.pricePerKg}</td>
							<td>${stock.date}</td>
						</tr>
					</c:forEach>
				</tbody>
			</table>
		</div>
	</div>
</div>
</main>
<c:import url="/includes/footer.jsp" />