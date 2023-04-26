class receptora{
    constructor(valor){
        this.valor=valor;
    };
    encenderLinea(){
        this.valor.style.borderTopColor="green";
    }
    encenderFlecha(){
        this.valor.style.borderTopColor="green";
        this.valor.style.borderRightColor="green";
    }
    encenderEstado(){
        this.valor.style.borderColor="green";
    }
    encenderLineaCurva(){
        let ctx=this.valor.getContext("2d");
        ctx.strokeStyle = "green";
        ctx.stroke();
    }    
    encenderEstadoAceptacion(){
        this.valor.style.borderColor="green";
        this.valor.style.outlineColor="green";
    }
    encenderTransicion(){
        this.valor.style.color="green";
    }

}
class interfazComando{
    constructor(valor){
        this.valor=valor;
    }
    ejecutar(){

    }
}    
class comandoEncenderLinea extends interfazComando{
    constructor(valor){
        super(valor);
    }
    ejecutar(){
        let x=new receptora(this.valor);
        x.encenderLinea();  
    } 
    
}
class comandoEncenderFlecha extends interfazComando{
    constructor(valor){
        super(valor);
    }
    ejecutar(){
        let x=new receptora(this.valor);
        x.encenderFlecha();  
    } 
    
}
class comandoEncenderEstado extends interfazComando{
    constructor(valor){
        super(valor);
    }
    ejecutar(){
        let x=new receptora(this.valor);
        x.encenderEstado();  
    } 
    
}
class comandoEncenderLineaCurva extends interfazComando{
    constructor(valor){
        super(valor);
    }
    ejecutar(){
        let x=new receptora(this.valor);
        x.encenderLineaCurva();  
    } 
    
}
class comandoEncenderEstadoAceptacion extends interfazComando{
    constructor(valor){
        super(valor);
    }
    ejecutar(){
        let x=new receptora(this.valor);
        x.encenderEstadoAceptacion();  
    } 
    
}
class comandoEncenderTransicion extends interfazComando{
    constructor(valor){
        super(valor);
    }
    ejecutar(){
        let x=new receptora(this.valor);
        x.encenderTransicion();  
    } 
    
}
class invocadora{
    constructor(comando){
        this.comando=comando;
    }
    comandoEjecucion(){
        this.comando.ejecutar();
    }
}
function encenderGrafo(){
    if (document.getElementById("mensajeAutomata")!=null) {
        let cadenaCompleta=document.getElementById("mensajeAutomata").innerText;
        let palabra=obtenerPalabraValida(cadenaCompleta);
        let retraso=retrasoSegundos();
        let auxRetr=retraso;
        let pilaConfig=["#"];
        if(palabra!=null){
            setTimeout(function(){correrComandos("p","l1","f1","","","")},retraso);
            setTimeout(function(){aniadirLetraPila("#")},retraso);
            retraso=retraso+auxRetr;
            for(let i=0; i<palabra.length; i++){
                if (i==0 && palabra[i]=="a" && pilaConfig[i]=="#"){
                    pilaConfig.push("a");
                    setTimeout(function(){correrComandos("","","f2","flechaCurva1","","let5f")},retraso);
                    setTimeout(function(){aniadirLetraPila("a")},retraso);
                    setTimeout(function(){document.getElementById("let5f").style.color="black"},retraso+auxRetr);
                }
                if (i==0 && palabra[i]=="b" && pilaConfig[i]=="#"){
                    pilaConfig.push("b");
                    setTimeout(function(){correrComandos("","","f2","flechaCurva1","","let5e")},retraso);
                    setTimeout(function(){aniadirLetraPila("b")},retraso);
                    setTimeout(function(){document.getElementById("let5e").style.color="black"},retraso+auxRetr); 
                }
                if (i<palabra.length/2) {                   
                    if (palabra[i]=="a" && pilaConfig[i]=="a"){
                        pilaConfig.push("a");
                        setTimeout(function(){correrComandos("","","","","","let5d")},retraso);
                        setTimeout(function(){aniadirLetraPila("a")},retraso);
                        setTimeout(function(){document.getElementById("let5d").style.color="black"},retraso+auxRetr);
                    }
                    if (palabra[i]=="b" && pilaConfig[i]=="a"){
                        pilaConfig.push("b");
                        setTimeout(function(){correrComandos("","","","","","let5c")},retraso);
                        setTimeout(function(){aniadirLetraPila("b")},retraso);
                        setTimeout(function(){document.getElementById("let5c").style.color="black"},retraso+auxRetr);
                    }
                    if (palabra[i]=="a" && pilaConfig[i]=="b"){
                        pilaConfig.push("a");
                        setTimeout(function(){correrComandos("","","","","","let5b")},retraso);
                        setTimeout(function(){aniadirLetraPila("a")},retraso);
                        setTimeout(function(){document.getElementById("let5b").style.color="black"},retraso+auxRetr);
                    }
                    if (palabra[i]=="b" && pilaConfig[i]=="b"){
                        pilaConfig.push("b");
                        setTimeout(function(){correrComandos("","","","","","let5a")},retraso);
                        setTimeout(function(){aniadirLetraPila("b")},retraso);
                        setTimeout(function(){document.getElementById("let5a").style.color="black"},retraso+auxRetr);
                    }
                    retraso=retraso+auxRetr;
                }
                else{
                    if(i==palabra.length/2){
                        pilaConfig.pop();
                        if (palabra[i]=="a") {
                            setTimeout(function(){correrComandos("q","l3","f3","","","let3b")},retraso);
                            setTimeout(function(){document.getElementById("let3b").style.color="black"},retraso+auxRetr);  
                        }
                        else{
                            setTimeout(function(){correrComandos("q","l3","f3","","","let3a")},retraso);
                            setTimeout(function(){document.getElementById("let3a").style.color="black"},retraso+auxRetr);
                        }
                        setTimeout(removerLetraPila,retraso);
                        retraso=retraso+auxRetr;
                    }
                    else{
                        pilaConfig.pop();
                        if (palabra[i]=="a") {
                            setTimeout(function(){correrComandos("","","f5","flechaCurva2","","let6b")},retraso);
                            setTimeout(function(){document.getElementById("let6b").style.color="black"},retraso+auxRetr);
                        }
                        else{
                            setTimeout(function(){correrComandos("","","f5","flechaCurva2","","let6a")},retraso);
                            setTimeout(function(){document.getElementById("let6a").style.color="black"},retraso+auxRetr);
                        }
                        setTimeout(removerLetraPila,retraso);
                        retraso=retraso+auxRetr;
                    }
                    if (i+1==palabra.length) {
                        setTimeout(function(){correrComandos("","l4","f4","","r","let4")},retraso);
                    }
                }
                console.log(retraso);
            }
        }
    }
}
function correrComandos(estado,linea,flecha,lineaCurva,aceptacion,transicion){
    let comando=null;
    if(transicion!=""){
        comando=new invocadora(new comandoEncenderTransicion(document.getElementById(transicion)));
        comando.comandoEjecucion();
    }
    if(linea!=""){
        comando=new invocadora(new comandoEncenderLinea(document.getElementById(linea)));
        comando.comandoEjecucion();
    }
    if (lineaCurva!="") {
        comando=new invocadora(new comandoEncenderLineaCurva(document.getElementById(lineaCurva)));
        comando.comandoEjecucion();  
    }
    if (flecha!="") {
        comando=new invocadora(new comandoEncenderFlecha(document.getElementById(flecha)));
        comando.comandoEjecucion();  
    }

    if(estado!=""){
        comando=new invocadora(new comandoEncenderEstado(document.getElementById(estado)));
        comando.comandoEjecucion(); 
    }
    if(aceptacion!=""){
        comando=new invocadora(new comandoEncenderEstadoAceptacion(document.getElementById(aceptacion)));
        comando.comandoEjecucion();
    }
}
function obtenerPalabraValida(cadenaCompleta){
    let palabraIndiceInicial=cadenaCompleta.indexOf('"');
    let palabra="";
    let pila=Array();
    let palabraInv=null;
    for (let i = cadenaCompleta.length; i>=0; i--) {
        if (cadenaCompleta[i]=='"') {
            palabra=cadenaCompleta.substring(palabraIndiceInicial+1,i);
            break;
        }
    }
    for (let i = 0; i<palabra.length; i++) {
        if (palabra[i]==" ") {
            pila=null;
            break;
        }
        if (palabra[i]=="a" || palabra[i]=="b") {
            pila.push(palabra[i]);
        }
        else{
            pila=null;
            break;
        }
    }
    if (pila!=null) {
        palabraInv="";
        while(pila.length>0){    
            palabraInv+=pila.pop();
        }
        if (palabra!=palabraInv || palabra=="" || pila.length==1 || palabra.length%2!=0) {
            palabraInv=null;
        }
    }
    return palabraInv;
}
function aniadirLetraPila(letra){
    let pilaCuerpo=document.getElementById("cuerpoPila");
    let pilaLetra=document.createElement("td");
    let fila=document.createElement("tr");
    let filaUno=null
    pilaLetra.innerText=letra;
    fila.appendChild(pilaLetra);
    if (pilaCuerpo.rows.length==0) {    
        pilaCuerpo.appendChild(fila);
    }
    else{
        pilaCuerpo.insertBefore(fila,pilaCuerpo.children[0]);
    }

}
function removerLetraPila() {
    let pilaCuerpo=document.getElementById("cuerpoPila");
    pilaCuerpo.removeChild(pilaCuerpo.firstElementChild);
}
function velocidadEjecucion() {
    let url=document.getElementById("evaluador").action;
    let velocidadEscogida=document.getElementById("velocidad").value;
    let velocidadActual=null;
    for (let i = url.length; i>=0; i--) {
        if (url[i]=="/") {
            velocidadActual=url.substring(i+1);
            break;
        }
        
    }
    document.getElementById("evaluador").action=url.replace(velocidadActual,velocidadEscogida);
}
function retrasoSegundos(){
    let segundos=0;
    let velocidad=null;
    if (document.getElementById("velocidadEscog")!=null){
        velocidad=document.getElementById("velocidadEscog").innerText;
        if (velocidad=="normal") {
            segundos=3000;
        }
        if (velocidad=="rapido") {
            segundos=1500;
        }
        if (velocidad=="lento") {
            segundos=5000;
        }
    }
    return segundos;
}