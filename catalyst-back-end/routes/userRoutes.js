const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

router.get('/users', (req, res) => {
    Controllers.userController.getUsers(req, res);
})

router.post('/create', (req, res) => {
    Controllers.userController.createUser(req.body, res)
})

module.exports = router;