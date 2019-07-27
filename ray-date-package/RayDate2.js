/*********************************************  Date.js  *****************************************************/
/**
*版本：1.0.1
 *建立日期：2016年12月08日 by Ray
 *OKR項目日期處理js代碼混亂，新建Date.js用於日期處理
*<reference path="jquery-1.7.1.min.js" />
*/
/***************************************************************************************************************/

$(document).ready(function () {
    /******* 初始化年月日 *******/
    GetYear(); //初始化年份

    ItemsForWeek($('#yearSelect').val()); //设置週期数
    ItemsForMonth($('#yearSelects').val()); //设置月数
    if ($('#yearSelect').val() == 2016) {
        var j = OldGetweek();
        WeekDate(j);
    } else {
        DateIntervalForWeek(); //初始化週別日期區間
    }  
        DateIntervalForMonth(); //初始化月別日期區間
    
    /*****************************/
});
$(function () {
    /************************************
    *頁面：Plan-週計劃年份
    *事件：下拉選擇年份
    *功能：關聯更新週別數據及週別日期區間
    ************************************/
    $('#yearSelect').change(function () {
        ItemsForWeek($('#yearSelect').val());         //设置週期数
        if ($('#yearSelect').val() == 2016) {
            var j = OldGetweek();
            WeekDate(j);
        } else {
            DateIntervalForWeek(); //初始化週別日期區間
        }
    });

    /***********************************
    *頁面：Plan-月計劃年份
    *事件：下拉選擇年份
    *功能：關聯更新月及日期區間
    ***********************************/
    $('#yearSelects').change(function () {
        ItemsForMonth($('#yearSelects').val()); //设置月份      
            DateIntervalForMonth(); //初始化月別日期區間      
    });

    /***********************************
    *頁面：Plan-月計劃
    *事件：下拉選擇月份
    *功能：關聯更新日期區間
    ***********************************/
    $('.MonthSelect').change(function () {       
            DateIntervalForMonth(); //初始化月別日期區間       
    });

    /***********************************
    *頁面：Plan-週計劃
    *事件：下拉選擇週期
    *功能：關聯更新週期區間
    ***********************************/
    $('.WeekSelect').change(function () {
        if ($('#yearSelect').val() == 2016) {
            var j = $('.WeekSelect').val()
            WeekDate(j);

        } else {
            DateIntervalForWeek(); //初始化週別日期區間
        }
    });
});

/***************first Week********************/


/************************************
 *方法：獲取某年的第一個星期一
 ************************************/
function getFirstMonday(year) {
    var d = new Date(year + '/1/1');//獲取該年的起始日
    for (var i = 1; i <= 31; i++) {
        d.setDate(i);
        if (d.getDay() == 1) break;//獲取第一個星期一的日期
    }
    return d; //.toLocaleDateString();
}

/***********************************
 *方法：初始化計劃年份
 ***********************************/
function GetYear() {
    var myDate = new Date(); //獲取當前日期
    var startYear = myDate.getFullYear() - 1; //設置起始年份 //1
    var endYear = myDate.getFullYear() + 1; //設置结束年份  //1
    //設置週計劃年份
    var obja = document.getElementById('yearSelect'); //抓取需要綁定的控件
    for (var i = startYear; i <= endYear; i++) {//循環區間年數
        obja.options.add(new Option(i, i)); //為控件添加年份
    }
    obja.options[obja.options.length - 2].selected = 1; //設置當前年為默認選項  //2
    //設置月計劃年份
    var objb = document.getElementById('yearSelects'); //抓取需要綁定的控件
    for (var i = startYear; i <= endYear; i++) {//循環區間年數
        objb.options.add(new Option(i, i)); //為控件添加年份
    }
    objb.options[objb.options.length - 2].selected = 1; //設置當前年為默認選項//2
}

/***********************************
*方法：初始化週數
*(備註：週不跨年)
***********************************/
function Getweek(_year) {
    var d = new Date(_year + "/1/1"); //獲取該年的起始日
    var w = d.getDay();//獲取星期
    var firstday = getFirstMonday(_year);   //frist Week
    var begionDate = new Date(d.getFullYear() + "/1/1");//年起始日
    var nextdate = new Date(d.getFullYear() + 1, 0, 1); //年月末日期
    var i = ((((nextdate - firstday) / 1000) / 60) / (24 * 60)) / 7; //计算週数
    i = Math.ceil(i);
    if (begionDate < firstday && w != 0) {//判斷第一個星期一日前是否有工作日
        return _year == 2016 ? i : i + 1;
    }
    else {
        return i;
    }
    //返回週數
}

/***********************************
 *方法：頁面初始化及设置週期数綁定控件
 ***********************************/
function ItemsForWeek(_year) {
    var week
    if (_year == 2016) {
        week = OldGetweek();
    } else {
        week = Getweek(_year);  //初始化週數    
    }
    $(".WeekSelect").empty();
        for (var i = 0; i < week; i++) {
            var option = $("<option>").val(i + 1).text(i + 1);
            $(".WeekSelect").append(option);//將週數添加至控件
        }    

    var c = new Date;
    var firstday; //第一個週一
    if (_year == c.getFullYear()) { //判斷是否為當前年
        var firstday = getFirstMonday(_year);//獲取第一個星期一日期
        nextweek = ((((c - firstday) / 1000) / 60) / (24 * 60)) / 7;
        nextweek = _year == 2016 ? Math.ceil(nextweek) : Math.ceil(nextweek) + 1;  //计算下週对应週数
        $(".WeekSelect").val(nextweek);
    }
    else {
        $(".WeekSelect").val(1);
    }
}

/***********************************
 *方法：初始化週別日期區間
 ***********************************/
function DateIntervalForWeek() {
    var _year = $('#yearSelect').val(); //抓取年份
    var _week = $('.WeekSelect').val(); //抓取週數
      /*
    //待加入功能,如果選擇歷年,則不可以創建週計劃--by Ray 20161212
    var Mydate = new Date();
    if (_year < Mydate.getFullYear()) {
        $("#week-creat-btn").css("background-color", "#9EA6A9");
        $("#week-creat-btn").attr("disabled", true);
    }

    else {
        $("#week-creat-btn").css("background-color", "#2FBAE2");
        $("#week-creat-btn").removeAttr("disabled");
    }
    */
    var BegionDate; //定義起始
    var EndDate;   //定義截止
    var DateA = new Date(_year + '/1/1'); //第一周起始日
    var frist = getFirstMonday(_year); //第一個星期一   
    
    if (_week == 1) {//第一週
        var StartDate = new Date(_year + '/1/1');
        if (StartDate.getDay() == 0) {//如遇到1月1日为周日的年份，则周数+1
            BegionDate = new Date(_year + '/1/2');
            StartDate.setDate(frist.getDate() + 5);
            EndDate = StartDate;
        }
        else if (StartDate.getDay() == 1) {
            BegionDate = DateA;
            frist.setDate(frist.getDate() + 5);
            EndDate = frist;
        }
        else {
            BegionDate = DateA;
            frist.setDate(frist.getDate() - 2);
            EndDate = frist;
        }
    }
    else {
        var StartDate = new Date(_year + '/1/1'); //元旦
        if (StartDate.getDay() == 0) {
            ////如遇到元旦为周日的年份，则周数+1
            var sumDate = (frist.getDate() - DateA.getDate()) + (_week - 1) * 7 + 1; //週數累計日
            DateA.setDate(DateA.getDate() + sumDate - 1);
            BegionDate = DateA;
            var DateEnd = new Date(_year + '/12/31');
            var Datefactor = new Date(_year + '/12/27');
            if (DateA >= Datefactor) {
                EndDate = DateEnd;
            }
            else {
                frist.setDate((frist.getDate() - 1) + (_week - 1) * 7 + 6);
                EndDate = frist;
            }
        }
        else {
            //第一個星期一 減去 1月1日  加上  (週數 減去 2)乘以7
            var sumDate = (frist.getDate() - DateA.getDate()) + (_week - 2) * 7 + 1;
            DateA.setDate(DateA.getDate() + sumDate - 1);
            BegionDate = DateA;
            var DateEnd = new Date(_year + '/12/31');
            var Datefactor = new Date(_year + '/12/27');
            if (DateA >= Datefactor) {
                EndDate = DateEnd;
            }
            else {
                frist.setDate((frist.getDate() - 1) + (_week - 2) * 7 + 6);
                EndDate = frist;
            }
        }
    }
    $("#firstdate").val(FormatDate(BegionDate));
    $("#lastdate").val(FormatDate(EndDate));
}

/***********************************
 *方法：初始化月別日期區間
 ***********************************/
function DateIntervalForMonth() {
    var _year = $('#yearSelects').val(); //抓取年份
    var _month = $('.MonthSelect').val(); //抓取月數
    /*
     //待加入功能,如果選擇歷年,則不可以創建月計劃--by Ray 20161212
    var Mydate = new Date();
    if (_year < Mydate.getFullYear()) {
        $("#month-creat-btn").css("background-color", "#9EA6A9");
        $("#month-creat-btn").attr("disabled", true);
    }

    else {
        $("#month-creat-btn").css("background-color", "#2FBAE2");
        $("#month-creat-btn").removeAttr("disabled");
    }
    */
    var BegionDate;
    var EndDate;
    var dateA = new Date(_year, _month - 1, 01);
    BegionDate = FormatDate(dateA); //月份起始日
    var dateB = new Date(_year, _month - 1, getMonthDays(_year, _month));
    EndDate = FormatDate(dateB); //月份截止日
    $("#firstmonth").val(BegionDate);
    $("#lastmonth").val(EndDate);
}

/***********************************
 *方法：获取月數
 ***********************************/
function ItemsForMonth(year) {
    var d = new Date;
    var intyear = d.getFullYear();
    var nextmonth = d.getMonth() + 1; // 记得当前月是要+1的下月+2
    if ($(".MonthSelect").val() < 1) {
        for (var i = 0; i < 12; i++) {
            var option = $("<option>").val(i + 1).text(i + 1);
            $(".MonthSelect").append(option);
        }
    }
    if (intyear == year) {
        $(".MonthSelect").val(nextmonth); //默認選項當前月
    }
    else {
        $(".MonthSelect").val(1); //默認選擇1月        
    }
}

/***********************************
 *方法：获得某月的天数
 ***********************************/
function getMonthDays(myYear, myMonth) {
    var monthStartDate = new Date(myYear, myMonth - 1, 1);
    var monthEndDate = new Date(myYear, myMonth, 1);
    var days = (monthEndDate - monthStartDate) / (1000 * 60 * 60 * 24);
    return days;
}

/***********************************
 *方法：日期格式轉換 eg:"2016/12/09"
 ***********************************/
function FormatDate(date) {
    var mon = date.getMonth() + 1;
    var day = date.getDate();
    var nowDay = date.getFullYear() + "/" + (mon < 10 ? "0" + mon : mon) + "/" + (day < 10 ? "0" + day : day);
    return nowDay;
}
/***********************************/
/*方法：以下為2016年原路線取週數方法*/
/*----------------以下方法僅適用於2016年----------------*/
function OldGetweek() {//取週數
    var d = new Date;

    var w = d.getDay();
    var firstday = GetWeekIndex(d);
    var nextdate = new Date(d.getFullYear() + 1, 0, 1); //年月末日期
    var i = ((((nextdate - firstday) / 1000) / 60) / (24 * 60)) / 7; //计算週数
    i = Math.ceil(i);
    return i;
}
//获取第一週日期
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
//取週期區間
function WeekDate(i) {
    var d = new Date;
    var firstday = GetWeekIndex(d);
    var year = firstday.getFullYear();
    var month = firstday.getMonth() + 1; // 记得当前月是要+1的
    month = month < 10 ? ("0" + month) : month;
    var dt = firstday.getDate();
    dt = dt < 10 ? ("0" + dt) : dt;
    var today = year + "-" + month + "-" + dt;
    var firstdate = addByTransDate(today, (i - 1) * 7);
    var lastdate = addByTransDate(firstdate, 4);
    $("#firstdate").val(firstdate);
    $("#lastdate").val(lastdate);
}
/***********************************/