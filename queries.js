if (!window.appendQuery){
	appendQuery=function(url,append){
		url+=(url.indexOf('?')>0 ? '&' : '?')+append;
		return url;
	};
}
$.fn.appendQuery=function(append){
	this.each(function(){
		$(this).attr('href',appendQuery($(this).attr('href'),append));
	});
	return this;
};
String.prototype.appendQuery=function(append){
	return appendQuery(this,append);
};
if (!window.getQueryVar){
	getQueryVar=function(variable,query){
		query=query || window.location.search.substring(1);
		var vars=query.split('&');
		for (i=0;i<vars.length;i++){
			var pair=vars[i].split('=');
			if (pair[0]==variable){
				return unescape(pair[1]);
			}
		}
		return false;
	};
}
if (!window.queryFragment){
	queryFragment=function(query){
		var hash='';
		for (var name in query){
			hash+='|'+name+'='+query[name];
		}
		hash=hash.substr(1);
		return hash;
	};
}
if (!window.queryFragment){
	getQueryFragment=function(hash){
		hash=hash.replace('#','');
		hash=hash.split('|');
		var query=new Object();
		for (n=0;n<hash.length;n++){
			param=hash[n];
			param=param.split('=');
			query[param[0]]=param[1];
		}
		return query;
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