<%@ page contentType="text/html; charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<c:import url="/includes/header.jsp" />
<main class="container">

<div class="container-fluid">

	<div class="panel panel-success">
		<div class="panel-heading"><b>Fórmulas cadastradas</b></div>
		<div class="panel-body">
			<table class="table table-hover">
				<thead>
					<tr>
						<th><b>Nome da ração</b></th>
						<th><b>Animal</b></th>
						<th><b>Insumos</b></th>
					</tr>
				</thead>
				<tbody>

					<c:forEach items="${types}" var="type">
						<tr>
							<td>${type.name}</td>
							<td>${type.type_animal}</td>
							<td>${type.insumo1}, ${type.insumo2}, ${type.insumo3} <c:if
									test="${type.insumo4 != 'None' }">, ${type.insumo4}</c:if> <c:if
									test="${type.insumo5 != 'None' }">, ${type.insumo5}</c:if> <c:if
									test="${type.insumo6 != 'None' }">, ${type.insumo6}</c:if> <c:if
									test="${type.insumo7 != 'None' }">, ${type.insumo7}</c:if> <c:if
									test="${type.insumo8 != 'None' }">, ${type.insumo8}</c:if> <c:if
									test="${type.insumo9 != 'None' }">, ${type.insumo9}</c:if> <c:if
									test="${type.insumo10 != 'None' }">, ${type.insumo10}</c:if> <c:if
									test="${type.insumo11 != 'None' }">, ${type.insumo11}</c:if> <c:if
									test="${type.insumo12 != 'None' }">, ${type.insumo12}</c:if>

							</td>
						</tr>
					</c:forEach>
				</tbody>
			</table>
		</div>
	</div>
</div>
</main>
<c:import url="/includes/footer.jsp" />