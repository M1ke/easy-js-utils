var sqlDate = function(){
	d=new Date();
	month=d.getMonth();
	month++;
	if (month<10){
		month='0'+month;
	}
	d=d.getFullYear()+'-'+month+'-'+d.getDate()+' '+d.getHours()+':'+d.getMinutes()+':'+d.getSeconds();
	return d;
};
