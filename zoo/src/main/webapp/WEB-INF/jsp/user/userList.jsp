<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<c:import url="/includes/header.jsp"/>
<main class = "container">
	<c:choose><c:when test="${not empty users}">
		<table class="table table-striped">
			<thead>
				<tr>
					<th>ID</th>
					<th>Nome</th>
					<th>Cargo</th>
					<th>E-mail</th>
				</tr>
			</thead>
			<tbody>
				<c:forEach items="${users}" var="user">
							<tr>
								<td>${user.id}   </td>
								<td>${user.nome} </td>
								<td>${user.cargo}</td>
								<td>${user.email}</td>
							</tr>
						</c:forEach>
			</tbody>
		</table>
	</c:when><c:otherwise>
	</c:otherwise></c:choose>
</main>
<c:import url="/includes/footer.jsp"/>