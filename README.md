# Actividad 1 - Momento 2

## Estructuras de Datos en JavaScript (Arrays y Objetos)

**Repositorio GitHub** → `https://github.com/tu-usuario/estructuras-datos-js`

---

## 📦 Instrucciones rápidas

1. **Fork** → `https://github.com/jfinfocesde/act_web1_s7.git`
2. **Clone**  
   ```bash
   git clone https://github.com/TU-USUARIO/act_web1_s7.git
   cd estructuras-datos-js
   ```
3. **Crea** un archivo `ejercicioX.js` (X = 1-20) dentro de `/src`.  
   **IMPORTANTE**: utiliza arreglos, objetos, métodos de arrays, desestructuración y las técnicas vistas en clase.
4. **Ejecuta** tu archivo:  
   ```bash
   node src/ejercicio1.js
   ```
5. **Commit / Push / PR**  
   ```bash
   git add .
   git commit -m "feat: ejercicio X resuelto"
   git push origin main
   ```

---

## 📁 Estructura del repo

```
estructuras-datos-js/
├── README.md
├── src/
│   ├── ejercicio_01.js
│   ├── ejercicio_02.js
│   ├── ...
│   └── ejercicio_10.js
└── .gitignore
```

---

## 🧩 Ejercicios - Estructuras de Datos

### 1️⃣ Gestión de Inventario Básico
**Archivo:** `src/ejercicio_01.js`  
Crea un array de objetos que represente un inventario de productos. Cada producto debe tener: `id`, `nombre`, `precio`, `categoria`, `stock`.  
Declara al menos 5 productos y muestra:
- Todos los productos
- Total de productos en inventario
- Valor total del inventario

---

### 2️⃣ Filtrado de Productos por Categoría
**Archivo:** `src/ejercicio_02.js`  
Usando el inventario del ejercicio anterior, utiliza el método `filter()` para:
- Mostrar solo productos de la categoría "Electrónicos"
- Mostrar productos con stock menor a 10
- Mostrar productos con precio mayor a $500

---

### 3️⃣ Transformación de Datos con map()
**Archivo:** `src/ejercicio_03.js`  
Crea un array de estudiantes con `nombre`, `edad`, `notas` (array de números).  
Usa `map()` para:
- Crear un nuevo array con solo los nombres
- Crear un array con el promedio de cada estudiante
- Agregar una propiedad `estado` ("Aprobado" si promedio >= 70, "Reprobado" si < 70)

---

### 4️⃣ Análisis de Ventas con reduce()
**Archivo:** `src/ejercicio_04.js`  
Dado un array de ventas con `producto`, `cantidad`, `precio`, `fecha`:  
Usa `reduce()` para calcular:
- Total de ingresos
- Producto más vendido (por cantidad)
- Promedio de venta por transacción

---

### 5️⃣ Búsqueda y Verificación
**Archivo:** `src/ejercicio_05.js`  
Crea un array de usuarios con `id`, `nombre`, `email`, `activo`.  
Implementa búsquedas usando:
- `find()` para buscar usuario por email
- `findIndex()` para obtener posición de usuario por id
- `some()` para verificar si hay usuarios inactivos
- `every()` para verificar si todos tienen email válido (contiene @)

---

### 6️⃣ Manipulación de Arrays
**Archivo:** `src/ejercicio_06.js`  
Crea un array inicial `[1, 2, 3, 4, 5]` y demuestra:
- `push()` y `pop()` - agregar y quitar del final
- `shift()` y `unshift()` - agregar y quitar del inicio
- `splice()` - insertar elementos en posición específica
- `slice()` - extraer porción sin modificar original

---

### 7️⃣ Ordenamiento y Reversión
**Archivo:** `src/ejercicio_07.js`  
Crea arrays de:
- Números desordenados - ordena ascendente y descendente
- Nombres de personas - ordena alfabéticamente
- Objetos con propiedad `edad` - ordena por edad
- Usa `reverse()` para invertir el orden

---

### 8️⃣ Desestructuración de Arrays
**Archivo:** `src/ejercicio_08.js`  
Dado el array `['JavaScript', 'Python', 'Java', 'C++', 'Go']`:  
- Extrae los primeros 3 lenguajes
- Extrae el primero y el último
- Usa rest operator para separar el primero del resto
- Intercambia dos variables usando desestructuración

---

### 9️⃣ Desestructuración de Objetos
**Archivo:** `src/ejercicio_09.js`  
Crea un objeto `persona` con propiedades anidadas (dirección, contacto).  
Demuestra:
- Desestructuración básica
- Renombrado de variables
- Valores por defecto
- Desestructuración anidada
- Rest operator en objetos

---

### 🔟 Métodos de Objeto
**Archivo:** `src/ejercicio_10.js`  
Crea un objeto y demuestra:
- `Object.keys()` - obtener claves
- `Object.values()` - obtener valores
- `Object.entries()` - obtener pares clave-valor
- Iterar sobre el objeto con `forEach()`

---
