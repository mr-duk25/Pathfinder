

const Path = require('../models/path')



module.exports = {
index,
show
  };


function index(req, res) {
    res.render('paths/index', {
      paths: Path.getAll()
    });
  }
  
  function show (req, res) {
    res.render('paths/show', {
        path: Path.getOne(req.params.id),
    });
  }

 
  
