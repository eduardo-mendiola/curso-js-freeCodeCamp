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

function searchContacts(list, name, property){
  for (let i = 0; i < list.length; i++){
    if (list[i].firstName === name){
      return `Esta es la información de ${name} que solisitaste. ${property.toUpperCase()}: ${list[i][property]}`;
    }else if (list[i][property] === undefined){
      return `La propiedad ${property.toUpperCase()} no existe.`;
    }
  }
  return `El usuario ${name} no esta en la lista de contactos.`
}
/* En este código tengo un problema, si quiero que el return tenga una frase no puedo usar null coalescing operator ||, y si uso if, y el nombre es incorrecto y la propiedad tambien, el programa corta en la propiedad primero. 🤔🤔🤔 */

console.log(searchContacts(contactList, "Daniel", "likes"));

/* Version ChatGpt
Una opción para solucionar esto es agregar un flag para saber si se encontró el contacto o no. Si se encontró, se puede seguir en el mismo ciclo para buscar la propiedad. Pero si no se encontró, se puede salir del ciclo con un break y retornar un mensaje indicando que el contacto no está en la lista.

Aquí te muestro cómo se podría implementar esta solución:
*/
function searchContactsGpt(list, name, property) {
  let contactFound = false;

  for (let i = 0; i < list.length; i++) {
    if (list[i].firstName === name) {
      contactFound = true;
      if (list[i][property] !== undefined) {
        return `Esta es la información de ${name} que solicitaste. ${property.toUpperCase()}: ${list[i][property]}`;
      } else {
        return `La propiedad ${property.toUpperCase()} no existe.`;
      }
    }
  }

  if (!contactFound) {
    return `El usuario ${name} no está en la lista de contactos.`;
  }
}

console.log(searchContactsGpt(contactList, "Daniel", "likes"));

/* En este caso, si el contacto no se encuentra, se llega al final del ciclo sin haber encontrado el contacto y se retorna el mensaje correspondiente. Si el contacto se encuentra, se marca con contactFound = true y se busca la propiedad en el mismo ciclo. Si se encuentra la propiedad, se retorna el mensaje correspondiente. Si no se encuentra la propiedad, se retorna el mensaje indicando que la propiedad no existe. */



/* Otra opción:
Es posible anidar if en lugar de utilizar if-else. Podrías utilizar algo como lo siguiente en tu función: */
function searchContactsGpt2(list, name, property){
  for (let i = 0; i < list.length; i++){
    if (list[i].firstName === name){
      if (list[i][property] !== undefined){
        return `Esta es la información de ${name} que solicitaste. ${property.toUpperCase()}: ${list[i][property]}`;
      } else {
        return `La propiedad ${property.toUpperCase()} no existe.`;
      }
    }
  }
  return `El usuario ${name} no está en la lista de contactos.`
}
console.log(searchContactsGpt2(contactList, "Daniel", "lis"));
/* En este caso, si el nombre buscado no coincide con ninguno de los nombres en la lista, se retornará el mensaje "El usuario [nombre] no está en la lista de contactos". Si el nombre coincide, se chequeará si la propiedad buscada existe en el objeto de ese nombre. Si existe, se retornará un mensaje que incluye el valor de la propiedad. Si no existe, se retornará el mensaje "La propiedad [propiedad] no existe."

La expresión lógica que se evalúa en un if es similar a una expresión que involucre operadores lógicos como &&, ||, etc. Lo que sucede es que en un if la expresión se evalúa de forma secuencial, por lo que cada condición se verifica por separado. Si la primera condición es falsa, entonces no se evalúa la segunda y se salta directamente al bloque de código que sigue al if. Si la primera condición es verdadera, entonces se evalúa la segunda y así sucesivamente.

En cambio, si usas el operador && para combinar varias condiciones, todas se evalúan al mismo tiempo, y la expresión es verdadera solamente si todas las condiciones son verdaderas. Si alguna es falsa, entonces la expresión completa es falsa. En resumen, ambas formas permiten combinar varias condiciones, pero el uso de if es más explícito y permite verificar las condiciones una por una.
*/

// Números aleatorios
/* Objeto Math:
Math es un objeto incorporado en JavaScript que proporciona una serie de propiedades y métodos matemáticos estáticos para realizar cálculos y operaciones matemáticas.

Entre las propiedades que se pueden encontrar en el objeto Math se encuentran Math.PI, que es una constante que representa el valor de PI, y Math.E, que es una constante que representa el número de Euler.

Entre los métodos que se pueden encontrar en el objeto Math se encuentran Math.round(), que redondea un número al entero más cercano, Math.floor(), que redondea un número hacia abajo al entero más cercano, Math.max(), que devuelve el número más grande de una lista de números, Math.random() que genera un numero aleatorio del [0 al 1) no incluido el 1..

Además, Math también incluye métodos para realizar cálculos trigonométricos (Math.sin(), Math.cos(), Math.tan(), etc.), operaciones exponenciales (Math.exp(), Math.log(), etc.), y otras operaciones matemáticas que se pueden ver en la página: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math

Es importante tener en cuenta que todos los métodos y propiedades de Math son estáticos, lo que significa que se accede a ellos a través del objeto Math y no a través de una instancia de objeto Math.
*/ 
// Ejemplos con Math.random() y Math.floor();

function randomFraction(){
  return Math.random();
}
console.log(randomFraction());

//Aleatirios enteros
let intRandomNumber = Math.floor(Math.random() * 20); //genera un entero de 0 a 19.
console.log(intRandomNumber);

// Con limites inferior y superior
function limitRandomNumbers(min, max){
  return Math.floor(Math.random()*(max - min +1)) + min;
}
console.log(limitRandomNumbers(2,8));

/* 
Math.floor(Math.random()*(max - min +1)) + min; 

Esta declaración es comúnmente utilizada para generar un número aleatorio dentro de un rango específico en JavaScript.

Aquí se explica lo que hace cada parte de la declaración:

Math.random() devuelve un número aleatorio entre 0 y 1 (no incluyendo 1).
max y min son los límites superior e inferior del rango en el que se desea generar un número aleatorio.
max - min + 1 calcula la cantidad de números diferentes que hay entre max y min, incluyendo ambos límites.
Math.floor() redondea el resultado de Math.random()*(max - min +1) hacia abajo al número entero más cercano.
+ min suma el límite inferior del rango a ese número aleatorio generado para que se encuentre dentro del rango deseado.
Entonces, en general, la declaración genera un número aleatorio entre min y max (incluyendo ambos límites). */


/* Función parseInt()

La función `parseInt()` en JavaScript se utiliza para analizar una cadena de caracteres (string) y convertir su contenido en un número entero. 

La sintaxis básica de esta función es la siguiente:

parseInt(cadena, base)

Donde `cadena` es la cadena de caracteres que se desea convertir en número entero, y `base` es un número entero opcional que especifica la base numérica en la que se encuentra la cadena. Si no se especifica `base`, se asume que es 10.

`parseInt()` analiza la cadena de caracteres de izquierda a derecha y devuelve el primer número entero que encuentra. Si la cadena no comienza con un número, `parseInt()` devuelve `NaN` (Not a Number).

Esta función también puede utilizarse para convertir números en formato de cadena (string) que contienen un prefijo como `0x` (hexadecimal), `0o` (octal) o `0b` (binario) a su equivalente en base 10.

Aquí te dejo un ejemplo:
*/
let cadena = "123";
let numero = parseInt(cadena);
console.log(numero); // Devuelve: 123

//Ejemplo binario
console.log(parseInt("110111", 2)); //devuelve 55, tambien se puede poner sin las comillas
//Ejemplo hexadecimal
console.log(parseInt("3E0A", 16)); //15882

/* Operador condicional ternario - ternary operator 

El operador condicional ternario en JavaScript se utiliza para simplificar la escritura de una expresión if/else en una sola línea. La sintaxis general es la siguiente: 

condición ? expresión si verdadero : expresión si falso;

La "condición" es una expresión que se evalúa a verdadero o falso. Si la condición es verdadera, se devuelve la "expresión si verdadero". De lo contrario, se devuelve la "expresión si falso".

Por ejemplo, supongamos que tenemos dos variables llamadas "edad" y "mayorDeEdad". Queremos asignar a "mayorDeEdad" el valor "Sí" si "edad" es mayor o igual a 18, y "No" en caso contrario. Podríamos escribir el siguiente código usando el operador ternario:
*/

let edad = 20;
let mayorDeEdad = (edad >= 18) ? "Sí" : "No";
console.log(mayorDeEdad); // imprime "Sí"

/*
En este ejemplo, la condición es "edad >= 18", lo que evalúa a verdadero, por lo que se asigna el valor "Sí" a "mayorDeEdad". Si "edad" fuera menor que 18, se asignaría el valor "No" en su lugar. 

El operador ternario puede ser una forma conveniente y legible de escribir expresiones condicionales simples en una sola línea.
*/
//Ejemplo de multiples operadores condicionales
function compareNums(numA, numB){
  return numA == numB ? "numA and numB are equal."
    : numA > numB ? "numA is greater than numB."
    : "numB is greater than numA."
}
console.log(compareNums(40, 45));

/* var vs let
Sí, claro. 

En JavaScript, `var` y `let` son palabras clave utilizadas para declarar variables. Sin embargo, hay algunas diferencias clave entre ellas.

La principal diferencia es el alcance de las variables. Las variables declaradas con `var` tienen un alcance de función o global, lo que significa que pueden ser accesibles fuera del bloque de código en el que se declaran. En cambio, las variables declaradas con `let` tienen un alcance de bloque, lo que significa que solo pueden ser accesibles dentro del bloque de código en el que se declaran.

Además, las variables declaradas con `var` se elevan al principio de la función, lo que se conoce como "hoisting", lo que significa que se pueden acceder antes de que se declaren. Esto puede causar problemas de lógica y errores en el código. En cambio, las variables declaradas con `let` no se elevan y deben declararse antes de ser utilizadas.

Por estas razones, se recomienda utilizar `let` en lugar de `var` para declarar variables en el código moderno de JavaScript.

Algunos ejemplos de cómo el uso de `let` y `var` puede diferir:

Ejemplo 1: 
*/
var number = 1;
if (true) {
  var number = 2;
  console.log(number); // Output: 2
}
console.log(number); // Output: 2
/*
-Nota: si usas if (true), el bloque de código dentro del if siempre se ejecutará porque la condición siempre es verdadera, pero si usas if (false) el bloque de código dentro del if nunca se ejecutará porque la condición siempre es falsa.-

En este caso, la variable `number` se declara como `var` y se asigna un valor de `1`. Dentro del bloque `if`, se declara la variable `number` nuevamente como `var` y se le asigna el valor de `2`. Al imprimir el valor de `number` dentro del bloque `if`, el resultado es `2`. Al imprimir el valor de `number` fuera del bloque `if`, el resultado es también `2`. Esto se debe a que las variables `var` tienen un alcance de función y no están limitadas por el alcance de bloque.

Ejemplo 2:
*/
let numberLet = 1;
if (true) {
  let numberLet = 2;
  console.log(number); // Output: 2
}
console.log(numberLet); // Output: 1
/*
En este ejemplo, se declara la variable `number` con `let` y se le asigna un valor de `1`. Dentro del bloque `if`, se declara la variable `number` nuevamente con `let` y se le asigna el valor de `2`. Al imprimir el valor de `number` dentro del bloque `if`, el resultado es `2`. Sin embargo, al imprimir el valor de `number` fuera del bloque `if`, el resultado es `1`. Esto se debe a que las variables `let` tienen un alcance de bloque y están limitadas por el alcance de bloque en el que se declaran.

Ejemplo 3:
*/
function varExample() {
  var number = 1;
  if (true) {
    var number = 2;
    console.log(number); // Output: 2
  }
  console.log(number); // Output: 2
}

function letExample() {
  let number = 1;
  if (true) {
    let number = 2;
    console.log(number); // Output: 2
  }
  console.log(number); // Output: 1
}

varExample();
letExample();
/*
En este ejemplo, se definen dos funciones: una que utiliza `var` y otra que utiliza `let`. Al llamar a ambas funciones, se pueden ver las diferencias en el alcance de las variables. La función `varExample()` sigue la lógica del Ejemplo 1 y la función `letExample()` sigue la lógica del Ejemplo 2. Al ejecutar ambas funciones, se puede ver cómo las variables `var` no están limitadas por el alcance de bloque y las variables `let` sí están limitadas por el alcance de bloque.

En general, se recomienda usar `let` en lugar de `var` en la mayoría de los casos, ya que `let` limita el alcance de la variable al bloque en el que se declara, lo que puede ayudar a evitar errores y aumentar la claridad y legibilidad del código.
*/

/* Variables tipo conts

Una variable `const` es una variable cuyo valor no puede ser reasignado una vez que ha sido inicializado. Es decir, la variable siempre tendrá el mismo valor a lo largo del programa y no se podrá cambiar en tiempo de ejecución. Es importante mencionar que aunque el valor de una variable `const` no puede ser reasignado, si se puede modificar el contenido de un objeto o arreglo que sea asignado a ella.

Las variables `const` deben ser inicializadas al momento de ser declaradas, es decir, no se pueden declarar sin asignarles un valor. Además, una vez que se ha asignado un valor a una variable `const`, no se puede cambiar.

El uso de variables `const` es aconsejable en situaciones donde el valor de la variable no debe ser cambiado durante la ejecución del programa. Esto ayuda a prevenir errores y a mantener el código más legible y fácil de entender.

A diferencia de las variables `let` y `var`, que pueden ser reasignadas en cualquier momento, las variables `const` no pueden ser reasignadas, lo que hace que el código sea más predecible y seguro.

Por supuesto, aquí te muestro algunos ejemplos de cómo declarar y usar variables `const` en JavaScript:
*/
// Declaración e inicialización de una variable constante
// const PI = 3.14159;

// Intento de reasignación de valor a una variable constante (generará un error)
// PI = 3.14;

// Declaración de una constante como un objeto
// const PERSON = { name: "John", age: 30 };

// Intento de reasignación de valor a una propiedad de una constante objeto (no genera error)
// PERSON.name = "Mary";

// Intento de reasignación de la constante objeto en sí misma (generará un error)
// PERSON = { name: "Peter", age: 25 };

// Declaración de una constante como un array
// const NUMBERS = [1, 2, 3, 4, 5];

// Intento de reasignación de valor a un elemento de una constante array (no genera error)
// NUMBERS[0] = 0;

// Intento de reasignación de la constante array en sí misma (generará un error)
// NUMBERS = [6, 7, 8, 9, 10];
/*
En resumen, las variables `const` son variables cuyo valor no puede ser reasignado una vez que se les ha asignado un valor inicial, aunque sus propiedades o elementos sí pueden ser modificados. Esto hace que las variables `const` sean útiles para valores constantes o valores que no deben ser modificados en un programa.

Es una convención común en muchos lenguajes de programación utilizar nombres en mayúsculas y separar las palabras con guiones bajos (_) para nombrar constantes. Esto ayuda a distinguir las constantes de las variables y funciones regulares y a que el código sea más legible.

Aquí hay algunos ejemplos de nombres de constantes en JavaScript escritos en mayúsculas con guiones bajos:

const MAX_AGE = 100;
const PI = 3.14159;
const API_KEY = "abcdefg12345";

Como puedes ver, los nombres de las constantes son más descriptivos y significativos que las variables regulares, lo que hace que el código sea más fácil de leer y entender. Además, dado que una vez que se define una constante no puede cambiar su valor, el uso de nombres descriptivos puede ayudar a hacer más evidente su propósito en el código.
*/

/* Mutar arrays declarados con const

Hay que tener en cuenta que el valor de una constatante puede cambiar, lo que no se puede es asignarle un valor nuevo, como en el siguiente ejemplo:
*/
const MY_ARRAY_CONST = [1, 2, 3, 4];
//MY_ARRAY_CONST = [5, 6, 7, 8]; Esto generaria un erro.

MY_ARRAY_CONST[0] = 5; // De esta forma se puede cambiar los valores de un array creado con const.
MY_ARRAY_CONST[1] = 6;
MY_ARRAY_CONST[2] = 7;
MY_ARRAY_CONST[3] = 8;
console.log(MY_ARRAY_CONST);// Cambiaron los valores del array original

/* - Objeto inmutable -
Con el metodo .freeze() podemos congelar los valores y propiedades de un objeto. Ej:
*/
let colors = {
  green: "#10e04b",
  blue: "#1b50e0",
  black: "#000000",
  white: "#ffffff"
}

Object.freeze(colors);
colors.green = "#354sg5"; //No cambia el color, devuelve un error => TypeError: Cannot assign to read only property 'green' of alject '#<Object>'.
console.log(colors);

/* - Funciónes flecha - arrow finctions

Las funciones flecha, también conocidas como arrow functions en inglés, son una forma más concisa de escribir funciones en JavaScript. A diferencia de las funciones regulares, las funciones flecha no tienen su propio `this`, `arguments`, `super`, o `new.target`. Además, son funciones anónimas y, por lo general, se asignan a una variable o se pasan como argumento a otra función.

La sintaxis de una función flecha es la siguiente: 

(param1, param2, ..., paramN) => { statements }

o bien:

(param1, param2, ..., paramN) => expression

donde:

- `param1`, `param2`, `paramN` son los parámetros de la función. Si la función no tiene parámetros, se escriben los paréntesis vacíos `()`.
- `statements` son una serie de instrucciones ejecutadas por la función.
- `expression` es una expresión evaluada y devuelta por la función.

Por ejemplo, si queremos escribir una función flecha que calcule el doble de un número, podemos hacerlo de la siguiente manera:
*/
const doubleOp1 = (num) => {
  return num * 2;
}

console.log(doubleOp1(5)); // 10
/*
También podemos escribir la misma función de forma más concisa como sigue:
*/
const doubleOp2 = num => num * 2;

console.log(doubleOp2(5)); // 10

/*
En este caso, como la función sólo tiene un parámetro y una sola instrucción, podemos omitir los paréntesis y las llaves, y escribir todo en una sola línea.

Las funciones flecha son especialmente útiles cuando se trata de funciones que reciben otras funciones como parámetros, ya que permiten una escritura más concisa y legible del código.
*/

/* - Valor por defecto - 
Es un valor que se asigna por defecto a alguno de los parametros. Por ejemplo si se le pide al usuario que igrese dos parametros y el usuario ingresa solo uno, podemos usar el valor por defecto del segundo parametro.
*/
const INCREASE = (num, value = 1) => num + value;
console.log(INCREASE(5)); // Como no se ingreso el segundo parametro de toma el valor de 1 para ese parametro.
console.log(INCREASE(4, 9));

/* - Operador rest -
El operador rest (`...`) en JavaScript permite capturar un número variable de argumentos en una función y convertirlos en un array. Esto significa que, cuando se usa el operador rest en la declaración de parámetros de una función, cualquier argumento adicional que se le pase a la función será recopilado en un array dentro de la función.

Por ejemplo, si se tiene la siguiente función:
*/
function sum(...numbers) { //también se suele usar(...args) como variable
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }
  return result;
}

console.log(sum(1, 2, 3, 4, 5)); // output: 15

// Otro ejemplo:
const sumArgs = (...args) => {
  return args.reduce((a,b) => a + b, 0);
}
console.log(sumArgs(1,2,3,4,5)); // output: 15
//.reduce() suma los elementos del array y retorna el resultado.
/*
La función `sum` tiene el operador rest `...numbers` como parámetro, lo que significa que se pueden pasar tantos argumentos como se quiera a la función. En este caso, los argumentos pasados a la función se convierten en un array llamado `numbers`. Luego, se realiza una suma de todos los números dentro de ese array y se devuelve el resultado.

El operador rest también se puede usar para desestructurar arrays en otros arrays o variables, lo que permite trabajar con arrays de manera más fácil y flexible.

En resumen, el operador rest es una forma poderosa y útil de trabajar con argumentos de función variables y arrays en JavaScript.
*/

/* - Operador sread -

El operador spread en JavaScript es representado por los tres puntos "..." y se utiliza para descomponer un objeto en elementos individuales. Con este operador, se puede tomar una matriz o un objeto y separar sus elementos para utilizarlos en otro contexto.

En el caso de una matriz, se puede utilizar el operador spread para concatenar elementos de dos o más matrices, o para pasar elementos de una matriz como argumentos para una función que acepta argumentos separados. Por ejemplo:

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [...array1, ...array2]; // [1, 2, 3, 4, 5, 6]

En el caso de un objeto, se puede utilizar el operador spread para combinar dos o más objetos en uno solo, o para agregar nuevas propiedades a un objeto existente. Por ejemplo:

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const obj3 = { ...obj1, ...obj2 }; // { a: 1, b: 2, c: 3, d: 4 }

const obj4 = { ...obj1, c: 3 }; // { a: 1, b: 2, c: 3 }

En resumen, el operador spread es una herramienta útil para combinar o separar elementos de matrices u objetos, lo que hace que el código sea más claro y conciso.
*/
// Ejemplo:
const NUMBERS_SPREAD = [1, 2, 3];
function sumSpread(x, y, z){
  console.log(x);// Así podemos ver como se asignan los valores del array.
  console.log(y);
  console.log(z);
  return x + y + z;
}
console.log(sumSpread(...NUMBERS_SPREAD));

/* - Sintaxis de desestructuración de objetos -

- La sintaxis de desestructuración de objetos es una forma de extraer valores de un objeto y asignarlos a variables en una sola línea. Esta técnica hace que el código sea más conciso y legible.

- Para desestructurar un objeto, se utiliza la sintaxis de llaves `{}` y se asignan los nombres de las propiedades del objeto a las variables que se desean asignar. Por ejemplo:

const person = { name: 'John', age: 30 };
const { name, age } = person;
console.log(name); // 'John'
console.log(age); // 30

- También es posible desestructurar objetos anidados, utilizando la misma sintaxis de llaves anidadas. Por ejemplo:

const person = {
  name: 'John',
  age: 30,
  address: {
    street: '123 Main St',
    city: 'Anytown',
    state: 'CA'
  }
};

const { name, address: { city } } = person;
console.log(name); // 'John'
console.log(city); // 'Anytown'

- Otro ejemplo de objetos anidados:
*/
const PRONOSTICO_LOCAL = {
  ayer: {
    minima: 10,
    maxima: 25
  },
  hoy: {
    minima: 9,
    maxima: 23
  },
  manana: {
    minima: 12,
    maxima: 27
  }
};
const {hoy: {minima: minimaHoy, maxima: maximaHoy}} = PRONOSTICO_LOCAL;
console.log(minimaHoy, maximaHoy);
/*
- Además de los objetos, también se puede utilizar la sintaxis de desestructuración con arrays. Algunos ejemplos:
let a;
let b;
let c;

[a, b] = [1, 2];
console.log(a, b); // 1 2

[a, b, c] = [1, 2, 3];
console.log(a, b, c); // 1 2 3

[a, b] = [1, 2, 3, 4, 5, 6]; // Se asignan los dos primeros números 
console.log(a, b); // 1 2 

- altar posiciones
[a, b,,, c] = [1, 2, 3, 4, 5, 6]; //se colocan comillas según los espacios a saltar
console.log(a, b, c); // 1 2 5

- Intercambiar valores de variables
a = 8;
b = 6;
[b, a] = [a, b];
console.log(a, b); // 6 8


- También se puede utilizar el operador rest `...` en la desestructuración de arrays y objetos para recoger los elementos restantes en una variable. Por ejemplo:

const numbers = [1, 2, 3, 4, 5];
const [a, b, ...rest] = numbers;
console.log(a); // 1
console.log(b); // 2
console.log(rest); // [3, 4, 5]

- Eliminar elementos de un array

function removerElemetosArray(array){
  let [ , , , ...nuevoArray] = array;
  return nuevoArray;
}
let arrayFinal = removerElementosArray(numbers);
console.log(arrayFinal); // [4, 5];

- Otro ejemplo:

const person = { name: 'John', age: 30, city: 'Anytown' };
const { name, ...rest } = person;
console.log(name); // 'John'
console.log(rest); // { age: 30, city: 'Anytown' }


- Finalmente, también es posible utilizar la sintaxis de desestructuración para pasar un objeto como argumento a una función. Esto permite que el código sea más legible y permite a los desarrolladores pasar sólo los datos que necesitan. Por ejemplo:


function printPerson({ name, age, city }) {
  console.log(`Name: ${name}, Age: ${age}, City: ${city}`);
}
const person = { name: 'John', age: 30, city: 'Anytown' };
printPerson(person); // 'Name: John, Age: 30, City: Anytown'


- Otro ejemplo:

let nuevoPerfilCliente = {
  nombre: "Jane Doe",
  edad: 24,
  nacionalidad: Argentina
};

let actualizarPerfil = ({nombre, edad, nacionalidad}) => {
  console.log(name, edad, nacionalidad);
}
actualizarPerfil(nuevoPerfilCliente); // Jane Doe 24 Argentina

- Otro ejemplo:

let estadistica = {
  max: 56.78,
  media: 34.54,
  min: -0.74
};
let mitad = ({max, min}) => (max + min) / 2.0;
console.log(mitad(estadistica)); // 28.015

*/
