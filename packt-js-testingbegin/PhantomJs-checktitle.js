var page = require("webpage").create();
page.open("http://www.foxconn.com/", function(status) {
	if (status === "success") {
		console.log("page load success");
		var title = page.evaluate(function(){ 
			return document.title;
		});
		console.log("title is [" + title + "]");
	} else {
		console.log("page can not loaded");
	}
	phantom.exit(0);
});
