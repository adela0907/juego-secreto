    //Variables
//let numeroSecreto = 2;

//genera un numero aletorio

let numeroSecreto = generarNumeroSecreto

function asignarTextoElemento ( elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function generarNumeroSecreto(){
    return Math.floor(mat.random()*10)+1;
}



   /*let numeroUsuario;
    while (numeroUsuario != numeroSecreto) {
    numeroUsuario = prompt("Me indicas un número entre 1 y 10 por favor:");*/

    console.log(numeroUsuario);
    /*
    Este código realiza
    la comparación
    */
    if (numeroUsuario == numeroSecreto) {
        //Acertamos, fue verdadera la condición
        alert(`Acertaste, el número es: ${numeroUsuario}`);
    } else {
        if (numeroUsuario > numeroSecreto){
            alert ('el numero secreto es menor');
        } else {
            alert ('el numero secreto es mayor');
        }
        //La condición no se cumplió
        //alert('Lo siento, no acertaste el número');
    }
   // }
