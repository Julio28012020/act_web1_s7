// Array inicial
const lenguajes = ['JavaScript', 'Python', 'Java', 'C++', 'Go'];
console.log('Array original:', lenguajes);

// Extrae los primeros 3 lenguajes
console.log('\n PRIMEROS 3 LENGUAJES');
const [primero, segundo, tercero] = lenguajes;
console.log('Primer lenguaje:', primero);
console.log('Segundo lenguaje:', segundo);
console.log('Tercer lenguaje:', tercero);

// Extrae el primero y el último
console.log('\n PRIMERO Y ÚLTIMO');
const [primerLenguaje, , , , ultimoLenguaje] = lenguajes;
console.log('Primer lenguaje:', primerLenguaje);
console.log('Último lenguaje:', ultimoLenguaje);

// Usa rest operator para separar el primero del resto
console.log('\n REST OPERATOR');
const [primerElemento, ...restoLenguajes] = lenguajes;
console.log('Primer elemento:', primerElemento);
console.log('Resto de lenguajes:', restoLenguajes);

// Intercambia dos variables usando desestructuración
console.log('\n INTERCAMBIO DE VARIABLES');
let variable1 = 'Valor A';
let variable2 = 'Valor B';

console.log('Antes del intercambio:');
console.log('variable1:', variable1);
console.log('variable2:', variable2);
