//VARIABLE Y LLAMADA AL ID
/*var caja_boton=document.getElementById('boton-arriba');*/

//EVENTO Y FUNCIÓN
/*caja_boton.addEventListener('click',function(){
	document.documentElement.scrollTop=0;

//});

window.addEventListener('scroll',function(){
	if (document.documentElement.scrollTop > 0){
		caja_boton.style.display="flex";
	}else {
		caja_boton.style.display="none";
	}
});*/

//SCROLL AL HACER CLICK CON ANIMACIÓN
document.getElementById('boton-arriba').addEventListener('click', arriba);
function arriba(){
	var boton = document.documentElement.scrollTop;

	if (boton > 0){
		window.requestAnimationFrame(arriba);
		window.scrollTo (0, boton - (boton / 10)); 
	}	
}

//DESAPARECER EL BOTÓN CUANDO ESTOY ARRIBA - APARECE EL BOTÓN CUANDO HAGO SCROLL 
 var botonUp = document.getElementById('boton-arriba');
	window.onscroll = function(){
		var scroll = document.documentElement.scrollTop;

		if (scroll > 200){
		botonUp.style.transform = "scale(1)";
	}else if(scroll < 200){
		botonUp.style.transform = "scale(0)";
	}
}