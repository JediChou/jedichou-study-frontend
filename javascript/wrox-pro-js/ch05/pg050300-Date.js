test('date parse method', function() {
    someDate1 = new Date("May 25, 2004");
    someDate2 = new Date(Date.parse("May 25, 2004"))
    equals(someDate1.toString(), someDate2.toString());
})
            
test('date utc parse method', function() {
    someDate1 = new Date(Date.UTC(2000,0));
    equals(someDate1.toLocaleString(), new Date("2000"));
})
