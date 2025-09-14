// Objeto persona con propiedades anidadas
const persona = {
    nombre: 'Carlos',
    edad: 28,
    profesion: 'Desarrollador',
    direccion: {
        calle: 'Calle 123',
        ciudad: 'Medellín',
        pais: 'Colombia',
        codigoPostal: '050001'
    },
    contacto: {
        email: 'carlos@email.com',
        telefono: '123-456-7890',
        linkedin: 'carlos-dev'
    }
};

console.log('Objeto original:', persona);

// Desestructuración básica
console.log('\n DESESTRUCTURACIÓN BÁSICA');
const { nombre, edad, profesion } = persona;
console.log('Nombre:', nombre);
console.log('Edad:', edad);
console.log('Profesión:', profesion);

// Renombrado de variables
console.log('\n RENOMBRADO DE VARIABLES');
const { nombre: nombreCompleto, edad: años, profesion: trabajo } = persona;
console.log('Nombre completo:', nombreCompleto);
console.log('Años:', años);
console.log('Trabajo:', trabajo);

// Valores por defecto
console.log('\n VALORES POR DEFECTO');
const { 
    nombre: nom, 
    salario = 50000, 
    estado = 'Soltero',
    experiencia = 'No especificada' 
} = persona;
console.log('Nombre:', nom);
console.log('Salario (por defecto):', salario);
console.log('Estado (por defecto):', estado);
console.log('Experiencia (por defecto):', experiencia);

// Desestructuración anidada
console.log('\n DESESTRUCTURACIÓN ANIDADA');
const { 
    direccion: { calle, ciudad, pais },
    contacto: { email, telefono }
} = persona;
console.log('Calle:', calle);
console.log('Ciudad:', ciudad);
console.log('País:', pais);
console.log('Email:', email);
console.log('Teléfono:', telefono);

// Rest operator en objetos
console.log('\n REST OPERATOR EN OBJETOS');
const { nombre: n, edad: e, ...restoPersona } = persona;
console.log('Nombre extraído:', n);
console.log('Edad extraída:', e);
console.log('Resto de propiedades:', restoPersona);

// Rest operator con desestructuración anidada
console.log('\n REST OPERATOR CON ANIDACIÓN');
const { 
    direccion: { calle: c, ...restoDireccion },
    contacto,
    ...otrasProps 
} = persona;
console.log('Calle extraída:', c);
console.log('Resto de dirección:', restoDireccion);
console.log('Contacto completo:', contacto);
console.log('Otras propiedades:', otrasProps);