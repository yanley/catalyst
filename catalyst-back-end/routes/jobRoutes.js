const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");
const { getJobs } = require('../controllers/jobController');
const { getMockJobs } = require('../controllers/mockJobController.js');

router.get('/jobs', (req, res) => {
    Controllers.jobController.getJobs(req, res);
})

router.get('/mockjobs', (req, res) => {
    Controllers.mockJobController.getMockJobs(req, res);
})

module.exports = router;