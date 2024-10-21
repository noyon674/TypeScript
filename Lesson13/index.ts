class Animal{
    Name: string;
    Age: number;

    constructor(name: string, age: number){
        this.Name = name;
        this.Age = age;
    }
    showInfo(): void{
        console.log(this.Name+" "+this.Age)
    }
}

class Dog extends Animal{
    dogID: number;
    constructor(name: string, age: number, id: number){
        super(name, age)
        this.dogID = id
    }
    showInfo(): void {
        console.log(this.Name+" "+this.Age+" "+this.dogID)
    }
}

let d1 = new Dog('Lalu', 23, 328519)
d1.showInfo()