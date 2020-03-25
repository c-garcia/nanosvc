let expect    = require("chai").expect;
let calc = require("../lib/calc");

describe("calc", ()=>{
  describe("add", ()=>{
	it("adds numbers", ()=>{
            expect(calc.add(1,1)).to.equal(2);
        })
  })
})
