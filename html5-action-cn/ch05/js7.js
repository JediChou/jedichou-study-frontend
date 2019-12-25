// javascript document
function $$(id) {
	return document.getElementById(id);
}

function fileUpload_ReadTextFile(f) {
	// check
	if (typeof FileReader == 'undefined')
		alert("your browser does not support FileReader object");

	var tmpFile = f[0];
	var reader = new FileReader();
	reader.readAsText(tmpFile);
	reader.onload = function(e) {
		$$("artShow").innerHTML = "<pre>"+
		e.target.result+"</pre>";
	}
}