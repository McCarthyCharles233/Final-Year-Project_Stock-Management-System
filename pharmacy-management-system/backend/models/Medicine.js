// models/Medicine.js
const mongoose = require('mongoose');

const MedicineSchema = new mongoose.Schema({
  name: { type: String, required: true },
  id: { type: String, required: true, unique: true },
  group: { type: String, required: true },
  quantity: { type: Number, required: true },
  howToUse: { type: String },
  sideEffects: { type: String }
});

module.exports = mongoose.model('Medicine', MedicineSchema);
