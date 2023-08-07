const mongoose = require('mongoose');

// Conexión con MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/biblioteca", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
})
  .then(() => console.log('Conexión exitosa con MongoDB'))
  .catch(err => console.error('Error al conectar con MongoDB:', err));

// Definición del esquema del usuario
const usuarioSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  contraseña: { type: String, required: true },
  // Otros campos del usuario
}, { collection: 'usuarios' });

// Creación del modelo de usuario
const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;
