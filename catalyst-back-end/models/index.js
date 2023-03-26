'use strict'
const Job = require('./job')
const User = require('./user')

async function init() {
    await Job.sync();
    await User.sync();
};

init();

module.exports = {
    Job, User
};