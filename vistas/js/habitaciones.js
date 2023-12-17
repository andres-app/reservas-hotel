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


