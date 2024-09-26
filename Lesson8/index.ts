let user: object;
// user = 'Noyon'; //we get error
user = {name: "Purna", age: 24}

//object array
let users: object[];
users = [{name: 'one', id: 1}, {name: 'two', id: 2}]

//object with fixed property
let user1: {name: string, age: number}
user1 = {name: 'Mithun', age: 23}
// user1 = {name: "Pritim"} //we get error because age not defined


// we can take a property as optional
let person: {name: string, NID ?: number}
person = {name: 'Arjun'} //we don't get any error because NID is optional


//we can push the user to the users
users.push(user1)
users.push(person)

console.log(users)