
// Jedi
function JediGetWeek(year) {
    var a = new Date(year,1,1).getDay == 1 ? 52 : 53;
    var b = new Date(year,12,31).getDay == 0 ? 52 : 53;
    return a > b ? a : b; 
}

// Jedi2
function JediGetWeek2(year) {
    if ( new Date(year,1,1).getDay == 0 && new Date(year,12,31).getDay == 1) {
        return 54
    }
    else {
        var a = new Date(year,1,1).getDay == 1 ? 52 : 53;
        var b = new Date(year,12,31).getDay == 0 ? 52 : 53;
        return a > b ? a : b;
    } 
}

// Ray
function RayGetweek(year) { 
    var d = new Date(year, 1, 1); 
    var w = d.getDay(); 
    var firstday = GetWeekIndex(d);    //frist Week 
    var begionDate = new Date(d.getFullYear() + "-1-1"); 
    var nextdate = new Date(d.getFullYear() + 1, 0, 1); //年月末日期 
    var i = ((((nextdate - firstday) / 1000) / 60) / (24 * 60)) / 7; //计算週数 
    i = Math.ceil(i); 
    if (begionDate < firstday) { 
        return i+1; 
    } 
    else { 
        return i; 
    } 
}

function GetWeekIndex(dateobj) {  
    var firstDay = GetFirstWeekBegDay(dateobj.getFullYear()); 
    if (dateobj < firstDay) { 
        firstDay = GetFirstWeekBegDay(dateobj.getFullYear() - 1); 
    } 
    return firstDay; 
} 

function GetFirstWeekBegDay(year) { 
    var tempdate = new Date(year, 0, 1); 
    var temp = tempdate.getDay(); 
    if (temp == 1) 
        return tempdate; 
    temp = temp == 0 ? 7 : temp; 
    tempdate = tempdate.setDate(tempdate.getDate() + (8 - temp)); 
    return new Date(tempdate); 
}


// var start = 1, end = 2115;
// var counter = 0;
// for (var i = start; i < end; i++) {
//     if (!(JediGetWeek2(i) == RayGetweek(i))) {
//         console.log(i, JediGetWeek(i), RayGetweek(i), JediGetWeek(i) == RayGetweek(i));
//         counter++;
//     }
// }
// console.log(counter);

var d = new Date;
console.log(d);