if (!window.console){
	window.console = new function(){
		this.log = function(str){};
		this.dir = function(str){};
	};
}