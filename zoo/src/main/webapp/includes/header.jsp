<%@ page contentType="text/html; charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>ZOO II</title>
<link rel="stylesheet" type="text/css"
	href="<c:url value="/css/tether.min.css"/>" />
<link rel="stylesheet" type="text/css"
	href="<c:url value="/bootstrap/css/bootstrap.min.css"/>" />
<link rel="stylesheet" type="text/css"
	href="<c:url value="/css/style.css"/>" />
</head>
<body>
	<div class="container">
		<div class="row">
			<div class="col col-xs-6 topbar">
				<img id="logo" src="imagens/logo-ifc.png" />
			</div>
			<div class="col col-xs-6 topbar text-right">
				<div id="teste">
					<p id="nome_modulo">

								<b> Controle da fábrica Ração</b>
								<br>
								<span id="setor">Departamento de zootecnia do IFC Campus Concórdia</span>
					</p>
				</div>
			</div>
		</div>
	</div>



	<nav class="navbar navbar-default" id="barra_menu">
		<div class="container">
			<div class="container-fluid">
				<div class="navbar-header">
					<a href="<c:url value = "/"/>" class="navbar-brand nav-text"> <span
						style="color: #FFFFFF;"><span
							class="glyphicon glyphicon-home"></span></span>
					</a>
				</div>

				<div class="collapse navbar-collapse">
					<div class="container">

						<c:choose>
							<c:when test="${!userSession.isLogged()}">
							
							<ul class="nav navbar-nav">
											<li><a href="<c:url value="/"/>"> <span
													style="color: #FFFFFF;"><span
														class="glyphicon glyphicon-book"></span> Produções </span>
											</a></li>
											
																						<li class="dropdown"><a href="#" class="dropdown-toggle"
												data-toggle="dropdown" role="button" aria-haspopup="true"
												aria-expanded="false"><span style="color: #FFFFFF;"><span
														class="glyphicon glyphicon-file"></span> <span
														id="userLogged"> Relatórios</span> <span class="caret"></span></span></a>
												<ul class="dropdown-menu">
													<li><a href="<c:url value="receipts_report"/>">
															Fórmulas</a></li>
													<li><a href="<c:url value="/informations_prod"/>">
															Produções</a></li>
													<li><a href="<c:url value="/report_buy"/>">Compras
															de insumo</a></li>
													<li><a href="<c:url value="/report_outputs"/>">
															Saídas de insumos</a></li>
													<li><a href="<c:url value="/report_shipment"/>">
															Chegadas de insumos na fábrica</a></li>
													<li><a href="<c:url value="/forecast_ration"/>">
															Previsibilidade</a></li>



												</ul></li>
											
											</ul>
											
											
								<ul class="nav navbar-nav navbar-right">
									<li><a id="login1" href="<c:url value="/login"/>"><span
											style="color: #FFFFFF;">Login</span></a></li>
								</ul>
							</c:when>
							
								
									<c:when test="${userSession.isLogged()}">
										<ul class="nav navbar-nav">
											<li><a href="<c:url value="/"/>"> <span
													style="color: #FFFFFF;"><span
														class="glyphicon glyphicon-book"></span> Produções </span>
											</a></li>



											<li class="dropdown"><a href="#" class="dropdown-toggle"
												data-toggle="dropdown" role="button" aria-haspopup="true"
												aria-expanded="false"><span style="color: #FFFFFF;"><span
														class="glyphicon glyphicon-tasks"></span> <span
														id="userLogged"> Controle</span> <span class="caret"></span></span></a>
												<ul class="dropdown-menu">
													<li><a href="<c:url value="/add_prodution"/>">
															Adicionar produção</a></li>
													<li><a href="<c:url value="/add_type_ration"/>">Adicionar
															nova fórmula</a></li>
													<li><a href="<c:url value="/remove_prodution"/>">Remover
															produção</a></li>
													<li><a href="<c:url value="/edit_type_ration"/>">Editar
															fórmula</a></li>


												</ul></li>


											<li class="dropdown"><a href="#" class="dropdown-toggle"
												data-toggle="dropdown" role="button" aria-haspopup="true"
												aria-expanded="false"><span style="color: #FFFFFF;"><span
														class="glyphicon glyphicon-file"></span> <span
														id="userLogged"> Relatórios</span> <span class="caret"></span></span></a>
												<ul class="dropdown-menu">
													<li><a href="<c:url value="receipts_report"/>">
															Fórmulas</a></li>
													<li><a href="<c:url value="/informations_prod"/>">
															Produções</a></li>
													<li><a href="<c:url value="/report_buy"/>">Compras
															de insumo</a></li>
													<li><a href="<c:url value="/report_outputs"/>">
															Saídas de insumos</a></li>
													<li><a href="<c:url value="/report_shipment"/>">
															Chegadas de insumos na fábrica</a></li>
													<li><a href="<c:url value="/forecast_ration"/>">
															Previsões</a></li>



												</ul></li>


											<li class="dropdown"><a href="#" class="dropdown-toggle"
												data-toggle="dropdown" role="button" aria-haspopup="true"
												aria-expanded="false"><span style="color: #FFFFFF;"><span
														class="glyphicon glyphicon-stats"></span> <span
														id="userLogged"> Estoque</span> <span class="caret"></span></span></a>
												<ul class="dropdown-menu">
													<li><a href="<c:url value="/show_inputs"/>">
															Estoque atual</a></li>
													<li><a href="<c:url value="/add_input_in_stock"/>">Adicionar
															nova chegada de insumo na fábrica</a></li>
													<li><a href="<c:url value="/buy_input"/>">Adicionar
															nova compra de insumo </a></li>
													<li><a href="<c:url value="/add_new_input"/>">Cadastrar
															novo insumo</a></li>
													<li><a href="<c:url value="/delete_buy_input"/>">Remover compra de insumo
															</a></li>
													<li><a href="<c:url value="/delete_shipment"/>">Remover chegada de insumo</a></li>
															

												</ul></li>



										</ul>
										
										<ul class="nav navbar-nav navbar-right">
									<li class="dropdown"><a href="#" class="dropdown-toggle"
										data-toggle="dropdown" role="button" aria-haspopup="true"
										aria-expanded="false"><span style="color: #FFFFFF;"><span
												class="glyphicon glyphicon-user"></span> <span
												id="userLogged"> ${userSession.user.nome}</span> <span
												class="caret"></span></span></a>
										<ul class="dropdown-menu">
											<li><a href="<c:url value="/perfilUser"/>"><span
													class="glyphicon glyphicon-user"></span> Perfil</a></li>
											<li><a href="<c:url value="/UserList"/>"><span
													class="glyphicon glyphicon-th-list"></span> Usuários</a></li>
											<li><a href="<c:url value="/cadastro"/>"><span
													class="glyphicon glyphicon-plus"></span> Cadastrar novo usuário </a></li>
											<li role="separator" class="divider"></li>
											<li><a href="<c:url value="/exitUser"/>"> <span
													class="glyphicon glyphicon-remove"></span> Sair
											</a></li>
										</ul></li>
								</ul>
									</c:when>
								</c:choose>
								


							
					</div>
				</div>
			</div>
		</div>
	</nav>