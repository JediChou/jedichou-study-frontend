// javascript document
function $$(id) {
	return document.getElementById(id);
}

// display content to page
function ShowKeyWord() {
	var strTmp = "<b>Your search keyword is: </b>";
	strTmp = strTmp + $$('txtKeyWord').value;
	$$('pTip').innerHTML=strTmp;
	return false;
}
