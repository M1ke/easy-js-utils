// From http://stackoverflow.com/a/5997959/518703
function findUrls(text){
    var source = (text || '').toString()
    	,urlArray = []
    	,matchArray
    	,regexToken = /(((ftp|https?):\/\/)[\-\w@:%_\+.~#?,&\/\/=]+)|((mailto:)?[_.\w-]+@([\w][\w\-]+\.)+[a-zA-Z]{2,3})/g;

    // Iterate through any URLs in the text.
    while ((matchArray = regexToken.exec(source))!==null){
        var token = matchArray[0];
        urlArray.push(token);
    }

    return urlArray;
}