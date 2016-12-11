"use strict";

const express = require('express'),
    index = require('../controllers/indexController'),
    router = express.Router();


/* GET news listing via the scraper, scraper function housed in controller */
router.get('/', index.loadIndex);

module.exports = router;