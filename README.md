## Lesson1
<p>Basic code of Typescript</p>

```TypeScript
let userName = "Noyon Sarker"
```
## Lesson2
<p>In this tutorial we will learn about built-in Data Type</p>

```TypeScript
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
calculateArea(10, '20')
```

## Lesson3
<p>Union Data type</p>

```TypeScript
let salary: string | number;
salary = '10,000'
salary = 10000
```
## Lesson4
<p>In this lesson we will learn about Array Type</p>

```TypeScript
//array data type
let fruites: string[];
fruites = ['mango', 'orange', 'apple']

//this time get error because we use number also as items
fruites = ['Apple', 'Mango', 28, 48]

// union of array type
let person: (string | number | boolean)[];

person = ["Noyon", 24, "Purna", 22, "Pritim", 21]
```
## Lesson5
<p>In this lesson we will learn about tuple type</p>

```TypeScript
// tuple
let book: [string, number]
book = ['Bangla', 200]
book.push("English", 300)
console.log(book)
```

## Lesson6
<p>In this lesson we will learn about ENUM type</p>

```TypeScript
// enums: store constrants, duplicate value not allow
// enums are 3 types: string, numeric, hetergenous[combination of string and number]

//numeric enum
enum requestType {
    readData = 1,
    saveData,
    updateData,
    deleteData
}
console.log(requestType)
console.log(requestType.deleteData) //for specific value

//string enum
enum Data{
    getData = "GET",
    postData = 'POST',
    deleteData = 'DELETE'
}
console.log(Data)
console.log(Data.getData) //for specifi value


//hetergeous type
enum Item{
    name = "Mango",
    quantity = 300
}
console.log(Item)
console.log(Item.name) //for specific value
```

## Lesson7
<p>In this lesson about any data type</p>

```TypeScript
//data type any store any types of data
let userID: any;
userID = 'noyon'
userID = 28365
userID = true
userID = [93,536, 'apple', true, 'mango']
```

## Lesson8
<p>This lesson about object type</p>

## Lesson9
<p>In this lesson we will learn about creating custom type</p>

## Lesson10
<p>Practice Previous all things</P>