// SECCIONES ENCABEZADOS DE "QUIENES SOMOS, CONÓCENOS Y CONTACTO"
$(document).ready(function(){
    $("h2").hover(function(){
    $(this).css({
        "background-color": "#0dcaf0",
        "text-shadow": "3px 3px 5px black"
    }); 
    });
})

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
myInput.focus()
})