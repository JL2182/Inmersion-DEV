//var cantidad = 6;
// let cantidad = 6  es la nueva forma de designar a las variables.
// typeof nos permite saber el tipo de dato de una variable.

//let cantidad_02 = 6; // variable de tipo numérico
//let texto_02 = "texto";
//console.log(typeof cantidad_02);


let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contrasena = document.getElementById('contrasena');

const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const numeros = '0123456789';
const simbolos = '!@#$%^&*()_+';
const caracteres = cadenaCaracteres + numeros + simbolos;


function generar() {

    let numeroDigitado = parseInt(cantidad.value);
    console.log(numeroDigitado);

    if (numeroDigitado < 8) {
        alert("La cantidad de caracteres tiene que ser mayor que 8");
    }

    let password = '';

    for (let i = 0; i < numeroDigitado; i++) {

        let caracterAleatorio = caracteres[Math.floor(Math.random() * caracteres.length)];  //genera un caracter aleatorio
        console.log(caracterAleatorio);

        password += caracterAleatorio;

    }

    contrasena.value = password;


}
