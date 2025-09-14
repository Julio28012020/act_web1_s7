    // Array de usuarios
    const usuarios = [
        { id: 1, nombre: "Ana García", email: "ana@gmail.com", activo: true },
        { id: 2, nombre: "Carlos López", email: "carlos@hotmail.com", activo: true },
        { id: 3, nombre: "María Rodríguez", email: "maria@yahoo.com", activo: false },
        { id: 4, nombre: "Diego Martínez", email: "diego@outlook.com", activo: true },
        { id: 5, nombre: "Laura Fernández", email: "laura@gmail.com", activo: true },
        { id: 6, nombre: "Pedro Sánchez", email: "pedro@empresa.co", activo: false }
    ];

    // 1. find() - Buscar usuario por email
    const usuarioPorEmail = usuarios.find(usuario => usuario.email === "maria@yahoo.com");
    console.log("Usuario encontrado por email:");
    console.log(usuarioPorEmail);

    // 2. findIndex() - Obtener posición de usuario por id
    const posicionUsuario = usuarios.findIndex(usuario => usuario.id === 4);
    console.log("Posición del usuario con id 4:");
    console.log(posicionUsuario);

    // 3. some() - Verificar si hay usuarios inactivos
    const hayInactivos = usuarios.some(usuario => !usuario.activo);
    console.log("Hay usuarios inactivos:");
    console.log(hayInactivos);

    // 4. every() - Verificar si todos tienen email válido (contiene @)
    const todosEmailValidos = usuarios.every(usuario => usuario.email.includes("@"));
    console.log("Todos tienen email válido:");
    console.log(todosEmailValidos);