/**
 * Created by Administrator on 2015/10/30.
 */
var box1Div, box2Div, msgDiv, img1;

window.onload = function() {
    box1Div = document.getElementById("box1");
    box2Div = document.getElementById("box2");
    msgDiv = document.getElementById("msg");
    img1 = document.getElementById("img1");

    // The first demo
    //box1Div.ondragenter = function(e) {
    //    showObj(e);
    //}



    box1Div.ondragover = function(e) {
        e.preventDefault();
    }

    box2Div.ondragover = function(e) {
        e.preventDefault();
    }

    img1.ondragstart = function(e) {
        e.dataTransfer.setData("imgId", "img1");
    }

    box1Div.ondrop = dropImgHandler;
    box2Div.ondrop = dropImgHandler;
}

function dropImgHandler(e) {
    // demo2, showObj(e);
    // demo3, showObj(e.dataTransfer);
    // demo4
    showObj(e.dataTransfer);
    e.preventDefault();
    var img = document.getElementById(e.dataTransfer.getData("imgId"));
    // box1Div.appendChild(img);
    e.target.appendChild(img);
}

function showObj(obj) {
    var s = "";
    for(var k in obj) {
        s += k+":"+obj[k]+"<br/>";
    }
    msgDiv.innerHTML = s;
}