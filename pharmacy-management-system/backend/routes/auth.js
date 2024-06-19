const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const express = require('express');
const router = express.Router();

const defaultAdmin = {
  id: 'admin',
  password: 'root',
  role: 'admin'
};

router.post('/login', async (req, res) => {
  const { role, username, password } = req.body;

  // Check if the default admin credentials are used
  if (username === defaultAdmin.id && password === defaultAdmin.password && role === defaultAdmin.role) {
    const token = jwt.sign({ id: defaultAdmin.id, role: defaultAdmin.role }, process.env.JWT_SECRET);
    return res.json({ token });
  }

  try {
    // Check if the user exists in the database
    const user = await User.findOne({ id: username });
    if (user && await bcrypt.compare(password, user.password) && user.role === role) {
      const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET);
      return res.json({ token });
    }
    res.status(401).json({ message: 'Invalid credentials' });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
