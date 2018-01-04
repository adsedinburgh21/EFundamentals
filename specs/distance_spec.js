var assert = require('chai').assert;
var Distance = require('../distance.js');

describe('Distance', function(){
  var distance
  beforeEach(function(){
    distance = new Distance();
  });

  
  it('should return indexOne when indexTwo is zero ' , function(){
    var test = distance.calculate("heat", "", 4, 0);
    assert.equal( test, 4);
  });

  it('should return indexTwo when indexOne is zero ' , function(){
    var test = distance.calculate("", "luck", 0, 4);
    assert.equal( test, 4);
  });

  it('should return 0 distance when no changes required : "same" to "same" ', function(){
    var test0 = distance.calculate("same", "same", 4, 4);
    assert.equal( test0, 0);
  });

  it('should return distance of 4 to test substituting characters : "lion" to "bear" ' , function(){
     var test = distance.calculate("lion", "bear", 4, 4);
     assert.equal( test, 4);
   });

  it('should return distance of 2 to test inserting characters : "tie" to "untie" ' , function(){
     var test = distance.calculate("tie", "untie", 3, 5);
     assert.equal( test, 2);
   });

  it('should return distance of 2 to test deleting characters : "catch" to "cat" ' , function(){
     var test = distance.calculate("catch", "cat", 5, 3);
     assert.equal( test, 2);
   });

  it('should return distance of 2 for converting "xray" to "rays" ' , function(){
     var test = distance.calculate("xray", "rays", 4, 4);
     assert.equal( test, 2);
   });

  it('should return distance of 10 : "abcdefghij" to "klmnopqrst"' , function(){
     var test = distance.calculate("abcdefghij", "klmnopqrst", 10, 10);
     assert.equal( test, 10);
   });



});