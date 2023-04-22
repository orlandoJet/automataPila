function mensajeVoz(){
    if(document.getElementById("mensajeAutomata")!=null){
        let textoMens=new SpeechSynthesisUtterance();
        textoMens.voice=speechSynthesis.getVoices()[5];
        textoMens.rate=1;
        textoMens.volume=1;
        textoMens.text=document.getElementById("mensajeAutomata").innerText;
        speechSynthesis.speak(textoMens);
    }
}
function historialEspacio(){
    if(document.getElementById("historial")!=null){
        let tabla=document.getElementById("historial");
        let numFilas=tabla.rows.length;
        let espacio=numFilas*7;
        let grafo=document.getElementById("grafo");
        let medida=espacio+"mm";
        grafo.style.marginBottom=medida;  
    }
}
function interfazIdioma(){
    let idiomaSel=document.getElementById("lenguaje").value;
    let palabrasAceptadas=new Array("aaaaaa","baaaaab","baaab","baab","abba","abbbba","abbbbbba","aaa","bb","aa");
    let cadenaCompleta=null;
    let primeraParte=null;
    let segundaParte=null;
    switch (idiomaSel) {
        case "Espaniol":
            document.getElementById("palabra").placeholder = "Ingrese una palabra...";
            document.getElementById("validacion").innerText = "Evaluar";
            document.getElementById("eleccionLeng").innerText = "elija el idioma:";
            if (document.getElementById("mensajeAutomata") != null) {
                let palabra = document.getElementById("palabra").value;
                if (esPalindromo(palabra)) {
                cadenaCompleta = reemplazarCadena(segundaParte, "es un palíndromo.", cadenaCompleta);
                } else {
                cadenaCompleta = reemplazarCadena(segundaParte, "no es un palíndromo.", cadenaCompleta);
                }
                document.getElementById("mensajeAutomata").innerText=cadenaCompleta;
            }                
            document.getElementById("botonHistorial").innerText="Mostrar historial";
            document.getElementById("botonBorrarHistorial").innerText="Borrar historial";
            if(document.getElementById("historial")!=null){
                document.getElementById("tablaPalabra").innerText="Palabra ingresada";
                document.getElementById("tablaEstado").innerText='"Estado de la palabra"';
                cambiarIdiomaEstadoHistorial("la cadena","es aceptada.","no ha ingresado ninguna palabra","es rechazada.");
            }
            else{
                document.getElementById("sinHistorial").innerText='"No hay palabras en el historial."';
            }
            break;
        case "English":
            document.getElementById("palabra").placeholder="Enter a word...";
            document.getElementById("validacion").innerText="evaluate";
            document.getElementById("eleccionLeng").innerText="choose language:";
            if(document.getElementById("mensajeAutomata")!=null){
                cadenaCompleta=document.getElementById("mensajeAutomata").innerText;
                primeraParte=obtenerPrimeraParteCad(cadenaCompleta);
                segundaParte=obtenerSegundaParteCad(cadenaCompleta);
                palabraValida=validarPalabra(cadenaCompleta,palabrasAceptadas);
                cadenaCompleta=reemplazarCadena(primeraParte,"The string",cadenaCompleta);
                if (palabraValida) {
                    cadenaCompleta=reemplazarCadena(segundaParte,"is a palindrome.",cadenaCompleta); 
                }
                else{
                    cadenaCompleta=reemplazarCadena(segundaParte,"is not a palindrome.",cadenaCompleta);
                }
                document.getElementById("mensajeAutomata").innerText=cadenaCompleta;
            }                
            document.getElementById("botonHistorial").innerText="show history";
            document.getElementById("botonBorrarHistorial").innerText="Delete history";
            if(document.getElementById("historial")!=null){
                document.getElementById("tablaPalabra").innerText="word entered";
                document.getElementById("tablaEstado").innerText='"word status"';
                cambiarIdiomaEstadoHistorial("The string","is a palindrome.","you have not entered any words","is not a palindrome.");
            }
            else{
                document.getElementById("sinHistorial").innerText='"There are no words in the history."';
            }
            break;
        case "Francés":
                document.getElementById("palabra").placeholder="Saisir un mot...";
                document.getElementById("validacion").innerText="Évaluer";
                document.getElementById("eleccionLeng").innerText="choisir la langue :";
                if(document.getElementById("mensajeAutomata")!=null){
                    cadenaCompleta=document.getElementById("mensajeAutomata").innerText;
                    primeraParte=obtenerPrimeraParteCad(cadenaCompleta);
                    segundaParte=obtenerSegundaParteCad(cadenaCompleta);
                    palabraValida=validarPalabra(cadenaCompleta,palabrasAceptadas);
                    cadenaCompleta=reemplazarCadena(primeraParte,"La chaîne",cadenaCompleta);
                    if (palabraValida) {
                        cadenaCompleta=reemplazarCadena(segundaParte,"est un palindrome.",cadenaCompleta); 
                    }
                    else{
                        cadenaCompleta=reemplazarCadena(segundaParte,"is not a palindrome.",cadenaCompleta);
                    }
                    document.getElementById("mensajeAutomata").innerText=cadenaCompleta;
                }                
                document.getElementById("botonHistorial").innerText="afficher l'historique";
                document.getElementById("botonBorrarHistorial").innerText="Supprimer l'historique";
                if(document.getElementById("historial")!=null){
                    document.getElementById("tablaPalabra").innerText="mot saisi";
                    document.getElementById("tablaEstado").innerText='"statut du mot"';
                    cambiarIdiomaEstadoHistorial("La chaîne", "est un palindrome.", "vous n'avez pas saisi de mots", "n'est pas un palindrome.");
                }
                else{
                    document.getElementById("sinHistorial").innerText='"Il n y a pas de mots dans l histoire."';
                }
            break;
        default:
            break;
    }
}
function obtenerPrimeraParteCad(cadenaCompleta) {
    let primeraParte=null;
    for (let i = 0; i < cadenaCompleta.length; i++){
        if (cadenaCompleta[i]=='"') {
            primeraParte=cadenaCompleta.substring(0,i-1);
            break;
        }
    }
    return primeraParte
}
function obtenerSegundaParteCad(cadenaCompleta) {
    let segundaParte=null;
    let indiceFinal=cadenaCompleta.length-1;
    for (let i = indiceFinal; i>=0; i--){
        if (cadenaCompleta[i]=='"') {
            segundaParte=cadenaCompleta.substring(i+2,cadenaCompleta.length);
            break;
        }
    }
    return segundaParte
}
function cambiarIdiomaEstadoHistorial(parteNueva1,parteNueva2,palabraNula,parteNueva2Neg) {
    let historialEstado=document.getElementsByClassName("estadoPalabra");
    let cadenaCompleta=null;
    let primeraParte=null;
    let segundaParte=null;
    let palabrasAceptadas=new Array("aaaaaa","baaaaab","baaab","baab","abba","abbbba","abbbbbba","aaa","bb","aa");
    for (let i=0; i<historialEstado.length; i++){
        cadenaCompleta=historialEstado[i].innerText;        
        if (cadenaCompleta.indexOf('"')==-1) {
            historialEstado[i].innerText=palabraNula;
        }
        else{
            palabraValida=validarPalabra(cadenaCompleta,palabrasAceptadas);
            primeraParte=obtenerPrimeraParteCad(cadenaCompleta);
            segundaParte=obtenerSegundaParteCad(cadenaCompleta);
            cadenaCompleta=reemplazarCadena(primeraParte,parteNueva1,cadenaCompleta);
            if (palabraValida) {
                cadenaCompleta=reemplazarCadena(segundaParte,parteNueva2,cadenaCompleta);
            }
            else{
                cadenaCompleta=reemplazarCadena(segundaParte,parteNueva2Neg,cadenaCompleta); 
            }
            historialEstado[i].innerText=cadenaCompleta; 
        }

    }
}
function validarPalabra(cadenaCompleta,palabrasAceptadas) {
    let palabraIndiceInicial=cadenaCompleta.indexOf('"');
    let valido=false;
    for (let i = cadenaCompleta.length; i>=0; i--) {
        if (cadenaCompleta[i]=='"') {
            palabra=cadenaCompleta.substring(palabraIndiceInicial+1,i);
            break;
        }
    }
    for (let i=0; i<cadenaCompleta.length; i++){
        if (palabra==palabrasAceptadas[i]) {
            valido=true;
            break;
        }
    }
    return valido;
}
function reemplazarCadena(cadenaVieja, cadenaNueva, cadenaCompleta) {
    // Reemplaza cadenaVieja por cadenaNueva en cadenaCompleta
    
       for (let i = 0; i < cadenaCompleta.length; i++) {
          if (cadenaCompleta.substring(i, i + cadenaVieja.length) == cadenaVieja) {
             cadenaCompleta= cadenaCompleta.substring(0, i) + cadenaNueva + cadenaCompleta.substring(i + cadenaVieja.length, cadenaCompleta.length);
          }
       }
       return cadenaCompleta;
    }

function esPalindromo(){
    let pila = [];
    for (let letra of palabra) {
        pila.push(letra);
    }
    let palabra_invertida = "";
    while (pila.length > 0) {
        palabra_invertida += pila.pop();
    }
    if (palabra === palabra_invertida) {
        cadenaCompleta = reemplazarCadena(segundaParte, "es un palíndromo.", cadenaCompleta);
    } else {
        cadenaCompleta = reemplazarCadena(segundaParte, "no es un palíndromo.", cadenaCompleta);
    }
    document.getElementById("mensajeAutomata").innerText = cadenaCompleta;
}