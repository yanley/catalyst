"use strict";
const axios = require("axios");
const Models = require("../models");
const Favourite = require('../models/favourite');
const bcrypt = require('bcrypt');

const getFavourites = (req, res) => {
    Models.Favourite.findAll({}).then(function (data) {
        res.send({result: 200 , data: data})
    }).catch(err => {
        throw err
    })
}

const createFavourite = async (data, res) => {
    Models.Favourite.create(data).then(function (data) {
        res.send({ result: 200, data: data})
    }).catch(err => {
        throw err
    })
}

const updateFavourite = (req, res) => {
    let favouriteId = req.params.id;
    console.log('updating favourite #'+user_id+' with data '+req.body)

    Models.Favourite.update(req.body, { where: { id: user_id} }).then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        throw err
    })
}

const deleteFavourite = (req, res) => {
    let user_id = req.params.id;

    Models.Favourite.destroy({ where: { id: user_id} }).then(function (data) {
        res.send({ result: 200, data: data })
    }).catch(err => {
        throw err
    })
}

module.exports = {
    getFavourites, createFavourite, updateFavourite, deleteFavourite
}