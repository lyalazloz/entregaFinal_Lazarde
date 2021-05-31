function loadScript( scriptName ){
	$.getScript( scriptName )
		.done(function( script, textStatus ) {
			console.log( getInfo() );
			onLoad();
		}).fail(function( jqxhr, settings, exception ) {
			console.log( "Triggered ajaxError handler." );
		});
}

function displayHash(hash){
	if(hash){
		console.log(hash );
		$( ".active" ).removeClass("active");
		$('a[href="'+ hash +'"]').parent().addClass("active");
		
		loadScript(hash.replace("#", "") + ".js" );		
	}
}


$( document ).ready(function() {
    console.log( "ready!" );
	if(window.location.hash){
		displayHash(window.location.hash );
	}
	else{
		loadScript('volumen.js');
	}
	$(window).on('hashchange', function(){
		displayHash(window.location.hash );
	});
});