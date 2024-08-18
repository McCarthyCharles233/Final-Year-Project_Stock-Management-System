import React, { useState } from 'react';
import axios from 'axios';

const AddNewDrug = () => {
  const [formData, setFormData] = useState({
    name: '',
    id: '',
    group: '',
    quantity: '',
    howToUse: '',
    sideEffects: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/medicines', formData);
      alert('Medicine added successfully!');
      setFormData({
        name: '',
        id: '',
        group: '',
        quantity: '',
        howToUse: '',
        sideEffects: '',
      });
    } catch (error) {
      console.error('Error adding medicine:', error);
    }
  };

  return (
    <div className="bg-gray-100 h-full p-10">
      <div>
        <h1 style={{ fontSize: 24 }} className="font-bold">
          <span className='text-gray-500'>Inventory</span>
          <span className='text-gray-500'> › List of Medicines</span>
          <span> › Add New Medicine</span>
        </h1>
        <p>*All fields are mandatory, except mentioned as (optional).</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-wrap gap-6 my-10">
          <div>
            <label>Medicine Name</label><br />
            <input
              name="name"
              style={{ backgroundColor: '#E3EBF3', width: 340, height: 38 }}
              className="p-2 rounded-md mt-1"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Medicine ID</label><br />
            <input
              name="id"
              style={{ backgroundColor: '#E3EBF3', width: 340, height: 38 }}
              className="p-2 rounded-md mt-1"
              type="text"
              value={formData.id}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Medicine Group</label><br />
            <select
              name="group"
              style={{ backgroundColor: '#E3EBF3', width: 340, height: 38 }}
              className="p-2 rounded-md mt-1"
              value={formData.group}
              onChange={handleChange}
              required
            >
              <option value="">-Select Group-</option>
              <option>Group 1</option>
              <option>Group 2</option>
            </select>
          </div>
          <div>
            <label>Quantity in Number</label><br />
            <input
              name="quantity"
              style={{ backgroundColor: '#E3EBF3', width: 340, height: 38 }}
              className="p-2 rounded-md mt-1"
              type="number"
              value={formData.quantity}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div>
          <label>How to use</label><br />
          <textarea
            name="howToUse"
            style={{ backgroundColor: '#E3EBF3', width: 705, height: 96 }}
            className="p-2 rounded-md mt-1"
            value={formData.howToUse}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Side Effects</label><br />
          <textarea
            name="sideEffects"
            style={{ backgroundColor: '#E3EBF3', width: 705, height: 96 }}
            className="p-2 rounded-md mt-1"
            value={formData.sideEffects}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit" className="bg-red-500 p-2 text-center text-white rounded-md mt-5">Save Details</button>
        </div>
      </form>
    </div>
  );
};

export default AddNewDrug;
