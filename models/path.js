const paths = [
    {id: 125125, path: 'To the City', ready: false},
    {id: 102590, path: 'Up the Mountain', ready: false},
    {id: 195673, path: 'Down South', ready: false}
  ];
	
  module.exports = {
    getAll
  };
	
  function getAll() {
    return paths;
  }