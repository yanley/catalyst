'use strict'
const Job = require('./job')

async function init() {
    await Job.sync();
};

init();

module.exports = {
    Job
};