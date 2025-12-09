require('dotenv').config();

module.exports = {
  admin: {
    username: process.env.ADMIN_USERNAME || 'smile',
    password: process.env.ADMIN_PASSWORD || '20251208'
  },
  server: {
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET || 'nav-item-jwt-secret-2024-secure-key'
  }

}; 
