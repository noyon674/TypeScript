abstract class Human {
    Name: string;
    Age: number
    constructor(name: string, age: number) {
        this.Name = name;
        this.Age = age
    }
   abstract showInfo(): void
}

class Man extends Human{
    showInfo(): void {
        console.log(this.Name+" "+this.Age)
    }
}

let m1 = new Man('Noyon', 34)
m1.showInfo()