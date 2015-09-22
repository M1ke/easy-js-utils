var queryFragmentSet = function(query){
	var hash='';
	for (var name in query){
		hash+='|'+name+'='+query[name];
	}
	hash=hash.substr(1);
	return hash;
};

var queryFragmentGet = function(hash){
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