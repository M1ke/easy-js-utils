window.colorInvert=function(color){
	var invColor={};
	if (color.substr(0,1)=='#'){
		color={r:color.substr(1,2),g:color.substr(3,2),b:color.substr(5,2)};
	}
	for (i in color){
		invColor[i]=parseInt(color[i],16);
		invColor[i]=255-invColor[i];
		invColor[i]=invColor[i].toString(16);
	}
	return '#'+invColor.r+invColor.g+invColor.b;
};
