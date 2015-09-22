var queryStringVal = function(variable, query){
	query = query || window.location.search.substring(1);
	var vars=query.split('&');
	for (i=0; i<vars.length; i++){
		var pair=vars[i].split('=');
		if (pair[0]==variable){
			return unescape(pair[1]);
		}
	}
	return false;
};