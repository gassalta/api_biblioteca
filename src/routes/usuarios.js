const express = require('express');
const router = express.Router();

const usuariosController = require('../controllers/usuariosController');

// Rutas de usuarios
router.post('/', usuariosController.crearUsuario);
router.put('/:id', usuariosController.editarUsuario);
router.get('/:id', usuariosController.verUsuario);
router.get('/', usuariosController.listarUsuarios);
router.delete('/:id', usuariosController.borrarUsuario);

module.exports = router;