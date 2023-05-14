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

// Otro ejemplo de switch con strings
var comida = "pizza";
function precioComida(comida){
  var precio;
  switch(comida){
    case "pizza":
      precio = 8.5;
      break;
    case "hamburguesa":
      precio = 5.3;
      break;
    case "hotdog":
      precio = 2.15;
      break;
    default:
      precio = null;
  }
  if (comida === ""){
    return "Por favor ingrese un plato.";
  }else if (precio === null){
    return `🫣${comida} no esta en el menu`;
  }else{
    return `El/la ${comida} cuesta $${precio}.`;
  }
}

console.log(precioComida(comida));

// Sentencias Switch de multiple casos
function intensidadVolumen(nivelDelVolumen){
  var volumen;
  switch(nivelDelVolumen){
    case 0: 
      volumen = "desactivado";
      break;
    case 1:
      volumen = "muy bajo";
      break;
    case 2:
    case 3:
      volumen = "bajo";
      break;
    case 4:
    case 5:
    case 6:
      volumen = "medio";
      break;
    case 7:
    case 8:
      volumen = "alto"
      break;
    case 9:
    case 10:
      volumen = "muy alto"
      break;
    default:
      volumen = "valor no aceptado";
      break;
  }
  if (nivelDelVolumen < 0){
    return "No podes bajar tanto el volumen 😒"
  }else if(volumen === "valor no aceptado"){
    return "Te vas a quedar sordo, loquito!😱📢"
  }else{ 
    return `El volumen esta ${volumen}`;
  }
}

console.log(intensidadVolumen(12));

// Retorno valores Booleanos
// Ej:
function esMenorQue (a, b) {
  if (a < b){
    return true;
  }else {
    return false;
  }
}
console.log(esMenorQue(5, 9));
console.log(esMenorQue(20, 7));

// Mismo resultado mas resumido
function esMenorQueResumido(a, b) {
  return a < b;
}
console.log(esMenorQueResumido(5, 9));
console.log(esMenorQueResumido(20, 7));

// Patrón de retorno anticipado
// Ej:
function calcularRaizCuadrada(num){
  if (num < 0) {
    return undefined;
  }
  return Math.sqrt(num);
}
console.log(calcularRaizCuadrada(25));

/* Ejercicio - Conteo de Cartas

  Descripción:

  En el juego casino Blackjack el jugador puede sacarle ventaja a la casa llevando un registro del número relativo de cartas altas y bajas que quedan en la baraja.

  Esto se llama "conteo de cartas".

  Tener más cartas altas en la baraja es una ventaja para el jugador. Se le asigna un valor a cada carta de acuerdo a la siguiente tabla.

  - Cuando el conteo es positivo, el jugador debería apostar alto.
  - Cuando el conteo es 0 o negativo, el jugador debería apostar bajo.

  Cambio del conteo       Cartas
  --------------------------------------
  +1                      2, 3, 4, 5, 6
  0                       7, 8, 9
  -1                      10, 'J', 'Q', 'K', 'A'

  Nuestra meta es definir una función para contar cartas.
  La función debe tomar un parámetro carta que puede ser un número o una cadena de caracteres y luego aumentar o reducir el valor de la variable global conteo de acuerdo al valor de la carta (observa la tabla).

  La función debe retornar una cadena de caracteres con el conteo actual y la cadena:
  - "Apostar" si el conteo es positivo.
  - "Esperar" si el conteo es cero o negativo.

  El conteo actual y la decisión del jugador ("Apostar" o "Esperear") deben estar separados por un espacio.
*/


var contador = 0;

function conteoDeCartas(carta){
  switch(carta){
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      contador += 1; // También puede se contador++
      break;
    case 7:
    case 8:
    case 9:
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      contador -= 1; //También puede ser contador--
      break
    default:
    return 'Carta no válida';
    break; // aunque no hace falta es una buena practica poner el break al final.
  }

  if (contador > 0){
    return `El conteo actual es de: ${contador}, por lo tanto "Apostar" `;
  }else{
    return `El conteo actual es de: ${contador}, por lo tanto "Esperar"`;
  }
}

console.log(conteoDeCartas('K'));

/* Consejos de ChatGpt 

El ejercicio y tu solución se ven bien. Has implementado correctamente el conteo de cartas según las reglas dadas en el enunciado. Sin embargo, hay algunos consejos que puedo darte para mejorar tu código:

Manejo de casos inválidos: Actualmente, tu función asume que solo se proporcionarán valores válidos según la tabla dada. Sería útil agregar una verificación para manejar casos en los que se proporcionen cartas no válidas, como números fuera del rango o cadenas que no correspondan a cartas. Puedes devolver un mensaje de error en esos casos.

Mejor legibilidad del código: Puedes considerar agregar comentarios que expliquen la lógica detrás de cada caso en el switch statement. Esto ayudará a otros programadores (y a ti mismo en el futuro) a comprender rápidamente el propósito de cada bloque de código.

Uso de constantes: Puedes definir constantes para los valores de conteo en lugar de usar números directamente en el código. Esto hará que sea más fácil modificar o mantener el código en el futuro si los valores cambian.

Modularización: Si bien en este caso el código es corto y se encuentra en una función, es una buena práctica modularizar aún más tu código. Puedes considerar separar la lógica de conteo en una función aparte para que sea más fácil de mantener y reutilizar en el futuro.

Aquí tienes una versión del código con las sugerencias implementadas: */

// Estas variables permiten un mejor mantenimiento del código.
const VALOR_ALTO = 1;
const VALOR_NEUTRO = 0;
const VALOR_BAJO = -1;

let contadorDos = 0;
// Funcion que compara los valores y aumenta o disminuye el valor de contadorDos
function actualizarConteo(carta) {
  switch (carta) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      contadorDos += VALOR_ALTO;
      break;
    case 7:
    case 8:
    case 9:
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      contadorDos += VALOR_BAJO;
      break;
    default:
      return 'Carta no válida';
  }
}
// Funcion que devuelve la cantidad del contadorDos y si es aconsejable apostar o esperar.
function conteoDeCartasGpt(carta) {
  actualizarConteo(carta);

  if (contadorDos > VALOR_NEUTRO) {
    return `El conteo actual es de: ${contadorDos}, por lo tanto "Apostar"`;
  } else {
    return `El conteo actual es de: ${contadorDos}, por lo tanto "Esperar"`;
  }
}

console.log(conteoDeCartasGpt('K'));

// Objetos
// Ej:

let myDog = {
  "name": "Apolo", // <= propiedad-valor, clave-valor y key-value se refiere a lo mismo ("key": "value",)
  "age": 9,
  "weight": 6,
  "breed": "mutt"
};

// Notación de punto.
// Accedemos a la propiedad con variable.propiedad
console.log(myDog.name);
console.log(myDog.age);
console.log(myDog.weight);
console.log(myDog.breed);

// Notación de corchetes
// Ej:
let myNotebook = {
  "color": "green",
  "size": "A4",
  "number of sheets": 100,
  "number of pages": 200
};

console.log(myNotebook["color"]);
console.log(myNotebook["size"]);
console.log(myNotebook["number of sheets"]);
console.log(myNotebook["number of pages"]);

// Acceder a propiedades variables
// Ej:
let results = {
  1: "nora256",
  2: "gino577",
  3: "estef543",
  4: "kiara566"
};

let position = 3;
console.log(results[position]);

// Actualizar Propiedades
// Ej:
let backPack = {
  "color": "blue",
  "size": "medium", 
  "content": ["water bottle", "notebook"]
};
// Cambiar valor.
console.log(backPack.color); // blue
backPack.color = "black";
console.log(backPack.color); // black
// También podemos usar notación de corchetes.

// Agregar valor a un array
console.log(backPack.content);
backPack.content.push("pencil"); //Agregue un elemento al array
console.log(backPack.content) 

// Agregar una propiedad nueva
backPack.weight = 300; // Se agrego la propiedad weight
console.log(backPack.weight);

// Eliminar una propiedad

delete backPack.weight; // Se elimino la propiedad weight
console.log(backPack.weight); // undefined

// Objeto para busquedas
/* Con los objetos podemos tener código más conciso en algunas ocaciones, para asociar propiedades con valores, por ejemplo en comparación con switch. Ejemplo: */

//Código de busqueda con switch
function searchChemicalElement(symbol){
  let chemicalElement = "";
  switch(symbol){
    case "Al": 
      chemicalElement = "Aluminium";
      break;
    case "S":
      chemicalElement = "Sulfur";
      break;
    case "Cl":
      chemicalElement = "Chlorine";
      break;
    case "He":
      chemicalElement = "Helium"
      break;
    case "B":
      chemicalElement = "Boron";
      break;
    case "Li":
      chemicalElement = "Lithium";
      break;
  }
  return chemicalElement;
}
console.log(searchChemicalElement("B"));

// Código de busqueda con objetos
function searchChemicalElementObj(symbol){
  let symbolElement = {
    "Al": "Aluminium",
    "S": "Sulfur",
    "Cl": "Clorine",
    "He": "Helium",
    "B": "Boron",
    "Li": "Lithium"
  };
  return symbolElement[symbol];
}
console.log(searchChemicalElementObj("B"));

// Verificar si existe una propiedad
// myVariable.hasOwnProperty("property");
// Ej. de uso en una condicional.
function verifyProperty(obj, property){
  if (obj.hasOwnProperty(property)){
    return "Property: " + obj[property];
  } else {
    return "The objet doesn't have this property"
  }
}

console.log(verifyProperty(backPack, "size"));
console.log(verifyProperty(backPack, "material"));

// Objetos complejos
/* Un objeto complejo en programación es una estructura de datos que puede contener varias propiedades con valores de diferentes tipos de datos, incluyendo otros objetos, matrices, números, cadenas y valores booleanos. Estos objetos son "complejos" porque pueden tener una estructura anidada y pueden contener una gran cantidad de información.

JSON (JavaScript Object Notation) es un formato de intercambio de datos que utiliza una sintaxis similar a la de los objetos en JavaScript. Se utiliza comúnmente para enviar datos entre un servidor y un cliente, y es fácilmente legible tanto por humanos como por máquinas. Los objetos complejos en JSON se representan como una colección de pares de clave-valor, donde cada clave representa el nombre de una propiedad y el valor puede ser cualquier tipo de datos válido en JSON, incluso otro objeto complejo o una matriz. */
// Ej.:
var pizzas = [
  {
    type: "Pepperoni",
    size: "Large",
    price: 12.99,
    ingredients: ["Pepperoni", "Mozzarella", "Tomato sauce"],
    takeAway: false
  },
  {
    type: "Margherita",
    size: "Medium",
    price: 9.99,
    ingredients: ["Mozzarella", "Tomatoes", "Basil"],
    takeAway: true
  },
  {
    type: "Hawaiian",
    size: "Large",
    price: 14.99,
    ingredients: ["Ham", "Pineapple", "Mozzarella", "Tomato sauce"],
    takeAway: false
  },
  {
    type: "Meat lovers",
    size: "Extra large",
    price: 18.99,
    ingredients: ["Pepperoni", "Sausage", "Bacon", "Mozzarella", "Tomato sauce"],
    takeAway: true
  }
];

// Para acceder al objeto usamos su index [], y a sus clave-valor con notación de punto o de corchetes.
console.log(pizzas[2]);
console.log(pizzas[2].ingredients);
console.log(pizzas[2]["price"]);

/* Objetos anidados

Los objetos anidados son objetos que están dentro de otros objetos. En otras palabras, los objetos anidados son un conjunto de objetos que están organizados de manera jerárquica, con objetos internos que se relacionan con objetos externos.

En la programación, los objetos anidados son útiles para representar relaciones complejas entre entidades. Por ejemplo, en una aplicación de una tienda en línea, podemos tener un objeto "pedido" que contiene objetos "producto" anidados que representan los productos que se han pedido. A su vez, cada objeto "producto" puede contener información sobre su nombre, descripción, precio y otra información relevante.

Los objetos anidados son comunes en el formato JSON, donde se pueden representar estructuras de datos complejas. Al anidar objetos dentro de otros objetos, podemos organizar y estructurar la información de manera lógica y fácilmente accesible.
*/
// Ej:

// Nota: si las keys no tienen caracteres especiales o palabras separadas no son necesario las comillas
let myRecipe = {
  description: "Delicious Pizza Recipe", 
  cost: 15.99,
  ingredients: {
    crust: {
      type: "thin",
      size: "medium",
      flour: "wheat",
      water: "filtered",
      yeast: "active dry",
      sugar: "brown",
      salt: "kosher",
    },
    toppings: {
      sauce: "tomato",
      cheese: "mozzarella",
      vegetables: ["mushrooms", "onions", "green peppers"],
      meat: "pepperoni",
    },
    filling: {
      type: "classic",
      ingredients: ["mozzarella cheese", "pepperoni", "mushrooms", "onions"],
    },
  },
};

// Para acceder a los objetos anidados y sus propiedades hay que seguir la lógica en formato arbol y usar las notaciones de punto o corchete, o la combinación de ambas. 

console.log(myRecipe.ingredients.crust.flour);
// También usando notación de corchetes
console.log(myRecipe["ingredients"]["crust"]["flour"]);
// Combinado
console.log(myRecipe.ingredients.crust["flour"]);
console.log(myRecipe.ingredients["crust"].flour);
/* La notación de corchetes es muy util por si queremos cambiar la clave por una variable. */

/* Arreglos anidados
Los arrays anidados son una estructura de datos que permiten almacenar múltiples elementos dentro de un solo array. En lugar de tener un solo nivel de elementos, un array anidado tiene uno o más niveles de elementos dentro de él.

Cada nivel de un array anidado se puede acceder utilizando una serie de índices, donde cada índice representa el nivel del array que se desea acceder. Por ejemplo, si tenemos un array anidado de dos niveles, podríamos acceder a un elemento específico utilizando dos índices: el primero para indicar la posición del elemento en el primer nivel del array, y el segundo para indicar la posición del elemento en el segundo nivel.

Los arrays anidados pueden ser útiles para organizar y manipular datos complejos, como matrices de datos multidimensionales. También son comunes en la programación de juegos y en la manipulación de imágenes y otros tipos de datos gráficos.

Es importante tener en cuenta que los arrays anidados pueden ser más complicados de manejar que los arrays simples, y que el acceso a elementos en niveles profundos puede ser menos eficiente en términos de rendimiento. Por lo tanto, se debe tener cuidado al diseñar y utilizar arrays anidados para asegurarse de que sean la estructura de datos adecuada para la tarea en cuestión.
*/
// Ejemplo:

const people = [
  {
    name: "Juan",
    age: 25,
    hobbies: ["football", "reading", "music"],
  },
  {
    name: "Maria",
    age: 30,
    hobbies: ["painting", "movies", "traveling"],
  },
  {
    name: "Pedro",
    age: 20,
    hobbies: ["video games", "programming", "swimming"],
  },
];
/* Para obtener un valor, tenemos que igresar a los elementos del array con sus indices, luego a las keys el index del valor */
console.log(people[0].hobbies[1]); // Output: "reading"

/* Ejercicio
Tenemos un objeto que representa parte de una colección de álbunes musicales.

Cada álbum tiene un número de identificación único (id) asociado a otras propiedades.

No todos los álbumes tienen la información completa.
*/
let colleccionDeDiscos = {
  7853: {
    tituloDelAlbum: "Bee Gees Greatest",
    artista: "Bee Gees",
    canciones: ["Stayin' Alive"]
  },
  5439: {
    tituloDelAlbum: "ABBA Gold"
  }
};
/* Define una función actualizarDiscos que tome los siguientes parámetros:
- discos (el objeto que representa la colección de dicos).
- id.
- propiedad ("artista" o "canciones").
- valor.

Tu meta es completar la función implementando las siguientes reglas para modificar el objeto pasado a la función:

- Si "valor"  es una cadena vacía, elimina la propiedad del álbum correspondiente.

- Si "propiedad" es igual a la cadena de caracteres "canciones" pero el álbum no tiene una propiedad llamada "canciones", crea un arreglo vacío y agrega "valor" a ese arreglo.

- Si "propiedad" es igual a la cadena de caracteres "canciones" y "valor" no es una cadena vacía, agrega "valor" al final del arreglo de canciones del álbum correspondiente.

- Si "valor" no es una cadena vacía y "propiedad" no es igual a "canciones", asigna el valor del parámetro "valor" a la propiedad. Si la propiedad no existe, debes crearla y asignar este valor.
 */

function actualizarDiscos(discos, id, propiedad, valor){
  if (valor === ""){
    delete discos[id][propiedad]; // Usamos notación de corchetes porque son variables
  }else if (propiedad === "canciones"){
    discos[id][propiedad] = discos[id][propiedad] || []; // Operador de fusión nula (null coalescing operator)
    discos[id][propiedad].push(valor);
  } else {
    discos[id][propiedad] = valor;
  }
}

// Prueba de la primer condición
console.log(colleccionDeDiscos[7853].tituloDelAlbum);

actualizarDiscos(colleccionDeDiscos, 7853, "tituloDelAlbum", "");

console.log(colleccionDeDiscos[7853].tituloDelAlbum);

// Prueba de la segunda condición
console.log(colleccionDeDiscos[5439].canciones);

actualizarDiscos(colleccionDeDiscos, 5439, "canciones", "Mamma Mia");

console.log(colleccionDeDiscos[5439].canciones);

// Prueba de artista
console.log(colleccionDeDiscos[5439].artista);

actualizarDiscos(colleccionDeDiscos, 5439, "artista", "ABBA");

console.log(colleccionDeDiscos[5439].artista)

/* El operador de fusión nula (null coalescing operator) es un operador que se utiliza en programación para proporcionar un valor predeterminado cuando un valor es nulo o indefinido. Su sintaxis es ??.

En otras palabras, el operador de fusión nula permite definir un valor por defecto para una variable en caso de que esta sea nula o indefinida.

Por ejemplo, considera el siguiente código:

  const nombre = nombreUsuario ?? "Usuario Anónimo";

En este ejemplo, la variable nombre se establece en "Usuario Anónimo" si la variable nombreUsuario es nula o indefinida. De lo contrario, la variable nombre se establecerá en el valor de nombreUsuario.

El operador de fusión nula es útil para proporcionar valores predeterminados cuando se trabaja con datos que pueden ser nulos o indefinidos, como variables que obtienen su valor de una API o una base de datos.

Es importante tener en cuenta que el operador de fusión nula solo verifica si el valor es nulo o indefinido, no si es falso, cero o una cadena vacía. Para verificar también estos casos, se puede usar el operador lógico OR (||). Por ejemplo:


  const nombre = nombreUsuario || "Usuario Anónimo";

En este caso, si nombreUsuario es nulo, indefinido, falso, cero o una cadena vacía, la variable nombre se establecerá en "Usuario Anónimo". De lo contrario, la variable nombre se establecerá en el valor de nombreUsuario. */

/* While loops

Un ciclo while es una estructura de control de flujo en la programación que repite un bloque de código mientras una condición especificada se evalúa como verdadera. Es decir, el código dentro del ciclo se ejecutará repetidamente hasta que la condición de salida sea falsa. Si la condición de salida es verdadera al principio, entonces el código dentro del ciclo nunca se ejecutará. Es importante tener cuidado al usar un ciclo while, ya que una condición mal definida puede resultar en un ciclo infinito que puede bloquear el programa.

*/
// Ej:
let i = 0;
while (i <= 3){
  console.log('Hello World');
  i++;
}
// En una función
let hi = 0;
function sayHi(times){
  while (hi < times){
    console.log('Hello world, this is the function sayHi.😉');
    hi++;
  }
}
sayHi(5);

// En una función para agregar elementos a un array
let numbersArray = []
function addNumbersToArray(array, numbers){
  let i = 0;
  while (i<numbers){
    array.push(i);
    i++;
  }
  console.log(array);
}
addNumbersToArray(numbersArray, 10);

// Restar numeros de un array
function subtractNumbersFromArray(array, quantity){
  while(array.length > quantity){
    array.pop();
  }
  console.log(array);
}
subtractNumbersFromArray(numbersArray, 5);

/* for loop - Ciclo for

El ciclo for es otra estructura de control de flujo en JavaScript que se utiliza para repetir una serie de acciones un número específico de veces. La sintaxis básica del ciclo for es la siguiente:

for (inicialización; condición; incremento o decremento) {
  // acciones a realizar en cada iteración
}

Donde:
- La "inicialización" es la asignación de un valor inicial al contador del ciclo.
- La "condición" es la expresión booleana que se evalúa antes de cada iteración. Si es verdadera, se ejecutan las acciones dentro del ciclo; si es falsa, el ciclo termina.
- El "incremento o decremento" es la operación que se realiza después de cada iteración para modificar el valor del contador y avanzar o retroceder en el ciclo.

Aquí te dejo un ejemplo básico:

for (let i = 0; i < 5; i++) {
  console.log("El valor de i es " + i);
}

En este ejemplo, se inicializa la variable `i` con un valor de `0`. Luego se verifica si `i` es menor que `5`. Si es así, se ejecutan las acciones dentro del ciclo, que en este caso solo consisten en imprimir el valor de `i`. Después de cada iteración, se incrementa el valor de `i` en `1`. El ciclo se repite hasta que `i` sea igual a `5`, momento en el que la condición es falsa y el ciclo termina.
*/


function numbersCounter(quantity) {
  let result = '';
  for (let i = 0; i < quantity; i++) {
    result += `${i} + ${i + 1} = ${i + 2}\n`;// Va concatenando al string los resultados
  }
  return result;
}
console.log(numbersCounter(5));

// Agregar numeros en un array
let arrayFor = [];
arrayFor.name = "arrayFor";

function addNumbersToArrayFor(array, quantity){
  
  for (i = 0; i < quantity; i++){
    array.push(i);
  }
  return `Este es el contenido del ${array.name}: ${array}`;
}
console.log(arrayFor);
console.log(addNumbersToArrayFor(arrayFor, 10));

/* pero no entiendo porque este codigo funciona:
let arrayFor = [];
arrayFor.name = "arrayFor";

function addNumbersToArrayFor(array, quantity){
  
  for (i = 0; i < quantity; i++){
    array.push(i);
  }
  return `Este es el contenido del ${array.name}: ${array}`;
}
console.log(arrayFor);
console.log(addNumbersToArrayFor(arrayFor, 10));

y este otro no:

let arrayFor = [{name : "arrayFor"}];
function addNumbersToArrayFor(array, quantity){
  
  for (i = 0; i < quantity; i++){
    array.push(i);
  }
  return `Este es el contenido del ${array.name}: ${array}`;
}
console.log(arrayFor);
console.log(addNumbersToArrayFor(arrayFor, 10));
Al fin y al cabo el array es lo mismo, un array con una propiedad llamada name

ChatGPT

Ambos códigos son correctos, y la única diferencia es cómo se agrega la propiedad al array. En el primer código, la propiedad se agrega después de la creación del array, mientras que en el segundo código se agrega durante la creación del array.

El primer código crea un array vacío let arrayFor = [], y luego agrega una propiedad name a ese array arrayFor.name = "arrayFor". Luego se llama a la función addNumbersToArrayFor con el array modificado y se agrega contenido al array.

El segundo código crea un array con una propiedad name ya incluida en la creación del array let arrayFor = [{name : "arrayFor"}]. Luego se llama a la función addNumbersToArrayFor con el array ya con su propiedad name incluida y se agrega contenido al array.

Ambos códigos dan el mismo resultado en términos del contenido del array y la propiedad name. La única diferencia es la forma en que se agrega la propiedad name al array. */

// Ej. Agregar numeros pares a array, del 2 al 26.
let evenNumbersArray = [];
for (let i = 2; i <= 26; i += 2){
  evenNumbersArray.push(i);
}
console.log(evenNumbersArray);

// Ej. Contar hacia atras.
let countdownArray = [];
for (let i = 10; i >= 0; i--){
  countdownArray.push(i);
}
console.log(countdownArray);

/* Iterar sobre un array con for loop

Iterar sobre un array con un bucle for es una forma de recorrer cada elemento de un array en JavaScript. Un bucle for se utiliza para repetir una tarea varias veces, y en el contexto de iterar sobre un array, se utiliza para ejecutar un bloque de código para cada elemento del array. 

La estructura básica de un bucle for para iterar sobre un array es la siguiente:

for (let i = 0; i < array.length; i++) {
  // código a ejecutar para cada elemento del array
}

En esta estructura, `i` es un índice que se utiliza para acceder a cada elemento del array. `i` se inicializa en 0 y se incrementa en cada iteración del bucle hasta que llega al último índice del array (`array.length - 1`).

Dentro del bucle for, se puede acceder a cada elemento del array utilizando el índice `i`, como en el siguiente ejemplo:

let array = ["a", "b", "c", "d"];

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

En este ejemplo, el código dentro del bucle for (`console.log(array[i])`) se ejecutará una vez para cada elemento del array, imprimiendo en la consola "a", "b", "c" y "d".

Un resumen sobre cómo realizar una iteración sobre un array usando el bucle for en JavaScript:

1. Declarar un array con elementos: Primero, debes crear un array en el que se puedan almacenar los elementos que deseas iterar. Puedes hacer esto declarando una variable y asignándole un array vacío o uno que ya tenga elementos.

2. Definir el bucle for: A continuación, es necesario establecer un bucle for que recorra el array. El bucle for tendrá una variable de contador que comienza en cero y se incrementa con cada iteración.

3. Acceder a cada elemento del array: Dentro del cuerpo del bucle for, puedes acceder a cada elemento del array usando el nombre de la variable del array seguido de corchetes y el índice del elemento al que se desea acceder. El índice del primer elemento es 0.

4. Realizar alguna operación con cada elemento: Puedes realizar alguna operación en cada elemento del array dentro del cuerpo del bucle for, como imprimir su valor, modificar su valor o realizar algún cálculo con él.

5. Finalizar la iteración: Cuando el contador del bucle for alcanza la longitud del array, la iteración finaliza.

6. Ejecutar el código: Finalmente, puedes ejecutar el código y ver los resultados de la iteración en la consola del navegador o en un entorno de desarrollo.
*/

// Ejemplo 1
let total = 0;
for (let i = 0; i < arrayFor.length; i++) {
  total += arrayFor[i];
}
console.log(total);
/* observaciones:

- Ejemplo 1: el código parece correcto para sumar los elementos del array. Es importante recordar inicializar la variable `total` en 0 antes del bucle for para evitar resultados incorrectos. */

// Ejemplo 2 - Con string y toUpperCase()
let programmingLanguages = ["JavaScript", "Python", "Java", "C++"];
for (let i = 0; i < programmingLanguages.length; i++) {
  console.log(programmingLanguages[i].toUpperCase());
}

/* - Ejemplo 2: también se ve bien, la función `toUpperCase()` funciona para convertir a mayúscula cada cadena en el array. Una sugerencia sería guardar los resultados en otro array si necesitas usarlos más tarde. */

// Ejemplo 3 - Contador de numeros pares dentro de una función
let evenNumbersTotal = 0;
function evenNumbersCount(array) {
  for(let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0){
      evenNumbersTotal++;
    }
  }
  return evenNumbersTotal;
}
console.log(evenNumbersCount(arrayFor));

// Contador impares
let oddNumbersTotal = 0;
function oddNumbersCount(array) {
  for(let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0){
      oddNumbersTotal++;
    }
  }
  return oddNumbersTotal;
}
console.log(oddNumbersCount(arrayFor));

/* - Ejemplo 3 y 4: ambos códigos para contar números pares e impares parecen correctos. Solo asegúrate de inicializar las variables `evenNumbersTotal`, `oddNumbersTotal`, `evenNumbersTotalTwo`, y `oddNumbersToralTwo` en 0 antes del bucle for. */

// Lo mismo pero en usa sola funcion
let evenNumbersTotalTwo = 0;
let oddNumbersToralTwo = 0;
function evenAndOddNumbers(array){
  for (let i = 0; i < array.length; i++){
    if (array[i] % 2 === 0){
      evenNumbersTotalTwo++;
    } else {
      oddNumbersToralTwo++;
    }
  }
  return `Even numbers total: ${evenNumbersTotalTwo}\nOdd numbers total: ${oddNumbersToralTwo}`;
}
console.log(evenAndOddNumbers(arrayFor));

/* 
- Ejemplo 5: la función `evenAndOddNumbers` es una forma muy buena y eficiente de contar tanto números pares como impares en una sola función. */

/* Ciclos for anidados - Nested for loops -

Claro, los loops for anidados son una forma de iterar sobre múltiples matrices o conjuntos de datos de varias dimensiones. Básicamente, un loop for anidado es un loop dentro de otro loop.

Cada iteración del loop exterior ejecutará todas las iteraciones del loop interior, y así sucesivamente. Esto puede ser útil para trabajar con matrices multidimensionales, matrices de objetos y otras estructuras de datos más complejas.

En términos generales, el código para un loop for anidado se ve así:

for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < nestedArray.length; j++) {
    // Código a ejecutar
  }
}

Aquí, el loop exterior itera a través de una matriz llamada `array`, y el loop interior itera a través de una matriz anidada llamada `nestedArray`. El código dentro de ambos loops se ejecuta en cada iteración, lo que permite trabajar con los elementos de ambas matrices al mismo tiempo.

Es importante tener en cuenta que los loops for anidados pueden ser menos eficientes que otras formas de iteración, especialmente en grandes conjuntos de datos. Sin embargo, cuando se usan adecuadamente, pueden ser una herramienta poderosa para trabajar con estructuras de datos complejas.

En programación "nested" se utiliza para referirse a estructuras anidadas, como por ejemplo, bucles o estructuras de control dentro de otros bucles o estructuras de control. En el contexto de los bucles for, se puede usar "nested for loops" para describir bucles for anidados.
*/

// Ejemplo:
let arrayNumbers = [[5,22,8], [42,7,15], [0,55,20]];
for (let i = 0; i < arrayNumbers.length; i++){
  console.log(`Valor del indice: ${i}`)
  let nestedArray = arrayNumbers[i];
  for (let j = 0; j < nestedArray.length; j++){
    console.log(`Elemento: ${nestedArray[j]}`);
  }
}

/* Los objetos y sus propiedades también se pueden iterar con un bucle for. Puedes usar un bucle for-in para iterar sobre las propiedades de un objeto. Este tipo de bucle se utiliza para recorrer todas las propiedades enumerables de un objeto, es decir, aquellas que se pueden recorrer con un bucle for.

Aquí te dejo un ejemplo de cómo iterar sobre las propiedades de un objeto con un bucle for-in:
*/
let person = {name: "John", age: 30, gender: "male"};

for(let property in person) {
  console.log(property + ": " + person[property]);
}
/*
En este ejemplo, estamos recorriendo todas las propiedades del objeto "person" y mostrando su nombre y valor en la consola. El resultado sería:

name: John
age: 30
gender: male
*/

/* Ciclo do while

El ciclo `do while` es similar al ciclo `while`, pero con una diferencia importante: la condición de iteración se evalúa al final del bloque de código, en lugar de al principio. Esto significa que el bloque de código se ejecutará al menos una vez, independientemente de si la condición es verdadera o falsa.

El ciclo `do while` consta de la siguiente estructura:

do {
  // Código a ejecutar
} while (condición);

Primero se ejecuta el bloque de código y luego se evalúa la condición. Si la condición es verdadera, el bloque de código se ejecuta nuevamente. Este proceso se repite hasta que la condición sea falsa.

El ciclo `do while` se utiliza cuando se necesita que el bloque de código se ejecute al menos una vez, independientemente de si la condición es verdadera o falsa. Por ejemplo, se puede usar para solicitar al usuario que ingrese una entrada y luego repetir la solicitud hasta que la entrada sea válida.

Es importante tener en cuenta que, debido a que la condición se evalúa al final del bloque de código, el ciclo `do while` puede ejecutar el bloque de código una o más veces de lo que se espera si la condición no se establece correctamente.
*/
// Ejemplo:
let x = 16;
do{
  console.log(x);
  x++;
} while (x < 18);


//Ejercicio practico
/* Buscar un contacto de la lista de contactos con un ciclo for. Definir una función que nos permita conseguir una propiedad de un contacto si la propiedad existe, la busqueda es a travez de su nombre.*/

let contactList = [
  {
    firstName: "John",
    lastName: "Doe",
    phoneNumber: "123-456-7890",
    likes: ["hiking", "reading", "baking"]
  },
  {
    firstName: "Mary",
    lastName: "Smith",
    phoneNumber: "555-555-1212",
    likes: ["yoga", "swimming", "traveling"]
  },
  {
    firstName: "David",
    lastName: "Lee",
    phoneNumber: "987-654-3210",
    likes: ["playing guitar", "cooking", "watching movies"]
  },
  {
    firstName: "Emily",
    lastName: "Chen",
    phoneNumber: "555-123-4567",
    likes: ["dancing", "singing", "hiking"]
  },
  {
    firstName: "Daniel",
    lastName: "Kim",
    phoneNumber: "555-789-1234",
    likes: ["running", "playing video games", "learning languages"]
  }
];