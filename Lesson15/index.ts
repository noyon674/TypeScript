// there are some access modifiers
// public, private, protected, readonly

class Animal {
    public name: string;
    protected age: number;
    private ID: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age
    }
     display(){

     }
}

class DOG extends Animal{
    display(){
        console.log(`Name is ${this.name} and age is ${this.age}`)
        console.log(this.ID) //private element
    }
}

let d1 = new DOG('Tomy', 22)
d1.display()

let a1 = new Animal('Pritim', 43)
console.log(a1.name) // public element
console.log(a1.age) // protected elemet




// public element: can extends, can access from outer class, can modified the previous value

// protected element: can extends, can not access from outer class

// private element: can not extends