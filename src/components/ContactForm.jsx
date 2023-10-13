import React, { useState } from 'react';

const ContactForm = ({ onAddContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleAddContact = () => {
    if (name === '' || number === '') {
      alert('Please fill in all fields');
      return;
    }

    onAddContact({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <div>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={handleInputChange}
        />
        <input
          type="tel"
          name="number"
          placeholder="Phone Number"
          value={number}
          onChange={handleInputChange}
        />
        <button type="button" onClick={handleAddContact}>
          Add Contact
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
