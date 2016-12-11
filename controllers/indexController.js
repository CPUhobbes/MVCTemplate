'use strict';

//const Services = require('../services/FILENAME');
const Articles = require('../models/Articles');

//this is the function that is called in the index router that will load the page
let controllers = {
    loadIndex: (req, res) => {
        Articles.find({}).exec(function (err, doc){ 
            let results = {text:doc};
        });
        let data = {text:"Hello World"};
        res.render('index', data);
    }
}

module.exports = controllers;