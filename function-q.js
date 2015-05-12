var functionQ = function(){
	var _queue = [];

	function _add(fn){
		_queue.push(fn);
	}

	function _wrap(fn, context, params){
		_add(function(){
			fn.apply(context, params);
		});
	}

	function _run(){
		while (_queue.length>0){
			(_queue.shift())();
		}
	}

	this.add = _add;
	this.run = _run;
	this.wrap = _wrap;
};
