import React, { useState } from 'react';

const UserForm = ({ addUser }) => {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    address: '',
    phoneNumber: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(formData);
    setFormData({
      id: '',
      name: '',
      address: '',
      phoneNumber: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>ID:</label>
        <input type="text" name="id" value={formData.id} onChange={handleChange} required />
      </div>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </div>
      <div>
        <label>Address:</label>
        <input type="text" name="address" value={formData.address} onChange={handleChange} required />
      </div>
      <div>
        <label>Phone Number:</label>
        <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
      </div>
      <button type="submit">Add User</button>
    </form>
  );
};

export default UserForm;