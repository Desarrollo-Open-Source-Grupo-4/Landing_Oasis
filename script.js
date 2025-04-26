// Espera a que el contenido del DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {

    // Obtener los elementos del DOM
    const modal = document.getElementById('loginModal');
    const openModalButton = document.getElementById('heroButton');
    const closeModalButton = document.querySelector('.close-button');

    // Función para abrir el modal
    function openModal() {
        modal.style.display = 'block';
    }

    // Función para cerrar el modal
    function closeModal() {
        modal.style.display = 'none';
    }

    // Evento para abrir el modal al hacer clic en el botón del hero
    if (openModalButton) {
        openModalButton.addEventListener('click', openModal);
    }

    // Evento para cerrar el modal al hacer clic en la 'x'
    if (closeModalButton) {
        closeModalButton.addEventListener('click', closeModal);
    }

    // Evento para cerrar el modal si se hace clic fuera del contenido del modal
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            closeModal();
        }
    });

    // Opcional: Manejar el envío del formulario (aquí solo previene el envío por defecto)
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Previene que la página se recargue
            alert('Inicio de sesión enviado (funcionalidad de backend no implementada).');
            // Aquí iría la lógica para enviar los datos del formulario al servidor
            // closeModal(); // Podrías cerrar el modal después de enviar
        });
    }
});