var user;
// user = 'Noyon'; //we get error
user = { name: "Purna", age: 24 };
//object array
var users;
users = [{ name: 'one', id: 1 }, { name: 'two', id: 2 }];
//object with fixed property
var user1;
user1 = { name: 'Mithun', age: 23 };
// user1 = {name: "Pritim"} //we get error because age not defined
// we can take a property as optional
var person;
person = { name: 'Arjun' }; //we don't get any error because NID is optional
//we can push the user to the users
users.push(user1);
users.push(person);
console.log(users);
