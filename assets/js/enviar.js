$(document).ready(function() {
    $(".contacto").on("submit", function(){
         $.ajax({
            type: $(this).attr("method"),
            url: $(this).attr("action"),
            data: $(this).serialize(),
            success: function(){
            $(".respuesta").html("El mensaje ha sido enviado correctamente.");
            $(".mensaje-enviado").removeClass("oculto");
            $("#nombre").val("");
            $("#email").val("");
            $("#vehiculo").val("");
            $("#mensaje").val("");
            },
            error: function() {
               
                
            }
        });
        return false;
    });
    
    $(".cierrame").on("click", function(){
        $(".mensaje-enviado").addClass("oculto");
    });
});