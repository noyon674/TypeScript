type requestTyped = 'GET' | 'POST'
let requested: requestTyped

requested = 'GET'
requested = 'POST'

function abc(rq: requestTyped){
    console.log(rq)
}

abc('GET')


class Animal{
    Name: string;
    Age: number;
    constructor(name: string, age: number){
        this.Name = name;
        this.Age = age
    }
    showInfo(): void{
        console.log(this.Name+" "+this.Age)
    }
}

let a1 = new Animal('Mew', 23)
a1.showInfo()
