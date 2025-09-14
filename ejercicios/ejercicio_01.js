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

// 1. Mostrar todos los productos
console.log("\n Todos los productos");
console.log(inventario);

// 2. Total de productos en inventario (suma del stock)
const totalProductos = inventario.reduce((suma, producto) => suma + producto.stock, 0);
console.log(`\n Total de productos en inventario: ${totalProductos} unidades`);

// 3. Valor total del inventario
const valorTotal = inventario.reduce((suma, producto) => suma + (producto.precio * producto.stock), 0);
console.log(`Valor total del inventario: $${valorTotal.toLocaleString()}`);

