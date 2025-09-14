        // Números desordenados - ordena ascendente y descendente
        console.log(' NÚMEROS DESORDENADOS');
        let numeros = [8, 2, 15, 4, 1, 9, 3];
        console.log('Array original:', numeros);

        // Ordenar ascendente
        let numerosAscendente = [...numeros].sort((a, b) => a - b);
        console.log('Orden ascendente:', numerosAscendente);

        // Ordenar descendente
        let numerosDescendente = [...numeros].sort((a, b) => b - a);
        console.log('Orden descendente:', numerosDescendente);

        // Nombres de personas - ordena alfabéticamente
        console.log('\n NOMBRES DE PERSONAS');
        let nombres = ['Carlos', 'Ana', 'Pedro', 'Beatriz', 'Diego', 'Elena'];
        console.log('Array original:', nombres);

        // Ordenar alfabéticamente
        let nombresOrdenados = [...nombres].sort();
        console.log('Orden alfabético:', nombresOrdenados);

        // Objetos con propiedad edad - ordena por edad
        console.log('\n OBJETOS CON EDAD');
        let personas = [
            { nombre: 'Juan', edad: 25 },
            { nombre: 'María', edad: 18 },
            { nombre: 'Pedro', edad: 35 },
            { nombre: 'Ana', edad: 22 },
            { nombre: 'Luis', edad: 40 }
        ];
        console.log('Array original:', personas);

        // Ordenar por edad ascendente
        let personasOrdenadas = [...personas].sort((a, b) => a.edad - b.edad);
        console.log('Ordenado por edad (ascendente):', personasOrdenadas);

        // Ordenar por edad descendente
        let personasDescendente = [...personas].sort((a, b) => b.edad - a.edad);
        console.log('Ordenado por edad (descendente):', personasDescendente);

        // Uso de reverse() para invertir el orden
        console.log('\n USANDO REVERSE()');

        // Invertir números
        let numerosRevertidos = [...numerosAscendente].reverse();
        console.log('Números ascendentes revertidos:', numerosRevertidos);

        // Invertir nombres
        let nombresRevertidos = [...nombresOrdenados].reverse();
        console.log('Nombres alfabéticos revertidos:', nombresRevertidos);

        // Invertir personas
        let personasRevertidas = [...personasOrdenadas].reverse();
        console.log('Personas por edad revertidas:', personasRevertidas);