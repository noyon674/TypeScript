var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, age, id) {
        var _this = _super.call(this, name, age) || this;
        _this.dogID = id;
        return _this;
    }
    Dog.prototype.showInfo = function () {
        console.log(this.Name + " " + this.Age + " " + this.dogID);
    };
    return Dog;
}(Animal));
var d1 = new Dog('Lalu', 23, 328519);
d1.showInfo();
