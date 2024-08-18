// routes/Medicines.js
const express = require('express');
const router = express.Router();
const Medicine = require('../models/Medicine');

// Get all medicines
router.get('/', async (req, res) => {
  try {
    const medicines = await Medicine.find();
    res.json(medicines);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a single medicine by ID
router.get('/:id', async (req, res) => {
  try {
    const medicine = await Medicine.findOne({ id: req.params.id });
    if (!medicine) {
      return res.status(404).json({ message: 'Medicine not found' });
    }
    res.json(medicine);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add a new medicine
router.post('/', async (req, res) => {
  const { name, id, group, quantity, howToUse, sideEffects } = req.body;
  const newMedicine = new Medicine({
    name,
    id,
    group,
    quantity,
    howToUse,
    sideEffects
  });

  try {
    const savedMedicine = await newMedicine.save();
    res.status(201).json(savedMedicine);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a medicine by ID
router.delete('/:id', async (req, res) => {
  try {
    const result = await Medicine.deleteOne({ id: req.params.id });
    if (result.deletedCount === 0) {
      return res.status(404).json({ message: 'Medicine not found' });
    }
    res.json({ message: 'Medicine deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
