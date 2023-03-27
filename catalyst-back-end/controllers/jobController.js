"use strict";
const axios = require("axios");
const { makeApiRequest } = require('../api/jobAdderAPI');

function getJobs(req, res) {
    const jobBoardId = 9429;
    makeApiRequest(`/jobboards/?boardId=${jobBoardId}/jobs`)
      .then(data => {
        res.send(data);
      })
      .catch(error => {
        res.status(500).send('Error retrieving jobs from JobAdder API');
      });
  }

module.exports = {
  getJobs
};
