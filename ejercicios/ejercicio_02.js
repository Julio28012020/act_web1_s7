const inventario = [
    {
        id: 1,
        nombre: "Camiseta Real Madrid",
        precio: 70000,
        categoria: "Ropa",
        stock: 15   
    },
    {
        id: 2,
        nombre: "Celular",
        precio: 950000,
        categoria: "Electrónicos",
        stock: 4   
    },
    {
        id: 3,
        nombre: "Fab x 4kg",
        precio: 42000,
        categoria: "Aseo",
        stock: 11   
    },
    {
        id: 4,
        nombre: "Lavadora",
        precio: 1500000,
        categoria: "Electrónicos",
        stock: 5   
    },
    {
        id: 5,
        nombre: "Arroz",
        precio: 2200,
        categoria: "Supermercado",
        stock: 100   
    }
];

    // 1. Productos de la categoría "Electrónicos"
    function filtrarElectronicos(productos) {
        return productos.filter(producto => producto.categoria === "Electrónicos");
    }

    // 2. Productos con stock menor a 10
    function filtrarStockBajo(productos) {
        return productos.filter(producto => producto.stock < 10);
    }

    // 3. Productos con precio mayor a $500
    function filtrarPrecioAlto(productos) {
        return productos.filter(producto => producto.precio > 500);
    }