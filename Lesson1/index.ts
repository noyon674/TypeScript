let userName = 'Noyon Sarker' //this is pure javascript

let firstName: string = 'Noyon' //this is typescript

let age: number;
// age = '29' //here we can see the error, age type defined as number but next line we pass string value


function addNumber(num1: number, num2: number){
    console.log(num1 + num2)
}

addNumber(10, 20)
// addNumber(20, '30') //here we can see the error because addNumber() function takes both number parameters