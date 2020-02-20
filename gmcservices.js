var express = require('express')
var router = express.Router()
var draw = require('./draw_template');

var NodeGeocoder = require('node-geocoder');
var options = {
    provider: 'google',
    // Optional depending on the providers
    httpAdapter: 'https', // Default
    apiKey: 'AIzaSyA_GyfooriZpVPE86djUwi-IX7WfNVFHqk', // for Mapquest, OpenCage, Google Premier
    formatter: null         // 'gpx', 'string', ...
  };
var geocoder = NodeGeocoder(options);

// define the home page route
router.get('/', function (req, res) {
  res.send('GMC Services')
});

router.get('/geocode/:lat/:lon', function (req, res) {
    geocoder.reverse({lat:req.params.lat, lon:req.params.lon})
    .then(function(resp) {
      console.log(resp);
      res.status(200).send(resp);
    })
    .catch(function(err) {
      console.log(err);
      res.status(500).send(err);
    });
  });

router.get('/vehicle/template/:templId', function (req, res, next) {
    res.setHeader('Content-Type', 'image/png');
    draw(req.params.templId).pngStream().pipe(res);
  }); 


module.exports = router