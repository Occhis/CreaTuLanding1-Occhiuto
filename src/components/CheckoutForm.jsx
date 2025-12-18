import { useState } from 'react';

const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validaciones manuales
        const nameRegex = /^[a-zA-Z\s]*$/;
        if (!nameRegex.test(name)) {
            alert("El nombre solo debe contener letras");
            return;
        }

        if (phone.length < 7 || isNaN(phone)) {
            alert("Por favor, ingresa un teléfono válido (solo números)");
            return;
        }

        onConfirm({ name, phone, email });
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px', margin: 'auto' }}>
            <input type="text" placeholder="Nombre completo" value={name} 
                onChange={(e) => setName(e.target.value)} required />
            
            <input type="tel" placeholder="Teléfono" value={phone} 
                onChange={(e) => setPhone(e.target.value)} required />
            
            <input type="email" placeholder="Email" value={email} 
                onChange={(e) => setEmail(e.target.value)} required />
            
            <button type="submit" className="btn-primary">Generar Orden</button>
        </form>
    );
};

export default CheckoutForm;