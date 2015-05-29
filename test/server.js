"use strict";
var uniqueNumber = require("../");
var expect = require("chai").expect;



describe("Server Tests", function()
{
	it("should not produce any duplicates", function(done)
	{
		var i;
		var numbers = [];
		
		for (i=0; i<100; i++)
		{
			numbers.push( uniqueNumber() );
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
		var firstNumber = uniqueNumber();
		var numIterations = 100;
		
		for (i=0; i<numIterations; i++) lastIteration = uniqueNumber();
		
		uniqueNumber.reset();
		afterFirstReset = uniqueNumber();
		
		beforeTimeout = Date.now();
		
		setTimeout( function()
		{
			actualTimeout = Date.now() - beforeTimeout;
			
			uniqueNumber.reset();
			afterSecondReset = uniqueNumber();
			
			expect(lastIteration).to.equal(firstNumber + numIterations);
			expect(afterSecondReset).to.equal(afterFirstReset + actualTimeout);
			
			done();
			
		}, 100);
	});
});
