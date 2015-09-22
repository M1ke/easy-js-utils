if (!String.permalink){
	String.prototype.permalink=function(){
		return this.replace(/[ &.]+/g,'-').replace(/'/g,'').toLowerCase();
	}
}