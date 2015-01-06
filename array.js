if (!Array.indexOf){
	Array.prototype.indexOf=function(obj){
		for (var i=0;i<this.length;i++){
			if (this[i]==obj){
				return i;
			}
		}
		return -1;
	};
}
if (!Array.remove){
	Array.prototype.remove=function(from,to){
		var rest=this.slice((to||from)+1||this.length);
		this.length=from<0 ? this.length+from : from;
		return this.push.apply(this,rest);
	};
}