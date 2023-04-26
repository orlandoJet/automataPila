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
    let cadenaCompleta=null;
    let primeraParte=null;
    let segundaParte=null;
    let palabraValida=null;
    switch (idiomaSel) {
        case "Espaniol":
            document.getElementById("palabra").placeholder = "Ingrese una palabra...";
            document.getElementById("validacion").innerText = "Evaluar";
            document.getElementById("eleccionLeng").innerText = "elija el idioma:";
            document.getElementById("eleccionVel").innerText = "elija la velocidad de ejecución del grafo y la pila:";
            document.getElementById("velocidad").options[0].text="normal";
            document.getElementById("velocidad").options[1].text="rápido";
            document.getElementById("velocidad").options[2].text="lento";
            if (document.getElementById("mensajeAutomata") != null) {
                cadenaCompleta=document.getElementById("mensajeAutomata").innerText;
                primeraParte=obtenerPrimeraParteCad(cadenaCompleta);
                segundaParte=obtenerSegundaParteCad(cadenaCompleta);
                palabraValida=validarPalabra(cadenaCompleta);
                cadenaCompleta=reemplazarCadena(primeraParte,"The string",cadenaCompleta);
                if (palabraValida==true) {
                    cadenaCompleta = reemplazarCadena(segundaParte, "es un palíndromo.", cadenaCompleta);
                } 
                else {
                    if (palabraValida==null) {
                        cadenaCompleta=reemplazarCadena(segundaParte," tiene simbolos que no pertenecen al alfabeto o es una palabra vacia.",cadenaCompleta);
                    }
                    else{
                        cadenaCompleta = reemplazarCadena(segundaParte, "no es un palíndromo.", cadenaCompleta);
                    }
                }
                document.getElementById("mensajeAutomata").innerText=cadenaCompleta;
            }                
            document.getElementById("botonHistorial").innerText="Mostrar historial";
            document.getElementById("botonBorrarHistorial").innerText="Borrar historial";
            if(document.getElementById("historial")!=null){
                document.getElementById("tablaPalabra").innerText="Palabra ingresada";
                document.getElementById("tablaEstado").innerText='"Estado de la palabra"';
                cambiarIdiomaEstadoHistorial("la cadena","es un palíndromo.","tiene símbolos que no pertenecen al alfabeto o es una palabra vacia.","no es un palíndromo.");
            }
            else{
                document.getElementById("sinHistorial").innerText='"No hay palabras en el historial."';
            }
            break;
        case "English":
            document.getElementById("palabra").placeholder="Enter a word...";
            document.getElementById("validacion").innerText="evaluate";
            document.getElementById("eleccionLeng").innerText="choose language:";
            document.getElementById("eleccionVel").innerText = "choose the graph and stack execution speed:";
            document.getElementById("velocidad").options[0].text="normal";
            document.getElementById("velocidad").options[1].text="fast";
            document.getElementById("velocidad").options[2].text="slow";
            if(document.getElementById("mensajeAutomata")!=null){
                cadenaCompleta=document.getElementById("mensajeAutomata").innerText;
                primeraParte=obtenerPrimeraParteCad(cadenaCompleta);
                segundaParte=obtenerSegundaParteCad(cadenaCompleta);
                palabraValida=validarPalabra(cadenaCompleta);
                cadenaCompleta=reemplazarCadena(primeraParte,"The string",cadenaCompleta);
                if (palabraValida==true) {
                    cadenaCompleta=reemplazarCadena(segundaParte,"is a palindrome.",cadenaCompleta); 
                }
                else{  
                    if (palabraValida==null) {
                        cadenaCompleta=reemplazarCadena(segundaParte,"has non-alphabet symbols or is an empty word.",cadenaCompleta);
                    }
                    else{
                       cadenaCompleta=reemplazarCadena(segundaParte,"is not a palindrome.",cadenaCompleta); 
                    }
                }
                document.getElementById("mensajeAutomata").innerText=cadenaCompleta;
            }                
            document.getElementById("botonHistorial").innerText="show history";
            document.getElementById("botonBorrarHistorial").innerText="Delete history";
            if(document.getElementById("historial")!=null){
                document.getElementById("tablaPalabra").innerText="word entered";
                document.getElementById("tablaEstado").innerText='"word status"';
                cambiarIdiomaEstadoHistorial("The string","is a palindrome.","has non-alphabet symbols or is an empty word.","is not a palindrome.");
            }
            else{
                document.getElementById("sinHistorial").innerText='"There are no words in the history."';
            }
            break;
        case "Frances":
                document.getElementById("palabra").placeholder="Saisir un mot...";
                document.getElementById("validacion").innerText="Évaluer";
                document.getElementById("eleccionLeng").innerText="choisir la langue :";
                document.getElementById("eleccionVel").innerText = "choisissez la vitesse d'exécution du graphe et de la pile :";
                document.getElementById("velocidad").options[0].text="normal";
                document.getElementById("velocidad").options[1].text="rapide";
                document.getElementById("velocidad").options[2].text="lent";
                if(document.getElementById("mensajeAutomata")!=null){
                    cadenaCompleta=document.getElementById("mensajeAutomata").innerText;
                    primeraParte=obtenerPrimeraParteCad(cadenaCompleta);
                    segundaParte=obtenerSegundaParteCad(cadenaCompleta);
                    palabraValida=validarPalabra(cadenaCompleta);
                    cadenaCompleta=reemplazarCadena(primeraParte,"La chaîne",cadenaCompleta);
                    if (palabraValida==true) {
                        cadenaCompleta=reemplazarCadena(segundaParte,"est un palindrome.",cadenaCompleta); 
                    }
                    else{
                        if (palabraValida==null) {
                            cadenaCompleta=reemplazarCadena(segundaParte,"contient des symboles non alphabétiques ou est un mot vide.",cadenaCompleta);
                        }
                        else{
                            cadenaCompleta=reemplazarCadena(segundaParte,"n'est pas un palindrome.",cadenaCompleta);
                        }
                        
                    }
                    document.getElementById("mensajeAutomata").innerText=cadenaCompleta;
                }                
                document.getElementById("botonHistorial").innerText="afficher l'historique";
                document.getElementById("botonBorrarHistorial").innerText="Supprimer l'historique";
                if(document.getElementById("historial")!=null){
                    document.getElementById("tablaPalabra").innerText="mot saisi";
                    document.getElementById("tablaEstado").innerText='"statut du mot"';
                    cambiarIdiomaEstadoHistorial("La chaîne", "est un palindrome.", "contient des symboles non alphabétiques ou est un mot vide.", "n'est pas un palindrome.");
                }
                else{
                    document.getElementById("sinHistorial").innerText='"Il n y a pas de mots dans l histoire."';
                }
            break;
        default:
            break;
    }
    if (document.getElementById("velocidadEleg").innerText!=""){
        velocidadEleg();
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
    for (let i=0; i<historialEstado.length; i++){
        cadenaCompleta=historialEstado[i].innerText;        
        if (cadenaCompleta.indexOf('"')==-1) {
            historialEstado[i].innerText=palabraNula;
        }
        else{
            palabraValida=validarPalabra(cadenaCompleta);
            primeraParte=obtenerPrimeraParteCad(cadenaCompleta);
            segundaParte=obtenerSegundaParteCad(cadenaCompleta);
            cadenaCompleta=reemplazarCadena(primeraParte,parteNueva1,cadenaCompleta);
            if (palabraValida==true) {
                cadenaCompleta=reemplazarCadena(segundaParte,parteNueva2,cadenaCompleta);
            }
            else{
                if (palabraValida==null) {
                    cadenaCompleta=reemplazarCadena(segundaParte,palabraNula,cadenaCompleta);     
                }
                else{
                    cadenaCompleta=reemplazarCadena(segundaParte,parteNueva2Neg,cadenaCompleta); 
                }
            }
            historialEstado[i].innerText=cadenaCompleta; 
        }

    }
}
function validarPalabra(cadenaCompleta) {
    let palabraIndiceInicial=cadenaCompleta.indexOf('"');
    let valido=false;
    let palabra=null;
    for (let i = cadenaCompleta.length; i>=0; i--) {
        if (cadenaCompleta[i]=='"') {
            palabra=cadenaCompleta.substring(palabraIndiceInicial+1,i);
            break;
        }
    }
    valido=esPalindromo(palabra);
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
function velocidadEleg() {
    let indVelEleg=document.getElementById("velocidad").selectedIndex;
    let velocidadEleg=document.getElementById("velocidad").options[indVelEleg].text;
    let idiomaRecon=document.getElementById("velocidad").options[1].text;
    if (idiomaRecon=="rápido") {
        document.getElementById("velocidadEleg").innerText="{velocidad seleccionada: "+velocidadEleg+"}";
    }
    if (idiomaRecon=="fast") {
        document.getElementById("velocidadEleg").innerText="{selected speed: "+velocidadEleg+"}";
    }
    if (idiomaRecon=="rapide") {
        document.getElementById("velocidadEleg").innerText="{vitesse sélectionnée: "+velocidadEleg+"}";
    }
}
function esPalindromo(palabra){
    let pila = [];
    let palabraVal=null;
    for (let i = 0; i<palabra.length; i++) {
        if (palabra[i]==" ") {
            palabraVal=null;
            break;
        }
        if (palabra[i]=="a" || palabra[i]=="b") {
            pila.push(palabra[i]);
            palabraVal=true;
        }
        else{
            palabraVal=null;
            break;
        }
    }
    if (palabra.length==0){
        palabraVal==null;
    }
    let palabra_invertida = "";
    if (palabraVal!=null) {
        while (pila.length > 0) {
            palabra_invertida += pila.pop();
        }
        if (palabra == palabra_invertida && palabra.length%2==0) {
            palabraVal=true;
        } else {
            palabraVal=false;
        }
    }

    return palabraVal;
}