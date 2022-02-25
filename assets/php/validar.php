<?php
/* VARIABLES PARA VALIDAR FORMULARIO */
	$nombre=$_POST['nombres'];
	$email=$_POST['correo'];
	$vehiculo=$_POST['autos'];
	$mensaje=$_POST['recado'];
	
//VARIABLE MENSAJE y VALIDAR CORREO
	$mensaje = "

	nombre:".$nombre."
	email:".$email."
	vehiculo:".$vehiculo."
	mensaje:".$mensaje.""; 

//CABECERAS OBLIGATORIAS

$cabecera = "Mine-Version: 1.0"."\r\n";
$cabecera .= "Content-type:text/html;charset=UTF-8"."\r\n";

//CABECERAS OPCIONALES

$cabecera .= "From: ".$email."\r\n";
$cabecera .= "Cc:".$email."\r\n";

//ENVIAR CORREO CON LA FUNCION MAIL, INCORPORAR CORREO DE DESTINO Y MENSAJE
mail("contacto@noregalestuauto.cl","TIENES UN NUEVO MENSAJE",$mensaje,$cabecera);
?>


