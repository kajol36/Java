let multiplicacion = 1; 

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    multiplicacion *= i;
  }
}

console.log("La multiplicación de los números pares del 1 al 10 es: " + multiplicacion);
