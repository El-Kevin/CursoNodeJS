console.log("hola")
// el "$" es lo mismo si pongo jQuery(document)
// document => es un selector
//hay varios tipos de selectores

$(document).ready(function(){
console.log("HOla")
	// Selector de ID
	$("#rojo").css("background","red")
			  .css("color", "white");

	$("#amarillo").css("background","yellow")
				  .css("color","green");

	$("#verde").css("background","green")
				  .css("color","white");
    //Selector de clases
    var mi_clase = $('.zebra').css("padding","5px");

	$('.sin_borde').click(function(){
		console.log("Click dado!!");
		$(this).addClass('zebra');
	});

    // Selectores de etiqueta
	var parrafos = $('p').css("cursor", "pointer");

	parrafos.click(function(){
        //captura el elemento q se a dado clic
		var that = $(this);
        //verifica si tiene la clase grnade
		if(!that.hasClass('grande')){
            //añade la clase grande
			that.addClass('grande');
		}else{
            //le quita la clase grande
			that.removeClass('grande');
		}
	});

    // Selectores de atributo
    $('[title="Google"]').css('background', '#ccc');
    $('[title="Facebook"]').css('background', 'blue');
    
    // Otros
	//Selecciono ambas etiquetas
    //$('p, a').addClass('margen-superior');
	var busqueda = $("#elemento2").parent().parent().find('.resaltado');
	console.log(busqueda);


});