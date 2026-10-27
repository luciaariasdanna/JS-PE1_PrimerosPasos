// Pre-Entrega 1: Simulador de Compra en Cuotas

// Valores fijos (no cambian durante el programa)
const INTERES_POR_CUOTA = 0.05; // 5% de recargo por cada cuota
const ANIO_ACTUAL = new Date().getFullYear();

// 1. Solicitar datos al usuario
const nombre = prompt("¡Bienvenido/a! ¿Cuál es tu nombre?");
const anioNacimiento = parseInt(prompt("¿En qué año naciste?"));
const producto = prompt("¿Qué producto querés comprar?");
const precio = parseFloat(prompt("¿Cuál es el precio del producto? (ej: 15000.50)"));
const cuotas = parseInt(prompt("¿En cuántas cuotas lo querés pagar?"));

// 2. Procesar la información
const edad = ANIO_ACTUAL - anioNacimiento;
const recargo = precio * INTERES_POR_CUOTA * cuotas;
const precioFinal = precio + recargo;
const valorCuota = precioFinal / cuotas;

// 3. Armar el mensaje concatenando strings con variables
let mensaje = "Hola " + nombre + ", tenés " + edad + " años.\n";
mensaje = mensaje + "Producto elegido: " + producto + "\n";
mensaje = mensaje + "Precio de contado: $" + precio.toFixed(2) + "\n";
mensaje = mensaje + "Recargo por " + cuotas + " cuotas: $" + recargo.toFixed(2) + "\n";
mensaje = mensaje + "Precio final: $" + precioFinal.toFixed(2) + "\n";
mensaje = mensaje + "Vas a pagar " + cuotas + " cuotas de $" + valorCuota.toFixed(2);

// 4. Mostrar los resultados
console.log("=== Resumen de compra ===");
console.log("Tipo de dato de 'precio': " + typeof precio);
console.log(mensaje);
alert(mensaje);
