var numberSeries = function(series){
	var last = 0
		,arr = []
		,pointer = 0
		,range = false;

	function endRange(){
		if (arr[pointer]!=last){
			arr[pointer] += '-'+last;
		}
	}

	series.map(function(val){
		if (arr.length==0){
			arr.push(val);
		}
		else if (val != (last+1)){
			endRange();
			arr.push(val);
			pointer++;
			range = false;
		}
		else {
			range = true;
		}
		last = val;
	});
	if (range){
		endRange();
	}
	return arr.join(', ');
};