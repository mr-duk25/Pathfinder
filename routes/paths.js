var express = require('express');
var router = express.Router();

// Require the controller that exports To-Do CRUD functions
var pathsCtrl = require('../controllers/paths');



//All actual paths start with "/paths"

//GET /paths
router.get('/', pathsCtrl.index);

//GET /paths:id
router.get('/:id', pathsCtrl.show);





module.exports = router;
