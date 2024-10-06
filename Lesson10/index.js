// data type
var userName;
userName = "Noyon Sarker";
//data type in function
function addNumber(num1, num2) {
    console.log(num1 + num2);
}
addNumber(10, 20);
addNumber(20, '30');
//with specify the parametar data type
function calculateArea(num1, num2) {
    console.log(num1 * num2);
}
calculateArea(20, 30);
//getting error this time
// calculateArea(10, '20')
//data type union
var salary;
salary = '10,000';
salary = 10000;
//array data type
var fruites;
fruites = ['mango', 'orange', 'apple'];
//this time get error
// fruites = ['Apple', 'Mango', 28, 48]
// union of array type
var person;
person = ["Noyon", 24, "Purna", 22, "Pritim", 21];
// tuple
var book;
book = ['Bangla', 200];
book.push("English", 300);
console.log(book);
//enums
// enums: store constrants, duplicate value not allow
// enums are 3 types: string, numeric, hetergenous[combination of string and number]
//numeric enums
var requestType;
(function (requestType) {
    requestType[requestType["readData"] = 1] = "readData";
    requestType[requestType["saveData"] = 2] = "saveData";
    requestType[requestType["updateData"] = 3] = "updateData";
    requestType[requestType["deleteData"] = 4] = "deleteData";
})(requestType || (requestType = {}));
// string type
var Data;
(function (Data) {
    Data["getData"] = "GET";
    Data["postData"] = "POST";
    Data["deleteData"] = "DELETE";
})(Data || (Data = {}));
//hetergeous type
var Item;
(function (Item) {
    Item["name"] = "Mango";
    Item[Item["quantity"] = 300] = "quantity";
})(Item || (Item = {}));
console.log(Item);
//data type any store any types of data
var userID;
userID = 'noyon';
userID = 28365;
userID = true;
userID = [93, 536, 'apple', true, 'mango'];
//object type
var user;
user = { name: 'Noyon', age: 23 };
// user = {name: "Purna", } // age must be write otherwise get error
//one key will be not mandatory
var Man;
Man = { name: "pritim", age: 21 }; //we didnot wrire NID but there is no error
var h1;
h1 = { name: 'riya', age: 23 };
var h2;
h2 = { name: 'prince', age: 22 };
console.log(h1, h2);
var request;
request = "GET";
request = "POST";
//getting error
//request = "PUT"
function requestHandle(request) {
    console.log(request);
}
requestHandle("GET");
