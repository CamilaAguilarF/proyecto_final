window.addEventListener('load', function(e){

    let usuariosLocalStorage = localStorage.getItem('usuariosContacto');
    console.log(usuariosLocalStorage);
 
    let usuariosContacto;
 
    if(usuariosLocalStorage === null){
        usuariosContacto = [];
    } else {
        usuariosContacto = JSON.parse(usuariosLocalStorage);
    }

    let formulario = document.getElementById("form-contacto");
    let email= document.querySelector('#email');
    let nombre= document.querySelector('#nombre');
    let mensaje= document.querySelector('#mensaje');
    console.log(formulario, email, nombre, mensaje);

    formulario.addEventListener('submit', function(e){
        e.preventDefault();

        let usuario = {
            nombre: '',
            email: '',
            mensaje: ''
        };

        if(email.value != ''){
            usuario.email = email.value;
        }

        if(nombre.value != ''){
            usuario.nombre = nombre.value;
        }

        if(mensaje.value != ''){
            usuario.mensaje = mensaje.value;
        }
    
        console.log(usuario)
        
        if(usuario.nombre != ''){
            usuariosContacto.push(usuario)
        }
       console.log(usuariosContacto)
       localStorage.setItem('usuariosContacto', JSON.stringify(usuariosContacto));

       email.value = '';
       nombre.value = '';
       mensaje.value = '';

       document.getElementById('result').innerText = `Gracias por ponerte en contacto con nosotros, pronto recibirás  una respuesta. `;

    })
})