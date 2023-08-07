const Usuario = require('../models/usuariosModel'); // Asegúrate de ajustar la ruta según la ubicación de tu modelo de usuario

// Crear usuario
exports.crearUsuario = async (req, res) => {
  try {
    const nuevoUsuario = new Usuario(req.body);
    const usuarioGuardado = await nuevoUsuario.save();
    res.status(201).json(usuarioGuardado);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al crear el usuario', error });
  }
};

// Editar usuario por ID
exports.editarUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const usuarioActualizado = await Usuario.findByIdAndUpdate(id, req.body, { new: true });
    res.json(usuarioActualizado);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al editar el usuario', error });
  }
};

// Ver usuario por ID
exports.verUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const usuario = await Usuario.findById(id);
    if (!usuario) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }
    res.json(usuario);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al obtener el usuario', error });
  }
};

// Listar usuarios
exports.listarUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.json(usuarios);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al obtener los usuarios', error });
  }
};

// Borrar usuario por ID
exports.borrarUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    await Usuario.findByIdAndDelete(id);
    res.json({ mensaje: 'Usuario eliminado correctamente' });
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al eliminar el usuario', error });
  }
};
