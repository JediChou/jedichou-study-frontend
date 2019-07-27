test('url check', function() {
    function buildUrl() {
        var qs = "?debug=true";
        with(location){
            var url = href + qs;
            }
        return url;
    }
    
    var result = buildUrl();
    ok(result);
})
