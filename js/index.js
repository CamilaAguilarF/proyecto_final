let dbUsuarios  = [
    {
        "nombre": "Administrador",
        "email": "admin@gmail.com",
        "password": "admin"
    }
]

dbUsuarios = JSON.stringify(dbUsuarios)

let db = JSON.parse(dbUsuarios)
                  
let nombreIngresado = prompt('Ingrese por favor su nombre');
let emailIngresado = prompt('Ingrese por favor su email');
let passwordIngresada = prompt('Ingrese su contrasena');

console.log(nombreIngresado, emailIngresado, passwordIngresada);

let nombreDelUsuario;
let usuario;
let usuarioEncontrado = false;

if(nombreIngresado !== null && passwordIngresada !== null && emailIngresado !== null){
    
    for(let i=0; i< db.length ; i++){
        if(db[i].email === emailIngresado){
            if(db[i].password === passwordIngresada){
                nombreDelUsuario = db[i].nombre;
                usuarioEncontrado = true;

                usuario = {
                    nombre: db[i].nombre,
                    email: db[i].email,
                    password: db[i].password,
                }
            } else {
                alert(`La contraseña no coincide con la registrada!!!`)
            }
        }
    }

    sessionStorage.setItem('usuario', nombreDelUsuario)
    sessionStorage.setItem('datosDelUsuario', JSON.stringify(usuario))
    // alert(`Bienvenid@ ${nombreDelUsuario} a nuestra página!!`)
    alert(`Bienvenid@ ${sessionStorage.getItem('usuario')} a nuestra página!!`)
} else{
    alert(`Bienvenid@ Invitado a nuestra página!!`)
}

console.log(db)
console.log(JSON.parse(sessionStorage.getItem('datosDelUsuario')))