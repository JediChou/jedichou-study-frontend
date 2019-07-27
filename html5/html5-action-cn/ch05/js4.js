// javascript document
function $$(id) {
	return document.getElementById(id);
}

// filter file and upload
// TODO: must review this code.
function fileUpload_CheckType(f) {
	var strP = "",
	strN = "",
	intJ = 0;
	var strFileType = /image.*/;
	for(var intI=0; intI<f.length; intI++) {
		var tmpFile = f[intI];
		if( !tmpFile.type.match(strFileType)) {
			intJ = intJ + 1;
			strN = strN + tmpFile.name + "<br>";
		}
	}
	strP = "check (" + intJ + ") files are not image file.";
	if(intJ > 0) {
		strP = strP + "File name: <p>" + strN + "</p>";
	}
	$$("pTip").innerHTML = strP;
}