/*=============================================
COLOCAR ACTIVO EL PRIMER BOTÓN 
=============================================*/

var enlacesHabitaciones = $(".cabeceraHabitacion ul.nav li.nav-item a");
var tituloBtn = [];

for(var i = 0; i < enlacesHabitaciones.length; i++){

	$(enlacesHabitaciones[i]).removeClass("active");
	$(enlacesHabitaciones[i]).children("i").remove();
	tituloBtn[i] = $(enlacesHabitaciones[i]).html();
}

$(enlacesHabitaciones[0]).addClass("active");
$(enlacesHabitaciones[0]).html('<i class="fas fa-chevron-right"></i>'+ tituloBtn[0]);

$(enlacesHabitaciones[enlacesHabitaciones.length -1]).css({"border-right":0})

/*=============================================
ENLACES HABITACIONES
=============================================*/

$(".cabeceraHabitacion ul.nav li.nav-item a").click(function(e){

	e.preventDefault();

	var orden = $(this).attr("orden");
	var ruta = $(this).attr("ruta");

	for(var i = 0; i < enlacesHabitaciones.length; i++){

		$(enlacesHabitaciones[i]).removeClass("active");
		$(enlacesHabitaciones[i]).children("i").remove();
		tituloBtn[i] = $(enlacesHabitaciones[i]).html();
	}

	$(enlacesHabitaciones[orden]).addClass("active");
	$(enlacesHabitaciones[orden]).html('<i class="fas fa-chevron-right"></i>'+ tituloBtn[orden]);

	
})