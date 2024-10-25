// there are some access modifiers
// public, private, protected, readonly

class Animal {
    public name: string;
    protected age: number;
    private ID: number;
    readonly passWord = 39579;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age
    }
     display(){

     }
     setID(id: number){
        this.ID = id
     }
     showID(){
        console.log(this.ID)
     }
}

class DOG extends Animal{
    display(){
        console.log(`Name is ${this.name} and age is ${this.age}`)
        //console.log(this.ID) //private element
    }
}

let d1 = new DOG('Tomy', 22)
d1.display()

let a1 = new Animal('Pritim', 43, )
a1.setID(349343)// accessing private element by public method
a1.showID()
console.log(a1.name) // public element
//console.log(a1.age) // protected elemet

//readonly, can't modified
console.log(a1.passWord)





// public element: can extends, can access from outer class, can modified the previous value

// protected element: can extends, can not access from outer class

// private element: can not extends