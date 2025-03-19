personas = [] 

while True: 
    nombre = input("Nombre: ")  
    edad = int(input("Edad: "))  
    nota = float(input("Nota: "))  
    personas.append((nombre, edad, nota))  

    if input("¿Agregar otra persona? (s/n): ").lower() != "s":
        break  

print("\nLista original:", personas)  
print("\nLista ordenada por nota:", sorted(personas, key=lambda x: x[2], reverse=True))  

