window.rand=function(min,max){
	return Math.randRange(min,max);
};
Math.randRange=function(min,max){
	return Math.floor(Math.random()*(max-min+1))+min;
}