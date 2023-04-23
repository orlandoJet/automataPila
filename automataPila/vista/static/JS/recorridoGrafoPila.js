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
        this.valor.style.color="green"
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
        let pilaConfig=["#"];
        aniadirLetraPila("#");
        if(palabra!=null){
            correrComandos("p","l1","f1","","","");
            for(let i=0; i<palabra.length; i++){
                if (i==0 && palabra[i]=="a" && pilaConfig[i]=="#"){
                    pilaConfig.push("a");
                    correrComandos("","","f2","flechaCurva1","","let5f");
                    aniadirLetraPila("a");
                }
                if (i==0 && palabra[i]=="b" && pilaConfig[i]=="#"){
                    pilaConfig.push("b");
                    correrComandos("","","f2","flechaCurva1","","let5e");
                    aniadirLetraPila("b");
                }
                if (i<palabra.length/2) {
                    if (palabra[i]=="a" && pilaConfig[i]=="a"){
                        pilaConfig.push("a");
                        correrComandos("","","","","","let5d");
                        aniadirLetraPila("a");
                    }
                    if (palabra[i]=="b" && pilaConfig[i]=="a"){
                        pilaConfig.push("b");
                        correrComandos("","","","","","let5c");
                        aniadirLetraPila("b");
                    }
                    if (palabra[i]=="a" && pilaConfig[i]=="b"){
                        pilaConfig.push("a");
                        correrComandos("","","","","","let5b");
                        aniadirLetraPila("a");
                    }
                    if (palabra[i]=="b" && pilaConfig[i]=="b"){
                        pilaConfig.push("b");
                        correrComandos("","","","","","let5a");
                        aniadirLetraPila("b");
                    } 
                }
                else{
                    if(i==palabra.length/2){
                        pilaConfig.pop();
                        if (palabra[i]=="a") {
                            correrComandos("q","l3","f3","","","let3b");
                            
                        }
                        else{
                            correrComandos("q","l3","f3","","","let3a");
                            
                        }
                        removerLetraPila();
                    }
                    else{
                        pilaConfig.pop();
                        if (palabra[i]=="a") {
                            correrComandos("","","f5","flechaCurva2","","let6b");
                        }
                        else{
                            correrComandos("","","f5","flechaCurva2","","let6a");
                        }
                        removerLetraPila();
                    }
                    if (i+1==palabra.length) {
                        correrComandos("","l4","f4","","r","let4");
                        removerLetraPila();
                    }
                }
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
    pilaCuerpo.removeChild(pilaCuerpo.firstChild)
}