window.functionExists=function(funcString){
	if (typeof window[funcString]=='function'){
		return true;
	}
	return false;
};

window.isFunction=function(func){
	if (typeof func=='function'){
		return true;
	}
	return false;
};