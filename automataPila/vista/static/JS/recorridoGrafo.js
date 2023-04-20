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
    }    
    encenderEstadoAceptacion(){
        this.valor.style.borderColor="green";
        this.valor.style.outlineColor="green";
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
        super(valor)
    }
    ejecutar(){
        let x=new receptora(this.valor);
        x.encenderLinea();  
    } 
    
}
class comandoEncenderFlecha extends interfazComando{
    constructor(valor){
        super(valor)
    }
    ejecutar(){
        let x=new receptora(this.valor);
        x.encenderFlecha();  
    } 
    
}
class comandoEncenderEstado extends interfazComando{
    constructor(valor){
        super(valor)
    }
    ejecutar(){
        let x=new receptora(this.valor);
        x.encenderEstado();  
    } 
    
}
class comandoEncenderLineaCurva extends interfazComando{
    constructor(valor){
        super(valor)
    }
    ejecutar(){
        let x=new receptora(this.valor);
        x.encenderLineaCurva();  
    } 
    
}
class comandoEncenderEstadoAceptacion extends interfazComando{
    constructor(valor){
        super(valor)
    }
    ejecutar(){
        let x=new receptora(this.valor);
        x.encenderEstadoAceptacion();  
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
    palabra=document.getElementById("palabra").value;
    palabra=obtenerPalabraValida(palabra)
    if(palabra!=null){
        correrComandos("p","l1","f1","","");
    }
    //else{
        //alert("la palabra "+palabra+" no ha sido aceptada por el automata");
    //}
}
function correrComandos(estado,linea,flecha,lineaCurva,aceptacion){
    let comando=null
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
function obtenerPalabraValida(palabra) {
    pila=Array();
    palabraInv=null;
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
        if (palabra!=palabraInv) {
            palabraInv=null;
        }
    }
    return palabraInv;
}