// javascript document
function $$(id) { 
	return document.getElementById(id);
}

// define variables
var intR, intG, intB, strColor;

// config background color for change
function setSpnColor() {
	intR = $$("txtR").value;
	intG = $$("txtG").value;
	intB = $$("txtB").value;
	strColor = "rgb("+intR+","+intG+","+intB+")";
	$$("pColor").innnerHTML = strColor;
	$$("spanPrev").style.backgroundColor = strColor;
}

// initialize background color of cube
setSpnColor();
