if (!String.appendQuery){
	String.prototype.appendQuery = function(append){
		return this + (this.indexOf('?')>0 ? '&' : '?')+append;
	};
}