var requested;
requested = 'GET';
requested = 'POST';
function abc(rq) {
    console.log(rq);
}
abc('GET');
var Animal = /** @class */ (function () {
    function Animal(name, age) {
        this.Name = name;
        this.Age = age;
    }
    Animal.prototype.showInfo = function () {
        console.log(this.Name + " " + this.Age);
    };
    return Animal;
}());
var a1 = new Animal('Mew', 23);
a1.showInfo();
