if (!String.ucfirst){
	String.prototype.ucfirst=function(){
		var split=this.split('');
		split[0]=split[0].toUpperCase();
		return split.join('');
	};
}