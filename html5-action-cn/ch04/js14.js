// javascript document
function $$(id) {
	return document.getElementById(id);
}

// check password
function chkPassWord() {
	var $$Pass = $$("txtPassWord");
	var $$spnP = $$("spnPassWord");
	var strp;
	if($$Pass.checkValidity()) {
		strP = "right";
	} else {
		strP = "wrong";
	}

	$$spnP.innerHTML = strP;
	return false;
}