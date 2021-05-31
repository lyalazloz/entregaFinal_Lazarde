function getInfo() {
	return "volumen";
}
 
function onLoad() {
	$.get( "volumen.txt", function( data ) {
		$('#mainSection').html(data);
	});
}