$('document').ready(function() {
	$('#btnlogin').click(function() {
		$('#modallogin').modal();
	});

});

$('document').ready(function() {
	$('#entrar').on('click', function(e) {

		$('#modalchoices').modal();
	});
});

$('document').ready(function() {
	$('#btneditar, #editar').on('click', function(e) {

		$('#modaleditar').modal();
	});
});
