var wordUser = prompt("Ingresa tu palabra"); //pedir frase a usuario
var crypted = ""; //donde guardaremos mensaje codificado
var word = ""; // guardaremos las palabras decodificadas del usuario
//la funcion cipher esta encriptando la palabra ingresada de acuerdo el codigo ascii

function cipher(wordUser) { //la funcion cipher ocupa como parametro la variable
    for (i = 0; i < wordUser.length; i++) { //para modificar cada elemento del string
        var letters = wordUser.charCodeAt(i); //nos regresa el valor en ascii

        if (letters >= 97 && letters <= 122) { // si el codigo ascii, es mayor a 97 al 122 se encuentran las letras minusculas

            crypted += String.fromCharCode((letters - 97 + 33) % 26 + 97); //entonces nuestra variable c
        } else {
            crypted += String.fromCharCode((letters - 65 + 33) % 26 + 65);
        }

    }
    return alert(" Tu Mensaje Encriptado Es:  " + crypted)
}

cipher(wordUser);




function decipher(crypted) {

    for (i = 0; i < crypted.length; i++) {

        var lettersCode = crypted.charCodeAt(i);

        if (lettersCode >= 97 && lettersCode <= 122) {

            word += String.fromCharCode((lettersCode - 97 - 33 + 26) % 26 + 97);

        } else {
            word += String.fromCharCode((letterCode - 65 - 33 + 26) % 26 + 65);

        }


    }

    return document.write("Tu Palabra original Es: " + word);


}

decipher(crypted);
