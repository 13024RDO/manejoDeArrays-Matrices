let personas = [];
let continuar = true; 

while (continuar) { 
  let nombre = prompt("Nombre:"); 
  let edad = Number(prompt("Edad:"));
  let nota = Number(prompt("Nota:"));
  personas.push({ nombre, edad, nota }); 

  continuar = prompt("¿Agregar otra persona? (s/n):").toLowerCase() === "s"; 
}

console.log("\nLista original:", personas); 
console.log("\nLista ordenada por nota:", [...personas].sort((a, b) => b.nota - a.nota)); 
