const assert = require('assert');
const reverse = require('../reverse.js');

describe("reverse", function(){

  it("should not change a single character", function(){
    assert.strictEqual(reverse("a"), "a");
  });

  it("should handle the empty string", function(){
    assert.strictEqual(reverse(""), "");
  });

  it("should reverse a short string", function(){
    assert.strictEqual(reverse("dog"), "god");
  });

  it("should reverse a long string", function(){
    assert.strictEqual(reverse("LaunchCode"), "edoChcnuaL");
  });

});