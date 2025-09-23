//Introducción 
let nombre = "Kiara";   
let edad = 20;         
document.getElementById("introduccion").innerHTML =
    "Nombre: " + nombre + "<br>" +
    "Edad: " + edad + " años";

// Variables 
let empleada = "Kiara Rogerio";
let sueldo = 1500000;
document.getElementById("variable").innerHTML =
    "Empleado: " + empleada + "<br>" +
    "Sueldo: $" + sueldo;

/*Estructura Secuencial Ejercicio 3 */
let lado = parseInt(prompt("Ejer 1 Estructura Secuencial: Ingrese el lado del cuadrado:"));
let perimetro = lado * 4;
document.getElementById("ej1").innerHTML =
    "Lado del cuadrado: " + lado + "<br>" +
    "Perímetro: " + perimetro;

/*Estructura Secuencial Ejercicio 2 */
let num1 = parseInt(prompt("Ejer 2 Estructura Secuencial: Ingrese el primer número:"));
let num2 = parseInt(prompt("Ejer 2 Estructura Secuencial: Ingrese el segundo número:"));
let num3 = parseInt(prompt("Ejer 2 Estructura Secuencial: Ingrese el tercer número:"));
let num4 = parseInt(prompt("Ejer 2 Estructura Secuencial: Ingrese el cuarto número:"));

let suma = num1 + num2;
let producto = num3 * num4;

document.getElementById("ej2").innerHTML =
    "Suma de los dos primeros: " + suma + "<br>" +
    "Producto del tercero y cuarto: " + producto;

/*Estructura Secuencial Ejercicio 3 */ 
let a = parseInt(prompt("Ejer 3 Estructura Secuencial: Ingrese el primer número:"));
let b = parseInt(prompt("Ejer 3 Estructura Secuencial: Ingrese el segundo número:"));
let c = parseInt(prompt("Ejer 3 Estructura Secuencial: Ingrese el tercer número:"));
let d = parseInt(prompt("Ejer 3 Estructura Secuencial: Ingrese el cuarto número:"));

let suma4 = a + b + c + d;
let producto4 = a * b * c * d;

document.getElementById("ej3").innerHTML =
    "Suma de los 4 números: " + suma4 + "<br>" +
    "Producto de los 4 números: " + producto4;

    /*Estructura Secuencial Ejercicio 4 */ 
let precio = parseInt(prompt("Ejer 4 Estructura Secuencial: Ingrese el precio del artículo:"));
let cantidad = parseInt(prompt(" Ejer 4 Estructura Secuencial: Ingrese la cantidad comprada:"));

let total = precio * cantidad;

document.getElementById("ej4").innerHTML =
    "Precio unitario: $" + precio + "<br>" +
    "Cantidad: " + cantidad + "<br>" +
    "Total a pagar: $" + total;
