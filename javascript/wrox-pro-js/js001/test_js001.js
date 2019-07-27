test('Get Lecture property', function(){
    var lec1 = new Lecture("Jedi", "Du");
    equal(lec1.name, "Jedi", "Lecture name property test");
    equal(lec1.teacher, "Du", "Lecture teacher property test");
});

test('Get Lecture display message', function() {
    var lec2 = new Lecture("Jedi", "Wang");
    equal(lec2.display(), "Wang is teaching Jedi", "Get message");
});

test('Get Schedule property', function() {
    var lec3 = new Lecture("Becky", "Li");
    var lec4 = new Lecture("Becky", "Luo");
    var lecs = [lec3, lec4];
    var sche = new Schedule(lecs);
    equal(sche.lectures[0].name, "Becky", "name of 1st element");
    equal(sche.lectures[0].teacher, "Li", "teacher of 1st element");
    equal(sche.lectures[1].name, "Becky", "name of 2nd element");
    equal(sche.lectures[1].teacher, "Luo", "teacher of 2nd element");
});

test('Get Schedule display message', function() {
    var lec3 = new Lecture("Becky", "Li");
    var lec4 = new Lecture("Becky", "Luo");
    var lecs = [lec3, lec4];
    var sche = new Schedule(lecs);
    equal(
        sche.display(),
        "Li is teaching Becky" + " " + "Luo is teaching Becky"+ " ",
        "Get message"
    );
});
