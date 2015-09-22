if (!String.plural){
	String.prototype.plural = function(num){
		return num+' '+string+(num!=1 ? 's' : '');;
	}
}