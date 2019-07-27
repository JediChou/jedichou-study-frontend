////////////////////////////////////////////
// Filename    : jsconnmysql.js
// Date	       : 2012-12-12
// Author      : Jedi Chou (Foxconn group)
// Description : For write a bug report.
//               Function is not done.
////////////////////////////////////////////

////////////////////////////////////////////
// method name       : connMysqlServer()
// parameter server  : mysql IP or name.
// parameter user    : mysql account.
// parameter passord : user's password.
////////////////////////////////////////////
function connMysqlServer(server, user, password) {
  try {
    ADODB = new ActiveXObject("ADODB.Connection");
    OleDbConnection = ADODB.Open("Driver={MySQL ODBC 5.1 Driver}; SERVER=" + server + "; UID" + user + "; PWD=" + password + ";");
    WScript.Echo("Conn success!");
  } catch (Exception) {
    WScript.Echo("Cannot conn to server: " + server);
    WScript.Echo(Exception.message);
  }
}

connMysqlServer('127.0.0.1', 'root', 'samsung1s');

