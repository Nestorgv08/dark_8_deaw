import React, { useState } from "react";
import "./css/LibroReclamaciones.css";
import libroImg from "../img/reclamo.jpg";  // 👈 Importas la imagen aquí

function LibroReclamaciones() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Botón en el footer */}
      <div className="libro-btn" onClick={toggleModal}>
        <img src={libroImg} alt="Libro de Reclamaciones" /> {/* 👈 Aquí la usas */}
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Libro de Reclamaciones</h2>
            <form className="libro-form">
              <label>Nombre completo</label>
              <input type="text" placeholder="Escribe tu nombre" required />

              <label>DNI</label>
              <input type="text" placeholder="Número de DNI" required />

              <label>Correo electrónico</label>
              <input type="email" placeholder="ejemplo@gmail.com" required />

              <label>Dirección</label>
              <input type="text" placeholder="Tu dirección" />

              <label>Tipo</label>
              <select required>
                <option value="">Selecciona...</option>
                <option value="reclamo">Reclamo</option>
                <option value="queja">Queja</option>
              </select>

              <label>Detalle</label>
              <textarea rows="4" placeholder="Describe tu reclamo o queja" required></textarea>

              <button type="submit" className="btn-submit">Enviar Reclamo</button>
            </form>
            <button className="close-btn" onClick={toggleModal}>
              Cerrar
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default LibroReclamaciones;