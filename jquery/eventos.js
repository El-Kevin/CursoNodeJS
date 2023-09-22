$(document).ready(function(){

	// MouseOver y MouseOut
	var caja = $("#caja");

	/*
	caja.mouseover(function(){
		$(this).css("background","red");
	});

	caja.mouseout(function(){
		$(this).css("background","green");
	});
	*/

	function cambiaRojo(){
		$(this).css("background","red");
	}

	function cambiaVerde(){
		$(this).css("background","green");
	}

	// Hover
	caja.hover(cambiaRojo, cambiaVerde);


	// Click, Doble click
	caja.click(function(){
		$(this).css("background", "blue")
			   .css("color", "white");
	});

	caja.dblclick(function(){
		$(this).css("background", "pink")
			   .css("color", "yellow");
	});

	// Focus y blur
	var nombre = $("#nombre");
	var datos = $("#datos");

	nombre.focus(function(){
		$(this).css("border", "2px solid green");
	});

	nombre.blur(function(){
		$(this).css("border", "1px solid #ccc");
        // con el val saco la informacion del input
		datos.text($(this).val()).show();
	});

	// Mousedown y mouseup
    // cuando tengo presionado el clic
	datos.mousedown(function(){
		$(this).css("border-color", "gray");
	});
    // cuando no lo tengo presionado el clic
	datos.mouseup(function(){
		$(this).css("border-color", "black");
	});

	// Mousemove
	$(document).mousemove(function(){
		$('body').css("cursor","none");
        //capturo las coordenadas del mause
		$("#sigueme").css("left", event.clientX)
		             .css("top", event.clientY);
	});

});