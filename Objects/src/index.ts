function vote(user : {
    firstName : string,
    lastName : string,
    age: number
}) :boolean
{

    if(user.age >18){
        return true;
    }
    else{
        return false;
    }

}

let obj = {
    firstName : "Vik",
    lastName : "ram",
    age: 20
}

let ans=vote(obj);
console.log("\n\t Eligble for vote : "+ans);




function msg(user:{
    firstName:string,
    lastName:string,
    age:number
}):any{
    console.log(`\n\t Hi there ${user.firstName+user.lastName}`);


}
msg(obj);

// Eligble for vote : true  

// Hi there Vikram
