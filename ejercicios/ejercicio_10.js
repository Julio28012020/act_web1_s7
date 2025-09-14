// Objeto de ejemplo
const producto = {
    id: 1,
    nombre: 'Laptop HP',
    precio: 850000,
    categoria: 'Tecnología',
    disponible: true,
    marca: 'HP',
    modelo: 'Pavilion 15'
};

console.log('Objeto original:', producto);

// Object.keys() - obtener claves
console.log('\n=== Object.keys() - OBTENER CLAVES ===');
const claves = Object.keys(producto);
console.log('Claves del objeto:', claves);
console.log('Número de propiedades:', claves.length);

// Object.values() - obtener valores
console.log('\n=== Object.values() - OBTENER VALORES ===');
const valores = Object.values(producto);
console.log('Valores del objeto:', valores);

// Object.entries() - obtener pares clave-valor
console.log('\n=== Object.entries() - PARES CLAVE-VALOR ===');
const entradas = Object.entries(producto);
console.log('Pares clave-valor:', entradas);

// Iterar sobre el objeto con forEach()
console.log('\n=== ITERACIÓN CON forEach() ===');

console.log('\nIterando sobre las claves:');
Object.keys(producto).forEach(clave => {
    console.log(`Clave: ${clave}`);
});

console.log('\nIterando sobre los valores:');
Object.values(producto).forEach(valor => {
    console.log(`Valor: ${valor}`);
});

console.log('\nIterando sobre pares clave-valor:');
Object.entries(producto).forEach(([clave, valor]) => {
    console.log(`${clave}: ${valor}`);
});

console.log('\nIteración con índice:');
Object.entries(producto).forEach(([clave, valor], indice) => {
    console.log(`${indice + 1}. ${clave} = ${valor}`);
});

