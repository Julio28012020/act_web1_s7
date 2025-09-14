// src/ejercicio3.js
// Array de estudiantes
const estudiantes = [
    { nombre: "Ana", edad: 18, notas: [85, 92, 78, 88, 90] },
    { nombre: "Carlos", edad: 19, notas: [65, 70, 58, 72, 68] },
    { nombre: "María", edad: 21, notas: [95, 88, 92, 97, 89] },
    { nombre: "Diego", edad: 17, notas: [45, 52, 48, 55, 50] },
    { nombre: "Laura", edad: 22, notas: [78, 82, 75, 80, 85] }
];

console.log("📋 Estudiantes originales:");
console.log(estudiantes);

// 1. Array con solo los nombres
const nombres = estudiantes.map(estudiante => estudiante.nombre);
console.log("\n Solo nombres:");
console.log(nombres);

// 2. Array con promedios
const calcularPromedio = notas => notas.reduce((suma, nota) => suma + nota, 0) / notas.length;

const promedios = estudiantes.map(estudiante => ({
    nombre: estudiante.nombre,
    promedio: Math.round(calcularPromedio(estudiante.notas) * 100) / 100
}));

console.log("\n Promedios:");
console.log(promedios);

// 3. Agregar estado (Aprobado >= 70, Reprobado < 70)
const estudiantesConEstado = estudiantes.map(estudiante => {
    const promedio = calcularPromedio(estudiante.notas);
    return {
        ...estudiante,
        promedio: Math.round(promedio * 100) / 100,
        estado: promedio >= 70 ? "Aprobado" : "Reprobado"
    };
});

console.log("\n Estudiantes con estado:");
console.log(estudiantesConEstado);

// Mostrar resultados
console.log("\n Reporte final:");
estudiantesConEstado.forEach(est => {
    console.log(`${est.nombre}: ${est.promedio} - ${est.estado}`);
});