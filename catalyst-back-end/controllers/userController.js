"use strict";
const axios = require("axios");
const Models = require("../models");
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const jwtSecret = process.env.JWT_SECRET;

const getUsers = (req, res) => {
    Models.User.findAll({}).then(function (data) {
        res.send({result: 200 , data: data})
    }).catch(err => {
        throw err
    })
}

const createUser = async (data, res) => {
    data.password = await bcrypt.hash(data.password, 10)
    Models.User.create(data).then(function (data) {
        res.send({ result: 200, data: data})
    }).catch(err => {
        throw err
    })
}

const updateUser = (req, res) => {
    let userId = req.params.id;
    console.log('updating user #'+userId+' with data '+req.body)

    Models.User.update(req.body, { where: { id: userId} }).then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        throw err
    })
}

const deleteUser = (req, res) => {
    let userId = req.params.id;

    Models.User.destroy({ where: { id: userId} }).then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        throw err
    })
}

const loginUser = async (req, res) => {
    const { emailId, password } = req.body;
  
    try {
      const user = await User.findOne({ where: { emailId } });
  
      if (!user) {
        return res.status(401).send({ message: 'Invalid email' });
      }
  
      const isPasswordValid = await bcrypt.compare(password, user.password);
  
      if (!isPasswordValid) {
        return res.status(401).send({ message: 'Invalid password' });
      }
  
    //   const token = jwt.sign({ id: user.id }, jwtSecret, { expiresIn: '1d' });
  
      res.status(200).send(user);
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: 'Internal server error' });
    }
  };

// const updateUserProfile = asyncHandler(async (req, res) => {
//     const user = await User.findById(req.user._id);

//     if (user {
//         user.name = req.body.name || user.name;
//         user.email = req.body.email || user.email;

//         if (req.body.password) { 
//             user.password = req.body.password;
//         }

//         const updatedUser = await user.save();

//         res.json({
//             _id:updatedUser._id,
//             name:updatedUser.name,
//             email:updatedUser.email

//         }

//         )
//     })
// });

module.exports = {
    getUsers, createUser, updateUser, deleteUser, loginUser
}