// your code here
var Array = function(arr) {
  var someInstance = {} ;
  someInstance.arr = arr ;
 extend(someInstance, arrayMethods) ;
  return someInstance ;
}

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
}
var arrayMethods = {} ;
arrayMethods.first = function() {
  return this.arr[0] ;
};
arrayMethods.last = function() {
  return this.arr[this.arr.length-1] ;
};

