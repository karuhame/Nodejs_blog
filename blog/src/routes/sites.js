const express = require('express');
const route = express.Router();

const sitesController = require('../app/controllers/SitesController');


route.get('/search', sitesController.search);
route.get('/', sitesController.index);


module.exports = route;
