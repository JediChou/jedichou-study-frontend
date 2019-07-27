<script>

    var curMonData = {};

    clearInterval(getData_ticket);
    var getData_ticket = setInterval(function () {
        var basicInfo_url = "http://10.130.2.200/api/ms/searchMSBasicData?IP=10.130.2.200";
        // var monitorInfo_url = "http://10.130.2.200/api/ms/searchMSDatasByTime?IP=10.130.2.200&timeBefore=2016/08/01%2016:25:09&timeAfter=2016/08/01%2017:11:14";
        var monitorInfo_url = "http://10.130.2.200/api/ms/searchMSDatasByTime?IP=10.130.2.200&timeBefore=2016/08/01%2016:25:09&timeAfter=2016/08/01%2016:25:30";
        var newestInfo_url = "http://10.130.2.200/api/ms/searchMSDataNewestOne?IP=10.130.2.200";

        // 获得基本信息
        $.getJSON(basicInfo_url).done(function (data) {
        });

        // 获得监控信息
        $.getJSON(newestInfo_url).done(function (data) {

            temp = JSON.parse(data);

            // Memory info
            curMonData.ProcessWorkingSet = temp["Process"]["Working Set"]["_total"];
            curMonData.ProcessWorkingSetPeak = temp["Process"]["Working Set Peak"]["_total"];
            curMonData.ProcessPrivateBytes = temp["Process"]["Private Bytes"]["_total"];

            // LogicalDisk info
            curMonData.LogicalDiskFreeSpace = temp["LogicalDisk"]["% Free Space"]["_total"];
            curMonData.LogicalFreeMegaBytes = temp["LogicalDisk"]["Free MegaBytes"]["_total"];

            // CPU info
            curMonData.ProcessorPercentProcessortime = temp["Processor"]["% Processor time"]["_Total"];

        });
    }, 2000);
</script>


4G: 4294967296