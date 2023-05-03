

const Path = require('../models/path')



module.exports = {
index
  };


function index(req, res) {
    res.render('paths/index', {
      paths: Path.getAll()
    });
  }
