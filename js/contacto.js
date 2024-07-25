let formulario = document.getElementById('form-contacto');

formulario.addEventListener('submit', function(event) {
    event.preventDefault(); 
    alert('¡Mensaje enviado! Gracias por tu consulta :)');
    
    const nombre = parseFloat(document.getElementById('nombre').value);
    const email = parseFloat(document.getElementById('email').value);
    const mensaje = parseInt(document.getElementById('mensaje').value);

    formulario.reset();

   
});