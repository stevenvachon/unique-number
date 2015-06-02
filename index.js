(function()
{
	"use strict";
	
	
	
	function UniqueNumber(useDate)
	{
		// Support not using `new`
		if (this instanceof UniqueNumber === false)
		{
			return new UniqueNumber(useDate);
		}
		
		this.useDate = useDate===true;
		this.reset();
	}
	
	
	
	UniqueNumber.prototype.generate = function()
	{
		var current;
		
		if (this.useDate === false)
		{
			return this.previous++;
		}
		
		current = Date.now();
		
		// If created at same millisecond as previous
		if (current <= this.previous)
		{
			current = ++this.previous;
		}
		else
		{
			this.previous = current;
		}
		
		return current;
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
