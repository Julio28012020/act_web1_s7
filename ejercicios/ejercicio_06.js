
    // Array inicial
    let numeros = [1, 2, 3, 4, 5];
    console.log('Array inicial:', numeros);

    // push() - agregar al final
    console.log('\n Agregar al final');
    numeros.push(6);
    console.log('Después de push(6):', numeros);

    numeros.push(7, 8);
    console.log('Después de push(7, 8):', numeros);

    // pop() - quitar del final
    console.log('\n Quitar del final');
    let elementoEliminado = numeros.pop();
    console.log('Elemento eliminado con pop():', elementoEliminado);
    console.log('Array después de pop():', numeros);

    // unshift() - agregar al inicio
    console.log('\n Agregar al inicio');
    numeros.unshift(0);
    console.log('Después de unshift(0):', numeros);

    numeros.unshift(-2, -1);
    console.log('Después de unshift(-2, -1):', numeros);

    // shift() - quitar del inicio
    console.log('\n Quitar del inicio');
    let primerElemento = numeros.shift();
    console.log('Elemento eliminado con shift():', primerElemento);
    console.log('Array después de shift():', numeros);

    // splice() - insertar elementos en posición específica
    console.log('\n Insertar en posición específica');
    console.log('Array antes de splice():', numeros);

    // slice() - extraer porción sin modificar original
    console.log('\n Extraer porción sin modificar');
    console.log('Array original antes de slice():', numeros);

    let porcion1 = numeros.slice(1, 4);
    console.log('slice(1, 4):', porcion1);

    let porcion2 = numeros.slice(2);
    console.log('slice(2):', porcion2);

    let porcion3 = numeros.slice(-3);
    console.log('slice(-3):', porcion3);

    let porcion4 = numeros.slice();
    console.log('slice() - copia completa:', porcion4);

    console.log('Array original después de slice():', numeros);
    console.log('El array original no se modificó');