var functionQ = function(fn, context, params){
	return function(){
		fn.apply(context, params);
	};
}