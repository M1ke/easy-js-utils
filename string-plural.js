if (!String.plural){
	String.prototype.plural = Number.prototype.plural = function(word){
		return this+' '+word+(this!=1 ? 's' : '');
	}
}