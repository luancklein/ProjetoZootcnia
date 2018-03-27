function showToast() {
    var x = document.getElementById("snackbar")
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    return true;
}


function sendData(){
	
	var input = $( "select#name option:checked" ).val();
	var dateNow = $("#dateBuy").val();
	var qtdNow = $("#qtdBuy").val();
	var preco = $("#priceBuy").val();
	
	$.ajax({
		method : "GET",
		url :  generateLink("buyInput"),
		data : {
			name : input,
			dateBuy : dateNow, 
			qtdBuy : qtdNow,
			priceBuy : preco
		},
		success : function(response) {
			console.log(response);
			if (response.cod == "404") {
				alert(response.message);
			} else {
				
				showToast();
				$('#addNewBuyForm').each (function(){
					  this.reset();
					});
				
			}
		},
		failure : function(response) {
			atualy = false;
			error();
			console.error(response);
		}
	});
	
}
