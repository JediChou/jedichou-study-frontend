/*********************************************  Date.js  *****************************************************/
/**
 *版本：1.0.1
 *建立日期：2016年12月08日 by Ray
 *因OKR系統之前的日期處理js代碼過於混亂無規範，特新建Date.js專門用於日期處理
 *<reference path="jquery-1.7.1.min.js" />
 */
/***************************************************************************************************************/


/************************************
*方法：獲取某年的第一個星期一
************************************/
function getFirstMonday(year) {
    var d = new Date(year+'/1/1');
   // d.setFullYear(year, 0);
    for (var i = 1; i <= 31; i++) {
        d.setDate(i);
       if( d.getDay() == 1 ) break;
       // if (d.getUTCDay() == 1) break;
    }
   // d.setFullYear(year, 0, i);
    return d; //.toLocaleDateString();
}

/***********************************
*頁面：Plan
*方法：初始化週數
*(備註：週不跨年,另如遇潤歷年且1月1日為星期日的，存在爭論)
***********************************/
function Getweek(_year) {
   // var _year = $('#yearSelect').val();
    var d = new Date(_year + "/1/1");
    var w = d.getDay();
    var firstday = getFirstMonday(_year);   //frist Week
    var begionDate = new Date(d.getFullYear() + "/1/1");
    var nextdate = new Date(d.getFullYear() + 1, 0, 1); //年月末日期
    var i = ((((nextdate - firstday) / 1000) / 60) / (24 * 60)) / 7; //计算週数
    i = Math.ceil(i);
    if (begionDate < firstday) {
        return i + 1;
    }
    else {
        return i;
    }
    //返回週數
}

/***********************************
*頁面：Plan
*方法：初始化週別日期區間
***********************************/
function DateIntervalForWeek(year, week) {
    var _year = year;
    var _week = week;
    var BegionDate; //定義起始
    var EndDate;   //定義截止
    var DateA = new Date(_year + '/1/1'); //第一周起始日
    var frist = getFirstMonday(_year); //第一個星期一   

    if (_week == 1) {
        var StartDate = new Date(_year + '/1/1');
        if (StartDate.getDay() == 0) {//如遇到1月1日为周日的年份，则周数+1
            BegionDate = new Date(_year + '/1/2');
            StartDate.setDate(frist.getDate() + 5);
            EndDate = StartDate;
        }
        else if (StartDate.getDay() == 1) {
            BegionDate = DateA;
            frist.setDate(frist.getDate() +5);
            EndDate = frist;
        }
        else{
            BegionDate = DateA;
            frist.setDate(frist.getDate() - 2);
            EndDate = frist;
        }
    }
    else {
        var StartDate = new Date(_year + '/1/1');//元旦
        if (StartDate.getDay() == 0) {
            ////如遇到元旦为周日的年份，则周数+1
            var sumDate = (frist.getDate() - DateA.getDate()) + (_week - 2) * 7 + 1;//週數累計日
            DateA.setDate(DateA.getDate() + sumDate - 1);
            BegionDate = DateA;
            var DateEnd = new Date(_year +'/12/31');
            var Datefactor = new Date(_year +'/12/27');
            if (DateA >= Datefactor) {
                EndDate = DateEnd;
            }
            else {
                frist.setDate((frist.getDate() - 1) + (_week - 2) * 7 + 6);
                EndDate = frist;
            }
        }
        else {
            //第一個星期一 減去 1月1日  加上  (週數 減去 2)乘以7
            var sumDate = (frist.getDate() - DateA.getDate()) + (_week - 2) * 7 + 1;
            DateA.setDate(DateA.getDate() + sumDate - 1);
            BegionDate = DateA;
            var DateEnd = new Date(_year +'/12/31');
            var Datefactor = new Date(_year +'/12/27');
            if (DateA >= Datefactor) {
                EndDate = DateEnd;
            }
            else {
                frist.setDate((frist.getDate() - 1) + (_week - 2) * 7 + 6);
                EndDate = frist;
            }
        } 
    }
	
	return {begin: BegionDate, end: EndDate};
}


/***********************************
*方法：获得某月的天数
***********************************/
function getMonthDays(myYear, myMonth) {
    var monthStartDate = new Date(myYear, myMonth-1, 1);
    var monthEndDate = new Date(myYear, myMonth , 1);
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
