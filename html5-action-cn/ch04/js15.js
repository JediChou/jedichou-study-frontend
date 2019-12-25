// javascript document
function $$(id) {
	return document.getElementById(id);
}

// check password
function setErrorInfo() {
	var $$Pass_1 = $$("txtPassWord_1");
	var $$Pass_2 = $$("txtPassWord_2");
	if( $$Pass_1.value == $$Pass_2.value )
		$$Pass_2.setCustomValidity("Right, Regist continue...");
	else
		$$Pass_2.setCustomValidity("Wrong, Regist failed.");
	
	return false;
}