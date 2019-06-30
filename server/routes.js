'use-strict';

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const controller = require('./controllers');
const apicache = require('apicache');

const router = express.Router();
const cache = apicache.middleware;

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.get('/api/weather', cache('10 minutes'), controller.get_weather);

router.get('/api/mta/subway', cache('5 minutes'), controller.get_mta);

router.get('/api/news/cnn', cache('20 minutes'), controller.get_cnn_news);
router.get('/api/news/nyt', cache('20 minutes'), controller.get_ny_times_news);
router.get('/api/news/wsj', cache('20 minutes'), controller.get_wsj_news);

router.get('/api/sports/espn', cache('20 minutes'), controller.get_espn_sports);
router.get('/api/sports/br', cache('20 minutes'), controller.get_br_sports);
router.get('/api/sports/bbc', cache('20 minutes'), controller.get_bbc_sports);

router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', '/index.html'));
});

module.exports = router;