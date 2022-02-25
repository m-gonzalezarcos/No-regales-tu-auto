var hambur = document.querySelector('.hamburguesa');
var navegar = document.querySelector('.navegacion');
var barras = document.querySelectorAll('.hamburguesa span');

  hambur.addEventListener('click', function(){
    navegar.classList.toggle('activado');
    barras.forEach(child => {child.classList.toggle('animado')});
  });