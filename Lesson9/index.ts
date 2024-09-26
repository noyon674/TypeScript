//creating a type
type user = {name: string, age: number}

let users: object[];
users = [];

let user1: user; //user1 type is user & user is created custom type
user1 = {name: "Noyon", age: 23}

let user2: user;
user2 = {name: "puran", age: 24}

//puhing two object
users.push(user1)
users.push(user2)

console.log(users)


//created new type
type requestType = "GET" | "POST" | "PUT";

let dataRequest: requestType;

dataRequest = 'GET'
// dataRequest = 'post' //getting error because small latter text