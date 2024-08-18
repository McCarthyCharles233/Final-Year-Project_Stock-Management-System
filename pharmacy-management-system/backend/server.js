const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const userRoutes = require('./routes/Users');
const medicineRoutes = require('./routes/Medicines'); // Import medicine routes
app.use('/api/users', userRoutes);
app.use('/api/medicines', medicineRoutes); // Use medicine routes

const PORT = process.env.PORT || 5000;
const db = process.env.MONGO_URI;

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
