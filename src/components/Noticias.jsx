import React from "react";
import "./css/Noticias.css";

function Noticias() {
  const noticias = [
    {
      id: 1,
      titulo: "PROMOCION EN ALITAS ",
      texto: "Nueva promoción de alitas picantes los viernes",
      imagen: "https://tofuu.getjusto.com/orioneat-local/resized2/FRwxztTLK9pgoSKfF-300-x.webp",
    },
    {
      id: 2,
      titulo: "PARRILLAS DE LUNES A JUEVES ",
      texto: "Carne a la parrilla con descuentos de lunes a jueves.",
      imagen: "https://cdn.pixabay.com/photo/2020/04/27/06/08/beef-5098287_1280.jpg",
    },
    {
      id: 3,
      titulo: "PROXIMAMENTE ",
      texto: "hamburguesa edición limitada",
      imagen: "https://media.istockphoto.com/id/495204032/es/foto/sabrosa-hamburguesa-frescos.jpg?s=612x612&w=0&k=20&c=jV5M1jY0WpDL2gVo0YeJHqDfWDkDJbq-Z31EFAQGeos=",
    }
  ];

  return (
    <div className="noticias-container">
      <h2 className="noticias-title"> Noticias</h2>
      <div className="noticias-grid">
        {noticias.map((n) => (
          <div key={n.id} className="noticia-card">
            <img src={n.imagen} alt={n.titulo} className="noticia-img" />
            <div className="noticia-body">
              <h3>{n.titulo}</h3>
              <p>{n.texto}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Noticias;