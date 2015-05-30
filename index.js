(function()
{
	"use strict";
	
	
	
	function UniqueNumber()
	{
		this.reset();
	}
	
	
	
	UniqueNumber.prototype.generate = function()
	{
		var date = Date.now();
		
		// If created at same millisecond as previous
		if (date <= this.previous)
		{
			date = ++this.previous;
		}
		else
		{
			this.previous = date;
		}
		
		return date;
	};
	
	
	
	UniqueNumber.prototype.reset = function()
	{
		this.previous = 0;
	};
	
	
	
	if (typeof module==="object" && typeof module.exports==="object")
	{
		module.exports = UniqueNumber;
	}
	else if (typeof define==="function" && define.amd)
	{
		define("unique-number", [], function(){ return UniqueNumber });
	}
	else
	{
		window.UniqueNumber = UniqueNumber;
	}
})();
