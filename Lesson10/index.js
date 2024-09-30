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
