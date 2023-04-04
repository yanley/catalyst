'use strict'
const Job = require('./job')
const User = require('./user')
const Favourite = require('./favourite')

async function init() {
    await Job.sync();
    await User.sync();
    await Favourite.sync();
};

init();

module.exports = {
    Job, User, Favourite
};