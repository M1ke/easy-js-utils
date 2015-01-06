Array.prototype.shuffle=function(){
	// Fisher-Yates
	var i=this.length;
	if (i==0) return;
	while (--i){
		var rand=Math.floor(Math.random()*(i+1));
		tempI=this[i];
		tempRand=this[rand];
		this[i]=tempRand;
		this[rand]=tempI;
	}
};
arrayReturnRandom=function(arr,count){
	arr.shuffle();
	var randArr=[];
	if (!count) count=1;
	for (i=0;i<count;i++){
		randArr.push(arr[i]);
	}
	return randArr;
};