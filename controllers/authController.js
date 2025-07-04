const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { findByEmail } = require('../models/userModel');

const login = (req, res) => {
  const { email, password } = req.body;
  const user = findByEmail(email);

  if (!user) {
    return res.status(401).json({ message: 'Usuario no encontrado' });
  }

  const validPassword = bcrypt.compareSync(password, user.passwordHash);
  if (!validPassword) {
    return res.status(401).json({ message: 'Contraseña incorrecta' });
  }

  console.log('🔐 Clave secreta:', process.env.SECRET_KEY);
  const token = jwt.sign({ id: user.id, email: user.email }, process.env.SECRET_KEY, {
    expiresIn: '1h',
  });

  res.json({ token });
};

module.exports = { login };
