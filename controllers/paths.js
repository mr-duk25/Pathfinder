

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

  function getOne (id) {
    //url params are strings - convert to numbers
    id = parseInt(id);
    // The Array.prototype.find iterator method is
    // ideal for finding objects within an array
    return paths.find(path => path.id === id);
  }
  
