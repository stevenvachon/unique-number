(function()
{
	"use strict";
	var previous = 0;
	
	
	
	function uniqueNumber()
	{
		var date = Date.now();
		
		// If created at same millisecond as previous
		if (date <= previous)
		{
			date = ++previous;
		}
		else
		{
			previous = date;
		}
		
		return date;
	}
	
	
	
	uniqueNumber.reset = function()
	{
		previous = 0;
	};
	
	
	
	if (typeof module==="object" && typeof module.exports==="object")
	{
		module.exports = uniqueNumber;
	}
	else if (typeof define==="function" && define.amd)
	{
		define("unique-number", [], function(){ return uniqueNumber });
	}
	else
	{
		window.uniqueNumber = uniqueNumber;
	}
})();
