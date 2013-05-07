
var assert = require("assert")
  , should = require("should")
  , amdefine = require("amdefine")
  , graphite = require('../lib/time.js');

describe('time', function(){
   
    it('should return the number of milliseconds in a single second', function(){
        (1).second().should.equal(6000)
    })
    
    it('should return the number of milliseconds in any given number of seconds', function(){
        (8).seconds().should.equal(8000)
    })

})
