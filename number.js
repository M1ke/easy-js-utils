if (!window.isNumeric){
	isNumeric=function(n){
		return !isNaN(parseFloat(n)) && isFinite(n);
	};
}