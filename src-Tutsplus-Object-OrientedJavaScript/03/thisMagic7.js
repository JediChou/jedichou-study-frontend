// file: thisMagic7.js
// date: 2019.3.27
// Jedi TODO: 
//  I'm lost at callback concept.
//  It should be debuged at chrome.

var makeRequest = function(url, callback) {
  var data = 10;
  callback(data);
};

var obj = {
  someValue: 20,
  loadData: function(data) {
    var sum = this.someValue + data;
    alert(sum);
  },
  prepareRequest: function() {
    var url = "http://numberservice.com";
    makeRequest(url, this.loadData.bind(this));
  }
};

// var msg = obj.prepareRequest();
// console.log(msg);