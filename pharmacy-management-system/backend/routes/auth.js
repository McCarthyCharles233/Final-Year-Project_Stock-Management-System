const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const express = require('express');
const router = express.Router();

const JWT_SECRET = '648ac5a32050a5ba855801bf7790d1826d496ab3ac57c85097fa578c05908b4f01db6e8f1ef31869c416da69e05d0cf3826859513e349e6336095853b3e3bdd4';

// Login endpoint
router.post('/login', async (req, res) => {
  const { username, password, role } = req.body;

  try {
    const user = await User.findOne({ username, role });
    if (!user) {
      return res.status(401).json({ message: 'Incorrect credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Incorrect credentials' });
    }

    const token = jwt.sign({ userId: user._id, role: user.role }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;