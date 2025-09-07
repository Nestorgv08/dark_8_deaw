import { useState } from "react";

// Productos con imagen, nombre y precio
const productosIniciales = [
  {
    id: 1,
    nombre: "Pollo Entero a la Brasa + Papas + Ensalada",
    precio: 69.9,
    imagen: "/src/img/POLLO_ENTERO_BRASA..png",
  },
  {
    id: 2,
    nombre: "1/2 Pollo a la Brasa + Papas + Ensalada",
    precio: 39.9,
    imagen: "/src/img/MEDIO_POLLO_BRASA.png",
  },
];

const nuevosProductos = [
  {
    id: 3,
    nombre: "Hamburguesa Clásica",
    precio: 16.9,
    imagen: "/src/img/Hamburguesa_Clasica.png",
  },
  {
    id: 4,
    nombre: "Alitas BBQ Clásicas (12 unidades)",
    precio: 29.90,
    imagen: "/src/img/ALITAS_12_UND_BBQ.png",
  },
  {
    id: 5,
    nombre: "Parrillada Especial (Para 2 personas)",
    precio: 119.90,
    imagen: "/src/img/PARRILLA_ESPECIAL.png",
  },
];

export default function ListaProductos() {
  const [productos, setProductos] = useState(productosIniciales);

  const agregar = () => {
  const existentes = new Set(productos.map(p => p.id));
  const disponibles = nuevosProductos.filter(p => !existentes.has(p.id));
  if (disponibles.length === 0) return;
  const cuantos = productos.length % 2 === 0 ? 3 : 2;
  const lote = disponibles.slice(0, cuantos);
  setProductos(prev => [...prev, ...lote]);


  };

  return (
    <div>
      <h2>Productos</h2>
      <button onClick={agregar}>Agregar productos</button>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: "16px", marginTop: "16px" }}>
        {productos.map((p) => (
          <div key={p.id} style={{ border: "1px solid #ddd", borderRadius: "8px", padding: "8px", textAlign: "center", background: "#fff" }}>
            <img src={p.imagen} alt={p.nombre} style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "8px" }} />
            <h4 style={{ margin: "8px 0" }}>{p.nombre}</h4>
            <p>S/ {p.precio.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

