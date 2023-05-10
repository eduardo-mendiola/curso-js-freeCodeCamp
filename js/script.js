/* Ejercicio 1
 - Próximo en la fila - 
 
 En informática una cola (queue) es una estructura de datos abstracta en la cual los elementos se mantienen en orden. Los nuevos elementos se pueden añadir al final de la cola y los elementos previos se retiran del principio de la cola.
 
 Define una función proximoEnLaFila que tome un arreglo (array) y un número (elemento) como argumento. Agrega el número al final del arreglo y luego eliminar el primer elemento del arreglo. La función proximoEnLaFila debe retornar el elemento que fue removido.*/

 
 function proximoEnLaFila(array, elemento)
 {
   array.push(elemento); // Agrega al final del array
   return array.shift(); // Remueve el primer elemento y lo retorna.
   
  }
  
var numeros = [2, 5, 6, 8, 1, 3]; 
console.log("Antes: " + JSON.stringify(numeros));
/* JSON.stringify(array) muestra una forma mas elegante el array en la consola.*/
console.log(proximoEnLaFila(numeros, 58));
console.log("Despues: " + JSON.stringify(numeros));

/* El resultado de la conversión del array a JSON usando JSON.stringify() parece ser el mismo que el array original. Sin embargo, la diferencia está en que el resultado de la conversión a JSON es una cadena de texto JSON, mientras que el array original es un objeto de JavaScript.

Una cadena de texto JSON es simplemente una representación en formato de texto de un objeto o valor, que puede ser enviada a través de la red o almacenada en un archivo. Es una convención ampliamente utilizada para intercambiar datos entre aplicaciones.

Por otro lado, un objeto de JavaScript es una estructura de datos que puede contener cualquier tipo de valor, como números, strings, booleanos, objetos, arrays, etc. Aunque puede ser enviado a través de la red o almacenado en un archivo, es un objeto en memoria dentro de una aplicación.

Entonces, aunque JSON.stringify() produce un resultado que puede parecer igual al objeto original, es importante entender que son dos cosas diferentes: el objeto original es un objeto en memoria dentro de una aplicación, mientras que la cadena de texto JSON es una representación en formato de texto que puede ser enviada a través de la red o almacenada en un archivo.
 */

// Ejercicio con booleanos

var a;
var b;

a = 5;
b = 5;

console.log(a == b);
console.log(a === b);

b = 8;
console.log(a == b);
console.log(a === b);

b = "5";
console.log(a == b);
console.log(a === b);

a = "javaScript";
b = "javaScript";
console.log(a == b);
console.log(a === b);

// Ejercicio con if y if else

function interpretarIMC(indiceDeMasaCorporal)
{
  if (indiceDeMasaCorporal < 18.5) {
    console.log("Bajo Peso");
  } else if (indiceDeMasaCorporal <= 24.9) {
   console.log("Normal"); 
  } else if (indiceDeMasaCorporal <= 29.9){
    console.log("Sobrepeso");
  } else {
    console.log("Obesidad")
  }
}

interpretarIMC(17.8);
interpretarIMC(22.2);
interpretarIMC(28.5);
interpretarIMC(32.2);

/* Ejercicio Golf

  En el juego de golf cada hoyo tiene un par que representa el número promedio de golpes que se espera que haga un golfista para introducir la pelota en el hoyo.
  
  Hay un nombre diferente dependiendo de qué tan por encima o por debajo del par estén tus golpes.
  
  Tu función tomará los argumentos par y golpes.
  
  Retorna la cadena correcta según esta tabla que muestra los goles en orden de mayor a menor prioridad:
  
  Golpes        Retornar
  ---------------------------
  1             "Hole-in-one!"
  <= par - 2    "Eagle"
  par - 1       "Birdie"
  par           "Par"
  par + 1       "Bogey"
  par + 2       "Double Bogey"
  >= par + 3    "Go Home!"

  par y golpes siempre serán numéricos y positivos.
  */

  function golf(par, golpes){
    if (golpes === 1){
      return "Hole-in-one!";
    }else if (golpes <= (par - 2) && golpes !== 0){
      return "Eagle";
    }else if (golpes === (par -1)){
      return "Birdie";
    }else if (golpes === par){
      return "Par";
    }else if (golpes === (par + 1)){
      return "Bogey";
    }else if (golpes === (par + 2)){
      return "Double Bogey";
    }else if (golpes >= (par + 3)){
      return "Go Home!";
    }else{
      return "Le tienes que pegar a la pelota";
    }
  }

console.log(golf(4,0));

// Sentencias Switch

function clasificarValor(valor){
  var respuesta;
  switch(valor){
    case 1: //compara el valor con 1.
      respuesta = "alpha";
      break;
    case 2:
      respuesta = "beta";
      break;
    case 3: 
      respuesta = "gamma";
      break;
    case 4:
      respuesta = "delta";
      break;
    default: // no siempre va al final.
      respuesta = "Me se hasta delta 😒." //emoji [win] + [.]
      break; // no siempre es necesario break en default, depende de si esta al final o no, si esta al final no es necesario.
  }
  return respuesta;
}

console.log(clasificarValor(5));