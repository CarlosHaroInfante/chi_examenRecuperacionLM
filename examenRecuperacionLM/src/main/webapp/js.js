/**
 * 
 */
const array = []; //Array con el que guardo las palabras bien
const guardar = []; //Array con el que guardo las palabras con *
let errores = 0; //Contador de errores
let intentosRestantes = 5; //Intentos que quedan y se van restando
const fallos = []; //Array de fallos


 function palabra(){
	 
	const palabraElegida = prompt("Introducir palabra").toUpperCase();  //Introduce la palabra y la pone en mayuscula
    document.getElementById('palabra').innerHTML = '*'.repeat(palabraElegida.length); //lo pasa al id de palabra y le pone *
    array.push(...palabraElegida.split('')); //Lo envía al array separado
    guardar.push(...Array(palabraElegida.length).fill('*')); //Lo envía al array con *
    errores = 0; //Cuenta errores
    intentosRestantes = 5; //Cuenta intentos
    document.getElementById('intentos').innerHTML = `Intentos restantes: ${intentosRestantes}`; //Pasa los intentos al id de intento.
	 
 }
 
 
 function adivinar() {
    letra = prompt("Letra elegida").toUpperCase(); //Pone la letra que pongas en mayuscula
	

	
    if (!letra || !/^[A-Z]$/.test(letra)) { //Comprueba que sea una letra
        alert("Introduce una letra válida.");
        return;
    }

    if (array.includes(letra)) { //Si incluye la letra va cambiando el asterisco por la letra
        array.forEach((letraE, palabra) => {
            if (letraE === letra) {
                guardar[palabra] = letra;
            }
        });
    } else {
        if (!fallos.includes(letra)) { //Cuenta los fallos, pone las letras falladas y los va pasando dependiendo de si son intentos y fallos a sus debidos id.
            fallos.push(letra);
            errores++;
            intentosRestantes--;
            document.getElementById('intentos').innerHTML = `Intentos: ${intentosRestantes}`;
            document.getElementById('fallos').innerHTML = `Letras falladas: ${fallos.join(' ')}`;
        }
    }

    document.getElementById('palabra').innerHTML = guardar.join('');

    if (!guardar.includes('*')) { //Si acierta pone la palabra y si falla cuenta los errores.
        document.getElementById('resultado').innerHTML = `Muy bien la palabra era ${array.join('')}`;
        document.getElementById('historial').innerHTML += `<p>Llevas de palabra: ${array.join('')}, llevas: ${errores} errores</p>`;
    }

    if (intentosRestantes === 0) { //Si falla pone que has perdido y pone la palabra
        document.getElementById('resultado').innerHTML = `¡Has perdido! La palabra era ${array.join('')}`;
        document.getElementById('historial').innerHTML += `<p>Palabra: ${array.join('')}, Errores: ${errores}</p>`;
    }

    mostrarMensaje(); //Ejecuta el mostrar mensaje
}

function mostrarMensaje() {//Dependiendo de los fallos pone un mensaje u otro en el archivo
    let mensaje = '';
    if (intentosRestantes > 0) {
        if (errores < 1) {
            mensaje = 'Magnífico';
        } else if (errores < 3) {
            mensaje = 'Bien';
        } else if (errores < 5) {
            mensaje = 'Por poco';
        }
    } else {
        mensaje = 'Has perdido';
    }
    document.getElementById('resultado').innerHTML = mensaje;
}

 
 





  
 