var User = /** @class */ (function () {
    function User(name, age) {
        this.userName = name;
        this.age = age;
    }
    User.prototype.display = function () {
        console.log("".concat(this.userName, " and ").concat(this.age));
    };
    return User;
}());
var user1 = new User('Noyon', 24);
var user2 = new User('Purna', 23);
// let user3 = new User('Pritim', '29') //getting error because we pass age as string
user1.display();
