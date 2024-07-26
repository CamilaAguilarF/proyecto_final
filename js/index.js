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

    if(usuarioEncontrado !== true){
        const usuarioPorGuardar =  {
            nombre: nombreIngresado,
            email: emailIngresado,
            password: passwordIngresada
        }
        db.push(usuarioPorGuardar);
        usuario = usuarioPorGuardar;
    
        nombreDelUsuario = nombreIngresado;
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


const apiKey = '5f385b7ee64f5951f9a7c69eb8572cdd';
const city = 'Caleta Olivia, AR';
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=es`;

    fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('Error en la solicitud');
        }
        return response.json();
    })
    .then(data => {
        if (data.cod !== 200) {
            throw new Error(data.message);
        }
        const windSpeedMs = data.wind.speed;
        const windSpeedKmh = windSpeedMs * 3.6;  // Conversión de m/s a km/h

        let message = `${windSpeedKmh.toFixed(2)} km/h.`;
        if (windSpeedKmh > 100) {
            message += " Precaución, ALERTA ROJA. Evite salir de casa y asegúrese de asegurar objetos que puedan volar.";
        } else if (windSpeedKmh > 80) {
            message += " Precaución, ALERTA AMARILLA. Evite actividades al aire libre y asegúrese de asegurar objetos sueltos.";
        }

        document.getElementById('wind').textContent = message;
    })
    .catch(error => {
        console.error('Error al obtener los datos:', error);
        document.getElementById('wind').textContent = 'No se pudo obtener la velocidad del viento';
    });
   
    const temperatureUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=es`;

    fetch(temperatureUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la solicitud');
            }
            return response.json();
        })
        .then(data => {
            if (data.cod !== 200) {
                throw new Error(data.message);
            }
            const temperature = data.main.temp;
    
            let message = `La temperatura actual es ${temperature.toFixed(1)} °C.`;
    
            document.getElementById('temperature').textContent = message;
        })
        .catch(error => {
            console.error('Error al obtener los datos:', error);
            document.getElementById('temperature').textContent = 'No se pudo obtener la temperatura actual';
        });



