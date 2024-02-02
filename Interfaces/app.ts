
interface a{
    // title: string,
    // description: string,
    // done:boolean
    name:string,
    age:number
    greet?(phrase: string):void;

}

class P implements a{
    name: string;
    age:number;
    constructor(n:string ,a:number){
        this.name =n;
        this.age=a;
    }

}

const e=new P("vikram",21);
console.log(`\n\t Name: ${e.name} age: ${e.age}\n`);

// Name: vikram age: 21

class Main implements a{
    name:string;
    age:number;
    constructor(n:string,a:number){
        this.name=n;
        this.age=a;
    }
    greet(phrase: string){
        console.log(`\n\t ${phrase} ${this.name}`);
    }
}

const object=new Main("Mark",42);
object.greet("Hello");
