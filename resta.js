let resta = 0;

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    resta -= i;
  }
}

console.log("La resta de los números pares del 1 al 10 es: " + resta);
