window.colorText=function(color){
	var textColor='',colorTotal=0;
	if (color.substr(0,1)=='#'){
		color={r:color.substr(1,2),g:color.substr(3,2),b:color.substr(5,2)};
	}
	for (i in color){
		colorTotal+=parseInt(color[i],16);
	}
	textColor=colorTotal>382 ? '000000' : 'ffffff';
	return '#'+textColor;
};
