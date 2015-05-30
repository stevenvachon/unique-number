"use strict";
var UniqueNumber = require("../");
var expect = require("chai").expect;



describe("Server Tests", function()
{
	it("should not produce any duplicates", function(done)
	{
		var i;
		var numbers = [];
		var uniqueNumber = new UniqueNumber();
		
		for (i=0; i<100; i++)
		{
			numbers.push( uniqueNumber.generate() );
		}
		
		for (i=0; i<numbers.length; i++)
		{
		    if (i === 0) continue;
		    
		    else if (numbers[i] === numbers[i-1])
		    {
		        done( new Error("Found duplicate number") );
		        break;
		    }
		}
		
		done();
	});
	
	
	
	it("should reset", function(done)
	{
		var actualTimeout,afterFirstReset,afterSecondReset,beforeTimeout,i,lastIteration;
		var numIterations = 100;
		var uniqueNumber = new UniqueNumber();
		
		var firstNumber = uniqueNumber.generate();
		
		for (i=0; i<numIterations; i++) lastIteration = uniqueNumber.generate();
		
		uniqueNumber.reset();
		afterFirstReset = uniqueNumber.generate();
		
		beforeTimeout = Date.now();
		
		setTimeout( function()
		{
			actualTimeout = Date.now() - beforeTimeout;
			
			uniqueNumber.reset();
			afterSecondReset = uniqueNumber.generate();
			
			expect(lastIteration).to.equal(firstNumber + numIterations);
			expect(afterSecondReset).to.be.within(afterFirstReset+actualTimeout-1, afterFirstReset+actualTimeout+1);    // margin of error
			
			done();
			
		}, 100);
	});
});
