
interface u{
    firstName: string,
    lastName: string,
    age:number
    email?:string;
}

let ob={
    firstName: "vik",
    lastName: "ram",
    age: 26
}

function n(d:u){
    console.log(`\n\t Name : ${d.firstName+d.lastName}\n\t`);
}

n(ob);  //Name : vikram



function age(a:u){
    console.log("\n\t Age : "+a.age);
}

age(ob);  //   Age : 26
