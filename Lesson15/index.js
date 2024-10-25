// there are some access modifiers
// public, private, protected, readonly
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
        this.passWord = 39579;
        this.name = name;
        this.age = age;
    }
    Animal.prototype.display = function () {
    };
    Animal.prototype.setID = function (id) {
        this.ID = id;
    };
    Animal.prototype.showID = function () {
        console.log(this.ID);
    };
    return Animal;
}());
var DOG = /** @class */ (function (_super) {
    __extends(DOG, _super);
    function DOG() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DOG.prototype.display = function () {
        console.log("Name is ".concat(this.name, " and age is ").concat(this.age));
        //console.log(this.ID) //private element
    };
    return DOG;
}(Animal));
var d1 = new DOG('Tomy', 22);
d1.display();
var a1 = new Animal('Pritim', 43);
a1.setID(349343); // accessing private element by public method
a1.showID();
console.log(a1.name); // public element
//console.log(a1.age) // protected elemet
//readonly, can't modified
console.log(a1.passWord);
// public element: can extends, can access from outer class, can modified the previous value
// protected element: can extends, can not access from outer class
// private element: can not extends
