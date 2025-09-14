    const ventas = [
        { producto: "Laptop", cantidad: 2, precio: 1200000, fecha: "2024-01-15" },
        { producto: "Mouse", cantidad: 15, precio: 25000, fecha: "2024-01-16" },
        { producto: "Teclado", cantidad: 8, precio: 80000, fecha: "2024-01-17" },
        { producto: "Monitor", cantidad: 5, precio: 300000, fecha: "2024-01-18" },
        { producto: "Laptop", cantidad: 3, precio: 1200000, fecha: "2024-01-19" },
        { producto: "Mouse", cantidad: 20, precio: 25000, fecha: "2024-01-20" }
    ];

    // 1. Total de ingresos
    const totalIngresos = ventas.reduce((total, venta) => {
        return total + (venta.cantidad * venta.precio);
    }, 0);

    // 2. Producto más vendido (por cantidad)
    const ventasPorProducto = ventas.reduce((acc, venta) => {
        acc[venta.producto] = (acc[venta.producto] || 0) + venta.cantidad;
        return acc;
    }, {});

    const productoMasVendido = Object.keys(ventasPorProducto).reduce((max, producto) => {
        return ventasPorProducto[producto] > ventasPorProducto[max] ? producto : max;
    });

    // 3. Promedio de venta por transacción
    const promedioVenta = ventas.reduce((total, venta) => {
        return total + (venta.cantidad * venta.precio);
    }, 0) / ventas.length;

    console.log(`Total de ingresos: $${totalIngresos.toLocaleString()}`);
    console.log(`Producto más vendido: ${productoMasVendido} (${ventasPorProducto[productoMasVendido]} unidades)`);
    console.log(`Promedio de venta por transacción: $${Math.round(promedioVenta).toLocaleString()}`);