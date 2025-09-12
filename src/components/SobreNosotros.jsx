import React from "react";
import "./css/SobreNosotros.css";

function SobreNosotros() {
  return (
    <div className="sobre-container">
      <h2 className="sobre-title">Sobre Nosotros</h2>
      <p className="sobre-text">
        <b>8³ Steakhouse Dark Kitchen </b> Somos una cocina oculta especializada en 
                pollos a la brasa, alitas de distintos sabores, hamburguesas y carnes a la parrilla. 
                Nuestro objetivo es llevar el mejor sabor directamente a tu mesa, con la calidad y pasión que nos caracteriza.
      </p>
      <p className="sobre-text">
       Cocinamos con ingredientes frescos y nos encanta sorprender a nuestros clientes 
       con combinaciones únicas y auténticas.

      </p>
      <img
        src="https://copilot.microsoft.com/th/id/BCO.f47c29ac-5340-446a-a6b5-ec4ac31de382.png"
        alt="Sobre nosotros"
       className="sobre-img"
      />
    </div>
  );
}

export default SobreNosotros;