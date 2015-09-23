if (!String.shorten){
	String.prototype.shorten = function(length, hellip){
		return this.length>length ? this.substr(0, length)+(hellip ? '&hellip;' : '') : this.toString();
	};
}