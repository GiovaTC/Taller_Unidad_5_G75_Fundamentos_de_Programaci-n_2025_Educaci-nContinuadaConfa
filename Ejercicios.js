//Ejercicio 1
// Definir el precio del producto y el IVA
let precio = 100; // por ejemplo, 100 euros
let iva = 21; // por ejemplo, 21%

// Calcular el total a pagar
let total = precio + (precio * iva / 100);

// Mostrar el resultado
console.log("Precio del producto: " + precio + "€");
console.log("IVA: " + iva + "%");
console.log("Total a pagar: " + total.toFixed(2) + "€");

//Ejercicio 2
// Definir el valor del lado del cuadrado
let lado = 5; // puedes cambiar este valor

// Calcular área y perímetro
let area = lado * lado;
let perimetro = 4 * lado;

// Mostrar resultados
console.log("Lado del cuadrado: " + lado);
console.log("Área del cuadrado: " + area);
console.log("Perímetro del cuadrado: " + perimetro);

//Ejercicio  3
// Pedir el nombre al usuario
let nombre = prompt("Escribe tu nombre");

// Mostrar el saludo en la consola
console.log("Hola " + nombre);

// También puedes usar alert si quieres mostrarlo en una ventana emergente
alert("Hola " + nombre);

//Ejercicio 4
// Pedir tres números al usuario
let num1 = parseInt(prompt("Teclea el primer número entero:"));
let num2 = parseInt(prompt("Teclea el segundo número entero:"));
let num3 = parseInt(prompt("Teclea el tercer número entero:"));

// Calcular la media
let media = (num1 + num2 + num3) / 3;

// Mostrar el resultado
console.log("Los números introducidos son:", num1, num2, num3);
console.log("La media es:", media);
alert("La media de los tres números es: " + media);

//Ejercicio 5
// Pedir un número de dos dígitos al usuario
let numero = parseInt(prompt("Introduce un número de dos dígitos:"));

// Calcular decenas y unidades
let decenas = Math.floor(numero / 10);
let unidades = numero % 10;

// Mostrar el resultado
console.log("Número introducido: " + numero);
console.log("Decenas: " + decenas);
console.log("Unidades: " + unidades);
alert("Decenas: " + decenas + "\nUnidades: " + unidades);

//Ejercicio 6
// Pedir al usuario un número entero
let limite = parseInt(prompt("Introduce un número entero:"));

// Inicializar una variable para almacenar la lista
let lista = "";

// Usar un bucle for para construir la lista
for (let i = 0; i <= limite; i++) {
  lista += i;
  if (i < limite) {
    lista += ", ";
  }
}

// Mostrar la lista en consola y en una alerta
console.log("Lista de números: " + lista);
alert("Lista de números:\n" + lista);

