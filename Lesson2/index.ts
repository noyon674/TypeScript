//built-in data type: number, string, boolean, void, undefine and null

let userID: number;
let userName: string;
let isLoggedIn: boolean;

//if we write
let id; //it's data type is any

//if we write
let persone = ['Noyon', 'Pritim', 'Purna'] // it's type is string arry. according the value

userID=101;
userName = 'Noyon Sarker';
isLoggedIn = true;

console.log(`${userID} ${userName} ${isLoggedIn}`)

let firstName = 'Pritim'
let lastName = 'Sarker'

console.log(firstName.concat(lastName))


//normal function
function printName(){
    console.log('This a function')
}

// this function doesn't return anything so we can call it void type
function printAddress(): void{
    console.log('This is addrss function')
}