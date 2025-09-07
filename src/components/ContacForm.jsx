import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        correo: '',
        celular: '',
        categoria: '',
        presupuesto: ''
    });

    const [message, setMessage] = useState('');
    const [isError, setIsError] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let isValid = true;
        let messages = [];

        // Validaciones reescritas para React
        if (formData.nombre.trim() === '') {
            isValid = false;
            messages.push('El nombre completo es obligatorio.');
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.correo.trim())) {
            isValid = false;
            messages.push('Por favor, ingresa un correo electrónico válido.');
        }

        const phoneNumber = formData.celular.replace(/\D/g, '');
        if (phoneNumber.length < 9) {
            isValid = false;
            messages.push('El número celular debe tener al menos 9 dígitos.');
        }

        const Compra = parseFloat(formData.Compra);
        if (isNaN(Compra) || Compra > 40) {
            isValid = false;
            messages.push('La Compra Minima debe ser de al menos 40 soles.');
        }

        if (isValid) {
            setIsError(false);
            setMessage('¡Formulario enviado con éxito! Te contactaremos pronto.');
            setFormData({
                nombre: '',
                correo: '',
                celular: '',
                categoria: '',
                presupuesto: ''
            });
        } else {
            setIsError(true);
            setMessage(messages.join('<br>'));
        }
    };

    return (
        <section className="contact-form-section" id="contacto">
            <h3>Contáctanos</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
                <label htmlFor="nombre">Nombre Completo:</label>
                <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} required />

                <label htmlFor="correo">Correo de Contacto:</label>
                <input type="email" id="correo" name="correo" value={formData.correo} onChange={handleChange} required />

                <label htmlFor="celular">Número Celular:</label>
                <input type="tel" id="celular" name="celular" value={formData.celular} onChange={handleChange} />

                <label htmlFor="categoria">Categoría:</label>
                <select id="categoria" name="categoria" value={formData.categoria} onChange={handleChange}>
                    <option value="">Selecciona una categoría</option>
                    <option value="Pollo a la Brasa">Pollo a la Brasa</option>
                    <option value="Alitas de Pollo">Alitas</option>
                    <option value="Hamburguesas">Hamburguesas</option>
                    <option value="Parrillas">Parrillas</option>
                    <option value="1/2 Pollo a la Brasa">Medio Pollo</option>
                    <option value="1/4 Pollo a la Brasa">Un Cuarto de Pollo</option>
                </select>

                <label htmlFor="Compra">Monto de Compra:</label>
                <input type="number" id="Compra" name="Compra" value={formData.presupuesto} onChange={handleChange} min="0" step="10" placeholder="Ej: 40" />

                <button type="submit">Enviar Consulta</button>
            </form>
            <p className="form-message" dangerouslySetInnerHTML={{ __html: message }} style={{ color: isError ? 'red' : 'green' }}></p>
        </section>
    );
};

export default ContactForm;
