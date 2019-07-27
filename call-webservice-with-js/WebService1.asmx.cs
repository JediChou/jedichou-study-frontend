using System.Collections.Generic;
using System.Web.Script.Services;
using System.Web.Services;

namespace Call_WebService_With_Js
{
    /// <summary>
    /// Summary description for WebService1
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    [ScriptService]
    public class WebService1 : WebService
    {
        [WebMethod]
        public string HelloWorld()
        {
            return "Hello World";
        }

        [WebMethod]
        public List<string> Say()
        {
            return new List<string> {"Jedi", "Becky", "KiWi"};
        }

        [WebMethod]
        public User GetSingleUser()
        {
            return new User {Name="Jedi", Age = 36};
        }

        [WebMethod]
        public List<User> GetMultiUsers()
        {
            return new List<User>
            {
                new User { Name="Jedi", Age = 36 },
                new User { Name="Becky", Age = 31 },
                new User { Name="Kiwi", Age = 3 }
            };
        }

        [WebMethod]
        public string WithParameter(string name)
        {
            return "Hello " + name;
        }
    }

    public class User
    {
        public string Name { get; set; }
        public int Age { get; set; }
    }
}
