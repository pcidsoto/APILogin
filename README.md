# 🔐 API de Login - Express + JWT (Patrón MVC)

Esta API implementa un sistema de autenticación básico con Express.js usando el patrón MVC. Permite autenticar usuarios y obtener un token JWT. Ideal para conectar con apps frontend como React Native.

---

## 📁 Estructura del Proyecto

```
example-api/
├── controllers/        # Lógica del negocio
│   └── authController.js
├── models/             # Simulación de base de datos
│   └── userModel.js
├── routes/             # Rutas de la API
│   └── authRoutes.js
├── config/             # Configuraciones generales
│   └── db.js (opcional)
├── .env                # Variables de entorno (NO subir a GitHub)
├── app.js              # Configuración general del servidor
├── server.js           # Arranque del servidor
├── package.json
```

---

## 🚀 Cómo ejecutar el proyecto localmente

### 1. Clonar el repositorio

```bash
git clone https://github.com/pcidsoto/APILogin.git
cd APILogin
```

---

### 2. Instalar dependencias

```bash
npm install
```

---

### 3. Crear archivo `.env`

Crea un archivo llamado `.env` en la raíz del proyecto con el siguiente contenido:

```env
PORT=3000
SECRET_KEY=supersecreto
```

> 🔐 **IMPORTANTE**: No compartas el `SECRET_KEY` en público ni lo subas al repositorio.

---

### 4. Iniciar el servidor

```bash
node server.js
```

El servidor estará corriendo en:
```
http://localhost:3000
```

---

## 🧪 Endpoint disponible

### POST `/api/auth/login`

Permite autenticarse y obtener un token JWT.

#### 📥 Body esperado (JSON):
```json
{
  "email": "test@ejemplo.com",
  "password": "123456"
}
```

#### 📤 Respuesta exitosa:
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6..."
}
```

---

## 🧠 Usuario de prueba

El sistema simula una "base de datos" con este usuario:

- **Email**: `test@ejemplo.com`
- **Password**: `123456`

---

## ✅ Requisitos

- Node.js >= 14
- Postman o cualquier cliente HTTP para testear (opcional)

---

## 📌 Notas

- Esta API es solo un ejemplo educativo.
- Puedes conectar este backend con una app en React Native o Web que consuma el token.

---

## 🛡️ Futuras mejoras (ideas)

- Conexión a una base de datos real (MongoDB, PostgreSQL, etc.)
- Middleware de autenticación con JWT
- Registro de usuarios
- Roles y permisos

---

## 📄 Licencia

MIT