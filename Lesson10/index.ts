// data type
let userName: string;
userName = "Noyon Sarker"

//data type in function
function addNumber(num1, num2){
    console.log(num1+num2)
}

addNumber(10, 20)
addNumber(20, '30')

//with specify the parametar data type
function calculateArea(num1: number, num2: number){
    console.log(num1 * num2)
}

calculateArea(20, 30)
//getting error this time
// calculateArea(10, '20')


//data type union
let salary: string | number;
salary = '10,000'
salary = 10000


//array data type
let fruites: string[];
fruites = ['mango', 'orange', 'apple']

//this time get error
// fruites = ['Apple', 'Mango', 28, 48]

// union of array type
let person: (string | number | boolean)[];

person = ["Noyon", 24, "Purna", 22, "Pritim", 21]

// tuple
let book: [string, number]
book = ['Bangla', 200]
book.push("English", 300)
console.log(book)

//enums
// enums: store constrants, duplicate value not allow
// enums are 3 types: string, numeric, hetergenous[combination of string and number]

//numeric enums
enum requestType {
    readData = 1,
    saveData,
    updateData,
    deleteData
}
// string type
enum Data{
    getData = "GET",
    postData = 'POST',
    deleteData = 'DELETE'
}

//hetergeous type
enum Item{
    name = "Mango",
    quantity = 300
}
console.log(Item)


//data type any store any types of data
let userID: any;
userID = 'noyon'
userID = 28365
userID = true
userID = [93,536, 'apple', true, 'mango']