test('Lab - connect to mysql', function() {
    
    // Notice:
    // 1. Internet Explorer 8.0.6001.18702 - support
    // 2. Firefox 5.0 - can not support
    //    message first line : Died on test#1: ActiveXObject is not defined
    // 3. Opera 12.02 - can not support
    //    message first line : Died on test#1: Undefined variable: ActiveXObject
    // 4. Google Chrome 19.0.1084.52 - can not support
    //    message first line : Died on test #1: ActiveXObject is not defined - {}
    
    // define result and connect object
    var result = new Array();
    var con = new ActiveXObject("ADODB.Connection");

    // define connect string, and call open mthod
    con.ConnectionString = "DRIVER={MySQL ODBC 5.1 Driver};" + 
                           "OPTION=3;" + 
                           "SERVER=localhost;" +
                           "User ID=root;" +
                           "Password=samsung1s;" + 
                           "Database=status_poster;" + 
                           "Port=3306";
     con.open();
     
     // execute query and save id to result variable
     var rs = new ActiveXObject("ADODB.Recordset");
     rs.open("select * from status", con);
     while(!rs.eof) {
         var id = parseInt(rs.Fields('id'));
         result[result.length] = id;
         rs.moveNext();
     }
     
     // 1. close record set and connect object
     // 2. destory record set and connect object
     rs.close(); rs = null;
     con.close(); con = null;
     
     equals(result.length, 4);
     equals(result[0], 1);
     equals(result[1], 2);
     equals(result[2], 3);
     equals(result[3], 4);
})
