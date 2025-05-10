import React, { useState, useEffect } from 'react';

const Conexion = () => {
  const [customers, setCustomers] = useState([]); // <-- Falta esto

  useEffect(() => {
    // Realiza la solicitud GET a la API
    fetch('http://localhost:8080/api/customers')
      .then(response => response.json())
      .then(data => setCustomers(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <ul>
        {customers.map(customer => (
          <li key={customer.id}>{customer.email} - {customer.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Conexion;
