"use strict";
const axios = require("axios");

//how do I authenticate with the token and keep authenticated?
const getJobs = (req, res) => {
    axios.get('https://api.jobadder.com/v2/jobboards/?boardId=9429').then(data => {
        console.log(data.data);
        res.send({ result: 200, data: data.data })
    }).catch(err => {
        throw err
    })
}

module.exports = {
    getJobs
}