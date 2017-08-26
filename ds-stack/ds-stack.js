var Stack = function() {
    this._storage =[]
    this.add = function(value){
    	this._storage.push(value) ;
    	return this._storage
      // write me



    };
    this.remove = function() { 
    	this._storage.shift()
    	return this._storage 
      // write me
    };
  };