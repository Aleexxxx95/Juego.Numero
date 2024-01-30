let numeroSecreto = 0;
let intentos = 1; 
let listaNumerosSorteados = [];
let numeroMaximo = 10; 

function asignarTextoElemento(Elemento, texto) {
    let elementoHTML = document.querySelector(Elemento);
    elementoHTML.innerHTML = texto;
    return;   
}

function verificarIntento() {
//let numeroDeUsuario = document.querySelector('input'); 
let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); 
//console.log(typeof(numeroDeUsuario)); 
//console.log(numeroDeUsuario); 
//console.log(typeof(numeroSecreto)); 
//console.log(intentos); 
if(numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos == 1) ? 'vez' : 'veces'}`); 
    document.getElementById('reiniciar').removeAttribute('disabled'); 
} else { 
    //el usuario no acerto
    if(numeroDeUsuario > numeroSecreto) { 
        asignarTextoElemento('p','El numero secreto es menor');
    } else {
        asignarTextoElemento('p','El numero secreto es mayor')
    }
    intentos++; 
    limpiarCaja(); 
}
return; 
}

function limpiarCaja() { 
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {   
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;  
   /*quite la funcion numeroSecreto para crear numeroGenerado,
   creo que deberia convertirlas en una sola, numeroSecreto 
   esta siendo utilzada pero nunca fue definida*/
// Si ya sortemos todos los numeros
if(listaNumerosSorteados.length == numeroMaximo) {
    asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
} else {
    //Si el numero generado esta incluido en la lista
    if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    } else {
        listaNumerosSorteados.push(numeroGenerado); 
        return numeroGenerado;
}
}
}

function condicionesIniciales (){
    asignarTextoElemento('h1','Juego del numero secreto');
    asignarTextoElemento('p',`Dime un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1; 
}
function reiniciarJuego(){
    //limpiar caja
    limpiarCaja(); 
    //Indicar mensaje de inicio
    condicionesIniciales(); 
    //Generar el numero aleatorio
    //Reiniciar el numero de intentos
    //Desabilitar el boton
    document.querySelector('#reiniciar').setAttribute('disabled','true'); 
}
condicionesIniciales(); 
