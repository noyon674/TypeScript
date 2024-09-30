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
```
//array data type
let fruites: string[];
fruites = ['mango', 'orange', 'apple']

//this time get error
// fruites = ['Apple', 'Mango', 28, 48]
```

## Lesson5
<p>In this lesson we will learn about tuple type</p>

## Lesson6
<p>In this lesson we will learn about ENUM type</p>

## Lesson7
<p>In this lesson about any data type</p>

## Lesson8
<p>This lesson about object type</p>

## Lesson9
<p>In this lesson we will learn about creating custom type</p>

## Lesson10
<p>Practice Previous all things</P>