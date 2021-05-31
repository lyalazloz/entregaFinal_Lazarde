function getInfo() {
	return "peso";
}
 
function onLoad() {
	$.get( "peso.txt", function( data ) {
		$('#mainSection').html(data);
	});
}