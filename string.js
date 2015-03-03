if (!String.shorten){
	String.prototype.shorten=function(length){
		return this.substr(0,length);
	};
}

if (!String.permalink){
	String.prototype.permalink=function(){
		return this.replace(/[ &.]+/g,'-').replace(/'/g,'').toLowerCase();
	}
}

function plural(string,num){
	string=num+' '+string+(num!=1 ? 's' : '');
	return string;
}

function sqlDate(){
	d=new Date();
	month=d.getMonth();
	month++;
	if (month<10){
		month='0'+month;
	}
	d=d.getFullYear()+'-'+month+'-'+d.getDate()+' '+d.getHours()+':'+d.getMinutes()+':'+d.getSeconds();
	return d;
}