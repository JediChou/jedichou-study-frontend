var imgContainer;

window.onload = function() {
    imgContainer = document.getElementById("imgContainer");
    msgDiv = document.getElementById("msgDiv");

    imgContainer.ondragover = function(e) {
        e.preventDefault();
    }

    imgContainer.ondrop = function(e) {
        e.preventDefault();

        // showObj(e);
        // showObj(e.dataTransfer);
        // showObj(e.dataTransfer.files);

        var img = e.dataTransfer.files[0];
        var fileReader = new FileReader();
        fileReader.onload = function(e) {
            showObj(e.target);
            imgContainer.innerHTML = "<img src=\""+ fileReader.result + "\">";
        }
        fileReader.readAsDataURL(img);
    }
}

function showObj(obj) {
    var s = "";
    for(var k in obj) {
        s += k+":"+obj[k]+"<br/>";
    }
    msgDiv.innerHTML = s;
}