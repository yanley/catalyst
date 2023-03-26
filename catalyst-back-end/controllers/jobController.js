"use strict";
const axios = require("axios");
const jwt = require("jsonwebtoken");

const authUrl = "https://id.jobadder.com/connect/token";
const client_id ="xwty4k3dmq7ulf2vokpzu7uz7y";
const client_secret="ipbgdq2vbiae7n7gtuhupckhgyr5vcltsxtpuulpghduizet4ppy";
const redirect_uri = "https://dev.team30.com.au/jobs";
const auth_code = "2ec6b9354572d2a245de0b2dd3441894"; //code that appears in URL once authenticated
const refresh_token = "21be9dd1648b0c6cf11815df0ce79dba";

axios.post(authUrl, {
    grant_type: 'authorization_code',
    client_id,
    client_secret,
    redirect_uri,
    code: auth_code
})
.then(response => {
    const { access_token } = response.data;
    // store the access_token in a variable or database
})
.catch(error => {
    console.log(error);
});

const accessToken = "830f06590fc159c3e587ea98fca9f96a"; //token that is returned in exchange for auth code
const apiUrl = "https://api.jobadder.com/v2/jobboards/?boardId=9429";

axios.get(apiUrl, {
    headers: {
        Authorization: `Bearer ${accessToken}`
    }
})
.then(response => {
    const jobData = response.data;
    // process job data as needed
})
.catch(error => {
    console.log(error);
});


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