if (!window.getQueryVar){
	getQueryVar=function(variable, query){
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
}
// not certain where this fits in
$.fn.jsHref=function(data){
	this.click(function(e){
		query=parent.location.hash ? getQueryFragment(parent.location.hash) : {};
		query[data]=$(this).data(data);
		parent.location.hash=queryFragment(query);
		e.preventDefault();
	});
	return this;
};