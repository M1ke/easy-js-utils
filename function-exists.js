window.functionExists = function(funcString){
	if (typeof window[funcString]=='function'){
		return true;
	}
	return false;
};
