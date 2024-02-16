// Bienvenida

alert("Bienvenido a Heladeria Bonfanti!");

// Variables para almacenar los datos de registro
let nombreRegistro;
let contrasenaRegistro;

// Variables para almacenar los datos de inicio
let nombreInicio;
let contrasenaInicio;

// Mostrar menú inicial
let opcion;
let helado = false

// Menú de ingreso

while (true) {
    opcion = prompt("Escriba 1 para registrarse\nEscriba 2 para ingresar\nEscriba 3 para salir");

    if (opcion === "1") {
        // Registrar el usuario
        nombreRegistro = prompt("Ingrese su nombre:");
        contrasenaRegistro = prompt("Ingrese su contraseña:");

        // Confirmación del registro del usuario
        alert("Te has registrado correctamente. Ahora puedes iniciar sesión.");
    } else if (opcion === "2") {
        // Inicio de sesión del usuario
        nombreInicio = prompt("Ingrese su nombre:");
        contrasenaInicio = prompt("Ingrese su contraseña:");

        // Verificar si los datos del usuario coinciden con los del registro
        if (nombreRegistro === nombreInicio && contrasenaRegistro === contrasenaInicio) {
            alert("Inicio de sesión completado. ¡Bienvenido, " + nombreInicio + "!");
            helado = true;
            break; // Salir del bucle
        } else {
            alert("Nombre de usuario o contraseña incorrectos.");
        }
    } else if (opcion === "3") {
        alert("Gracias por su visita!");
        break;
    } else {
        alert("Opción no válida. Por favor, escriba 1, 2 o 3");
    }
}

// Inicio de la interacción con la página

let cantidad = 1000;

//Función (Flecha) Ingreso de Helado

const ingreso1 = () => {

    let ingreso = parseFloat(prompt("Ingrese la cantidad de helado a ingresar: "));

    if (ingreso > 0) {
        cantidad = cantidad + ingreso;
        return alert("Tu cantidad de helado ahora es de: " + cantidad + " kg");
    } else {
        alert("Introduzca un número natural");
    }
}

while (helado) {

    let opcion1 = prompt("Seleccione una de las siguientes opciones: \n 1) Cantidad de helado \n 2) Ingreso de helado \n 3) Venta de helado \n 4) Salir");

    switch (opcion1) {
        //Cantidad de Helado
        case "1":
            alert("Tu cantidad de helado es de: " + cantidad + " kg");
            break;
        //Ingreso de Helado
        case "2":
            ingreso1();
            break;
        //Retiro de Helado
        case "3":
            let retiro = parseFloat(prompt("Ingrese la cantidad de helado a retirar: " + "(Tenes: " + cantidad + " kg)"));

            if (retiro > 0 && cantidad >= retiro) {
                cantidad = cantidad - retiro;
                alert("Tu cantidad de helado ahora es de: " + cantidad + " kg");
            } else {
                alert("Introduzca un número natural y valido");
            }
            break;
        //Salida
        case "4":
            alert("Hasta la proxima! Vuelva pronto!");
            helado = false;
            break;
        //Ingreso incorrecto
        default:
            alert("Ingreso Incorrecto");
            break;
    }
}
