window.isValidPostcode=function(postcode){
	return /[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}/i.test(postcode) && postcode.length<10;
};