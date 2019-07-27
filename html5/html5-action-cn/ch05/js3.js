// javascript document
function $$(id) {
	return document.getElementById(id);
}

function fileUpload_GetFileList(f) {
	var strLi = "<li class='li'>";
	strLi += "<span>file name</span>, ";
	strLi += "<span>file type</span>, ";
	strLi += "<span>file size</span>"
	strLi += "</li>";

	for(var intI=0; intI<f.length;intI++) {
		var tmpFile=f[intI];
		strLi += "<li>";
		strLi += "<span>"+tmpFile.name+"</span>, ";
		strLi += "<span>"+tmpFile.type+"</span>, ";
		strLi += "<span>"+tmpFile.size+"KB</span>";
		strLi += "</li>";
	}

	$$("ulUpload").innerHTML = strLi;
}