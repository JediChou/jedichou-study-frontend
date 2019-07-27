// javascript document
function $$(id) {
	return document.getElementById(id);
}

function fileUpload_PrevImageFile(f) {
	// check browser support FileReader object
	if(typeof FileReader == 'undefined') {
		alert("Your browser does not support FileReader object");
	}

	var strHTML = "";
	for(var intI=0; intI<f.length; intI++) {
		var tmpFile = f[intI];
		var reader = new FileReader();
		reader.readAsDataURL(tmpFile);
		reader.onload = function(e) {
			strHTML += "<span>";
			strHTML += "<img src='" + e.target.result + "' alt=''/>";
			strHTML += "</span>";
			$$("ulUpload").innerHTML="<li>"+strHTML+"</li>";
		}
		// Jedi: e?
	}
}