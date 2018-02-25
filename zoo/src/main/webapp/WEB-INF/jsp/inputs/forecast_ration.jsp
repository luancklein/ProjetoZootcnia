<%@ page contentType="text/html; charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<c:import url="/includes/header.jsp" />
<main class="container">





<div class="form-group col-md-12 col-xs-12" id="forecastRation"></div>
<div id="columnchart_material" style="width: 100%; height: 500px; display: table;"></div>
</main>
<c:import url="/includes/footer.jsp" />
<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
<script src="<c:url value="/js/forecast_ration.js" />"></script>