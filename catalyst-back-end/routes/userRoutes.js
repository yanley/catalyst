const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");
const { loginUser } = require('../controllers/userController');

router.get('/', (req, res) => {
    Controllers.userController.getUsers(req, res);
})

router.post('/create', (req, res) => {
    Controllers.userController.createUser(req.body, res)
})

router.post('/login', loginUser);

router.put('/:id', (req, res) => {
    Controllers.userController.updateUser(req, res)
})

router.delete('/:id', (req, res) => {
    Controllers.userController.deleteUser(req, res)
})

module.exports = router;