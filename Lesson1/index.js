var userName = 'Noyon Sarker'; //this is pure javascript
var firstName = 'Noyon'; //this is typescript
var age;
// age = '29' //here we can see the error, age type defined as number but next line we pass string value
function addNumber(num1, num2) {
    console.log(num1 + num2);
}
addNumber(10, 20);
// addNumber(20, '30') //here we can see the error because addNumber() function takes both number parameters
