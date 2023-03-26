const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

router.get('/jobs', (req, res) => {
    Controllers.swapiController.getJobs(req, res);
})

module.exports = router;