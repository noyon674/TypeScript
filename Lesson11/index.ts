class User{
    //constructor, properties, methods
    userName: string;
    age: number;

    constructor(name: string, age:number){
        this.userName = name;
        this.age = age
    }

    display(): void{
        console.log(`${this.userName} and ${this.age}`)
    }
}

let user1 = new User('Noyon', 24)
let user2 = new User('Purna', 23)
// let user3 = new User('Pritim', '29') //getting error because we pass age as string
user1.display()