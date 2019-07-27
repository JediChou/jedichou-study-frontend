// File: List0108.ts
// Ref: Apres Pro TypeScript
// List 1-8. Enumerations
var ServiceType;
(function (ServiceType) {
    ServiceType[ServiceType["InternatEmail"] = 0] = "InternatEmail";
    ServiceType[ServiceType["InternetEmail"] = 1] = "InternetEmail";
    ServiceType[ServiceType["InternetAccount"] = 2] = "InternetAccount";
    ServiceType[ServiceType["FTPAccount"] = 3] = "FTPAccount";
})(ServiceType || (ServiceType = {}));
var type1 = ServiceType.InternetEmail;
console.log(type1);
