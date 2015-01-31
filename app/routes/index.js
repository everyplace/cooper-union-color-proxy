var request = require('request');

exports.index = function(req, res){
  res.render('index', { title: 'Save the date: June 27th, 2015' });
};

exports.save = function(req, res){
  res.render('index', { title: 'Save the date: June 27th, 2015' });
};
