const bcrypt = require('bcryptjs');

// Simulación de base de datos (podrías conectar DB real aquí)
const users = [
  {
    id: 1,
    email: 'test@ejemplo.com',
    passwordHash: bcrypt.hashSync('123456', 8),
  }
];

const findByEmail = (email) => users.find(u => u.email === email);

module.exports = { findByEmail };
