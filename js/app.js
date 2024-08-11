// Selección de elementos del DOM
const hamburguesa = document.querySelector('.hamburguesa');
const navegacion = document.querySelector('.navegacion');
const enlaces = document.querySelectorAll('.navegacion a');
const fecha = document.querySelector('.fecha');

// Evento que se dispara cuando el DOM está completamente cargado
document.addEventListener('DOMContentLoaded',()=>{
    mostrarMenu();
    cerrarMenu();
    fechaActual();
});

// Función para mostrar/ocultar el menú de navegación
function mostrarMenu(){
    hamburguesa.addEventListener('click',()=>{
        navegacion.classList.toggle('ocultar');
    }); 
}

// Función para cerrar el menú y manejar la navegación suave
function cerrarMenu(){
    enlaces.forEach(enlace =>{
        enlace.addEventListener('click',(e)=>{
            e.preventDefault();
            const seccion = document.querySelector(e.target.attributes.href.value);
            cambioSeccion(seccion);
            if(e.target.tagName === 'A'){
                navegacion.classList.add('ocultar');
            }
        });
    });
}

// Función para realizar el desplazamiento suave a una sección
function cambioSeccion(seccion){
    seccion.scrollIntoView({
        behavior:'smooth'
    })
}

// Función para mostrar el año actual en el footer
function fechaActual(){
    let fechaHoy = new Date().getFullYear();
    fecha.textContent = fechaHoy;
}