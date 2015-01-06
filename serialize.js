String.prototype.queryToObject=function(){
	var tmp;
	tmp=decodeURIComponent(this);
	tmp=tmp.split('&');
	return tmp.queryToObject();
};
Array.prototype.queryToObject=function(){
	var obj={},item,i;
	for (i in this){
		item=this[i];
		if (typeof item=='string'){
			item=item.split('=');
			obj[item[0]]=item[1];
		}
	}
	return obj;
};
Array.prototype.query2DToObject=function(){
	var obj={},item,i=0,lastKey=[];
	for (i in this){
		if (!isNaN(i)){
			var checkArray=false,key='';
			var name=this[i].name,value=this[i].value;
			checkArray=name.match(/\[([a-z0-9']*)\]/);
			if (checkArray){
				name=name.replace(checkArray[0],'');
				key=checkArray[1].replace(/'/g,"");
			}
			if (typeof obj[name]=='undefined'){
				if (checkArray){
					name=name.replace(checkArray[0],'');
					obj[name]=key.length>0 ? {} : [];
				}
				else {
					obj[name]='';
				}
			}
			if (typeof obj[name]=='object'){
				if (obj[name].push){
					obj[name].push(value);
				}
				else {
					if (!key){
						if (!lastKey[name]){
							lastKey[name]=0;
						}
						key=lastKey[name]++;
					}
					obj[name][key]=value;
				}
			}
			else {
				obj[name]=value;
			}
		}
	}
	return obj;
};