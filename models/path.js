const paths = [
    {id: 125125, path: 'To the City', ready: false},
    {id: 102590, path: 'Up the Mountain', ready: false},
    {id: 195673, path: 'Down South', ready: false}
  ];
	
  module.exports = {
    getAll,
    getOne
  };
	
  function getAll() {
    return paths;
  }

  function getOne(id) {
    //url params are strings - convert to numbers
    id = parseInt(id);
    // The Array.prototype.find iterator method is
    // ideal for finding objects within an array
    return paths.find(path => path.id === id);
  }