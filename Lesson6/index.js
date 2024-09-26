// enums store -> constants; duplicate value not allow
//enum types: numerical, string, hetergenous[mix of numeric and string]
//numeric enum
var RequestType;
(function (RequestType) {
    RequestType[RequestType["readData"] = 1] = "readData";
    RequestType[RequestType["saveData"] = 2] = "saveData";
    RequestType[RequestType["deleteData"] = 3] = "deleteData";
})(RequestType || (RequestType = {}));
console.log(RequestType);
console.log(RequestType.saveData);
//string enum
var RequestData;
(function (RequestData) {
    RequestData["getData"] = "GET DATA";
    RequestData["postData"] = "POST DATA";
    RequestData["putData"] = "PUT DATA";
})(RequestData || (RequestData = {}));
console.log(RequestData);
console.log(RequestData.getData);
//hetergeneous
var RequestItem;
(function (RequestItem) {
    RequestItem["name"] = "Noyon";
    RequestItem[RequestItem["age"] = 23] = "age";
})(RequestItem || (RequestItem = {}));
console.log(RequestItem);
console.log(RequestItem.age);
