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
