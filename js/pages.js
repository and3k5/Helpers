var Pages = (function () {
	var obj={};
	
	function _loadPages(url,callback) {
		var http = new XMLHttpRequest();
		http.onreadystatechange = function () {
			if (http.readyState == 4 && http.status == 200) {
				var json=JSON.parse(http.responseText);
				callback(json);
			}
		};
		http.open("GET",url,true);
		http.send();
	}
	
	obj.loadPages = function () {
		_loadPages.apply(null,arguments);
	}
	
	function _reqPage(url,callback) {
		var http = new XMLHttpRequest();
		http.onreadystatechange = function () {
			if (http.readyState == 4 && http.status == 200) {
				callback(http.responseText);
			}
		};
		http.open("GET",url,true);
		http.send();
	}
	
	obj.reqPage = function () {
		_reqPage.apply(null,arguments);
	}
	
	return obj;
})();