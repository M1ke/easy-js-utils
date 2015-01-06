if (!String.shorten){
	String.prototype.shorten=function(length){
		return this.substr(0,length);
	};
}
window.plural=function(string,num){
	string=num+' '+string+(num!=1 ? 's' : '');
	return string;
};
window.sqlDate=function(){
	d=new Date();
	month=d.getMonth();
	month++;
	if (month<10){
		month='0'+month;
	}
	d=d.getFullYear()+'-'+month+'-'+d.getDate()+' '+d.getHours()+':'+d.getMinutes()+':'+d.getSeconds();
	return d;
};