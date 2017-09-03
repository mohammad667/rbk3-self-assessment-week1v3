var makeHashTable = function() {
  //Do not change the max!
  var max = 4;
  
    return {
      _storage: [],
      retrieve: function(key) {
        return this._storage[hashFn(key, max)];
      },

      insert: function(key, value) {
        //your code is here
        var bucket=this._storage[hashFn(key, max)] ;
        if(!bucket) {
          bucket = [] ;
           this._storage[hashFn(key, max)]=bucket
        }
        for (var i=0 ; i<bucket.length ; i++) {
          var tuple = bucket[i] ;
          if(tuple[0] === key) {
            tuple[1] = value 
            break ;
          }
        }
          bucket.push([key,value]) ;
       this._storage[hashFn(key, max)] = bucket
   
   }
  }
};

// This is a "hashing function". You don't need to worry about it, just use it to turn any key into a pseudo-random key
var hashFn = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    var letter = str[i];
    hash = (hash << 5) + letter.charCodeAt(0);
    hash = (hash & hash) % max;
  }
  return hash;
};
